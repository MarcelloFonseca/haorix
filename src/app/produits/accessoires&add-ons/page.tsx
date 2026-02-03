'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useMemo, useRef, useState } from 'react'
import { michroma } from '@/Fonts/Michroma'
import { montserrat } from '@/Fonts/Montserrat'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Check, QrCode, Rss, BellRing, Cable, ChevronRight } from 'lucide-react'

interface Accessory {
  id: string
  icon: React.ReactNode
  name: string
  tagline: string
  description: string
  features: string[]
  specs: { label: string; value: string }[]
  badge?: string
  imageSrc: string
  imageAlt: string
}

const accessories: Accessory[] = [
  {
    id: 'qr-scanner',
    icon: <QrCode className="h-8 w-8" />,
    name: 'Lecteur Code-barres / QR',
    tagline: 'Scan rapide, exécution fluide',
    description:
      "Accélérez l'exécution au poste avec un lecteur sans fil. Moins de saisie manuelle, moins d'erreurs, plus de fluidité sur le plancher.",
    badge: 'Populaire',
    imageSrc: '/accessoires/qr-scanner.png',
    imageAlt: 'Lecteur code-barres / QR HAORIX',
    features: ['Connexion sans fil Bluetooth', 'Lecture codes 1D et 2D', 'Autonomie 12h+', 'Compatible H-Viz'],
    specs: [
      { label: 'Type', value: 'Sans fil Bluetooth' },
      { label: 'Portée', value: '10m+' },
      { label: 'Autonomie', value: '12h utilisation continue' },
      { label: 'Compatibilité', value: 'H-Viz, systèmes HAORIX' },
    ],
  },
  {
    id: 'rfid-module',
    icon: <Rss className="h-8 w-8" />,
    name: 'Module RFID',
    tagline: 'Traçabilité instantanée',
    description:
      "Identifiez rapidement l'utilisateur au poste via un tag RFID pour faciliter l'attribution des tâches, le suivi et la traçabilité en usine.",
    imageSrc: '/accessoires/rfid-module.png',
    imageAlt: 'Module RFID HAORIX',
    features: ['Lecture tags magnétiques', 'Identification opérateur', 'Suivi en temps réel', 'Intégration traçabilité'],
    specs: [
      { label: 'Fréquence', value: '13.56 MHz' },
      { label: 'Distance lecture', value: '5 cm' },
      { label: 'Temps lecture', value: '< 100 ms' },
      { label: 'Tags supportés', value: 'ISO 14443A/B, ISO 15693' },
    ],
  },
  {
    id: 'andon-lights',
    icon: <BellRing className="h-8 w-8" />,
    name: 'Lumières Andon',
    tagline: 'Signalisation visuelle immédiate',
    description:
      "Rendez l'état d'un poste visible en un coup d'œil (assistance, arrêt, qualité, manque matière). Améliorez la réactivité et la coordination d'équipe.",
    badge: 'Nouveau',
    imageSrc: '/accessoires/andon-lights.png',
    imageAlt: 'Lumières Andon HAORIX',
    features: ['Multi-couleurs programmables', 'Modes fixe / clignotant', 'Déclenchement automatique', 'Visible à distance'],
    specs: [
      { label: 'Couleurs', value: 'Rouge, Jaune, Vert, Bleu' },
      { label: 'Modes', value: 'Fixe, Clignotant, Pulse' },
      { label: 'Visibilité', value: '30m+' },
      { label: 'Alimentation', value: 'PoE ou 24V DC' },
    ],
  },
  {
    id: 'connectivity',
    icon: <Cable className="h-8 w-8" />,
    name: 'Modules connectique',
    tagline: 'Flexibilité réseau totale',
    description:
      "Options de connexion adaptées à l'usine : WiFi pour la flexibilité ou Ethernet pour une stabilité maximale, selon vos zones et contraintes réseau.",
    imageSrc: '/accessoires/connectivity.png',
    imageAlt: 'Modules connectique HAORIX',
    features: ['Module WiFi industriel', 'Adaptateur Ethernet PoE', 'Hub USB multi-ports', 'Câbles industriels renforcés'],
    specs: [
      { label: 'WiFi', value: '802.11ac Dual-band' },
      { label: 'Ethernet', value: 'Gigabit PoE+' },
      { label: 'USB', value: 'Hub 4 ports USB 3.0' },
      { label: 'Protection', value: 'IP54 (selon configuration)' },
    ],
  },
]

