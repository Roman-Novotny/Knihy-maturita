import { motion } from 'framer-motion'
import { BookOpen, Layers, Sparkles } from 'lucide-react'

const POINTS = [
  {
    icon: BookOpen,
    title: 'Proč tenhle web vznikl',
    text: 'Příprava na ústní maturitu z literatury bývá roztříštěná do sešitů, PDF a různých webů. Cílem je mít vše přehledně na jednom místě – dílo, autora i procvičování.',
  },
  {
    icon: Layers,
    title: 'Co postupně přibude',
    text: 'Nejdřív základ webu, poté se budou postupně doplňovat jednotlivá díla a autoři – u každého kompletní rozbor, kvíz i kartičky na opakování.',
  },
  {
    icon: Sparkles,
    title: 'Moderní a jednoduché',
    text: 'Design cílí na rychlou orientaci a příjemné použití na mobilu i počítači, ať už se učíš týden nebo noc před zkouškou.',
  },
]

export default function OProjektu() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">O projektu</h1>
        <p className="mt-4 text-gray-400">
          Knihy na maturitu je pomůcka pro přípravu na ústní maturitní zkoušku z českého jazyka a literatury.
        </p>

        <div className="mt-12 space-y-8">
          {POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex gap-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                <point.icon className="h-5 w-5 text-fuchsia-300" />
              </div>
              <div>
                <h2 className="font-medium text-white">{point.title}</h2>
                <p className="mt-1 text-gray-400">{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
