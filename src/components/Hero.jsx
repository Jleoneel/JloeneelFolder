import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownToLine, ArrowRight } from 'lucide-react'
import { profile } from '../data/content.js'
import ScreenStack from './ScreenStack.jsx'

const ease = [0.2, 0.7, 0.1, 1]
const fade = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
})

function useEcuadorTime() {
  const format = () =>
    new Intl.DateTimeFormat('es-EC', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'America/Guayaquil',
    }).format(new Date())
  const [time, setTime] = useState(format)
  useEffect(() => {
    const t = setInterval(() => setTime(format()), 30_000)
    return () => clearInterval(t)
  }, [])
  return time
}

export default function Hero() {
  const time = useEcuadorTime()

  return (
    <section id="top" className="relative overflow-hidden pt-14">
      <div className="grid-bg pointer-events-none absolute inset-0 -z-10" />
      <div className="container-x grid gap-14 py-20 md:py-28 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-6">
          <motion.p {...fade(0.05)} className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 py-1 pr-3 pl-2 font-mono text-xs text-fg-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ok" />
            Disponible para proyectos
            <span className="hidden text-dim sm:inline">·</span>
            <span className="hidden text-muted sm:inline">Portoviejo, EC {time}</span>
          </motion.p>

          <motion.h1
            {...fade(0.12)}
            className="mt-7 text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.98] font-semibold tracking-[-0.045em]"
          >
            Janerson
            <br />
            Arrunategui<span className="text-accent">.</span>
          </motion.h1>

          <motion.p {...fade(0.2)} className="mt-6 max-w-xl text-lg leading-relaxed text-fg-2 md:text-xl">
            Ingeniero de Software full stack. Diseño, construyo y despliego sistemas que operan en producción:
            en hospitales, laboratorios, negocios y en mi propio SaaS.
          </motion.p>

          <motion.div {...fade(0.28)} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-md bg-fg px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-white"
            >
              Ver proyectos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-md border border-line-2 px-5 py-3 text-sm font-medium text-fg-2 transition-colors hover:border-muted hover:text-fg"
            >
              <ArrowDownToLine size={16} strokeWidth={1.75} />
              Descargar CV
            </a>
          </motion.div>

          <motion.dl {...fade(0.36)} className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs">
            {[
              ['stack', 'React · Node.js · TypeScript'],
              ['datos', 'PostgreSQL · Prisma'],
              ['infra', 'Docker · Nginx · Oracle Cloud'],
            ].map(([k, v]) => (
              <div key={k} className="flex gap-2">
                <dt className="text-dim">{k}</dt>
                <dd className="text-fg-2">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div {...fade(0.4)} className="min-w-0 lg:col-span-6 lg:pl-4">
          <ScreenStack />
        </motion.div>
      </div>
    </section>
  )
}
