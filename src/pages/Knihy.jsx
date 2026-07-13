import { BookOpen } from 'lucide-react'
import EmptyState from '../components/EmptyState.jsx'

export default function Knihy() {
  return (
    <EmptyState
      icon={BookOpen}
      title="Knihy se připravují"
      description="Rozbory jednotlivých literárních děl brzy přibydou. Zatím se stav webu buduje – vrať se později."
    />
  )
}
