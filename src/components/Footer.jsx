import { BookOpen } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center text-sm text-gray-500 sm:px-6">
        <div className="flex items-center gap-2 text-gray-400">
          <BookOpen className="h-4 w-4" />
          <span>Knihy na maturitu</span>
        </div>
        <p>Vytvořeno jako pomůcka na přípravu k maturitní zkoušce z českého jazyka a literatury.</p>
      </div>
    </footer>
  )
}
