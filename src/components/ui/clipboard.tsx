import { useRef, useState } from 'preact/hooks'

import { Copy } from '@/components/ui/icons'
import type { VariantProps } from 'class-variance-authority'
import { Check } from 'iconoir-react'
import { Button, buttonVariants } from './button'

export function Clipboard({
  variant = 'ghost',
  size = 'icon-sm',
  valueToCopy,
  label,
}: VariantProps<typeof buttonVariants> & { valueToCopy: string; label?: string }) {
  const [isCopied, setIsCopied] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>()

  function copyToClipboard() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    navigator.clipboard.writeText(valueToCopy)
    setIsCopied(true)

    timeoutRef.current = setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <Button
      onClick={copyToClipboard}
      size={size}
      variant={variant}
      className={`group-hover/clipboard-button:opacity-100 hover:opacity-100 focus:opacity-100 ${!isCopied ? 'lg:opacity-0' : ''}`.trim()}
    >
      {isCopied ? (
        <Check className="animate-in fade-in-0 spin-in-45" />
      ) : label ? (
        <span className="animate-in fade-in-0 text-xs">{label}</span>
      ) : (
        <Copy className="animate-in fade-in-0 spin-in-45" />
      )}
    </Button>
  )
}
