import { malyPrinc } from './malyPrinc.js'

export const BOOKS = [malyPrinc]

export function getBookBySlug(slug) {
  return BOOKS.find((book) => book.slug === slug)
}
