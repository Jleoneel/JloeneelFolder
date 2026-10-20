import { ArrowUpRight, BadgeCheck } from 'lucide-react'
import { useI18n } from '../i18n/index.jsx'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

const initials = (name) =>
  name
    .replace(/^Ing\.\s*/, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

function Card({ item }) {
  const { t, c } = useI18n()
  const r = t.references
  return (
    <figure className="flex h-full min-w-0 flex-col rounded-xl border border-line bg-panel p-6 md:p-7">
      <span aria-hidden="true" className="font-mono text-3xl leading-none text-accent">
        “
      </span>
      <blockquote className="mt-3 text-lg leading-snug tracking-[-0.01em] text-fg">
        {item.quote}
      </blockquote>
      {item.extra && <p className="mt-4 text-sm leading-relaxed text-fg-2">{item.extra}</p>}
      {r.translated && <p className="mt-3 font-mono text-[0.6875rem] text-dim">{r.translated}</p>}

      <figcaption className="mt-auto pt-7">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-2 bg-bg-2 font-mono text-xs text-fg-2">
            {initials(item.author)}
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-medium">{item.author}</span>
            <span className="block text-xs leading-snug text-muted">
              {item.position} · {item.org}
            </span>
          </span>
        </div>
        <p className="mt-5 grid grid-cols-[auto_1fr] gap-3 border-t border-line pt-4 text-xs leading-relaxed text-muted">
          <span className="font-mono text-dim">{r.built}</span>
          <span>{item.built}</span>
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-mono text-[0.6875rem]">
          <span className="inline-flex items-center gap-1.5 text-dim">
            <BadgeCheck size={13} className="text-ok" />
            {r.source} · {item.date}
          </span>
          <a
            href={c.profile.certifications}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-fg-2 transition-colors hover:text-fg"
          >
            {r.view} <ArrowUpRight size={12} />
          </a>
        </div>
      </figcaption>
    </figure>
  )
}

export default function References() {
  const { t, c } = useI18n()
  return (
    <section id="referencias" className="scroll-mt-14 border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeader index="04" label={t.references.label} title={t.references.title} aside={t.references.aside} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {c.testimonials.map((item, i) => (
            <Reveal key={item.id} delay={0.06 * i} className={`min-w-0 ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
              <Card item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
