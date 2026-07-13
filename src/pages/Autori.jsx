import { Users } from 'lucide-react'
import EmptyState from '../components/EmptyState.jsx'

export default function Autori() {
  return (
    <EmptyState
      icon={Users}
      title="Autoři se připravují"
      description="Přehled spisovatelů se stručnými životopisy a zařazením do literárních období brzy přibyde."
    />
  )
}
