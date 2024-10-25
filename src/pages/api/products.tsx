// /app/api/products.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getProducts } from '../../db/products';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const products = await getProducts();
      res.status(200).json(products);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Méthode ${req.method} non autorisée`);
    }
  } catch (error) {
    res.status(500).json({ message: 'Erreur serveur', error });
  }
}
