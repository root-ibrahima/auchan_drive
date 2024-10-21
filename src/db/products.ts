// /src/db/products.ts
import { query } from './index';

export async function getProducts() {
  const sql = 'SELECT * FROM products';
  const products = await query(sql);
  return products;
}
