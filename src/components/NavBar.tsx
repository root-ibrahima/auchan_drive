// /src/components/NavBar.tsx
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-white/70 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800 tracking-wide">
              Auchan Drive
            </Link>
          </div>

          {/* Liens de navigation */}
          <div className="hidden sm:flex space-x-6 items-center">
            <NavLink href="/" label="Accueil" />
            <NavLink href="/products" label="Produits" />
            <NavLink href="/cart" label="Panier" />
            <NavLink href="/agent-ia" label="Agent IA" />
            <NavLink href="/signup" label="Inscription" />
            <NavLink href="/login" label="Connexion" />
            <NavLink href="/dashboard" label="Tableau de Bord" />
          </div>
        </div>
      </div>
    </nav>
  );
}

// Composant NavLink pour style cohérent et effet de survol épuré
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-gray-700 text-lg font-medium px-3 py-2 rounded transition-colors duration-200 hover:text-red-500 hover:underline"
    >
      {label}
    </Link>
  );
}
