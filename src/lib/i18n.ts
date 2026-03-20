import { signal } from '@preact/signals'
import Cookies from 'js-cookie'

const LOCALES = ['pt-br', 'en', 'es'] as const

type Locale = (typeof LOCALES)[number]

const DEFAULT_LOCALE: Locale = 'pt-br'

const locale = signal<Locale>(DEFAULT_LOCALE)

const languages: Record<Locale, string> = {
  'pt-br': 'Português',
  en: 'English',
  es: 'Español',
}

function setLanguageCookie(locale: Locale) {
  Cookies.set('language', locale, { expires: 30, path: '/' })
}

export { DEFAULT_LOCALE, languages, locale, LOCALES, setLanguageCookie, type Locale }
