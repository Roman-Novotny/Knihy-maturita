import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { UserRound, ArrowRight } from 'lucide-react'
import { AUTHORS } from '../data/authors/index.js'

export default function Autori() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Autoři</h1>
          <p className="mt-3 text-gray-400">
            Životopisy spisovatelů, jejichž díla najdeš v sekci Knihy, i s kvízy a kartičkami.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUTHORS.map((author, i) => (
            <motion.div
              key={author.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
            >
              <Link
                to={`/autori/${author.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-amber-400/20">
                  <UserRound className="h-5 w-5 text-fuchsia-300" />
                </div>
                <h2 className="font-medium text-white">{author.name}</h2>
                <p className="mt-1 text-sm text-gray-400">{author.lifespan}</p>
                <div className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-medium text-fuchsia-300">
                  Otevřít profil
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
