#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const DEFAULT_DESCRIPTION = process.env.COMMUNITY_DESCRIPTION;
const OUTPUT_DIR = './src/content/businesses';

// Keep this map aligned with scripts/import-businesses.js
const CATEGORY_MAP = {
  'Food/Drink': [
    'restaurant', 'bar', 'cafe', 'night_club', 'meal_takeaway',
    'meal_delivery', 'bakery', 'food', 'market', 'tea_house'
  ],
  'Grocery/Convenience': [
    'grocery_or_supermarket', 'convenience_store', 'liquor_store',
    'supermarket', 'food_market'
  ],
  'Retail': [
    'store', 'clothing_store', 'book_store', 'electronics_store',
    'furniture_store', 'home_goods_store', 'jewelry_store', 'shoe_store',
    'shopping_mall', 'florist', 'pet_store', 'bicycle_store',
    'hardware_store', 'department_store'
  ],
  'Services': [
    'hair_care', 'beauty_salon', 'spa', 'gym', 'laundry', 'car_repair',
    'dentist', 'doctor', 'veterinary_care', 'lawyer', 'accounting',
    'insurance_agency', 'real_estate_agency', 'travel_agency',
    'moving_company', 'plumber', 'electrician', 'locksmith'
  ],
  'Organization': [
    'church', 'library', 'school', 'community_center',
    'local_government_office', 'non_profit', 'social_services'
  ],
  'Entertainment': [
    'video_arcade', 'event_venue', 'museum', 'planetarium', 'tourist_attraction',
    'movie_theater'
  ]
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeYamlString(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"');
}

function mapCategory({ primaryType, types }) {
  const primary = primaryType ? [primaryType] : [];
  const all = Array.isArray(types) ? types : [];

  const candidates = [...primary, ...all];
  if (candidates.length === 0) return 'Other';

  for (const [category, mappedTypes] of Object.entries(CATEGORY_MAP)) {
    if (candidates.some(t => mappedTypes.includes(t))) {
      return category;
    }
  }

  return 'Other';
}

function getArgValue(args, name) {
  const idx = args.indexOf(name);
  if (idx === -1) return undefined;
  return args[idx + 1];
}

async function searchPlaces(textQuery) {
  const url = 'https://places.googleapis.com/v1/places:searchText';
  const fieldMask = [
    'places.name',
    'places.id',
    'places.types',
    'places.primaryType',
    'places.displayName',
    'places.shortFormattedAddress',
    'places.nationalPhoneNumber',
    'places.location',
    'places.googleMapsUri',
    'places.websiteUri',
    'places.photos',
    'places.postalAddress',
  ].join(',');

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': API_KEY,
      'X-Goog-FieldMask': fieldMask,
    },
    body: JSON.stringify({ textQuery }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Places searchText failed: ${response.status} - ${err}`);
  }

  const data = await response.json();
  return Array.isArray(data.places) ? data.places : [];
}

async function getPhotoUri(photoName, { maxWidthPx = 400, maxHeightPx = 400 } = {}) {
  const url = `https://places.googleapis.com/v1/${photoName}/media?maxWidthPx=${maxWidthPx}&maxHeightPx=${maxHeightPx}&skipHttpRedirect=true`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'X-Goog-Api-Key': API_KEY,
    },
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Places photo getMedia failed: ${response.status} - ${err}`);
  }

  const data = await response.json();
  return data.photoUri;
}

async function promptForSelection(places) {
  const rl = readline.createInterface({ input, output });
  try {
    output.write('\nMultiple matches found:\n');
    places.forEach((p, i) => {
      const name = p.displayName?.text ?? '(no name)';
      const addr = p.shortFormattedAddress ?? '';
      output.write(`  ${i + 1}) ${name}${addr ? ` — ${addr}` : ''}\n`);
    });

    while (true) {
      const answer = (await rl.question(`\nSelect 1-${places.length}: `)).trim();
      const n = Number.parseInt(answer, 10);
      if (Number.isFinite(n) && n >= 1 && n <= places.length) {
        return places[n - 1];
      }
      output.write('Invalid selection. Try again.\n');
    }
  } finally {
    rl.close();
  }
}

async function resolveDescription(descriptionArg) {
  if (descriptionArg && descriptionArg.trim()) return descriptionArg.trim();
  if (DEFAULT_DESCRIPTION && DEFAULT_DESCRIPTION.trim()) return DEFAULT_DESCRIPTION.trim();

  const rl = readline.createInterface({ input, output });
  try {
    while (true) {
      const answer = (await rl.question('Description (required): ')).trim();
      if (answer) return answer;
      output.write('Description is required.\n');
    }
  } finally {
    rl.close();
  }
}

function buildFrontmatter(data) {
  const lines = ['---'];

  const push = (key, value) => {
    if (value === undefined || value === null || value === '') return;
    lines.push(`${key}: "${escapeYamlString(value)}"`);
  };

  push('displayName', data.displayName);
  push('category', data.category);

  if (data.location && typeof data.location.latitude === 'number' && typeof data.location.longitude === 'number') {
    lines.push('location:');
    lines.push(`  latitude: ${data.location.latitude}`);
    lines.push(`  longitude: ${data.location.longitude}`);
  }

  push('city', data.city);
  push('state', data.state);
  push('postalCode', data.postalCode);
  push('address', data.address);
  push('phone', data.phone);
  push('description', data.description);

  push('websiteUrl', data.websiteUrl);
  push('websiteImageUrl', data.websiteImageUrl);
  push('googleMapsUrl', data.googleMapsUrl);

  push('placesId', data.placesId);
  push('placesName', data.placesName);
  push('primaryType', data.primaryType);

  if (Array.isArray(data.types) && data.types.length > 0) {
    lines.push('types:');
    data.types.forEach(t => lines.push(`  - "${escapeYamlString(t)}"`));
  }

  lines.push('---');
  lines.push('');
  return lines.join('\n');
}

async function main() {
  if (!API_KEY) {
    console.error('❌ Error: GOOGLE_PLACES_API_KEY not found in .env file');
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const descriptionArg = getArgValue(args, '--description');
  const force = args.includes('--force');

  const query = args.find(a => !a.startsWith('--') && a !== descriptionArg);
  if (!query) {
    console.error('Usage: node scripts/add-business.js "<search text>" [--description "..."] [--force]');
    process.exit(1);
  }

  const places = await searchPlaces(query);

  if (places.length === 0) {
    console.error(`No results for "${query}"`);
    process.exit(1);
  }

  if (places.length > 5) {
    console.error(`Too many results ${places.length}, try a different search`);
    process.exit(1);
  }

  const selected = places.length === 1 ? places[0] : await promptForSelection(places);

  const displayName = selected.displayName?.text;
  if (!displayName) {
    console.error('Selected place is missing displayName.text');
    process.exit(1);
  }

  const description = await resolveDescription(descriptionArg);
  const category = mapCategory({ primaryType: selected.primaryType, types: selected.types });

  let photoUri;
  const photoName = selected.photos?.[0]?.name;
  if (photoName) {
    try {
      photoUri = await getPhotoUri(photoName, { maxWidthPx: 400, maxHeightPx: 400 });
    } catch (e) {
      console.warn(`⚠️  Photo lookup failed, continuing without image: ${e?.message || e}`);
    }
  }

  const postalAddress = selected.postalAddress;
  const city = postalAddress?.locality;
  const state = postalAddress?.administrativeArea;
  const postalCode = postalAddress?.postalCode;

  const business = {
    displayName,
    category,
    location: selected.location,
    address: selected.shortFormattedAddress,
    phone: selected.nationalPhoneNumber,
    description,
    websiteUrl: selected.websiteUri,
    websiteImageUrl: photoUri,
    googleMapsUrl: selected.googleMapsUri,
    placesName: selected.name,
    placesId: selected.id,
    primaryType: selected.primaryType,
    types: selected.types,
    city,
    state,
    postalCode,
  };

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const filename = `${slugify(displayName)}.md`;
  const filepath = path.join(OUTPUT_DIR, filename);

  if (!force && fs.existsSync(filepath)) {
    console.error(`File already exists: ${filepath} (use --force to overwrite)`);
    process.exit(1);
  }

  fs.writeFileSync(filepath, buildFrontmatter(business), 'utf-8');
  console.log(`✅ Created: ${filename}`);
}

main().catch((err) => {
  console.error(`❌ ${err?.message || err}`);
  process.exit(1);
});

