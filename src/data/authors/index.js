import { saintExupery } from './saintExupery.js'

export const AUTHORS = [saintExupery]

export function getAuthorBySlug(slug) {
  return AUTHORS.find((author) => author.slug === slug)
}
