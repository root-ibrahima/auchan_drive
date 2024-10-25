// /src/pages/api/logout.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Simuler la déconnexion (effacement des sessions côté serveur)
    return res.status(200).json({ message: 'Déconnexion réussie' });
  } else {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
