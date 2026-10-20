import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { profile } from '../data/content.js'
import { Logo } from './Nav.jsx'

const facts = [
  ['ubicación', 'Portoviejo, Manabí — EC'],
  ['formación', 'Ingeniería de Software — UTM'],
  ['senescyt', '1009-2026-3425563'],
  ['idiomas', 'Español · Inglés básico–intermedio'],
  ['enfoque', 'Sistemas empresariales y SaaS'],
]

/* Credencial con inclinación 3D que sigue al puntero (se queda quieta en táctil y con movimiento reducido) */
export default function Credential() {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const spring = { stiffness: 150, damping: 18, mass: 0.6 }
  const rotateX = useSpring(useTransform(y, [0, 1], [7, -7]), spring)
  const rotateY = useSpring(useTransform(x, [0, 1], [-9, 9]), spring)
  const glareX = useTransform(x, [0, 1], [0, 100])
  const glareY = useTransform(y, [0, 1], [0, 100])
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.07), transparent 60%)`

  function onMove(e) {
    if (e.pointerType !== 'mouse') return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width)
    y.set((e.clientY - r.top) / r.height)
  }
  function onLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <div style={{ perspective: 1200 }}>
      <motion.div
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative overflow-hidden rounded-2xl border border-line-2 bg-panel shadow-[0_40px_100px_-50px_rgba(0,0,0,0.9)]"
      >
        <motion.div className="pointer-events-none absolute inset-0 z-10" style={{ background: glare }} />

        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <span className="font-mono text-[0.6875rem] tracking-wide text-muted">CREDENCIAL · ING. SOFTWARE</span>
          <Logo />
        </div>

        <div className="grid grid-cols-[minmax(0,9.5rem)_1fr] gap-5 p-5 sm:grid-cols-[minmax(0,11rem)_1fr]">
          <div className="relative self-start overflow-hidden rounded-lg border border-line bg-bg">
            <img
              src="/assets/img/perfil/janerson.webp"
              alt={`Fotografía de ${profile.name}`}
              width="600"
              height="750"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-panel/70 to-transparent" />
          </div>

          <div className="flex min-w-0 flex-col">
            <p className="font-mono text-[0.6875rem] text-dim">nombre</p>
            <p className="mt-1 text-lg leading-tight font-semibold tracking-tight">
              Janerson Leonel
              <br />
              Arrunategui Moreira
            </p>
            <p className="mt-3 font-mono text-[0.6875rem] text-dim">cargo</p>
            <p className="mt-1 text-sm text-fg-2">Ingeniero de Software · Full Stack</p>
            <p className="mt-1 text-sm text-fg-2">Fundador de APÁRTALO</p>

            <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-ok/30 bg-ok/10 px-2.5 py-1 font-mono text-[0.6875rem] text-ok">
              <span className="h-1.5 w-1.5 rounded-full bg-ok" />
              Disponible
            </span>
          </div>
        </div>

        <dl className="border-t border-line">
          {facts.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line/70 px-5 py-2.5 last:border-b-0">
              <dt className="font-mono text-xs leading-6 text-dim">{k}</dt>
              <dd className="text-sm leading-6 text-fg-2">{v}</dd>
            </div>
          ))}
        </dl>

        {/* Franja inferior tipo código de barras, generada con CSS */}
        <div className="flex items-center justify-between gap-4 border-t border-line bg-bg-2 px-5 py-3">
          <span
            aria-hidden="true"
            className="h-6 flex-1 opacity-40"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, #b4b6bb 0 1px, transparent 1px 3px, #b4b6bb 3px 5px, transparent 5px 6px, #b4b6bb 6px 7px, transparent 7px 10px)',
            }}
          />
          <span className="font-mono text-[0.6875rem] text-dim">JA-2026</span>
        </div>
      </motion.div>
    </div>
  )
}
