import { effect, signal } from '@preact/signals'
import Cookies from 'js-cookie'

const COLORS = [
  'default',
  'ruby',
  'emerald',
  'sapphire',
  'amethyst',
  'amber',
  'rose',
  'cyan',
  'lime',
  'indigo',
  'nebula',
] as const

type Colors = (typeof COLORS)[number]
type Modes = 'light' | 'dark' | 'auto'
type ThemeCookie = { color: Colors; mode: Modes; autoMode: boolean }

const themeMode = signal<Modes>('auto')
const themeColor = signal<Colors>('default')

const map = {
  light: 'dark',
  dark: 'auto',
  auto: 'light',
} as const

function toggleMode() {
  themeMode.value = map[themeMode.value]
}

function getMode(): Modes {
  return document.documentElement.className.includes('dark') ? 'dark' : 'light'
}

function getThemeCookie(): ThemeCookie | null {
  const cookie = Cookies.get('theme')
  return cookie ? JSON.parse(cookie) : null
}

function setThemeCookie(data: ThemeCookie) {
  Cookies.set('theme', JSON.stringify(data), { expires: 30, path: '/' })
}

function applyTheme(color: Colors, mode: Modes, autoMode: boolean) {
  document.documentElement.className = `${color}-${mode}`
  setThemeCookie({ color, mode, autoMode })
}

function initTheme() {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
  console.log('entrou initTheme')

  if (!getThemeCookie()) {
    const mode = prefersDarkScheme.matches ? 'dark' : 'light'
    setThemeCookie({ color: 'default', mode, autoMode: true })
  }

  const cookie = getThemeCookie()!

  themeColor.value = cookie.color
  themeMode.value = cookie.autoMode ? 'auto' : cookie.mode

  effect(() => {
    if (themeMode.value === 'auto') {
      applyTheme(themeColor.value, prefersDarkScheme.matches ? 'dark' : 'light', true)

      function onChange(e: MediaQueryListEvent) {
        applyTheme(themeColor.value, e.matches ? 'dark' : 'light', true)
      }

      prefersDarkScheme.addEventListener('change', onChange)
      return () => prefersDarkScheme.removeEventListener('change', onChange)
    }

    applyTheme(themeColor.value, themeMode.value, false)
  })
}

export {
  COLORS,
  getMode,
  initTheme,
  themeColor,
  themeMode,
  toggleMode,
  type Colors,
  type Modes,
  type ThemeCookie,
}
