import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useI18n } from '../i18n/index.jsx'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

export default function Experience() {
  const { t, c } = useI18n()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })

  return (
    <section id="experiencia" className="scroll-mt-14 border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="05"
          label={t.experience.label}
          title={t.experience.title}
          aside={t.experience.aside}
        />

        <div className="grid gap-12 lg:grid-cols-12">
          <div ref={ref} className="relative lg:col-span-8">
            <span className="absolute top-2 bottom-2 left-[5px] w-px bg-line" />
            <motion.span
              className="absolute top-2 bottom-2 left-[5px] w-px origin-top bg-fg-2"
              style={{ scaleY: scrollYProgress }}
            />
            <ol className="space-y-2">
              {c.experience.map((item, i) => (
                <Reveal as="li" key={item.org} delay={i * 0.03} className="relative pl-9">
                  <span
                    className={`absolute top-[1.4rem] left-0 h-[11px] w-[11px] rounded-full border-2 ${
                      i === 0 ? 'border-accent bg-accent/20' : 'border-line-2 bg-bg'
                    }`}
                  />
                  <div className="rounded-xl border border-transparent p-4 transition-colors hover:border-line hover:bg-panel/60 md:p-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-lg font-medium tracking-tight">{item.org}</h3>
                      <span className="font-mono text-xs text-muted">{item.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-fg-2">
                      {item.role} <span className="text-dim">· {item.type}</span>
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.note}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-4">
            <Reveal className="lg:sticky lg:top-24">
              <p className="eyebrow mb-4">{t.experience.education}</p>
              {c.education.map((e) => (
                <div key={e.title} className="rounded-xl border border-line bg-panel p-5">
                  <p className="font-mono text-xs text-muted">{e.period}</p>
                  <h3 className="mt-3 text-lg font-medium tracking-tight">{e.title}</h3>
                  <p className="mt-1 text-sm text-fg-2">{e.org}</p>
                  <p className="mt-4 border-t border-line pt-4 font-mono text-xs text-dim">{e.note}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
