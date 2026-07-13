import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Brain, Layers, Quote } from 'lucide-react'
import { getBookBySlug } from '../data/books/index.js'
import Quiz from '../components/Quiz.jsx'
import Flashcards from '../components/Flashcards.jsx'

function Section({ number, title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/20 to-amber-400/20 text-xs font-semibold text-fuchsia-300">
          {number}
        </span>
        <h2 className="font-medium text-white">{title}</h2>
      </div>
      <div className="space-y-3 text-sm leading-relaxed text-gray-400">{children}</div>
    </motion.section>
  )
}

const TABS = [
  { id: 'rozbor', label: 'Rozbor', icon: BookOpen },
  { id: 'kviz', label: 'Kvíz', icon: Brain },
  { id: 'karticky', label: 'Kartičky', icon: Layers },
]

export default function BookDetail() {
  const { slug } = useParams()
  const book = getBookBySlug(slug)
  const [tab, setTab] = useState('rozbor')

  if (!book) return <Navigate to="/knihy" replace />

  return (
    <div className="px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <Link to="/knihy" className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Zpět na knihy
        </Link>

        <div className="mt-6">
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">{book.title}</h1>
          {book.originalTitle && (
            <p className="mt-1 text-gray-500">Originál: {book.originalTitle}</p>
          )}
          <p className="mt-2 text-gray-400">
            {book.authorSlug ? (
              <Link to={`/autori/${book.authorSlug}`} className="hover:text-white hover:underline">
                {book.author}
              </Link>
            ) : (
              book.author
            )}{' '}
            · {book.year}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {[book.basics.literaryKind, book.basics.literaryGenre].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
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

        {tab === 'rozbor' && (
          <div className="mt-8 flex flex-col gap-5">
            <Section number={1} title="Základní údaje o díle">
              <p><span className="text-gray-300">Literární druh:</span> {book.basics.literaryKind}</p>
              <p><span className="text-gray-300">Literární žánr:</span> {book.basics.literaryGenre}</p>
              <p><span className="text-gray-300">Literární směr / období:</span> {book.basics.literaryPeriod}</p>
              <p className="text-gray-500">{book.basics.note}</p>
            </Section>

            <Section number={2} title="Informace o autorovi">
              <p><span className="text-gray-300">{book.author}</span> ({book.authorInfo.lifespan})</p>
              {book.authorInfo.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="text-gray-300">Další významná díla:</p>
              <ul className="list-inside list-disc space-y-1">
                {book.authorInfo.otherWorks.map((work) => (
                  <li key={work}>{work}</li>
                ))}
              </ul>
              <p className="text-gray-500">{book.authorInfo.context}</p>
            </Section>

            <Section number={3} title="Téma a hlavní myšlenka">
              <p>{book.theme.summary}</p>
              <p>{book.theme.mainIdea}</p>
            </Section>

            <Section number={4} title="Děj">
              <ol className="list-inside list-decimal space-y-2">
                {book.plot.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </Section>

            <Section number={5} title="Postavy">
              <div className="grid gap-4 sm:grid-cols-2">
                {book.characters.map((c) => (
                  <div key={c.name} className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                    <p className="font-medium text-gray-200">{c.name}</p>
                    <p className="mt-1 text-sm text-gray-500">{c.desc}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section number={6} title="Kompozice">
              <p>{book.composition}</p>
            </Section>

            <Section number={7} title="Vypravěč a způsob vyprávění">
              <p>{book.narrator}</p>
            </Section>

            <Section number={8} title="Jazyk a styl">
              <p>{book.styleLanguage}</p>
            </Section>

            <Section number={9} title="Ukázka z textu">
              <blockquote className="border-l-2 border-fuchsia-400/50 pl-4 italic text-gray-300 whitespace-pre-line">
                <Quote className="mb-2 h-4 w-4 text-fuchsia-400" />
                {book.excerpt.quote}
              </blockquote>
              <p className="text-gray-500">{book.excerpt.source}</p>
              <p>{book.excerpt.note}</p>
            </Section>

            <Section number={10} title="Kontext">
              <ul className="list-inside list-disc space-y-2">
                {book.context.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </Section>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-xs text-gray-500">
              <p className="mb-2 font-medium text-gray-400">Zdroje</p>
              <ul className="space-y-1">
                {book.sources.map((s) => (
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
            <Quiz key={book.slug} questions={book.quiz} />
          </div>
        )}

        {tab === 'karticky' && (
          <div className="mt-8">
            <Flashcards key={book.slug} cards={book.flashcards} />
          </div>
        )}
      </div>
    </div>
  )
}
