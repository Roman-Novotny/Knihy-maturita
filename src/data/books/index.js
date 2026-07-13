import { malyPrinc } from './malyPrinc.js'
import { petrALucie } from './petrALucie.js'
import { rur } from './rur.js'

export const BOOKS = [malyPrinc, petrALucie, rur]

export function getBookBySlug(slug) {
  return BOOKS.find((book) => book.slug === slug)
}
