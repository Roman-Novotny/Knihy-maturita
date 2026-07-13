import { saintExupery } from './saintExupery.js'
import { romainRolland } from './romainRolland.js'

export const AUTHORS = [saintExupery, romainRolland]

export function getAuthorBySlug(slug) {
  return AUTHORS.find((author) => author.slug === slug)
}
