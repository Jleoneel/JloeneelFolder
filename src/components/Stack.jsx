import { useI18n } from '../i18n/index.jsx'
import SectionHeader from './SectionHeader.jsx'
import Reveal from './Reveal.jsx'

const icons = import.meta.glob('../assets/stack/*.svg', { eager: true, query: '?url', import: 'default' })
const iconUrl = (slug) => icons[`../assets/stack/${slug}.svg`]
// Íconos oscuros en devicon: se pasan a blanco sobre fondo oscuro
const mono = new Set(['express', 'github', 'railway', 'prisma', 'django', 'mysql'])

export default function Stack() {
  const { t, c } = useI18n()
  return (
    <section id="stack" className="scroll-mt-14 border-t border-line py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          index="02"
          label={t.stack.label}
          title={t.stack.title}
          aside={t.stack.aside}
        />

        <div className="overflow-hidden rounded-xl border border-line">
          {c.stack.map((group, gi) => (
            <Reveal key={group.group} delay={gi * 0.03}>
              <div className={`grid md:grid-cols-[13rem_1fr] ${gi ? 'border-t border-line' : ''}`}>
                <div className="flex items-center gap-3 border-b border-line bg-bg-2 px-5 py-4 md:border-r md:border-b-0">
                  <span className="font-mono text-xs text-dim">{String(gi + 1).padStart(2, '0')}</span>
                  <h3 className="text-sm font-medium">{group.group}</h3>
                </div>
                <ul className="-mr-px -mb-px grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {group.items.map(([name, slug]) => (
                    <li
                      key={name}
                      className="group flex items-center gap-3 border-r border-b border-line/60 px-5 py-4 transition-colors hover:bg-panel"
                    >
                      <img
                        src={iconUrl(slug)}
                        alt=""
                        width="20"
                        height="20"
                        loading="lazy"
                        className={`h-5 w-5 transition duration-300 group-hover:scale-110 ${
                          mono.has(slug) ? 'brightness-0 invert opacity-85' : 'saturate-[.8] group-hover:saturate-100'
                        }`}
                      />
                      <span className="text-sm text-fg-2 transition-colors group-hover:text-fg">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
            <span className="font-mono text-xs leading-5 text-dim">{t.stack.aiLabel}</span>
            {t.stack.ai}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
