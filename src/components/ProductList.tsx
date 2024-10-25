// /src/components/ProductList.tsx
"use client";

import { products } from '@/data/products';
import Image from 'next/image';
import { useCart } from '@/context/CartContext'; 
import { useRouter } from 'next/navigation'; 
import { useState } from 'react'; 
import Rating from '@/components/Rating'; 

export default function ProductList() {
  const { addToCart } = useCart();
  const router = useRouter();

  const [activeProduct, setActiveProduct] = useState<number | null>(null);

  const handleProductClick = (productId: number) => {
    setActiveProduct((prevProductId) =>
      prevProductId === productId ? null : productId
    );
  };

  const handleAddToCart = (product: any) => {
    addToCart(product); 
    router.push('/cart'); 
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-6 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="flex justify-center">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-center text-black mt-4">
                {product.name}
              </h3>

              {/* Affichage de la note sous forme d'étoiles */}
              <div className="flex justify-center mt-2">
                <Rating rating={product.rating} />
              </div>

              {/* Affichage dynamique de la description */}
              {activeProduct === product.id && (
                <p className="text-gray-600 text-center mt-2">
                  {product.description}
                </p>
              )}

              <p className="text-xl font-bold text-center text-black mt-2">
                {product.price} €
              </p>

              <div className="flex justify-center mt-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
