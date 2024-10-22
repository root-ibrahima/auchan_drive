// /src/components/RecommendedProducts.tsx
import { products } from '@/data/products';
import Image from 'next/image';

export default function RecommendedProducts() {
  // Sélectionnez quelques produits pour les recommandations (par exemple, les 4 premiers produits)
  const recommendedProducts = products.slice(0, 4);

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Auchan vous recommandes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
              <div className="flex justify-center">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800 mt-4">{product.name}</h3>
              <p className="text-gray-600 text-center mt-2">{product.description}</p>
              <p className="text-lg font-bold text-center text-gray-800 mt-2">{product.price} €</p>
              <div className="flex justify-center mt-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200">
                  Voir Détails
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
