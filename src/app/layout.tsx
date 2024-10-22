// /src/app/layout.tsx
import { ReactNode } from 'react';
import NavBar from '@/components/NavBar';
import BackToTopButton from '@/components/BackToTopButton';
import RecommendedProducts from '@/components/RecommendedProducts';
import { CartProvider } from '@/context/CartContext'; // Importation du CartProvider
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-black">
        <CartProvider> {/* Ajout du CartProvider pour envelopper l'application */}
          <NavBar />
          <main>{children}</main>
          <RecommendedProducts />
          <BackToTopButton />
        </CartProvider>
      </body>
    </html>
  );
}
