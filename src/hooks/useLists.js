import { useEffect, useState } from 'react'

const STORAGE_KEY = 'knihy-maturita:seznamy'

function loadLists() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function makeId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

function sameItem(a, b) {
  return a.type === b.type && a.slug === b.slug
}

export function useLists() {
  const [lists, setLists] = useState(loadLists)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lists))
  }, [lists])

  function createList(name) {
    const id = makeId()
    setLists((prev) => [...prev, { id, name, createdAt: Date.now(), items: [] }])
    return id
  }

  function renameList(id, name) {
    setLists((prev) => prev.map((l) => (l.id === id ? { ...l, name } : l)))
  }

  function deleteList(id) {
    setLists((prev) => prev.filter((l) => l.id !== id))
  }

  function getList(id) {
    return lists.find((l) => l.id === id)
  }

  function isInList(id, item) {
    const list = lists.find((l) => l.id === id)
    return list ? list.items.some((i) => sameItem(i, item)) : false
  }

  function addToList(id, item) {
    setLists((prev) =>
      prev.map((l) => (l.id === id && !l.items.some((i) => sameItem(i, item)) ? { ...l, items: [...l.items, item] } : l))
    )
  }

  function removeFromList(id, item) {
    setLists((prev) => prev.map((l) => (l.id === id ? { ...l, items: l.items.filter((i) => !sameItem(i, item)) } : l)))
  }

  function toggleItemInList(id, item) {
    if (isInList(id, item)) removeFromList(id, item)
    else addToList(id, item)
  }

  function listsForItem(item) {
    return lists.filter((l) => l.items.some((i) => sameItem(i, item)))
  }

  return {
    lists,
    createList,
    renameList,
    deleteList,
    getList,
    isInList,
    addToList,
    removeFromList,
    toggleItemInList,
    listsForItem,
  }
}
