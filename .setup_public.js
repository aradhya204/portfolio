import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
  console.log('✅ Created public folder.');
}

// Look for image files on the desktop (relative to project root)
const desktopFile1 = path.resolve(__dirname, '../A..jpg');
const desktopFile2 = path.resolve(__dirname, '../A.jpg');
const destFile = path.join(publicDir, 'profile.jpg');

if (fs.existsSync(desktopFile1)) {
  fs.copyFileSync(desktopFile1, destFile);
  console.log('🎉 Successfully copied your profile picture (A..jpg) to the public folder!');
} else if (fs.existsSync(desktopFile2)) {
  fs.copyFileSync(desktopFile2, destFile);
  console.log('🎉 Successfully copied your profile picture (A.jpg) to the public folder!');
} else {
  console.log('❌ Could not find A.jpg or A..jpg on your desktop.');
}
