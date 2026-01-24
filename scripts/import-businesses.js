#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import dotenv from 'dotenv';

dotenv.config();

// Category mapping from Google Place types to our categories
const CATEGORY_MAP = {
  'Food/Drink': [
    'restaurant', 'bar', 'cafe', 'night_club', 'meal_takeaway',
    'meal_delivery', 'bakery', 'food'
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
  ]
};

const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
const DESCRIPTION = process.env.COMMUNITY_DESCRIPTION ||
  "Supporting those affected by the ICE incursion in MN.";
const OUTPUT_DIR = './src/content/businesses';
const DELAY_MS = 100; // Delay between API calls to avoid rate limits

// Helper to slugify business names for filenames
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Map Google types to our categories
function mapCategory(googleTypes) {
  if (!googleTypes || googleTypes.length === 0) {
    return 'Other';
  }

  for (const [category, types] of Object.entries(CATEGORY_MAP)) {
    if (googleTypes.some(type => types.includes(type))) {
      return category;
    }
  }

  return 'Other';
}

// Search for business using Google Places API (New)
async function findBusiness(name, city) {
  const query = `${name} ${city} Minnesota`;
  const url = `https://places.googleapis.com/v1/places:searchText`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': API_KEY,
        'X-Goog-FieldMask': 'places.displayName,places.formattedAddress,places.types,places.nationalPhoneNumber,places.websiteUri,places.googleMapsUri'
      },
      body: JSON.stringify({
        textQuery: query,
        locationBias: {
          circle: {
            center: {
              latitude: 44.9778,
              longitude: -93.2650
            },
            radius: 50000.0 // 50km radius around Twin Cities
          }
        }
      })
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`API error: ${response.status} - ${error}`);
    }

    const data = await response.json();

    if (!data.places || data.places.length === 0) {
      return null;
    }

    // Return the first (best) result
    const place = data.places[0];
    return {
      name: place.displayName?.text || name,
      address: place.formattedAddress || '',
      phone: place.nationalPhoneNumber || '',
      website: place.websiteUri || '',
      googleMapsUrl: place.googleMapsUri || '',
      types: place.types || []
    };
  } catch (error) {
    console.error(`Error finding business "${name}":`, error.message);
    return null;
  }
}

// Generate markdown content for business
function generateMarkdown(business, originalName, city) {
  const lines = ['---'];
  lines.push(`name: "${business.name}"`);
  lines.push(`category: "${business.category}"`);
  lines.push(`location: "${city}, MN"`);

  if (business.address) {
    lines.push(`address: "${business.address}"`);
  }

  if (business.phone) {
    lines.push(`phone: "${business.phone}"`);
  }

  lines.push(`description: "${DESCRIPTION}"`);

  if (business.image) {
    lines.push(`image: "${business.image}"`);
  }

  if (business.website) {
    lines.push(`website: "${business.website}"`);
  }

  if (business.googleMapsUrl) {
    lines.push(`googleMapsUrl: "${business.googleMapsUrl}"`);
  }

  lines.push('---');
  lines.push('');

  return lines.join('\n');
}

// Main import function
async function importBusinesses(csvPath) {
  if (!API_KEY) {
    console.error('❌ Error: GOOGLE_PLACES_API_KEY not found in .env file');
    process.exit(1);
  }

  // Read and parse CSV
  let records;
  try {
    const fileContent = fs.readFileSync(csvPath, 'utf-8');
    records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true
    });
  } catch (error) {
    console.error(`❌ Error reading CSV file: ${error.message}`);
    process.exit(1);
  }

  console.log(`📊 Found ${records.length} businesses to import\n`);

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const stats = {
    success: 0,
    notFound: [],
    unmappedCategories: {},
    errors: []
  };

  // Process each business
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    const name = record.name || record.Name || record.business_name;
    const city = record.city || record.City;

    if (!name || !city) {
      console.log(`⚠️  Skipping row ${i + 1}: Missing name or city`);
      stats.errors.push({ row: i + 1, name, city, reason: 'Missing data' });
      continue;
    }

    console.log(`[${i + 1}/${records.length}] Processing: ${name} (${city})`);

    // Search for business
    const businessData = await findBusiness(name, city);

    if (!businessData) {
      console.log(`  ❌ Not found`);
      stats.notFound.push({ name, city });

      // Add delay before next request
      if (i < records.length - 1) {
        await new Promise(resolve => setTimeout(resolve, DELAY_MS));
      }
      continue;
    }

    // Map category
    const category = mapCategory(businessData.types);

    // Log unmapped categories for review (but still create the file with "Other")
    if (category === 'Other') {
      console.log(`  ⚠️  Unknown category - using "Other" (types: ${businessData.types.join(', ')})`);
      const typeKey = businessData.types.join(', ');
      stats.unmappedCategories[typeKey] = stats.unmappedCategories[typeKey] || [];
      stats.unmappedCategories[typeKey].push(name);
    }

    // Create markdown file
    const slug = slugify(name);
    const filename = `${slug}.md`;
    const filepath = path.join(OUTPUT_DIR, filename);

    businessData.category = category;
    const markdown = generateMarkdown(businessData, name, city);

    try {
      fs.writeFileSync(filepath, markdown, 'utf-8');
      console.log(`  ✅ Created: ${filename} (${category})`);
      stats.success++;
    } catch (error) {
      console.log(`  ❌ Error writing file: ${error.message}`);
      stats.errors.push({ name, city, reason: error.message });
    }

    // Add delay before next request
    if (i < records.length - 1) {
      await new Promise(resolve => setTimeout(resolve, DELAY_MS));
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📈 IMPORT SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Successfully imported: ${stats.success}`);
  console.log(`❌ Not found: ${stats.notFound.length}`);
  console.log(`⚠️  Unmapped categories: ${Object.keys(stats.unmappedCategories).length}`);
  console.log(`❌ Errors: ${stats.errors.length}`);

  // Save reports
  if (stats.notFound.length > 0) {
    const notFoundCsv = 'name,city\n' +
      stats.notFound.map(b => `"${b.name}","${b.city}"`).join('\n');
    fs.writeFileSync('./not-found.csv', notFoundCsv);
    console.log('\n📄 Not found businesses saved to: not-found.csv');
  }

  if (Object.keys(stats.unmappedCategories).length > 0) {
    console.log('\n⚠️  UNMAPPED CATEGORIES:');
    for (const [types, businesses] of Object.entries(stats.unmappedCategories)) {
      console.log(`\nTypes: ${types}`);
      businesses.forEach(b => console.log(`  - ${b}`));
    }

    const unmappedJson = JSON.stringify(stats.unmappedCategories, null, 2);
    fs.writeFileSync('./unmapped-categories.json', unmappedJson);
    console.log('\n📄 Unmapped categories saved to: unmapped-categories.json');
  }

  if (stats.errors.length > 0) {
    console.log('\n❌ ERRORS:');
    stats.errors.forEach(e => {
      console.log(`  - ${e.name} (${e.city}): ${e.reason}`);
    });
  }

  console.log('\n✨ Import complete!');
}

// Run the script
const csvPath = process.argv[2];

if (!csvPath) {
  console.error('Usage: npm run import-businesses <path-to-csv>');
  console.error('Example: npm run import-businesses businesses.csv');
  process.exit(1);
}

importBusinesses(csvPath);
