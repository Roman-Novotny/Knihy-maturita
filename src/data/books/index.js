import { malyPrinc } from './malyPrinc.js'
import { petrALucie } from './petrALucie.js'

export const BOOKS = [malyPrinc, petrALucie]

export function getBookBySlug(slug) {
  return BOOKS.find((book) => book.slug === slug)
}
