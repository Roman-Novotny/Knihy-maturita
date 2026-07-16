import { saintExupery } from './saintExupery.js'
import { romainRolland } from './romainRolland.js'
import { karelCapek } from './karelCapek.js'
import { georgeOrwell } from './georgeOrwell.js'
import { ernestHemingway } from './ernestHemingway.js'
import { moliere } from './moliere.js'
import { gogol } from './gogol.js'
import { viktorDyk } from './viktorDyk.js'
import { vaclavHavel } from './vaclavHavel.js'
import { erben } from './erben.js'
import { eduardBass } from './eduardBass.js'
import { otaPavel } from './otaPavel.js'

export const AUTHORS = [saintExupery, romainRolland, karelCapek, georgeOrwell, ernestHemingway, moliere, gogol, viktorDyk, vaclavHavel, erben, eduardBass, otaPavel]

export function getAuthorBySlug(slug) {
  return AUTHORS.find((author) => author.slug === slug)
}
