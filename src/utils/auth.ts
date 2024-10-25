// /src/utils/auth.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export function verifyAuth(req: NextRequest) {
  const token = req.cookies.get('token');
  if (!token) return null;

  try {
    const decoded = jwt.verify(token?.value, process.env.JWT_SECRET!);
    return decoded;
  } catch (error) {
    return null;
  }
}
