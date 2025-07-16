'use client'

import { useProduct } from '../app/context/ProductContext'

import ProductCard from './ProductCard'

export default function ProductList() {
  const { products } = useProduct()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
