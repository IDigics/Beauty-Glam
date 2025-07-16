'use client'
import { createContext, useContext, useState } from 'react'

const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Rouge à lèvres Luxe",
      price: 45,
      image: "/products/lipstick.png",
      description: "Un rouge à lèvres de haute qualité pour un look glamour."
    },
    {
      id: 2,
      name: "Mascara Volume",
      price: 35,
      image: "/products/mascara.png",
      description: "Mascara pour un regard intense et volumineux."
    }
  ])

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProduct() {
  return useContext(ProductContext)
}
