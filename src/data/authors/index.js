import { saintExupery } from './saintExupery.js'
import { romainRolland } from './romainRolland.js'
import { karelCapek } from './karelCapek.js'

export const AUTHORS = [saintExupery, romainRolland, karelCapek]

export function getAuthorBySlug(slug) {
  return AUTHORS.find((author) => author.slug === slug)
}
