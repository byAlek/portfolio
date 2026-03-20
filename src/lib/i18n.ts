import Cookies from 'js-cookie'

const LOCALES = ['pt-br', 'en', 'es'] as const

type Locale = (typeof LOCALES)[number]

const DEFAULT_LOCALE: Locale = 'pt-br'

const languages: Record<Locale, string> = {
  'pt-br': 'Português',
  en: 'English',
  es: 'Español',
}

function setLanguageCookie(locale: Locale) {
  Cookies.set('language', locale, { expires: 30, path: '/' })
}

export { DEFAULT_LOCALE, LOCALES, languages, setLanguageCookie, type Locale }
