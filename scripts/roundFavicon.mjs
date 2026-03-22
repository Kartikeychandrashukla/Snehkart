import sharp from 'sharp';

const SIZE = 64;
const RADIUS = 32; // half of SIZE = perfect circle

const roundedMask = Buffer.from(
  `<svg width="${SIZE}" height="${SIZE}">
    <rect x="0" y="0" width="${SIZE}" height="${SIZE}" rx="${RADIUS}" ry="${RADIUS}" fill="white"/>
  </svg>`
);

await sharp('src/assets/faviconsnekart.jpeg')
  .resize(SIZE, SIZE)
  .png()
  .composite([{ input: roundedMask, blend: 'dest-in' }])
  .toFile('public/faviconsnekart.png');

console.log('Done → public/faviconsnekart.png');
