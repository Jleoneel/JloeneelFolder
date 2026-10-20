import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '../i18n/index.jsx'

// Pantalla más representativa de cada sistema (índice dentro de `screens`)
const cover = { 'perro-viejo': 2 }
const toItems = (projects) =>
  projects
    .filter((p) => p.screens?.length)
    .map((p) => ({ id: p.id, name: p.name, status: p.status, shot: p.screens[cover[p.id] ?? 0] }))

const INTERVAL = 4200
const DEPTH = 3 // tarjetas visibles detrás de la principal

function statusColor(id) {
  return id === 'sith' || id === 'caba' ? 'bg-warn' : 'bg-ok'
}

/* Capturas reales de cada sistema apiladas; la del frente rota sola y lleva a su caso */
export default function ScreenStack() {
  const { t, c } = useI18n()
  const items = toItems(c.projects)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = useReducedMotion()
  const n = items.length

  useEffect(() => {
    if (paused || reduce) return
    const t = setTimeout(() => setActive((a) => (a + 1) % n), INTERVAL)
    return () => clearTimeout(t)
  }, [active, paused, reduce, n])

  return (
    <div onPointerEnter={() => setPaused(true)} onPointerLeave={() => setPaused(false)}>
      <div className="relative mx-auto aspect-[16/11.4] w-full">
        {items.map((item, i) => {
          const pos = (i - active + n) % n
          const hidden = pos > DEPTH
          return (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              tabIndex={pos === 0 ? 0 : -1}
              aria-hidden={pos !== 0}
              className="absolute inset-x-0 bottom-0 block origin-top overflow-hidden rounded-xl border border-line-2 bg-panel shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)]"
              style={{ zIndex: n - pos, top: '13%', pointerEvents: pos === 0 ? 'auto' : 'none' }}
              initial={false}
              animate={{
                y: `${-pos * 6}%`,
                scale: 1 - pos * 0.06,
                opacity: hidden ? 0 : 1,
                filter: `brightness(${1 - pos * 0.2})`,
              }}
              transition={{ duration: reduce ? 0 : 0.7, ease: [0.2, 0.7, 0.1, 1] }}
            >
              <div className="flex h-8 items-center gap-3 border-b border-line bg-bg-2 px-3">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-line-2" />
                  <span className="h-2 w-2 rounded-full bg-line-2" />
                  <span className="h-2 w-2 rounded-full bg-line-2" />
                </span>
                <span className="truncate font-mono text-[0.6875rem] text-muted">
                  {item.name} — {item.shot.tab}
                </span>
              </div>
              <img
                src={item.shot.src}
                alt={item.shot.title}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="aspect-[16/10] w-full object-cover object-top"
              />
              {pos === 0 && (
                <span className="group absolute right-3 bottom-3 left-3 flex items-center justify-between gap-3 rounded-lg border border-line-2 bg-bg/85 px-3 py-2 backdrop-blur-md">
                  <span className="flex min-w-0 items-center gap-2.5">
                    <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusColor(item.id)}`} />
                    <span className="truncate text-sm font-medium">{item.name}</span>
                    <span className="hidden truncate font-mono text-[0.6875rem] text-muted sm:inline">{item.status}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-1 font-mono text-[0.6875rem] text-fg-2">
                    {t.hero.viewCase} <ArrowUpRight size={13} />
                  </span>
                </span>
              )}
            </motion.a>
          )
        })}
      </div>

      {/* Selector: cada proyecto con su barra de progreso */}
      <div className="mt-5 grid gap-2" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }} role="tablist" aria-label={t.hero.systems}>
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className="group text-left"
          >
            <span className="block h-0.5 overflow-hidden rounded-full bg-line">
              <motion.span
                key={`${active}-${paused}`}
                className="block h-full origin-left bg-fg-2"
                initial={{ scaleX: i < active ? 1 : 0 }}
                animate={{ scaleX: i < active ? 1 : i === active ? 1 : 0 }}
                transition={{ duration: i === active && !paused && !reduce ? INTERVAL / 1000 : 0, ease: 'linear' }}
              />
            </span>
            <span
              className={`mt-2 block truncate font-mono text-[0.6875rem] transition-colors ${
                i === active ? 'text-fg' : 'text-dim group-hover:text-fg-2'
              }`}
            >
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}
