// /src/pages/api/login.ts
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Tous les champs sont requis' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Identifiants incorrects' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Identifiants incorrects' });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ error: 'JWT_SECRET non configuré' });
    }

    // Générer un JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Définir le cookie pour stocker le token
    res.setHeader('Set-Cookie', `token=${token}; HttpOnly; Path=/; Max-Age=3600; Secure; SameSite=Strict`);

    return res.status(200).json({ message: 'Connexion réussie', user });
  } catch (error) {
    console.error('Erreur lors de la connexion:', error);
    return res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
}
