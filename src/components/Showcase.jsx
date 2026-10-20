import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Counter from 'yet-another-react-lightbox/plugins/counter'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import { Maximize2 } from 'lucide-react'
import BrowserFrame from './BrowserFrame.jsx'

export function useLightbox(items) {
  const [index, setIndex] = useState(-1)
  const node = (
    <Lightbox
      open={index >= 0}
      index={index}
      close={() => setIndex(-1)}
      slides={items.map((i) => ({ src: i.src, description: i.title }))}
      plugins={[Captions, Counter, Zoom]}
      controller={{ closeOnBackdropClick: true }}
    />
  )
  return [setIndex, node]
}

/* Capturas en un marco de navegador, con pestañas para recorrer el sistema */
export default function Showcase({ items, label }) {
  const [active, setActive] = useState(0)
  const [open, lightbox] = useLightbox(items)
  if (!items?.length) return null
  const current = items[active]

  return (
    <div>
      <BrowserFrame
        label={`${label} — ${current.tab ?? current.title}`}
        actions={
          <button
            type="button"
            onClick={() => open(active)}
            className="flex h-6 w-6 items-center justify-center rounded text-muted transition-colors hover:bg-panel-2 hover:text-fg"
            aria-label="Ver en pantalla completa"
          >
            <Maximize2 size={13} strokeWidth={1.75} />
          </button>
        }
      >
        <button
          type="button"
          onClick={() => open(active)}
          className="relative block aspect-[16/10] w-full overflow-hidden bg-bg-2"
          aria-label={`Ampliar: ${current.title}`}
        >
          <AnimatePresence initial={false} mode="popLayout">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top"
              initial={{ opacity: 0, scale: 1.01 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.2, 0.7, 0.1, 1] }}
            />
          </AnimatePresence>
        </button>
      </BrowserFrame>

      <div className="mt-3 flex items-start justify-between gap-4">
        <p className="min-h-10 text-sm leading-snug text-muted">{current.title}</p>
        <span className="shrink-0 font-mono text-xs text-dim">
          {String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </span>
      </div>

      <div role="tablist" className="no-scrollbar -mx-1 mt-3 flex gap-1 overflow-x-auto px-1">
        {items.map((item, i) => (
          <button
            key={item.src}
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-md border px-3 py-1.5 font-mono text-xs transition-colors ${
              i === active
                ? 'border-line-2 bg-panel-2 text-fg'
                : 'border-transparent text-muted hover:border-line hover:text-fg-2'
            }`}
          >
            {item.tab ?? item.title}
          </button>
        ))}
      </div>
      {lightbox}
    </div>
  )
}
