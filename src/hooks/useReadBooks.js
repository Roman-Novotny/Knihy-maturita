import { useEffect, useState } from 'react'

const STORAGE_KEY = 'knihy-maturita:precteno'

function loadReadSlugs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

export function useReadBooks() {
  const [readSlugs, setReadSlugs] = useState(loadReadSlugs)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...readSlugs]))
  }, [readSlugs])

  function isRead(slug) {
    return readSlugs.has(slug)
  }

  function toggleRead(slug) {
    setReadSlugs((prev) => {
      const next = new Set(prev)
      if (next.has(slug)) next.delete(slug)
      else next.add(slug)
      return next
    })
  }

  return { isRead, toggleRead }
}
