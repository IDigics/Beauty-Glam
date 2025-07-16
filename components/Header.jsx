'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-pink-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Beauty Glam</h1>
      <nav>
        <Link href="/" className="mr-4 hover:underline">Accueil</Link>
        <Link href="/login" className="hover:underline">Connexion</Link>
      </nav>
    </header>
  )
}
