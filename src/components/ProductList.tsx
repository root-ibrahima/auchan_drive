// /src/components/ProductList.tsx
import { products } from '@/data/products';
import Image from 'next/image';

export default function ProductList() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-6 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              {/* Conteneur de l'image */}
              <div className="flex justify-center">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover"
                />
              </div>
              {/* Nom du produit */}
              <h3 className="text-xl font-semibold text-center text-black mt-4">
                {product.name}
              </h3>
              {/* Description du produit */}
              <p className="text-gray-600 text-center mt-2">
                {product.description}
              </p>
              {/* Prix du produit */}
              <p className="text-xl font-bold text-center text-black mt-2">
                {product.price} €
              </p>
              {/* Bouton */}
              <div className="flex justify-center mt-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200">
                  Ajout au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
