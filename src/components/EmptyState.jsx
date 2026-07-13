export default function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-4 py-32 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03]">
        <Icon className="h-7 w-7 text-fuchsia-300" />
      </div>
      <h1 className="text-2xl font-semibold text-white">{title}</h1>
      <p className="mt-3 text-gray-400">{description}</p>
    </div>
  )
}
