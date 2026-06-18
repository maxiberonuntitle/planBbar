import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const inputPath = path.join(root, 'public/images/logo.jpg');
const outputPath = path.join(root, 'public/images/logo.png');

const BLACK_THRESHOLD = 42;

function isNearBlack(r, g, b) {
  return r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD;
}

const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const { width, height } = info;
const pixels = new Uint8Array(data);
const visited = new Uint8Array(width * height);
const queue = [];

const indexOf = (x, y) => (y * width + x) * 4;
const visitedIndex = (x, y) => y * width + x;

const enqueue = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const vi = visitedIndex(x, y);
  if (visited[vi]) return;
  const i = indexOf(x, y);
  if (!isNearBlack(pixels[i], pixels[i + 1], pixels[i + 2])) return;
  visited[vi] = 1;
  queue.push([x, y]);
};

for (let x = 0; x < width; x += 1) {
  enqueue(x, 0);
  enqueue(x, height - 1);
}
for (let y = 0; y < height; y += 1) {
  enqueue(0, y);
  enqueue(width - 1, y);
}

while (queue.length > 0) {
  const [x, y] = queue.pop();
  const i = indexOf(x, y);
  pixels[i + 3] = 0;
  enqueue(x + 1, y);
  enqueue(x - 1, y);
  enqueue(x, y + 1);
  enqueue(x, y - 1);
}

await sharp(pixels, { raw: { width, height, channels: 4 } }).png().toFile(outputPath);

console.log(`Logo PNG generado: ${outputPath}`);
