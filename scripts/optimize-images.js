#!/usr/bin/env node

/**
 * Image Optimization Script
 *
 * This script helps convert images to modern formats (WebP, AVIF)
 * for better performance and smaller file sizes.
 *
 * Usage:
 * node scripts/optimize-images.js
 *
 * Requirements:
 * npm install sharp
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.log('📦 Sharp not found. Install it with: npm install sharp');
  console.log(
    '💡 This is optional for development, but recommended for production builds.'
  );
  process.exit(0);
}

const publicDir = path.join(__dirname, '../public');
const supportedFormats = ['.jpg', '.jpeg', '.png'];

async function optimizeImages() {
  console.log('🖼️  Starting image optimization...');

  const files = fs.readdirSync(publicDir);
  const imageFiles = files.filter((file) =>
    supportedFormats.includes(path.extname(file).toLowerCase())
  );

  if (imageFiles.length === 0) {
    console.log('✅ No images to optimize found.');
    return;
  }

  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    const baseName = path.parse(file).name;

    try {
      // Convert to WebP
      const webpPath = path.join(publicDir, `${baseName}.webp`);
      if (!fs.existsSync(webpPath)) {
        await sharp(inputPath).webp({ quality: 85 }).toFile(webpPath);
        console.log(`✅ Created ${baseName}.webp`);
      }

      // Convert to AVIF (smaller but newer format)
      const avifPath = path.join(publicDir, `${baseName}.avif`);
      if (!fs.existsSync(avifPath)) {
        await sharp(inputPath).avif({ quality: 80 }).toFile(avifPath);
        console.log(`✅ Created ${baseName}.avif`);
      }

      // Get file sizes for comparison
      const originalSize = fs.statSync(inputPath).size;
      const webpSize = fs.statSync(webpPath).size;
      const avifSize = fs.statSync(avifPath).size;

      console.log(`📊 ${file}:`);
      console.log(`   Original: ${(originalSize / 1024).toFixed(1)}KB`);
      console.log(
        `   WebP: ${(webpSize / 1024).toFixed(1)}KB (${((webpSize / originalSize) * 100).toFixed(1)}%)`
      );
      console.log(
        `   AVIF: ${(avifSize / 1024).toFixed(1)}KB (${((avifSize / originalSize) * 100).toFixed(1)}%)`
      );
      console.log('');
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }

  console.log('🎉 Image optimization complete!');
  console.log(
    '💡 Consider using the optimized formats in your components for better performance.'
  );
}

// Run the optimization
optimizeImages().catch(console.error);
