import { malyPrinc } from './malyPrinc.js'
import { petrALucie } from './petrALucie.js'
import { rur } from './rur.js'
import { farmaZvirat } from './farmaZvirat.js'
import { starecAMore } from './starecAMore.js'
import { lakomec } from './lakomec.js'
import { revizor } from './revizor.js'
import { valkaSMloky } from './valkaSMloky.js'
import { krysar } from './krysar.js'

export const BOOKS = [malyPrinc, petrALucie, rur, farmaZvirat, starecAMore, lakomec, revizor, valkaSMloky, krysar]

export function getBookBySlug(slug) {
  return BOOKS.find((book) => book.slug === slug)
}
