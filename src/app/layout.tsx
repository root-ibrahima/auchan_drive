// /src/app/layout.tsx
"use client";

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react'; // Importation du SessionProvider
import NavBar from '@/components/NavBar';
import BackToTopButton from '@/components/BackToTopButton';
import RecommendedProducts from '@/components/RecommendedProducts';
import { CartProvider } from '@/context/CartContext'; // Importation du CartProvider
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-black">
        <SessionProvider> {/* Ajout du SessionProvider pour la gestion des sessions */}
          <CartProvider> {/* Ajout du CartProvider pour gérer le panier */}
            <NavBar />
            <main>{children}</main>
            <RecommendedProducts />
            <BackToTopButton />
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
