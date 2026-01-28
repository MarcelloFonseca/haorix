'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { michroma } from '@/Fonts/Michroma'
import { Button } from '@/components/ui/button'
import { montserrat } from '@/Fonts/Montserrat'
import { Home, ArrowLeft, Sparkles } from 'lucide-react'

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 50, y: 50 })
  const [isGlitching, setIsGlitching] = useState<boolean>(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 3000)

    return () => clearInterval(glitchInterval)
  }, [])

  const eyeX = Math.min(Math.max((mousePosition.x - 50) / 5, -5), 5)
  const eyeY = Math.min(Math.max((mousePosition.y - 50) / 5, -5), 5)

  return (
    <div className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 ${montserrat.className}`}>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative mb-6">
        <span
          className={`${michroma.className} text-sm font-medium tracking-[0.3em] text-muted-foreground transition-all ${
            isGlitching ? 'translate-x-[2px] text-foreground' : ''
          }`}
        >
          HAORIX
        </span>
      </div>

      <div className="relative mb-8 select-none">
        <div
          className={`${michroma.className} flex items-center text-[100px] font-bold leading-none text-foreground sm:text-[160px] md:text-[200px] ${
            isGlitching ? 'animate-pulse' : ''
          }`}
        >
          <span className={isGlitching ? '-translate-x-1 text-muted-foreground' : ''}>4</span>

          <div className="relative mx-2 sm:mx-4">
            <div className="flex h-[80px] w-[80px] items-center justify-center rounded-2xl border-[6px] border-foreground sm:h-[130px] sm:w-[130px] sm:border-[10px] md:h-[160px] md:w-[160px] md:border-[12px]">
              <div className="relative h-8 w-8 rounded-full bg-foreground sm:h-12 sm:w-12 md:h-14 md:w-14">
                <div
                  className="absolute h-3 w-3 rounded-full bg-background sm:h-4 sm:w-4 md:h-5 md:w-5"
                  style={{
                    left: `calc(50% + ${eyeX}px)`,
                    top: `calc(50% + ${eyeY}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
                <div
                  className="absolute h-1 w-1 rounded-full bg-background/60 sm:h-1.5 sm:w-1.5"
                  style={{
                    left: `calc(35% + ${eyeX * 0.5}px)`,
                    top: `calc(35% + ${eyeY * 0.5}px)`,
                  }}
                />
              </div>
            </div>

            <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-zinc-900 dark:border-white" />
            <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-zinc-900 dark:border-white" />
            <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-zinc-900 dark:border-white" />
            <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-zinc-900 dark:border-white" />
          </div>

          <span className={isGlitching ? 'translate-x-1 text-muted-foreground' : ''}>4</span>
        </div>

        {isGlitching && (
          <>
            <div className={`${michroma.className} absolute inset-0 -translate-x-1 text-[100px] font-bold leading-none text-muted-foreground/30 sm:text-[160px] md:text-[200px]`}>
              <span className="invisible">4</span>
            </div>
            <div className={`${michroma.className} absolute inset-0 translate-x-1 text-[100px] font-bold leading-none text-zinc-500/30 sm:text-[160px] md:text-[200px]`}>
              <span className="invisible">4</span>
            </div>
          </>
        )}
      </div>

      <div className="mb-8 text-center">
        <h1 className={`${michroma.className} mb-3 text-2xl font-semibold text-foreground sm:text-3xl`}>
          Page introuvable
        </h1>
        <p className="max-w-md text-muted-foreground">
          Cette page n’existe pas (ou a été déplacée). Revenez à l’accueil ou retournez à la page précédente.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Button
          asChild
          size="lg"
          className={`${michroma.className} group bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200`}
        >
          <Link href="/">
            <Home className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Retour à l’accueil
          </Link>
        </Button>

        <Button asChild variant="outline" size="lg" className="group bg-transparent">
          <Link href="javascript:history.back()">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Page précédente
          </Link>
        </Button>
      </div>

      <div className="mt-12 flex items-center gap-2 text-sm text-muted-foreground">
        <Sparkles className="h-4 w-4 text-foreground" />
        <span>Erreur 404 — même nos dashboards ne l’ont pas vue venir</span>
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute h-96 w-96 rounded-full bg-zinc-900/10 dark:bg-white/10 blur-3xl"
          style={{
            left: `${mousePosition.x - 20}%`,
            top: `${mousePosition.y - 20}%`,
            transition: 'left 0.5s ease-out, top 0.5s ease-out',
          }}
        />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-muted/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-muted/20 blur-3xl" />

        <div className="absolute left-[10%] top-[20%] h-1 w-1 animate-pulse rounded-full bg-zinc-900 dark:bg-white" />
        <div className="absolute left-[80%] top-[30%] h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-900/60 dark:bg-white/60" style={{ animationDelay: '0.5s' }} />
        <div className="absolute left-[20%] top-[70%] h-1 w-1 animate-pulse rounded-full bg-zinc-900/40 dark:bg-white/40" style={{ animationDelay: '1s' }} />
        <div className="absolute left-[70%] top-[80%] h-1.5 w-1.5 animate-pulse rounded-full bg-zinc-900 dark:bg-white" style={{ animationDelay: '1.5s' }} />
        <div className="absolute left-[90%] top-[50%] h-1 w-1 animate-pulse rounded-full bg-zinc-900/60 dark:bg-white/60" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  )
}