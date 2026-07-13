import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react'

export default function Flashcards({ cards }) {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)

  const card = cards[index]

  function go(delta) {
    setFlipped(false)
    setIndex((i) => (i + delta + cards.length) % cards.length)
  }

  return (
    <div className="flex flex-col items-center">
      <p className="mb-4 text-sm text-gray-500">
        Kartička {index + 1} / {cards.length}
      </p>

      <button
        onClick={() => setFlipped((f) => !f)}
        className="relative h-56 w-full max-w-md [perspective:1200px]"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${index}-${flipped}`}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex h-full w-full items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 text-center"
          >
            <div>
              <p className="mb-2 text-xs uppercase tracking-wide text-gray-500">
                {flipped ? 'Vysvětlení' : 'Pojem'}
              </p>
              <p className="text-lg font-medium text-white">
                {flipped ? card.definition : card.term}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </button>

      <div className="mt-5 flex items-center gap-3">
        <button
          onClick={() => go(-1)}
          className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-gray-300 hover:bg-white/5"
          aria-label="Předchozí kartička"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => setFlipped((f) => !f)}
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm text-gray-200 hover:bg-white/5"
        >
          <RotateCw className="h-4 w-4" />
          Otočit
        </button>
        <button
          onClick={() => go(1)}
          className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-gray-300 hover:bg-white/5"
          aria-label="Další kartička"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
