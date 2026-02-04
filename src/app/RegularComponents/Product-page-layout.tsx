'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { michroma } from '@/Fonts/Michroma'
import { montserrat } from '@/Fonts/Montserrat'

export interface ProductFeature {
  icon: ReactNode
  title: string
  description: string
}

export interface ProductSpec {
  label: string
  value: string
}

export interface ProductPageProps {
  badge?: string
  title: string
  subtitle: string
  description: string
  features: ProductFeature[]
  specs: ProductSpec[]
  highlights: string[]
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  productImage?: string
}

export function ProductPageLayout({
  badge,
  title,
  subtitle,
  description,
  features,
  specs,
  highlights,
  ctaText = 'Demander une démo',
  ctaLink = '/demo',
  secondaryCtaText = 'En savoir plus',
  secondaryCtaLink = '#features',
  productImage,
}: ProductPageProps) {
  return (
    <div className={`flex min-h-screen flex-col bg-background ${montserrat.className}`}>
      <section className="relative overflow-hidden border-b border-border/30">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-16 md:flex-row md:py-24 lg:gap-20 lg:px-8">
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left">
            {badge && (
              <Badge
                variant="secondary"
                className={`${michroma.className} mb-4 px-3 py-1 text-xs font-medium uppercase tracking-wider`}
              >
                {badge}
              </Badge>
            )}

            <h1 className={`${michroma.className} text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight`}>
              {title}
            </h1>

            <p className="mt-4 text-xl font-medium text-zinc-900 dark:text-white">{subtitle}</p>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>

            <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Button
                asChild
                size="lg"
                className={`${michroma.className} gap-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200`}
              >
                <Link href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="bg-transparent">
                <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
              </Button>
            </div>
          </div>

          <div className="relative flex flex-1 items-center justify-center">
            <div className="relative aspect-square w-full max-w-md">
              <div className="absolute -inset-4 rounded-3xl bg-zinc-900/5 dark:bg-white/5" />
              <div className="absolute inset-0 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                {productImage ? (
                  <img
                    src={productImage || '/placeholder.svg'}
                    alt={title}
                    className="h-full w-full rounded-2xl object-cover object-center"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-muted">
                    <span className={`${michroma.className} text-5xl font-bold text-muted-foreground/20 sm:text-6xl`}>
                      HAORIX
                    </span>
                  </div>
                )}
              </div>

              <div className="absolute -left-2 -top-2 h-8 w-8 border-l-2 border-t-2 border-zinc-900 dark:border-white" />
              <div className="absolute -bottom-2 -right-2 h-8 w-8 border-b-2 border-r-2 border-zinc-900 dark:border-white" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-b border-border/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className={`${michroma.className} text-3xl font-bold tracking-tight text-foreground sm:text-4xl`}>
              Fonctionnalités principales
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez ce qui rend ce produit unique
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-900/10 text-foreground dark:bg-white/10">
                  <span className="h-6 w-6 [&>svg]:h-6 [&>svg]:w-6">{feature.icon}</span>
                </div>
                <h3 className={`${michroma.className} mb-2 text-lg font-semibold text-foreground leading-tight`}>
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className={`${michroma.className} mb-8 text-2xl font-bold tracking-tight text-foreground`}>
                Spécifications techniques
              </h2>

              <div className="divide-y divide-border rounded-xl border border-border bg-card">
                {specs.map((spec, index) => (
                  <div key={index} className="px-6 py-4">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                      <span className="text-sm text-muted-foreground">{spec.label}</span>
                      <span className={`${michroma.className} font-medium text-foreground sm:text-right break-words`}>
                        {spec.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className={`${michroma.className} mb-8 text-2xl font-bold tracking-tight text-foreground`}>
                Points forts
              </h2>

              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card px-8 py-16 text-center sm:px-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative">
              <h2 className={`${michroma.className} text-3xl font-bold tracking-tight text-foreground sm:text-4xl`}>
                Prêt à passer à l’action ?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Contactez notre équipe pour obtenir une démo et confirmer la meilleure configuration pour votre plancher de production.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className={`${michroma.className} gap-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200`}
                >
                  <Link href={ctaLink}>
                    {ctaText}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}