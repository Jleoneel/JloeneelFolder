import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowDownToLine } from 'lucide-react'
import { profile } from '../data/content.js'

export const sections = [
  ['sobre-mi', 'Sobre mí'],
  ['stack', 'Stack'],
  ['proyectos', 'Proyectos'],
  ['experiencia', 'Experiencia'],
  ['contacto', 'Contacto'],
]

function useActiveSection() {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const onScroll = () => window.scrollY < window.innerHeight * 0.5 && setActive(null)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])
  return active
}

export function Logo() {
  return (
    <span className="relative flex h-7 w-7 items-center justify-center rounded-md border border-line-2 bg-panel font-mono text-[0.6875rem] font-semibold">
      JA
      <span className="absolute -right-px -bottom-px h-2 w-2 rounded-br-md bg-accent" />
    </span>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open ? 'border-line bg-bg/80 backdrop-blur-xl' : 'border-transparent'
        }`}
      >
        <motion.div className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-accent/70" style={{ scaleX: progress }} />
        <nav className="container-x flex h-14 items-center justify-between" aria-label="Principal">
          <a href="#top" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <Logo />
            <span className="text-sm font-medium">Janerson Arrunategui</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {sections.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
                    active === id ? 'bg-panel-2 text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={profile.cv}
              download
              className="hidden items-center gap-2 rounded-md border border-line-2 px-3 py-1.5 text-sm text-fg-2 transition-colors hover:border-muted hover:text-fg sm:flex"
            >
              <ArrowDownToLine size={14} strokeWidth={1.75} />
              CV
            </a>
            <button
              type="button"
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-md border border-line lg:hidden"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className={`h-px w-4 bg-fg transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
              <span className={`h-px w-4 bg-fg transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg pt-20 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="container-x">
              {sections.map(([id, label], i) => (
                <motion.li
                  key={id}
                  className="border-b border-line"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.3 }}
                >
                  <a href={`#${id}`} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-4">
                    <span className="font-mono text-xs text-dim">0{i + 1}</span>
                    <span className="text-2xl font-medium tracking-tight">{label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container-x mt-8">
              <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-md bg-fg px-4 py-2.5 text-sm font-medium text-bg">
                <ArrowDownToLine size={15} strokeWidth={1.75} />
                Descargar CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
