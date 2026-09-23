// convert-images.js
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, 'src/assets');
const DEFAULT_QUALITY = 82;
const MAX_WIDTH = 1300;

const SUPPORTED = ['.jpg', '.jpeg', '.png', '.PNG', '.JPG', '.JPEG'];
const SKIP_DIRS = ['originals'];

const CUSTOM_MAX_WIDTH = {
  'pApp': 600,
  'GPS-camera': 600,
  'VC-qr': 400,
  'QR_Zalo': 400,
  'lethienvu_contact': 600,
  'sgu-logo': 250,
  'lotte': 300,
  'lichien': 300,
  'DETMOLD_packaging': 400,
  'tvc_logo': 300,
  'bestEmp_Banner': 800,
  'bestEmp2024': 600,
  'thienVu': 800,
  'thienvu': 800,
  'sguPic': 800,
  'vu': 600,
  'phone-frame': 600,
};

async function getFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.includes(entry.name)) {
        files.push(...await getFiles(fullPath));
      }
    } else if (SUPPORTED.some(ext => entry.name.toLowerCase().endsWith(ext.toLowerCase()))) {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertFile(filePath) {
  const ext = path.extname(filePath);
  const base = path.basename(filePath, ext);
  const dir = path.dirname(filePath);
  const outPath = path.join(dir, base + '.webp');

  // Find custom max width if matched
  let maxW = MAX_WIDTH;
  for (const [key, val] of Object.entries(CUSTOM_MAX_WIDTH)) {
    if (base.toLowerCase().includes(key.toLowerCase())) {
      maxW = val;
      break;
    }
  }

  try {
    const info = await stat(filePath);
    const beforeKB = Math.round(info.size / 1024);

    const image = sharp(filePath);
    const meta = await image.metadata();

    let pipeline = image;
    if (meta.width && meta.width > maxW) {
      pipeline = pipeline.resize(maxW, null, { withoutEnlargement: true, fit: 'inside' });
    }

    await pipeline
      .webp({ quality: DEFAULT_QUALITY, effort: 5 })
      .toFile(outPath);

    const afterInfo = await stat(outPath);
    const afterKB = Math.round(afterInfo.size / 1024);
    const reduction = Math.round((1 - afterInfo.size / info.size) * 100);
    console.log(`✅ ${path.relative(ASSETS_DIR, filePath)} → ${base}.webp: ${beforeKB}KB → ${afterKB}KB (-${reduction}%)`);
    return { filePath, outPath, beforeKB, afterKB, reduction };
  } catch (err) {
    console.error(`❌ Error converting ${filePath}: ${err.message}`);
    return null;
  }
}

async function main() {
  console.log('🔄 Scanning assets in:', ASSETS_DIR);
  const files = await getFiles(ASSETS_DIR);
  console.log(`Found ${files.length} images to convert\n`);

  let totalBefore = 0, totalAfter = 0;
  const results = [];

  for (const file of files) {
    const result = await convertFile(file);
    if (result) {
      totalBefore += result.beforeKB;
      totalAfter += result.afterKB;
      results.push(result);
    }
  }

  console.log('\n=== SUMMARY ===');
  console.log(`Converted: ${results.length} files`);
  console.log(`Total before: ${(totalBefore / 1024).toFixed(2)} MB`);
  console.log(`Total after:  ${(totalAfter / 1024).toFixed(2)} MB`);
  console.log(`Total saved:  ${((totalBefore - totalAfter) / 1024).toFixed(2)} MB (-${Math.round((1 - totalAfter / totalBefore) * 100)}%)`);
}

main();
