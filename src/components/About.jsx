import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { stats } from '../data/content.js'
import Credential from './Credential.jsx'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

function Counter({ value, decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, { duration: 1.4, ease: [0.2, 0.7, 0.1, 1], onUpdate: setDisplay })
    return () => controls.stop()
  }, [inView, value])
  return <span ref={ref}>{display.toFixed(decimals)}</span>
}

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-14 border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeader index="01" label="Sobre mí" title="Del levantamiento de requerimientos al servidor en producción." />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-fg-2 lg:col-span-7">
            <Reveal>
              <p>
                He participado en todas las etapas del ciclo de desarrollo: requerimientos, diseño de bases de
                datos, desarrollo full stack, integración de servicios, despliegue y mantenimiento — para
                instituciones públicas, clientes privados y producto propio.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                Me interesan los problemas que no aparecen en una demo: dos cobros que llegan al mismo tiempo, una
                reserva duplicada bajo carga, un documento que necesita una firma con validez legal. Por eso he
                implementado firma digital con certificados del Banco Central del Ecuador, OCR de cédulas por cámara
                y control de concurrencia a nivel de base de datos.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-fg">
                Hoy desarrollo y opero <span className="font-medium">APÁRTALO</span>, un SaaS de reservas para
                barberías por WhatsApp con clientes de pago activos.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <Credential />
          </Reveal>
        </div>

        <dl className="mt-16 grid grid-cols-2 overflow-hidden rounded-xl border border-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              className={`bg-panel/40 p-6 md:p-8 ${i % 2 ? 'border-l border-line' : ''} ${i > 1 ? 'border-t border-line lg:border-t-0' : ''} ${
                i === 2 ? 'lg:border-l' : ''
              }`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-4xl font-semibold tracking-[-0.04em] tabular-nums md:text-5xl">
                  <Counter value={s.value} decimals={s.decimals} />
                  <span className="text-accent">{s.suffix}</span>
                </span>
                <span className="mt-3 block text-sm text-fg-2">{s.label}</span>
                <span className="mt-0.5 block font-mono text-xs text-dim">{s.note}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
