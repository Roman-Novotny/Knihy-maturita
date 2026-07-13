import { malyPrinc } from './malyPrinc.js'
import { petrALucie } from './petrALucie.js'
import { rur } from './rur.js'
import { farmaZvirat } from './farmaZvirat.js'
import { starecAMore } from './starecAMore.js'
import { lakomec } from './lakomec.js'
import { revizor } from './revizor.js'

export const BOOKS = [malyPrinc, petrALucie, rur, farmaZvirat, starecAMore, lakomec, revizor]

export function getBookBySlug(slug) {
  return BOOKS.find((book) => book.slug === slug)
}
