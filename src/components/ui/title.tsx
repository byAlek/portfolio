import type { ComponentChildren } from 'preact'

export const Title = ({
  variant = 1,
  className = '',
  render: Comp,
  children,
}: {
  variant?: 1
  className?: string
  render: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  children: ComponentChildren
}) => {
  const map = {
    1: <Comp className={`title-secondary italic ${className}`.trim()}>.../{children}...</Comp>,
  }
  return map[variant]
}
