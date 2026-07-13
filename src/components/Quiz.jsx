import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, RotateCcw } from 'lucide-react'

export default function Quiz({ questions }) {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const question = questions[index]
  const isLast = index === questions.length - 1

  function choose(optionIndex) {
    if (selected !== null) return
    setSelected(optionIndex)
    if (optionIndex === question.correctIndex) setScore((s) => s + 1)
  }

  function next() {
    if (isLast) {
      setDone(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
  }

  function restart() {
    setIndex(0)
    setSelected(null)
    setScore(0)
    setDone(false)
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
        <p className="text-sm text-gray-400">Výsledek</p>
        <p className="mt-2 text-3xl font-semibold text-white">
          {score} / {questions.length}
        </p>
        <button
          onClick={restart}
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium text-gray-200 hover:bg-white/5"
        >
          <RotateCcw className="h-4 w-4" />
          Zkusit znovu
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <p className="text-sm text-gray-500">
        Otázka {index + 1} / {questions.length}
      </p>
      <h3 className="mt-2 text-lg font-medium text-white">{question.question}</h3>

      <div className="mt-5 flex flex-col gap-2.5">
        {question.options.map((option, i) => {
          const isCorrect = i === question.correctIndex
          const isSelected = i === selected
          const showState = selected !== null

          let stateClasses = 'border-white/10 hover:border-white/25'
          if (showState && isCorrect) stateClasses = 'border-emerald-400/50 bg-emerald-400/10'
          else if (showState && isSelected && !isCorrect) stateClasses = 'border-red-400/50 bg-red-400/10'

          return (
            <button
              key={option}
              onClick={() => choose(i)}
              disabled={selected !== null}
              className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm text-gray-200 transition-colors ${stateClasses}`}
            >
              {option}
              {showState && isCorrect && <Check className="h-4 w-4 shrink-0 text-emerald-400" />}
              {showState && isSelected && !isCorrect && <X className="h-4 w-4 shrink-0 text-red-400" />}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 rounded-xl bg-white/5 p-4 text-sm text-gray-400"
        >
          {question.explanation}
        </motion.div>
      )}

      {selected !== null && (
        <button
          onClick={next}
          className="mt-5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-amber-400 px-5 py-2.5 text-sm font-medium text-black"
        >
          {isLast ? 'Zobrazit výsledek' : 'Další otázka'}
        </button>
      )}
    </div>
  )
}
