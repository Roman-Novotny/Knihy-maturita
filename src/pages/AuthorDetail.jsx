import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, UserRound, Brain, Layers, BookOpen } from 'lucide-react'
import { getAuthorBySlug } from '../data/authors/index.js'
import { getBookBySlug } from '../data/books/index.js'
import Quiz from '../components/Quiz.jsx'
import Flashcards from '../components/Flashcards.jsx'
import AddToListMenu from '../components/AddToListMenu.jsx'

function Section({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7"
    >
      <h2 className="mb-4 font-medium text-white">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-gray-400">{children}</div>
    </motion.section>
  )
}

const TABS = [
  { id: 'profil', label: 'Profil', icon: UserRound },
  { id: 'kviz', label: 'Kvíz', icon: Brain },
  { id: 'karticky', label: 'Kartičky', icon: Layers },
]

export default function AuthorDetail() {
  const { slug } = useParams()
  const author = getAuthorBySlug(slug)
  const [tab, setTab] = useState('profil')

  if (!author) return <Navigate to="/autori" replace />

  const books = (author.worksHere || []).map(getBookBySlug).filter(Boolean)

  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link to="/autori" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Zpět na autory
        </Link>

        <div className="mt-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">{author.name}</h1>
              <p className="mt-2 text-gray-400">{author.lifespan}</p>
            </div>
            <AddToListMenu item={{ type: 'author', slug: author.slug }} />
          </div>

          {books.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {books.map((book) => (
                <Link
                  key={book.slug}
                  to={`/knihy/${book.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300 hover:border-white/25"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  {book.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 flex gap-2 border-b border-white/10">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 border-b-2 px-3 py-3 text-sm font-medium transition-colors ${
                tab === id ? 'border-fuchsia-400 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        {tab === 'profil' && (
          <div className="mt-8 flex flex-col gap-5">
            <Section title="Životopis">
              {author.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Section>

            <Section title="Další významná díla">
              <ul className="list-inside list-disc space-y-1">
                {author.otherWorks.map((work) => (
                  <li key={work}>{work}</li>
                ))}
              </ul>
            </Section>

            <Section title="Zařazení">
              <p>{author.literaryPeriod}</p>
              <p className="text-gray-500">{author.context}</p>
            </Section>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-xs text-gray-500">
              <p className="mb-2 font-medium text-gray-400">Zdroje</p>
              <ul className="space-y-1">
                {author.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noreferrer" className="hover:text-gray-300 hover:underline">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {tab === 'kviz' && (
          <div className="mt-8">
            <Quiz key={author.slug} questions={author.quiz} />
          </div>
        )}

        {tab === 'karticky' && (
          <div className="mt-8">
            <Flashcards key={author.slug} cards={author.flashcards} />
          </div>
        )}
      </div>
    </div>
  )
}
