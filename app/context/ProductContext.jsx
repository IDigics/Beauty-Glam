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
    name: "fards à paupières",
    price: 80,
    image: "/products/eyeshadow.png",
    description: "Des couleurs vibrantes pour sublimer votre regard."
  },
  {
    id: 3,
    name: "Fond de teint naturel",
    price: 70,
    image: "/products/foundation.png",
    description: "Un fond de teint qui s’adapte parfaitement à votre peau."
  },
  {
    id: 4,
    name: "Crème Hydratante",
    price: 80,
    image: "/products/creme.png",
    description: "Une crème légère et non grasse qui pénètre rapidement pour hydrater intensément la peau du visage. Convient à tous les types de peau, même sensibles."
  },
  {
    id: 5,
    name: "Baume à lèvres Luxe",
    price: 50,
    image: "/products/baume.png",
    description: "Un baume à lèvres enrichi en huiles naturelles pour hydrater, adoucir et protéger vos lèvres toute la journée. Idéal pour les lèvres sèches ou gercées."
  },
  {
    id: 6,
    name: "Mascara Volume Intense",
    price: 48,
    image: "/products/mascara.jpeg",
    description: "Un mascara longue tenue qui apporte un volume spectaculaire à vos cils dès la première application. Sa brosse haute précision sépare et allonge chaque cil sans paquets, pour un regard profond et envoûtant."
  },
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
