import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, X, Pencil, Check, Trash2 } from 'lucide-react'
import { useLists } from '../hooks/useLists.js'
import { getBookBySlug } from '../data/books/index.js'
import { getAuthorBySlug } from '../data/authors/index.js'
import EmptyState from '../components/EmptyState.jsx'

export default function ListDetail() {
  const { id } = useParams()
  const { getList, renameList, deleteList, removeFromList } = useLists()
  const list = getList(id)
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(list?.name ?? '')

  if (!list) return <Navigate to="/seznamy" replace />

  function handleRename(e) {
    e.preventDefault()
    const trimmed = name.trim()
    if (trimmed) renameList(list.id, trimmed)
    setEditing(false)
  }

  const books = list.items
    .filter((i) => i.type === 'book')
    .map((i) => getBookBySlug(i.slug))
    .filter(Boolean)
  const authors = list.items
    .filter((i) => i.type === 'author')
    .map((i) => getAuthorBySlug(i.slug))
    .filter(Boolean)

  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Link to="/seznamy" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Zpět na seznamy
        </Link>

        <div className="mt-6 flex items-start justify-between gap-4">
          {editing ? (
            <form onSubmit={handleRename} className="flex flex-1 items-center gap-2">
              <input
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full max-w-sm rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-2xl font-semibold text-white focus:border-fuchsia-400/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg border border-white/10 p-2 text-gray-300 hover:border-white/25"
                aria-label="Uložit název"
              >
                <Check className="h-4 w-4" />
              </button>
            </form>
          ) : (
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">{list.name}</h1>
          )}

          <div className="flex shrink-0 items-center gap-2">
            <button
              onClick={() => {
                setName(list.name)
                setEditing((v) => !v)
              }}
              className="rounded-lg border border-white/10 p-2 text-gray-400 hover:border-white/25 hover:text-gray-200"
              aria-label="Přejmenovat seznam"
            >
              <Pencil className="h-4 w-4" />
            </button>
            <button
              onClick={() => deleteList(list.id)}
              className="rounded-lg border border-white/10 p-2 text-gray-400 hover:border-red-400/40 hover:text-red-400"
              aria-label="Smazat seznam"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>

        {list.items.length === 0 ? (
          <div className="mt-4">
            <EmptyState
              icon={BookOpen}
              title="Seznam je prázdný"
              description="Přidej do něj knihy nebo autory tlačítkem „Seznamy“ na jejich stránce."
            />
          </div>
        ) : (
          <div className="mt-10 flex flex-col gap-10">
            {books.length > 0 && (
              <div>
                <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-500">Knihy</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {books.map((book) => (
                    <div key={book.slug} className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <button
                        onClick={() => removeFromList(list.id, { type: 'book', slug: book.slug })}
                        className="absolute right-3 top-3 rounded-lg p-1 text-gray-600 hover:bg-white/5 hover:text-red-400"
                        aria-label="Odebrat ze seznamu"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <Link to={`/knihy/${book.slug}`} className="pr-6">
                        <p className="font-medium text-white">{book.title}</p>
                        <p className="mt-1 text-sm text-gray-500">
                          {book.author} · {book.year}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {authors.length > 0 && (
              <div>
                <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-500">Autoři</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {authors.map((author) => (
                    <div key={author.slug} className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                      <button
                        onClick={() => removeFromList(list.id, { type: 'author', slug: author.slug })}
                        className="absolute right-3 top-3 rounded-lg p-1 text-gray-600 hover:bg-white/5 hover:text-red-400"
                        aria-label="Odebrat ze seznamu"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <Link to={`/autori/${author.slug}`} className="pr-6">
                        <p className="font-medium text-white">{author.name}</p>
                        <p className="mt-1 text-sm text-gray-500">{author.lifespan}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
