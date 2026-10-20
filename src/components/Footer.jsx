import { ArrowUp } from 'lucide-react'
import { profile } from '../data/content.js'
import { Logo } from './Nav.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-sm text-muted">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm text-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline hover:text-fg">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline hover:text-fg">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="link-underline hover:text-fg">
            Correo
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-md border border-line px-3 py-1.5 transition-colors hover:border-line-2 hover:text-fg"
          >
            Arriba <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  )
}
