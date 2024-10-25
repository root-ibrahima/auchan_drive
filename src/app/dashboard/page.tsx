// /src/app/dashboard/page.tsx
"use client";

import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  const handleLogout = () => {
    // Logique de déconnexion (ex. effacer le token)
    router.push('/login');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-2xl mt-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Tableau de Bord</h2>
        
        <div className="mb-6 text-center">
          <p className="text-lg">Bienvenue, <span className="font-semibold">[Nom d'utilisateur]</span></p>
          <p className="text-gray-600">Email : [email@example.com]</p>
        </div>
        
        <div className="flex flex-col space-y-4">
          <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition">
            Voir mes commandes
          </button>
          <button className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition" onClick={handleLogout}>
            Déconnexion
          </button>
        </div>
      </div>
    </div>
  );
}