export default function AccessoriesPage() {
  const [selectedAccessory, setSelectedAccessory] = useState<Accessory>(accessories[0])
  const detailsRef = useRef<HTMLDivElement | null>(null)

  const selectedIndex = useMemo(
    () => accessories.findIndex((a) => a.id === selectedAccessory.id),
    [selectedAccessory.id]
  )

  return (
    <div className={`flex min-h-screen flex-col bg-background overflow-x-hidden ${montserrat.className}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/30">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:py-16 md:py-24 lg:px-8">
          <Badge variant="secondary" className={`${michroma.className} mb-4 px-3 py-1 text-xs uppercase tracking-wider`}>
            Accessoires
          </Badge>

          <h1 className={`${michroma.className} text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight`}>
            Accessoires & Add-ons
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-zinc-900 dark:text-white sm:text-xl">
            Les bons périphériques pour chaque poste de travail.
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
            Optimisez H-Viz avec des add-ons conçus pour le plancher : lecture QR/code-barres, RFID pour la traçabilité et lumières Andon pour la signalisation. Une approche modulaire qui s'adapte à vos procédés.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <div ref={detailsRef}>
        <section className="border-b border-border/30 py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              {/* Accessory List */}
              <div className="lg:col-span-5">
                <h2 className={`${michroma.className} mb-4 text-xl font-bold tracking-tight text-foreground sm:mb-6 sm:text-2xl`}>
                  Nos accessoires
                </h2>

                <div className="space-y-2 sm:space-y-3">
                  {accessories.map((accessory) => {
                    const active = selectedAccessory.id === accessory.id
                    return (
                      <button
                        key={accessory.id}
                        onClick={() => setSelectedAccessory(accessory)}
                        className={`group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all sm:gap-4 sm:p-4 ${
                          active
                            ? 'border-zinc-900 bg-zinc-900/5 dark:border-white dark:bg-white/5'
                            : 'border-border bg-card hover:border-zinc-400 dark:hover:border-zinc-600'
                        }`}
                        aria-current={active ? 'true' : 'false'}
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors sm:h-12 sm:w-12 ${
                            active
                              ? 'bg-zinc-900 text-white dark:bg-white dark:text-black'
                              : 'bg-muted text-muted-foreground group-hover:bg-zinc-900/10 dark:group-hover:bg-white/10 group-hover:text-foreground'
                          }`}
                        >
                          <span className="h-5 w-5 [&>svg]:h-5 [&>svg]:w-5 sm:h-6 sm:w-6 sm:[&>svg]:h-6 sm:[&>svg]:w-6">{accessory.icon}</span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start gap-2 sm:items-center">
                            <span className={`${michroma.className} text-sm font-semibold text-foreground leading-tight sm:text-base sm:truncate`}>
                              {accessory.name}
                            </span>
                            {accessory.badge && (
                              <Badge variant="secondary" className="shrink-0 text-[10px] px-1.5 py-0.5 sm:text-xs sm:px-2 sm:py-0.5">
                                {accessory.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1 sm:text-sm sm:truncate">{accessory.tagline}</p>
                        </div>

                        <ChevronRight
                          className={`h-4 w-4 shrink-0 transition-transform sm:h-5 sm:w-5 ${
                            active ? 'text-foreground rotate-90' : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    )
                  })}
                </div>

                <div className="mt-4 text-xs text-muted-foreground sm:mt-6 sm:text-sm">
                  Sélection : <span className="text-foreground font-medium">{selectedIndex + 1}</span> / {accessories.length}
                </div>
              </div>

              {/* Accessory Details */}
              <div className="lg:col-span-7">
                <Card className="overflow-hidden border-border">
                  <div className="relative border-b border-border bg-muted/20 p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col gap-4 sm:gap-6">
                      {/* Header with icon and title */}
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-black sm:h-16 sm:w-16 sm:rounded-2xl md:h-20 md:w-20">
                          <span className="h-6 w-6 [&>svg]:h-6 [&>svg]:w-6 sm:h-8 sm:w-8 sm:[&>svg]:h-8 sm:[&>svg]:w-8 md:h-10 md:w-10 md:[&>svg]:h-10 md:[&>svg]:w-10">{selectedAccessory.icon}</span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-start gap-2">
                            <h3 className={`${michroma.className} text-lg font-bold text-foreground leading-tight sm:text-xl md:text-2xl`}>
                              {selectedAccessory.name}
                            </h3>
                            {selectedAccessory.badge && (
                              <Badge className="bg-zinc-900 text-white dark:bg-white dark:text-black text-xs">
                                {selectedAccessory.badge}
                              </Badge>
                            )}
                          </div>

                          <p className="mt-1 text-sm font-medium text-zinc-900 dark:text-white sm:text-base md:text-lg">
                            {selectedAccessory.tagline}
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
                        {selectedAccessory.description}
                      </p>

                      {/* Image */}
                      <div className="overflow-hidden rounded-lg border border-border bg-background sm:rounded-xl">
                        <div className="relative aspect-[4/3] w-full sm:aspect-[16/9]">
                          <Image
                            src={selectedAccessory.imageSrc}
                            alt={selectedAccessory.imageAlt}
                            fill
                            sizes="(min-width: 1024px) 720px, 100vw"
                            className="object-cover object-center"
                            priority={selectedAccessory.id === accessories[0].id}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                      {/* Features */}
                      <div>
                        <h4 className={`${michroma.className} mb-3 text-sm font-semibold text-foreground sm:mb-4 sm:text-base`}>
                          Caractéristiques
                        </h4>
                        <ul className="space-y-2 sm:space-y-3">
                          {selectedAccessory.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2 sm:gap-3">
                              <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-zinc-900/10 dark:bg-white/10 sm:h-5 sm:w-5">
                                <Check className="h-2.5 w-2.5 text-foreground sm:h-3 sm:w-3" />
                              </div>
                              <span className="text-xs text-muted-foreground sm:text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Specs */}
                      <div>
                        <h4 className={`${michroma.className} mb-3 text-sm font-semibold text-foreground sm:mb-4 sm:text-base`}>
                          Spécifications
                        </h4>
                        <div className="space-y-1.5 sm:space-y-2">
                          {selectedAccessory.specs.map((spec, index) => (
                            <div
                              key={index}
                              className="rounded-md bg-muted/40 px-2.5 py-1.5 sm:rounded-lg sm:px-3 sm:py-2"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-xs text-muted-foreground sm:text-sm">{spec.label}</span>
                                <span className={`${michroma.className} text-xs font-medium text-foreground text-right sm:text-sm`}>
                                  {spec.value}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4 sm:mt-8 sm:flex-row sm:gap-3 sm:pt-6">
                      <Button
                        asChild
                        size="default"
                        className={`${michroma.className} gap-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 text-sm sm:text-base`}
                      >
                        <Link href="/contact">
                          Demander un devis
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="default" className="bg-transparent text-sm sm:text-base">
                        <Link href="/produits/h-viz">Voir H-Viz</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* All Accessories Grid Section */}
      <section className="border-b border-border/30 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className={`${michroma.className} text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl`}>
              Tous les accessoires
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
              Une approche modulaire qui s'adapte à chaque poste.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 xs:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {accessories.map((accessory) => (
              <Card
                key={accessory.id}
                className="group cursor-pointer border-border transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg"
                onClick={() => {
                  setSelectedAccessory(accessory)
                  detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                <CardContent className="p-4 sm:p-6 flex h-full flex-col">
                  {/* Card Image */}
                  <div className="mb-3 overflow-hidden rounded-lg border border-border bg-background sm:mb-4 sm:rounded-xl">
                    <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                      <Image
                        src={accessory.imageSrc}
                        alt={accessory.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 240px, 50vw"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Badge */}
                  <div className="mb-2 h-5 sm:h-6">
                    {accessory.badge ? (
                      <Badge variant="secondary" className="text-[10px] sm:text-xs">
                        {accessory.badge}
                      </Badge>
                    ) : (
                      <span className="inline-block h-5 sm:h-6" />
                    )}
                  </div>

                  {/* Icon + Title */}
                  <div className="mb-2 flex items-start gap-2 sm:mb-3 sm:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground sm:h-10 sm:w-10 sm:rounded-lg">
                      <span className="h-4 w-4 [&>svg]:h-4 [&>svg]:w-4 sm:h-5 sm:w-5 sm:[&>svg]:h-5 sm:[&>svg]:w-5">{accessory.icon}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className={`${michroma.className} text-sm font-semibold text-foreground leading-tight sm:text-base sm:truncate`}>
                        {accessory.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-muted-foreground line-clamp-1 sm:text-sm">{accessory.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-1 line-clamp-2 text-xs text-muted-foreground flex-1 sm:mt-2 sm:line-clamp-3 sm:text-sm">
                    {accessory.description}
                  </p>

                  {/* Link */}
                  <div className="mt-3 flex items-center text-xs font-medium text-foreground sm:mt-4 sm:text-sm">
                    Voir détails
                    <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b border-border/30 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <h2 className={`${michroma.className} text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl`}>
                Pourquoi choisir nos accessoires ?
              </h2>
              <p className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg">
                Conçus pour un environnement manufacturier exigeant, nos accessoires s'intègrent parfaitement à H-Viz.
              </p>
            </div>

            <div className="grid gap-3 grid-cols-1 xs:grid-cols-2 sm:gap-4">
              {[
                "Accélère l'exécution des opérations",
                "Réduit les erreurs de saisie",
                "Traçabilité renforcée via RFID",
                "Signalisation Andon immédiate",
                "Configuration flexible par poste",
                "Support technique dédié",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-2 rounded-md border border-border bg-card p-3 sm:gap-3 sm:rounded-lg sm:p-4">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black sm:h-6 sm:w-6">
                    <Check className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                  <span className="text-xs text-foreground leading-tight sm:text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="relative overflow-hidden rounded-xl border border-border bg-card px-4 py-10 text-center sm:rounded-2xl sm:px-6 sm:py-12 md:px-16 md:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative">
              <h2 className={`${michroma.className} text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl lg:text-4xl`}>
                Besoin d'une configuration personnalisée ?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:mt-4 sm:text-base md:text-lg">
                Notre équipe vous aide à choisir les bons accessoires selon vos postes, vos procédés et vos priorités.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:gap-4">
                <Button
                  asChild
                  size="default"
                  className={`${michroma.className} gap-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 sm:size-lg`}
                >
                  <Link href="/contact">
                    Obtenir une soumission
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild size="default" variant="outline" className="bg-transparent sm:size-lg">
                  <Link href="/produits/h-viz">Voir H-Viz</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}