import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react'
import { BOOK_SECTIONS, PRACTICE_FEATURES } from '../data/features.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-20 pb-24 sm:px-6">
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, rgba(192,132,252,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(251,191,36,0.12), transparent 40%)',
          }}
        />
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-gray-300"
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            Příprava na maturitu z literatury, konečně přehledně
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl font-semibold tracking-tight text-white sm:text-6xl"
          >
            Všechna maturitní <span className="text-gradient">díla</span> na jednom místě
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-gray-400"
          >
            Rozbory literárních děl a autorů, kvízy a kartičky na procvičení – vše, co
            potřebuješ k ústní maturitní zkoušce, přehledně a moderně.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/knihy"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-amber-400 px-6 py-3 font-medium text-black transition-transform hover:scale-[1.03]"
            >
              <BookOpen className="h-5 w-5" />
              Prozkoumat knihy
            </Link>
            <Link
              to="/o-projektu"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-medium text-gray-200 transition-colors hover:bg-white/5"
            >
              O projektu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Co u nás najdeš u každého díla */}
      <section className="border-t border-white/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-white">Co najdeš u každého díla</h2>
            <p className="mt-3 text-gray-400">
              Deset kapitol, které pokryjí všechno, co může padnout u zkoušky.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {BOOK_SECTIONS.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: (i % 5) * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/20"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-amber-400/20 text-sm font-semibold text-fuchsia-300">
                  {i + 1}
                </div>
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-1.5 text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Procvičování */}
      <section className="border-t border-white/10 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold text-white">Procvič si to</h2>
            <p className="mt-3 text-gray-400">Nejde jen o čtení – u každého díla i autora tě čeká i aktivní procvičování.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {PRACTICE_FEATURES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 text-center"
              >
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
