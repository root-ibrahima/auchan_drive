// /app/cart/page.tsx
"use client";

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, updateCartQuantity, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-black mb-8">
          Votre Panier
        </h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            Votre panier est vide. <Link href="/products" className="text-red-500">Voir nos produits.</Link>
          </p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-4">
                <div className="flex items-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-gray-600">Prix: {item.price} €</p>
                    
                    {/* Input pour changer la quantité */}
                    <div className="flex items-center">
                      <label className="mr-2 text-gray-600">Quantité:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartQuantity(item.id, parseInt(e.target.value))
                        }
                        className="w-16 px-2 py-1 border rounded-md text-center"
                      />
                    </div>

                    <p className="text-gray-600 mt-2">Total: {(item.price * item.quantity).toFixed(2)} €</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Retirer
                </button>
              </div>
            ))}
            <div className="text-right font-bold text-xl mt-4">
              Total: {totalPrice.toFixed(2)} €
            </div>
            <div className="text-right">
              <button
                onClick={clearCart}
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Vider le panier
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
