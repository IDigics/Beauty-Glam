'use client' // ← très important !

import { useParams } from 'next/navigation'
import Header from '../../../components/Header'

const products = [
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
]

export default function ProductDetailPage() {
  const params = useParams()
  const productId = parseInt(params.id, 10)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    return (
      <main className="p-8">
        <Header />
        <h2 className="text-xl font-bold text-center mt-10">Produit non trouvé</h2>
      </main>
    )
  }

  return (
    <>
      <Header />
      <main className="p-8 max-w-3xl mx-auto">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-pink-600 text-xl font-semibold mb-4">{product.price} TND</p>
        <p className="text-gray-700">{product.description}</p>
      </main>
    </>
  )
}
