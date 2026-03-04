import type { ComponentProps, Ref } from 'preact'
import { forwardRef } from 'preact/compat'
import { Slot } from 'radix-ui'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'focus-ring ring-ring/50 text-foreground aria-invalid:ring-destructive/50 aria-invalid:border-destructive inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all outline-none select-none hover:scale-105 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md/30',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm/20 hover:ring-2',
        outline: 'bg-secondary/30 hover:bg-accent hover:text-accent-foreground border shadow-xs/20',
        ghost: 'hover:bg-accent hover:text-accent-foreground hover:shadow-xs/20',
        destructive:
          'bg-destructive hover:bg-destructive/90 focus-visible:ring-destructive/50 text-white shadow-md/30',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: "h-8 gap-1 px-4 text-xs [&_svg:not([class*='size-'])]:size-3",
        default: "h-10 px-6 [&_svg:not([class*='size-'])]:size-4",
        lg: "h-12 px-8 text-base [&_svg:not([class*='size-'])]:size-5",
        xl: "h-13 px-9 text-lg sm:h-14 lg:h-15 [&_svg:not([class*='size-'])]:size-5",

        'icon-sm': "aspect-square size-8 [&_svg:not([class*='size-'])]:size-3",
        icon: "aspect-square size-10 [&_svg:not([class*='size-'])]:size-4",
        'icon-lg': "aspect-square size-12 [&_svg:not([class*='size-'])]:size-5",
        'icon-xl':
          "aspect-square size-13 text-lg sm:size-14 lg:size-15 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

type Props = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }: Props, ref: Ref<HTMLButtonElement>) => {
    const Comp = asChild ? Slot.Root : 'button'

    return (
      <Comp
        data-slot="button"
        data-size={size}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
        ref={ref}
      />
    )
  }
)

export { Button, buttonVariants }
