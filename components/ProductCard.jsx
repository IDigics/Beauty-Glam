'use client'

import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border rounded shadow-sm p-4 hover:shadow-md transition cursor-pointer">
        <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-contain mb-4 rounded bg-white"
       />

        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-pink-600 font-bold">{product.price} TND</p>
      </div>
    </Link>
  )
}
