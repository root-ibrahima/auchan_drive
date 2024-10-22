// /app/products/page.tsx
import ProductList from '@/components/ProductList'; // Importer le composant ProductList

export default function ProductsPage() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Nos Produits
        </h1>
        <ProductList /> {/* Afficher la liste des produits */}
      </div>
    </div>
  );
}
