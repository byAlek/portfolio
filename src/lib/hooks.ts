import { useEffect, useState } from 'preact/hooks'

const mediaQueryMap = {
  sm: '40rem',
  md: '48rem',
  lg: '64rem',
  xl: '80rem',
  '2xl': '96rem',
} as const

export function useMediaQuery(breakpoint: keyof typeof mediaQueryMap) {
  const query = `(width >= ${mediaQueryMap[breakpoint]})`

  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches)

    media.addEventListener('change', listener)

    return () => {
      media.removeEventListener('change', listener)
    }
  }, [query])

  return matches
}
