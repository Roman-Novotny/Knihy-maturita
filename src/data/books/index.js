import { malyPrinc } from './malyPrinc.js'
import { petrALucie } from './petrALucie.js'
import { rur } from './rur.js'
import { farmaZvirat } from './farmaZvirat.js'

export const BOOKS = [malyPrinc, petrALucie, rur, farmaZvirat]

export function getBookBySlug(slug) {
  return BOOKS.find((book) => book.slug === slug)
}
