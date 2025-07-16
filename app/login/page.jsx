'use client' // nécessaire pour activer les hooks dans App Router

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email === 'test@gmail.com' && password === 'test') {
      // ✅ Connexion réussie → rediriger vers page d'accueil
      router.push('/')
    } else {
      // ❌ Mauvais identifiants
      setError('Email ou mot de passe incorrect')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-pink-600 mb-6">Connexion</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="exemple@beauty.tn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Mot de passe</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
          >
            Se connecter
          </button>
        </form>
      </div>
    </main>
  )
}
