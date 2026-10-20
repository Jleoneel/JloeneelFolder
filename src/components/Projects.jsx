import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { useI18n } from '../i18n/index.jsx'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'
import Showcase, { useLightbox } from './Showcase.jsx'

const statusColor = { sith: 'bg-warn', caba: 'bg-warn', iess: 'bg-dim' }

function Status({ id, status }) {
  const color = statusColor[id] ?? 'bg-ok'
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-2.5 py-1 font-mono text-[0.6875rem] text-fg-2">
      <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
      {status}
    </span>
  )
}

function Tags({ items }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((s) => (
        <li key={s} className="rounded-md border border-line bg-bg-2 px-2 py-1 font-mono text-[0.6875rem] text-fg-2">
          {s}
        </li>
      ))}
    </ul>
  )
}

function Highlights({ items, columns = false }) {
  return (
    <ol className={columns ? 'grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2' : 'space-y-0'}>
      {items.map((h, i) => (
        <li
          key={i}
          className={
            columns
              ? `flex gap-4 bg-bg p-5 text-sm leading-relaxed text-fg-2 ${
                  i === items.length - 1 && items.length % 2 ? 'md:col-span-2' : ''
                }`
              : 'flex gap-4 border-t border-line py-3.5 text-[0.95rem] leading-relaxed text-fg-2'
          }
        >
          <span className="pt-0.5 font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
          <span>{h}</span>
        </li>
      ))}
    </ol>
  )
}

function ProjectHeader({ p, n }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-line pb-5">
      <span className="font-mono text-sm text-dim">{String(n).padStart(2, '0')}</span>
      <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">{p.name}</h3>
      <span className="font-mono text-xs text-muted">{p.kicker}</span>
      <span className="flex flex-1 items-center justify-end gap-3">
        <span className="hidden font-mono text-xs text-dim sm:inline">{p.period}</span>
        <Status id={p.id} status={p.status} />
      </span>
    </div>
  )
}

/* Flujo real de WhatsApp en teléfonos */
function Phones({ items }) {
  const [open, lightbox] = useLightbox(items)
  return (
    <>
      <ol className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-6 md:px-0">
        {items.map((item, i) => (
          <li key={item.src} className="w-[48vw] shrink-0 snap-start sm:w-[30vw] md:w-auto">
            <button type="button" onClick={() => open(i)} className="group block w-full text-left" aria-label={item.title}>
              <span className="flex aspect-[9/19] items-center justify-center">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="max-h-full w-full object-contain transition-transform duration-500 group-hover:-translate-y-1"
                />
              </span>
              <span className="mt-3 flex gap-2.5 text-xs leading-snug text-muted transition-colors group-hover:text-fg-2">
                <span className="font-mono text-accent">{String(i + 1).padStart(2, '0')}</span>
                {item.title}
              </span>
            </button>
          </li>
        ))}
      </ol>
      {lightbox}
    </>
  )
}

