#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const BUSINESSES_DIR = path.join(process.cwd(), 'src/content/businesses');

function unquote(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseCityStateFromLocationString(locationValue) {
  const raw = unquote(locationValue);
  // Common: "Minneapolis, MN"
  const m = raw.match(/^\s*(.+?)\s*,\s*([A-Za-z]{2})\s*$/);
  if (!m) return {};
  return { city: m[1], state: m[2].toUpperCase() };
}

function parseFromAddress(addressValue) {
  const raw = unquote(addressValue);
  // Common: "19 W 15th St, Minneapolis, MN 55403, USA"
  const parts = raw.split(',').map(p => p.trim()).filter(Boolean);
  if (parts.length < 2) return {};

  const city = parts.length >= 3 ? parts[parts.length - 3] : parts[parts.length - 2];
  const stateZip = parts[parts.length - 2] || '';

  const m = stateZip.match(/\b([A-Za-z]{2})\b(?:\s+(\d{5}))?/);
  const state = m?.[1]?.toUpperCase();
  const postalCode = m?.[2];

  return {
    city: city || undefined,
    state: state || undefined,
    postalCode: postalCode || undefined,
  };
}

function toShortFormattedAddress(addressValue) {
  const raw = unquote(addressValue);
  // Prefer "street, city" (matches Places shortFormattedAddress style)
  // Examples:
  // - "19 W 15th St, Minneapolis, MN 55403, USA" -> "19 W 15th St, Minneapolis"
  // - "2320 Capp Rd, St Paul" -> unchanged
  const parts = raw.split(',').map(p => p.trim()).filter(Boolean);
  if (parts.length < 2) return undefined;
  const street = parts[0];
  const city = parts[1];
  if (!street || !city) return undefined;
  return `${street}, ${city}`;
}

function parseFrontmatter(markdown) {
  if (!markdown.startsWith('---\n')) return null;
  const end = markdown.indexOf('\n---\n', 4);
  if (end === -1) return null;

  const fmRaw = markdown.slice(4, end);
  const body = markdown.slice(end + '\n---\n'.length);
  const lines = fmRaw.split('\n');
  return { lines, body };
}

function hasKey(lines, key) {
  const re = new RegExp(`^\\s*${key}\\s*:`);
  return lines.some(l => re.test(l));
}

function getFirstValue(lines, key) {
  const re = new RegExp(`^\\s*${key}\\s*:\\s*(.+)\\s*$`);
  for (const l of lines) {
    const m = l.match(re);
    if (m) return m[1];
  }
  return undefined;
}

function transformFrontmatterLines(lines) {
  const hasDisplayName = hasKey(lines, 'displayName');
  const hasWebsiteUrl = hasKey(lines, 'websiteUrl');
  const hasCity = hasKey(lines, 'city');
  const hasState = hasKey(lines, 'state');
  const hasPostalCode = hasKey(lines, 'postalCode');

  const addressValue = getFirstValue(lines, 'address');
  const shortFormattedAddress = addressValue ? toShortFormattedAddress(addressValue) : undefined;

  let legacyLocationValue;
  const out = [];

  for (const line of lines) {
    const trimmed = line.trim();

    // Rename `name` -> `displayName`
    if (/^name\s*:/.test(trimmed)) {
      if (hasDisplayName) continue;
      out.push(line.replace(/^(\s*)name(\s*):/, '$1displayName$2:'));
      continue;
    }

    // Rename `website` -> `websiteUrl`
    if (/^website\s*:/.test(trimmed)) {
      if (hasWebsiteUrl) continue;
      out.push(line.replace(/^(\s*)website(\s*):/, '$1websiteUrl$2:'));
      continue;
    }

    // Remove legacy string `location: "City, MN"`
    if (/^location\s*:/.test(trimmed)) {
      const m = trimmed.match(/^location\s*:\s*(.+)\s*$/);
      const value = m?.[1];
      if (value && (/^".*"$/.test(value) || /^'.*'$/.test(value))) {
        legacyLocationValue = value;
        continue;
      }
      // If location isn't a simple string, preserve it (e.g., new object form)
      out.push(line);
      continue;
    }

    // Normalize `address` into Places shortFormattedAddress style ("street, city")
    if (/^address\s*:/.test(trimmed) && shortFormattedAddress) {
      out.push(line.replace(/^(\s*address\s*:\s*).+$/, `$1"${escapeForPreservedYaml(shortFormattedAddress)}"`));
      continue;
    }

    out.push(line);
  }

  // Best-effort derive city/state/postalCode if legacy location existed and these fields are missing
  if (legacyLocationValue && (!hasCity || !hasState || !hasPostalCode)) {
    let derived = {};
    if (addressValue) {
      derived = parseFromAddress(addressValue);
    } else {
      derived = parseCityStateFromLocationString(legacyLocationValue);
    }

    const insertLines = [];
    if (!hasCity && derived.city) insertLines.push(`city: "${escapeForPreservedYaml(derived.city)}"`);
    if (!hasState && derived.state) insertLines.push(`state: "${escapeForPreservedYaml(derived.state)}"`);
    if (!hasPostalCode && derived.postalCode) insertLines.push(`postalCode: "${escapeForPreservedYaml(derived.postalCode)}"`);

    if (insertLines.length > 0) {
      // Insert after `address` if present, otherwise after `category`, otherwise after `displayName`
      const findInsertAfter = (key) => out.findIndex(l => new RegExp(`^\\s*${key}\\s*:`).test(l));
      let idx = findInsertAfter('address');
      if (idx === -1) idx = findInsertAfter('category');
      if (idx === -1) idx = findInsertAfter('displayName');
      if (idx === -1) idx = out.length - 1;

      out.splice(idx + 1, 0, ...insertLines);
    }
  }

  return out;
}

function escapeForPreservedYaml(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function buildMarkdown(frontmatterLines, body) {
  return `---\n${frontmatterLines.join('\n')}\n---\n${body}`;
}

function listBusinessMarkdownFiles() {
  if (!fs.existsSync(BUSINESSES_DIR)) return [];
  return fs.readdirSync(BUSINESSES_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => path.join(BUSINESSES_DIR, f));
}

function main() {
  const args = process.argv.slice(2);
  const apply = args.includes('--apply');

  const files = listBusinessMarkdownFiles();
  if (files.length === 0) {
    console.log('No business markdown files found.');
    process.exit(0);
  }

  let changed = 0;
  let skipped = 0;

  for (const file of files) {
    const original = fs.readFileSync(file, 'utf-8');
    const parsed = parseFrontmatter(original);
    if (!parsed) {
      skipped++;
      continue;
    }

    const updatedFrontmatterLines = transformFrontmatterLines(parsed.lines);
    const updated = buildMarkdown(updatedFrontmatterLines, parsed.body);

    if (updated !== original) {
      changed++;
      if (apply) {
        fs.writeFileSync(file, updated, 'utf-8');
      }
    }
  }

  if (apply) {
    console.log(`✅ Migration applied. Updated ${changed} file(s). Skipped ${skipped} file(s).`);
  } else {
    console.log(`ℹ️  Dry run: would update ${changed} file(s). Skipped ${skipped} file(s).`);
    console.log('Run with --apply to write changes.');
  }
}

main();

