// /src/components/NavBar.tsx
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-lg rounded-b-lg"> {/* Ajout de shadow-lg et rounded-b-lg */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-red-600">
              Auchan Drive
            </Link>
          </div>
          {/* Liens de navigation */}
          <div className="hidden sm:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-lg font-medium transition duration-200">
              Accueil
            </Link>
            <Link href="/products" className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-lg font-medium transition duration-200">
              Produits
            </Link>
            <Link href="/cart" className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-lg font-medium transition duration-200">
              Panier
            </Link>
            <Link href="/agent-ia" className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-lg font-medium transition duration-200">
              Agent IA
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
