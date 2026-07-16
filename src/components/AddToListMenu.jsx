import { useEffect, useRef, useState } from 'react'
import { Bookmark, BookmarkCheck, Plus, Check } from 'lucide-react'
import { useLists } from '../hooks/useLists.js'

export default function AddToListMenu({ item }) {
  const { lists, createList, toggleItemInList, isInList, listsForItem } = useLists()
  const [open, setOpen] = useState(false)
  const [newName, setNewName] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const memberCount = listsForItem(item).length

  function handleCreate(e) {
    e.preventDefault()
    const name = newName.trim()
    if (!name) return
    const id = createList(name)
    toggleItemInList(id, item)
    setNewName('')
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setOpen((v) => !v)
        }}
        className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors ${
          memberCount > 0
            ? 'border-fuchsia-400/40 bg-fuchsia-400/10 text-fuchsia-300'
            : 'border-white/10 text-gray-400 hover:border-white/25 hover:text-gray-200'
        }`}
      >
        {memberCount > 0 ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
        Seznamy{memberCount > 0 ? ` (${memberCount})` : ''}
      </button>

      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 z-20 mt-2 w-64 rounded-xl border border-white/10 bg-[#111318] p-2 shadow-xl"
        >
          {lists.length === 0 && <p className="px-2 py-2 text-xs text-gray-500">Zatím nemáš žádné seznamy.</p>}

          {lists.length > 0 && (
            <div className="max-h-48 overflow-y-auto">
              {lists.map((list) => {
                const checked = isInList(list.id, item)
                return (
                  <button
                    key={list.id}
                    type="button"
                    onClick={() => toggleItemInList(list.id, item)}
                    className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm text-gray-300 hover:bg-white/5"
                  >
                    <span className="truncate">{list.name}</span>
                    {checked && <Check className="h-4 w-4 shrink-0 text-fuchsia-300" />}
                  </button>
                )
              })}
            </div>
          )}

          <form onSubmit={handleCreate} className="mt-2 flex items-center gap-1.5 border-t border-white/10 pt-2">
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Nový seznam…"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-xs text-gray-200 placeholder:text-gray-600 focus:border-fuchsia-400/40 focus:outline-none"
            />
            <button
              type="submit"
              className="flex shrink-0 items-center justify-center rounded-lg border border-white/10 p-1.5 text-gray-400 hover:border-white/25 hover:text-gray-200"
              aria-label="Vytvořit seznam"
            >
              <Plus className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  )
}
