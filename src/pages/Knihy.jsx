import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, CheckCircle2, Circle } from 'lucide-react'
import { BOOKS } from '../data/books/index.js'
import { useReadBooks } from '../hooks/useReadBooks.js'

export default function Knihy() {
  const { isRead, toggleRead } = useReadBooks()

  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Knihy</h1>
          <p className="mt-3 text-gray-400">
            Postupně přibývající rozbory literárních děl k maturitě z českého jazyka a literatury.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BOOKS.map((book, i) => (
            <motion.div
              key={book.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Link
                to={`/knihy/${book.slug}`}
                className={`group relative flex h-full flex-col rounded-2xl border p-6 transition-colors ${
                  isRead(book.slug) ? 'border-emerald-400/30 bg-emerald-400/[0.04]' : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                }`}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    toggleRead(book.slug)
                  }}
                  className={`absolute right-4 top-4 flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors ${
                    isRead(book.slug)
                      ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
                      : 'border-white/10 text-gray-500 hover:border-white/25 hover:text-gray-300'
                  }`}
                >
                  {isRead(book.slug) ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Circle className="h-3.5 w-3.5" />}
                  Přečteno
                </button>

                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-amber-400/20">
                  <BookOpen className="h-5 w-5 text-fuchsia-300" />
                </div>
                <h2 className="pr-24 font-medium text-white">{book.title}</h2>
                <p className="mt-1 text-sm text-gray-400">
                  {book.author} · {book.year}
                </p>
                <p className="mt-3 text-sm text-gray-500">{book.basics.literaryGenre}</p>
                <div className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-fuchsia-300">
                  Otevřít rozbor
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
