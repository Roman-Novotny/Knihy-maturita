import { malyPrinc } from './malyPrinc.js'
import { petrALucie } from './petrALucie.js'
import { rur } from './rur.js'
import { farmaZvirat } from './farmaZvirat.js'
import { starecAMore } from './starecAMore.js'
import { lakomec } from './lakomec.js'
import { revizor } from './revizor.js'
import { valkaSMloky } from './valkaSMloky.js'
import { krysar } from './krysar.js'
import { audience } from './audience.js'
import { kytice } from './kytice.js'
import { cirkusHumberto } from './cirkusHumberto.js'
import { smrtKrasnychSrncu } from './smrtKrasnychSrncu.js'
import { marysa } from './marysa.js'

export const BOOKS = [malyPrinc, petrALucie, rur, farmaZvirat, starecAMore, lakomec, revizor, valkaSMloky, krysar, audience, kytice, cirkusHumberto, smrtKrasnychSrncu, marysa]

export function getBookBySlug(slug) {
  return BOOKS.find((book) => book.slug === slug)
}
