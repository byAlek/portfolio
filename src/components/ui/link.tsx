import type { ComponentProps, Ref } from 'preact'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'
import { ArrowUpRight } from 'iconoir-react'
import { forwardRef } from 'preact/compat'

type Props = ComponentProps<'a'> & VariantProps<typeof buttonVariants> & { customVariant?: 1 | 2 }

export const Link = forwardRef(
  (
    { variant, size, className, children, customVariant, ...props }: Props,
    ref: Ref<HTMLAnchorElement>
  ) => {
    const map = {
      1: (
        <a
          class={cn(
            buttonVariants({
              size: 'icon-lg',
              className: ['border-primary/70 relative w-fit shrink-0 gap-0 border', className],
            })
          )}
          {...props}
          ref={ref}
        >
          {children}
          <span>
            <ArrowUpRight className="text-secondary-foreground bg-secondary absolute -right-4 bottom-0 -ml-4 size-7 rounded-full border p-1.5" />
          </span>
        </a>
      ),
      2: <a />,
    } as const

    if (customVariant) {
      return map[customVariant]
    }

    return (
      <a className={cn(buttonVariants({ variant, size, className }))} {...props} ref={ref}>
        {children}
      </a>
    )
  }
)
