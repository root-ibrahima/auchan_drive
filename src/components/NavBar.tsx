// /src/components/NavBar.tsx
"use client";

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function NavBar() {
  const { data: session, status } = useSession();

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white">
            Auchan Drive
          </Link>

          {/* Liens de navigation */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-indigo-400 transition">
              Accueil
            </Link>
            <Link href="/products" className="text-white hover:text-indigo-400 transition">
              Produits
            </Link>
            <Link href="/contact" className="text-white hover:text-indigo-400 transition">
              Contact
            </Link>

            {/* Gestion de l'authentification */}
            {status === 'authenticated' ? (
              <>
                <Link href="/dashboard" className="text-white hover:text-indigo-400 transition">
                  Tableau de Bord
                </Link>
                <p className="text-white">Bonjour, {session?.user?.name}</p>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full transition"
                >
                  Se déconnecter
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/signin">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-full transition">
                    Se connecter
                  </button>
                </Link>
                <Link href="/auth/register">
                  <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition">
                    S'inscrire
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
