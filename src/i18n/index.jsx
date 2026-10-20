import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import * as es from '../data/content.es.js'
import * as en from '../data/content.en.js'
import { ui } from './ui.js'

const content = { es, en }
const LANGS = ['es', 'en']
const KEY = 'lang'

function initialLang() {
  const param = new URLSearchParams(window.location.search).get('lang')
  if (LANGS.includes(param)) return param
  try {
    const saved = localStorage.getItem(KEY)
    if (LANGS.includes(saved)) return saved
  } catch {
    /* almacenamiento no disponible */
  }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const I18nContext = createContext(null)

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = ui[lang].meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', ui[lang].meta.description)
    try {
      localStorage.setItem(KEY, lang)
    } catch {
      /* almacenamiento no disponible */
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, t: ui[lang], c: content[lang] }), [lang])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext)
