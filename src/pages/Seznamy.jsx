import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Bookmark, Plus, Trash2 } from 'lucide-react'
import { useLists } from '../hooks/useLists.js'
import EmptyState from '../components/EmptyState.jsx'

function itemsLabel(count) {
  if (count === 0) return 'prázdný seznam'
  if (count === 1) return '1 položka'
  if (count < 5) return `${count} položky`
  return `${count} položek`
}

export default function Seznamy() {
  const { lists, createList, deleteList } = useLists()
  const [name, setName] = useState('')

  function handleCreate(e) {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    createList(trimmed)
    setName('')
  }

  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">Moje seznamy</h1>
          <p className="mt-3 text-gray-400">
            Vytvoř si vlastní seznamy knih a autorů – třeba „Přečteno", „Rozečteno" nebo „Chci přečíst" – a přidávej do nich
            tlačítkem Seznamy na stránce knihy nebo autora.
          </p>
        </div>

        <form onSubmit={handleCreate} className="mx-auto mt-8 flex max-w-md items-center gap-2">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Název nového seznamu…"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-gray-200 placeholder:text-gray-600 focus:border-fuchsia-400/40 focus:outline-none"
          />
          <button
            type="submit"
            className="flex shrink-0 items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-gray-200 hover:border-white/25"
          >
            <Plus className="h-4 w-4" />
            Vytvořit
          </button>
        </form>

        {lists.length === 0 ? (
          <div className="mt-4">
            <EmptyState
              icon={Bookmark}
              title="Zatím žádné seznamy"
              description="Vytvoř si první seznam výše a přidávej do něj knihy i autory z jejich stránek."
            />
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {lists.map((list, i) => (
              <motion.div
                key={list.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => deleteList(list.id)}
                  className="absolute right-4 top-4 rounded-lg p-1.5 text-gray-600 hover:bg-white/5 hover:text-red-400"
                  aria-label={`Smazat seznam ${list.name}`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
                <Link to={`/seznamy/${list.id}`} className="flex h-full flex-col">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-amber-400/20">
                    <Bookmark className="h-5 w-5 text-fuchsia-300" />
                  </div>
                  <h2 className="pr-8 font-medium text-white">{list.name}</h2>
                  <p className="mt-1 text-sm text-gray-500">{itemsLabel(list.items.length)}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
