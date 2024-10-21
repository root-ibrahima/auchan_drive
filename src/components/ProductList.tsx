// /src/components/ProductList.tsx
import { products } from '@/data/products';
import Image from 'next/image';

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 rounded shadow-lg flex flex-col items-center"
        >
          {/* Centrage de l'image */}
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={200}  // Largeur réduite pour éviter de prendre trop d'espace
            height={200} // Hauteur dynamique
            className="object-cover mx-auto"
          />
          <h2 className="text-2xl font-bold mt-4 text-center">{product.name}</h2>
          <p className="text-gray-500 text-center">{product.description}</p>
          <p className="text-xl font-semibold mt-2">{product.price} €</p>
          <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600">
            Ajouter au panier
          </button>
        </div>
      ))}
    </div>
  );
}
  