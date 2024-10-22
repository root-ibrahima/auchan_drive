// /src/app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Section d'accueil */}
      <div className="flex flex-col items-center justify-center mt-8">
        <h1 className="text-4xl font-bold mb-6">Bienvenue sur Auchan Drive</h1>
        <Image
          src="/images/logo.jpg"
          alt="Auchan Drive Logo"
          width={1250}
          height={900}
        />
        <p className="text-lg text-gray-600 mt-4 text-center">
          Gérer vos courses en toute simplicité grâce à l'intelligence artificielle.
        </p>
      </div>

      {/* Vous pouvez maintenant retirer la section des produits ici */}
    </div>
  );
}
