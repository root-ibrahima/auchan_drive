// /src/pages/api/check-auth.ts
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Non authentifié' });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    return res.status(200).json({ message: 'Authentifié' });
  } catch (error) {
    return res.status(401).json({ error: 'Non authentifié' });
  }
}
