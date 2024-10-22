// /src/app/layout.tsx
import { ReactNode } from 'react';
import NavBar from '@/components/NavBar';
import BackToTopButton from '@/components/BackToTopButton';
import RecommendedProducts from '@/components/RecommendedProducts'; // Importation des produits recommandés
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-black">
        <NavBar />
        <main>{children}</main>
        <RecommendedProducts /> {/* Ajout des produits recommandés */}
        <BackToTopButton />
      </body>
    </html>
  );
}
