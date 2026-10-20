import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { useI18n } from '../i18n/index.jsx'
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
  const { t, c } = useI18n()
  return (
    <section id="sobre-mi" className="scroll-mt-14 border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeader index="01" label={t.about.label} title={t.about.title} />

        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-fg-2 lg:col-span-7">
            <Reveal>
              <p>{t.about.p1}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>{t.about.p2}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-fg">
                {t.about.p3a}
                <span className="font-medium">APÁRTALO</span>
                {t.about.p3b}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <Credential />
          </Reveal>
        </div>

        <dl className="mt-16 grid grid-cols-2 overflow-hidden rounded-xl border border-line lg:grid-cols-4">
          {c.stats.map((s, i) => (
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
