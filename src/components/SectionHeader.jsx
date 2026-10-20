import Reveal from './Reveal.jsx'

export default function SectionHeader({ index, label, title, aside }) {
  return (
    <header className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
      <Reveal className="md:col-span-7">
        <p className="eyebrow flex items-center gap-3">
          <span className="text-accent">{index}</span>
          <span className="h-px w-8 bg-line-2" />
          {label}
        </p>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.035em] text-balance md:text-5xl">{title}</h2>
      </Reveal>
      {aside && (
        <Reveal delay={0.05} className="md:col-span-5 md:pb-1">
          <p className="max-w-md text-[0.95rem] leading-relaxed text-muted md:ml-auto">{aside}</p>
        </Reveal>
      )}
    </header>
  )
}
