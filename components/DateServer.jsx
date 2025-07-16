export default function DateServer() {
  const now = new Date().toLocaleString()

  return (
    <p className="text-sm text-gray-500 text-center mt-4">
      (Donnée générée côté serveur) : {now}
    </p>
  )
}
