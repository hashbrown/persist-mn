# Business Import Script

This script imports businesses from a CSV file and creates markdown files in `src/content/businesses/` using the Google Places API to look up business details.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Get a Google Places API key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project (or select existing)
   - Enable "Places API (New)"
   - Go to Credentials → Create Credentials → API Key
   - Copy your API key

3. **Create a `.env` file:**
   ```bash
   cp .env.example .env
   ```

4. **Add your API key to `.env`:**
   ```
   GOOGLE_PLACES_API_KEY=your_actual_api_key_here
   COMMUNITY_DESCRIPTION="Supporting those affected by the ICE incursion in MN."
   ```

## Usage

1. **Prepare your CSV file** with columns: `name`, `city`

   Example (`my-businesses.csv`):
   ```csv
   name,city
   "Peace Coffee","Minneapolis"
   "Midtown Global Market","Minneapolis"
   "Moon Palace Books","Minneapolis"
   ```

2. **Create a new git branch:**
   ```bash
   git checkout -b import-businesses-batch-1
   ```

3. **Run the import script:**
   ```bash
   node scripts/import-businesses.js my-businesses.csv
   ```

4. **Review the results:**
   - ✅ Successfully imported businesses will be in `src/content/businesses/`
   - ❌ Not found businesses will be listed in `not-found.csv`
   - ⚠️ Businesses with unmapped categories will be in `unmapped-categories.json`

5. **Review and commit:**
   ```bash
   git status
   git add src/content/businesses/
   git commit -m "Import businesses batch 1"
   git push -u origin import-businesses-batch-1
   ```

6. **Create a pull request on GitHub to review the imports**

## Category Mapping

The script automatically maps Google Place types to our 5 categories:

- **Restaurant/Bar**: Restaurants, bars, cafes, bakeries, etc.
- **Grocery/Convenience**: Grocery stores, supermarkets, convenience stores
- **Retail**: Clothing stores, book stores, electronics, furniture, etc.
- **Services**: Salons, gyms, repair shops, professional services, etc.
- **Organization**: Churches, libraries, community centers, non-profits

If a business has an unmapped category, it will be skipped and logged in `unmapped-categories.json`. You can then:
1. Update the `CATEGORY_MAP` in `scripts/import-businesses.js`
2. Re-run the import for those businesses

## API Costs

Google Places API pricing:
- **First 1,000 requests/month**: FREE
- **After that**: ~$0.017 per request

For 100 businesses, you'll stay within the free tier.

## Troubleshooting

**"Business not found"**: The script searches using "Business Name + City + Minnesota". If a business isn't found:
- Check the spelling in your CSV
- Try searching manually on Google Maps
- You may need to add it manually

**"Unmapped category"**: The business type isn't in our category mapping:
- Check `unmapped-categories.json` for the Google Place types
- Update `CATEGORY_MAP` in the script
- Re-run for those businesses

**Rate limiting**: The script includes a 200ms delay between requests to avoid rate limits. If you get errors, increase `DELAY_MS` in the script.
