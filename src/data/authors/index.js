import { saintExupery } from './saintExupery.js'
import { romainRolland } from './romainRolland.js'
import { karelCapek } from './karelCapek.js'
import { georgeOrwell } from './georgeOrwell.js'
import { ernestHemingway } from './ernestHemingway.js'
import { moliere } from './moliere.js'
import { gogol } from './gogol.js'

export const AUTHORS = [saintExupery, romainRolland, karelCapek, georgeOrwell, ernestHemingway, moliere, gogol]

export function getAuthorBySlug(slug) {
  return AUTHORS.find((author) => author.slug === slug)
}