function Featured({ p }) {
  const { t, c } = useI18n()
  return (
    <article id={p.id} className="scroll-mt-20">
      <Reveal>
        <ProjectHeader p={p} n={1} />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <Reveal>
            <p className="text-2xl leading-snug font-medium tracking-[-0.02em] text-balance md:text-[1.75rem]">{p.headline}</p>
            <p className="mt-5 leading-relaxed text-fg-2">{p.summary}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <dl className="mt-8 grid grid-cols-3 overflow-hidden rounded-xl border border-line">
              {p.metrics.map(([v, l], i) => (
                <div key={l} className={`bg-panel/50 p-4 ${i ? 'border-l border-line' : ''}`}>
                  <dt className="sr-only">{l}</dt>
                  <dd>
                    <span className="block text-2xl font-semibold tracking-tight tabular-nums md:text-3xl">{v}</span>
                    <span className="mt-1 block text-xs leading-snug text-muted">{l}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <Tags items={p.stack} />
          </Reveal>
          <Reveal delay={0.12} className="mt-8 flex flex-wrap gap-3">
            <a
              href={c.apartalo.bot}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-white"
            >
              <MessageCircle size={15} />
              {t.projects.tryBot}
            </a>
            <a
              href={c.apartalo.site}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line-2 px-4 py-2.5 text-sm font-medium text-fg-2 transition-colors hover:border-muted hover:text-fg"
            >
              {t.projects.visitSite}
              <ArrowUpRight size={15} />
            </a>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="min-w-0 lg:col-span-7">
          <Showcase items={p.screens} label="APÁRTALO" />
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h4 className="text-lg font-medium tracking-tight">{t.projects.howTitle}</h4>
          <span className="font-mono text-xs text-dim">{t.projects.howNote}</span>
        </div>
        <Phones items={p.phones} />
      </Reveal>

      <Reveal className="mt-14">
        <h4 className="mb-6 text-lg font-medium tracking-tight">{t.projects.decisions}</h4>
        <Highlights items={p.highlights} columns />
      </Reveal>
    </article>
  )
}

function Entry({ p, n, flip }) {
  const { t } = useI18n()
  return (
    <article id={p.id} className="scroll-mt-20">
      <Reveal>
        <ProjectHeader p={p} n={n} />
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className={`min-w-0 lg:col-span-5 ${flip ? 'lg:order-2' : ''}`}>
          <Reveal>
            <p className="text-xl leading-snug font-medium tracking-[-0.02em] text-balance md:text-2xl">{p.headline}</p>
            <p className="mt-4 leading-relaxed text-fg-2">{p.summary}</p>
          </Reveal>
          {p.pull && (
            <Reveal delay={0.05}>
              <p className="mt-6 border-l-2 border-accent pl-4 text-[0.95rem] text-fg">{p.pull}</p>
            </Reveal>
          )}
          <Reveal delay={0.08} className="mt-7">
            <Highlights items={p.highlights} />
          </Reveal>
          <Reveal delay={0.1} className="mt-6">
            <dl className="mb-4 grid grid-cols-[5rem_1fr] gap-y-1 font-mono text-xs">
              <dt className="text-dim">{t.projects.role}</dt>
              <dd className="text-fg-2">{p.role}</dd>
              {p.deploy && (
                <>
                  <dt className="text-dim">{t.projects.deploy}</dt>
                  <dd className="text-fg-2">{p.deploy}</dd>
                </>
              )}
            </dl>
            <Tags items={p.stack} />
          </Reveal>
        </div>
        <Reveal delay={0.1} className={`min-w-0 lg:col-span-7 ${flip ? 'lg:order-1' : ''}`}>
          <Showcase items={p.screens} label={p.name} />
        </Reveal>
      </div>
    </article>
  )
}

function Brief({ p, n }) {
  return (
    <article id={p.id} className="scroll-mt-20">
      <Reveal>
        <ProjectHeader p={p} n={n} />
        <div className="mt-6 grid gap-6 md:grid-cols-12">
          <p className="text-lg font-medium tracking-tight md:col-span-5">{p.headline}</p>
          <p className="leading-relaxed text-fg-2 md:col-span-7">{p.summary}</p>
        </div>
      </Reveal>
    </article>
  )
}

export default function Projects() {
  const { t, c } = useI18n()
  const [featured, ...rest] = c.projects
  return (
    <section id="proyectos" className="scroll-mt-14 border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="03"
          label={t.projects.label}
          title={t.projects.title}
          aside={t.projects.aside}
        />
        <div className="space-y-28 md:space-y-36">
          <Featured p={featured} />
          {rest.map((p, i) =>
            p.brief ? <Brief key={p.id} p={p} n={i + 2} /> : <Entry key={p.id} p={p} n={i + 2} flip={i % 2 === 1} />,
          )}
        </div>
      </div>
    </section>
  )
}
