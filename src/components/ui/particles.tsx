import { cn } from '@/lib/utils'
import type { ComponentProps } from 'preact'
import { useEffect, useRef } from 'preact/hooks'

interface Particle {
  x: number
  y: number
  dx: number
  dy: number
  size: number
  alpha: number
  targetAlpha: number
  translateX: number
  translateY: number
  magnetism: number
}

interface ParticlesProps extends ComponentProps<'div'> {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  size?: number
  vx?: number
  vy?: number
}

export const Particles = ({
  className = '',
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 4,
  vx = 0,
  vy = 0,
  ...props
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const particles = useRef<Particle[]>([])
  const mouse = useRef({ x: 0, y: 0 })
  const canvasSize = useRef({ w: 0, h: 0 })
  const rafID = useRef<number | null>(null)
  const currentColorRef = useRef<string>('#ffffff')
  const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return
      const rect = canvasRef.current.getBoundingClientRect()
      const w = canvasSize.current.w
      const h = canvasSize.current.h
      const x = e.clientX - rect.left - w / 2
      const y = e.clientY - rect.top - h / 2
      mouse.current.x = x
      mouse.current.y = y
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (!canvasRef.current) return
    context.current = canvasRef.current.getContext('2d')

    resizeCanvas()
    initParticles()
    animate()

    const handleResize = () => resizeCanvas()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (rafID.current != null) window.cancelAnimationFrame(rafID.current)
    }
  }, [])

  const resizeCanvas = () => {
    if (!canvasRef.current || !containerRef.current) return
    canvasSize.current.w = containerRef.current.offsetWidth
    canvasSize.current.h = containerRef.current.offsetHeight
    const canvas = canvasRef.current
    canvas.width = canvasSize.current.w * dpr
    canvas.height = canvasSize.current.h * dpr
    canvas.style.width = `${canvasSize.current.w}px`
    canvas.style.height = `${canvasSize.current.h}px`
    context.current?.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  const initParticles = () => {
    particles.current = Array.from({ length: quantity }, () => createParticle())
  }

  const createParticle = (): Particle => {
    const w = canvasSize.current.w
    const h = canvasSize.current.h
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
      size: size,
      alpha: 0,
      targetAlpha: Math.random() * 0.6 + 0.1,
      translateX: 0,
      translateY: 0,
      magnetism: 0.1 + Math.random() * 4,
    }
  }

  const clearCanvas = () => {
    context.current?.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
  }

  const drawParticle = (p: Particle) => {
    if (!context.current) return
    context.current.save()
    context.current.translate(p.translateX, p.translateY)
    context.current.globalAlpha = p.alpha
    context.current.fillStyle = currentColorRef.current
    context.current.fillRect(p.x - p.size / 2, p.y - p.size / 2, p.size, p.size)
    context.current.restore()
  }

  const animate = () => {
    if (containerRef.current) {
      currentColorRef.current = getComputedStyle(containerRef.current).color
    }

    clearCanvas()
    particles.current.forEach((p) => {
      const edgeDist = Math.min(p.x, canvasSize.current.w - p.x, p.y, canvasSize.current.h - p.y)
      const edgeFactor = Math.max(0, Math.min(edgeDist / 20, 1))
      p.alpha += (p.targetAlpha - p.alpha) * edgeFactor

      p.x += p.dx + vx
      p.y += p.dy + vy
      p.translateX += (mouse.current.x / (staticity / p.magnetism) - p.translateX) / ease
      p.translateY += (mouse.current.y / (staticity / p.magnetism) - p.translateY) / ease

      drawParticle(p)

      if (
        p.x < -p.size ||
        p.x > canvasSize.current.w + p.size ||
        p.y < -p.size ||
        p.y > canvasSize.current.h + p.size
      ) {
        Object.assign(p, createParticle())
      }
    })
    rafID.current = requestAnimationFrame(animate)
  }

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn('pointer-events-none', className)}
      {...props}
    >
      <canvas ref={canvasRef} className="animate-in fade-in-0 size-full duration-10000" />
    </div>
  )
}
