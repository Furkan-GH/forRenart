import { promises as fs } from 'fs';
import path from 'path';

export async function getProducts() {
  const filePath = path.join(process.cwd(), 'src/data/products.json');
  const json = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(json);
}
