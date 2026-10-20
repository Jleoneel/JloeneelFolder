import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Check, Send } from 'lucide-react'
import { useI18n } from '../i18n/index.jsx'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

const channelsFor = (profile, t) => [
  [t.channels.email, profile.email, `mailto:${profile.email}`],
  [t.channels.whatsapp, profile.phone, profile.whatsapp],
  [t.channels.linkedin, 'in/janerson-arrunategui', profile.linkedin],
  [t.channels.github, 'github.com/Jleoneel', profile.github],
  [t.channels.certs, t.certsValue, profile.certifications],
]

function Field({ label, name, type = 'text', required, textarea, autoComplete, placeholder }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <label className="block">
      <span className="text-sm text-fg-2">
        {label}
        {required && <span className="text-dim"> *</span>}
      </span>
      <Tag
        name={name}
        type={textarea ? undefined : type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        rows={textarea ? 5 : undefined}
        className="mt-2 block w-full resize-none rounded-md border border-line bg-bg px-3 py-2.5 text-[0.95rem] text-fg outline-none transition-colors placeholder:text-dim hover:border-line-2 focus:border-muted focus-visible:outline-none"
      />
    </label>
  )
}

export default function Contact() {
  const { t: all, c } = useI18n()
  const t = all.contact
  const profile = c.profile
  const channels = channelsFor(profile, t)
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!FORMSPREE_ID) {
      // Sin Formspree configurado: abrir el cliente de correo con el mensaje armado
      const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})${
        data.get('company') ? `, ${data.get('company')}` : ''
      }`
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(String(res.status))
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="scroll-mt-14 border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="06"
          label={t.label}
          title={t.title}
          aside={t.aside}
        />

        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <ul className="overflow-hidden rounded-xl border border-line">
              {channels.map(([label, value, href]) => (
                <li key={label} className="border-b border-line last:border-b-0">
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="group grid grid-cols-[6.5rem_1fr_auto] items-center gap-4 px-5 py-4 transition-colors hover:bg-panel"
                  >
                    <span className="font-mono text-xs text-dim">{label}</span>
                    <span className="truncate text-sm text-fg-2 group-hover:text-fg">{value}</span>
                    <ArrowUpRight size={15} className="text-dim transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="rounded-xl border border-line bg-panel p-6 md:p-8">
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="sent"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex min-h-[24rem] flex-col items-start justify-center"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ok/40 bg-ok/10 text-ok">
                      <Check size={18} />
                    </span>
                    <p className="mt-5 text-2xl font-semibold tracking-tight">{t.sentTitle}</p>
                    <p className="mt-2 text-fg-2">{t.sentBody}</p>
                    <button type="button" onClick={() => setStatus('idle')} className="link-underline mt-6 text-sm text-muted hover:text-fg">
                      {t.again}
                    </button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label={t.name} name="name" required autoComplete="name" placeholder={t.namePh} />
                      <Field label={t.email} name="email" type="email" required autoComplete="email" placeholder={t.emailPh} />
                    </div>
                    <Field label={t.company} name="company" autoComplete="organization" placeholder={t.companyPh} />
                    <Field label={t.message} name="message" required textarea placeholder={t.messagePh} />
                    <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                      <p className="text-sm" aria-live="polite">
                        {status === 'error' && (
                          <span className="text-accent">{t.error} {profile.email}.</span>
                        )}
                      </p>
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="inline-flex items-center gap-2 rounded-md bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-white disabled:opacity-60"
                      >
                        {status === 'sending' ? t.sending : t.send}
                        <Send size={14} />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
