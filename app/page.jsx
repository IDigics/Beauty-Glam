import Header from '../components/Header'
import ProductList from '../components/ProductList'
import DateServer from '../components/DateServer'


const products = [
  {
    id: 1,
    name: "Rouge à lèvres Luxe",
    price: 45,
    image: "/products/lipstick.png",
  },
  {
    id: 2,
    name: "fards à paupières",
    price: 60,
    image: "/products/eyeshadow.png",
  },
  {
    id: 3,
    name: "Fond de teint naturel",
    price: 70,
    image: "/products/foundation.png",
  },
  {
    id: 4,
    name: "Crème Hydratante",
    price: 80,
    image: "/products/creme.png",
  },
  {
    id: 5,
    name: "Baume à lèvres Luxe",
    price: 50,
    image: "/products/baume.png",
  },
  {
    id: 6,
    name: "Mascara Volume Intense",
    price: 48,
    image: "/products/mascara.jpeg",
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-8">
        <ProductList products={products} />
        <DateServer /> {/* ← ajout ici dans le return */}
      </main>
    </>
  )
}
