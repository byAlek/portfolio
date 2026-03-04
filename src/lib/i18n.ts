import type { Locale } from '@/types/locale'
import Cookies from 'js-cookie'

export const defaultLocale: Locale = 'pt-br'

export const languages: Record<Locale, string> = {
  'pt-br': 'Português',
  en: 'English',
  es: 'Español',
}
export const locales = Object.keys(languages) as Locale[]

export function setLanguageCookie(data: string) {
  Cookies.set('language', data, { expires: 30, path: '/' })
}
