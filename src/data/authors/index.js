import { saintExupery } from './saintExupery.js'
import { romainRolland } from './romainRolland.js'
import { karelCapek } from './karelCapek.js'
import { georgeOrwell } from './georgeOrwell.js'

export const AUTHORS = [saintExupery, romainRolland, karelCapek, georgeOrwell]

export function getAuthorBySlug(slug) {
  return AUTHORS.find((author) => author.slug === slug)
}
