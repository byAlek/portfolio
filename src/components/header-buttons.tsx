import { useSignal } from '@preact/signals'
import { useEffect, useState } from 'preact/hooks'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Dots, HalfCircle } from '@/components/ui/icons'
import { Link } from '@/components/ui/link'
import { Modal } from '@/components/ui/modal'
import { useMediaQuery } from '@/lib/hooks'
import { languages, setLanguageCookie } from '@/lib/i18n'
import { COLORS, getMode, themeColor, themeMode, toggleMode } from '@/lib/theme'
import { c } from '@/lib/utils'
import { Circle, HalfMoon, SunLight } from 'iconoir-react'

const themeModeIcon = {
  dark: <HalfMoon className="animate-in spin-in-90 fade-in-0" />,
  light: <SunLight className="animate-in spin-in-90 fade-in-0 stroke-2" />,
  auto: <HalfCircle className="animate-in spin-in-90 fade-in-0" />,
} as const

export const HeaderButtons = ({ locale }: { locale: string }) => {
  const [isMounted, setIsMounted] = useState(false)
  const themeColorModalOpen = useSignal(false)
  const languageModalOpen = useSignal(false)
  const lg = useMediaQuery('lg')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const Mobile = () => (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Dots />
          </Button>
        </DropdownMenuTrigger>
        {!lg && (
          <DropdownMenuContent align="end" className="rounded-5/3 p-3">
            <DropdownMenuItem
              asChild
              onSelect={(e: Event) => {
                e.preventDefault()
                toggleMode()
              }}
            >
              <Button variant="secondary" size="icon">
                {themeModeIcon[themeMode.value]}
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild onSelect={() => (themeColorModalOpen.value = true)}>
              <Button variant="secondary" size="icon">
                <Circle className="fill-primary! text-border!" />
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild onSelect={() => (languageModalOpen.value = true)}>
              <Button
                variant="secondary"
                size="icon"
                className="items-center justify-center text-xs uppercase"
              >
                {locale.split('-')[0]}
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>

      {isMounted && !lg && (
        <>
          <Modal
            open={themeColorModalOpen.value}
            onOpenChange={(open) => (themeColorModalOpen.value = open)}
          >
            <Modal.Content className="p-4">
              <div className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-background flex max-h-[90svh] max-w-xl flex-wrap justify-center gap-4 overflow-y-auto p-4">
                <div aria-hidden="true" className="pointer-events-none basis-full">
                  <Circle className="fill-primary! text-primary! bg-secondary/30 mx-auto size-10 rounded-full border p-2.5 shadow-xs/20" />
                </div>
                {COLORS.map((color) => (
                  <Button
                    key={color}
                    variant="outline"
                    className={c(
                      'text-primary capitalize',
                      `${color}-${themeMode.value === 'auto' ? getMode() : themeMode.value}`,
                      color === themeColor.value ? 'ring-4' : ''
                    )}
                    onClick={() => (themeColor.value = color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </Modal.Content>
          </Modal>
          <Modal
            open={languageModalOpen.value}
            onOpenChange={(open) => (languageModalOpen.value = open)}
          >
            <Modal.Content className="p-4">
              <div className="scrollbar-thin scrollbar-thumb-primary scrollbar-track-background flex max-h-[90svh] max-w-xl flex-wrap justify-center gap-4 overflow-y-auto p-4">
                {Object.entries(languages).map(([key, value]) => (
                  <Button
                    key={key}
                    asChild
                    variant="outline"
                    className={locale === key ? 'ring-4' : ''}
                  >
                    <a href={`/${key}`} onClick={() => setLanguageCookie(key)}>
                      {value}
                    </a>
                  </Button>
                ))}
              </div>
            </Modal.Content>
          </Modal>
        </>
      )}
    </>
  )
  const Desktop = () => (
    <div className="hidden gap-4 lg:flex">
      <Button variant="ghost" size="icon" onClick={toggleMode}>
        {isMounted ? themeModeIcon[themeMode.value] : <HalfCircle />}
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Circle className="fill-primary text-primary!" />
          </Button>
        </DropdownMenuTrigger>
        {isMounted && lg && (
          <DropdownMenuContent>
            {COLORS.map((color) => (
              <DropdownMenuItem
                key={color}
                asChild
                onSelect={(e: Event) => {
                  e.preventDefault()
                  themeColor.value = color
                }}
              >
                <Button
                  variant="ghost"
                  className={`text-primary hover:bg-primary hover:text-primary-foreground capitalize ${color}-${themeMode.value === 'auto' ? getMode() : themeMode.value} ${color === themeColor.value ? 'ring-4' : ''}`}
                >
                  {color}
                </Button>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        )}
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="text-xs uppercase">
            {locale.split('-')[0]}
          </Button>
        </DropdownMenuTrigger>
        {isMounted && lg && (
          <DropdownMenuContent>
            {Object.entries(languages).map(([key, value]) => (
              <DropdownMenuItem key={key} asChild onSelect={() => setLanguageCookie(key)}>
                <Link variant="ghost" href={`/${key}`} className={locale === key ? 'ring-4' : ''}>
                  {value}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  )
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  )
}
