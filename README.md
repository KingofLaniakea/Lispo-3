
# Outdoor Mastery - Foreign Trade Website

This is a modern, responsive product showcase website built with React and Vite. It is designed for international trade, featuring a premium design and easy navigation.

## Project Structure

- `src/`
  - `components/`: Reusable UI components (Navbar, Hero, ProductCard, etc.)
  - `pages/`: Page views (Home, Products, ProductDetail)
  - `data/`: Contains `products.js` which holds the site content.
- `public/images/`: Stores product images.

## Features

- **Dynamic Product Catalog**: Automatically generated from your Excel file and images.
- **Category Filtering**: Products are automatically categorized (Decoys, Bags, etc.).
- **Responsive Design**: Works perfectly on mobile and desktop.
- **Deployment Ready**: Optimized for fast loading and SEO.

## How to Update Data

The project includes an automation script to update products from your Excel file and Image folder.

1. Ensure your Excel file is at `E:\Company\网站大类名+照片.xlsx`
2. Ensure images are in `E:\Company\` (named `图片*.jpg/png`)
3. Run the update script:
   ```powershell
   d:/Anaconda/python.exe .antigravity/process_data_v2.py
   ```
   This will:
   - Read the Excel file.
   - Match categories to images.
   - Copy images to `public/images`.
   - Update `src/data/products.js`.

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```

## Deployment

Refer to `.antigravity/DEPLOYMENT_GUIDE.md` for detailed instructions on publishing to GitHub Pages.
