import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Menu, X } from 'lucide-react'

const LINKS = [
  { to: '/', label: 'Domů', end: true },
  { to: '/knihy', label: 'Knihy' },
  { to: '/autori', label: 'Autoři' },
  { to: '/seznamy', label: 'Seznamy' },
  { to: '/o-projektu', label: 'O projektu' },
]

function NavItem({ to, label, end, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `relative px-3 py-2 text-sm font-medium transition-colors ${
          isActive ? 'text-white' : 'text-gray-400 hover:text-white'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {label}
          {isActive && (
            <motion.span
              layoutId="nav-underline"
              className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-amber-300"
            />
          )}
        </>
      )}
    </NavLink>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0c10]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink to="/" className="flex items-center gap-2 text-white">
          <BookOpen className="h-6 w-6 text-fuchsia-400" />
          <span className="text-lg font-semibold tracking-tight">
            Knihy <span className="text-gradient">na maturitu</span>
          </span>
        </NavLink>

        <div className="hidden items-center gap-1 sm:flex">
          {LINKS.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
        </div>

        <button
          className="inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:bg-white/5 sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Přepnout menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 sm:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {LINKS.map((link) => (
                <NavItem key={link.to} {...link} onClick={() => setOpen(false)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
