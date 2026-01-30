'use client'

import Link from 'next/link';
import Image from 'next/image';
import { michroma } from '@/Fonts/Michroma';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { montserrat } from '@/Fonts/Montserrat';
import React, { useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check, QrCode, Rss, BellRing, Cable, ChevronRight } from 'lucide-react';

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
      "Accélérez l’exécution au poste avec un lecteur sans fil. Moins de saisie manuelle, moins d’erreurs, plus de fluidité sur le plancher.",
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
      "Identifiez rapidement l’utilisateur au poste via un tag RFID pour faciliter l’attribution des tâches, le suivi et la traçabilité en usine.",
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
      "Rendez l’état d’un poste visible en un coup d’œil (assistance, arrêt, qualité, manque matière). Améliorez la réactivité et la coordination d’équipe.",
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
      "Options de connexion adaptées à l’usine : WiFi pour la flexibilité ou Ethernet pour une stabilité maximale, selon vos zones et contraintes réseau.",
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

  const selectedIndex = useMemo(
    () => accessories.findIndex((a) => a.id === selectedAccessory.id),
    [selectedAccessory.id]
  )

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

        <div className="mx-auto max-w-7xl px-4 py-16 text-center md:py-24 lg:px-8">
          <Badge variant="secondary" className={`${michroma.className} mb-4 px-3 py-1 text-xs uppercase tracking-wider`}>
            Accessoires
          </Badge>

          <h1 className={`${michroma.className} text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl`}>
            Accessoires & Add-ons
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-xl font-medium text-zinc-900 dark:text-white">
            Les bons périphériques pour chaque poste de travail.
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Optimisez H-Viz avec des add-ons conçus pour le plancher : lecture QR/code-barres, RFID pour la traçabilité
            et lumières Andon pour la signalisation. Une approche modulaire qui s’adapte à vos procédés.
          </p>
        </div>
      </section>

      <section className="border-b border-border/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className={`${michroma.className} mb-6 text-2xl font-bold tracking-tight text-foreground`}>
                Nos accessoires
              </h2>

              <div className="space-y-3">
                {accessories.map((accessory, idx) => {
                  const active = selectedAccessory.id === accessory.id
                  return (
                    <button
                      key={accessory.id}
                      onClick={() => setSelectedAccessory(accessory)}
                      className={`group flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                        active
                          ? 'border-zinc-900 bg-zinc-900/5 dark:border-white dark:bg-white/5'
                          : 'border-border bg-card hover:border-zinc-400 dark:hover:border-zinc-600'
                      }`}
                      aria-current={active ? 'true' : 'false'}
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition-colors ${
                          active
                            ? 'bg-zinc-900 text-white dark:bg-white dark:text-black'
                            : 'bg-muted text-muted-foreground group-hover:bg-zinc-900/10 dark:group-hover:bg-white/10 group-hover:text-foreground'
                        }`}
                      >
                        {accessory.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`${michroma.className} font-semibold text-foreground truncate`}>
                            {accessory.name}
                          </span>
                          {accessory.badge && (
                            <Badge variant="secondary" className="shrink-0 text-xs">
                              {accessory.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground truncate">{accessory.tagline}</p>
                      </div>

                      <ChevronRight
                        className={`h-5 w-5 shrink-0 transition-transform ${
                          active ? 'text-foreground rotate-90' : 'text-muted-foreground'
                        }`}
                      />
                    </button>
                  )
                })}
              </div>

              <div className="mt-6 text-sm text-muted-foreground">
                Sélection : <span className="text-foreground font-medium">{selectedIndex + 1}</span> / {accessories.length}
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="overflow-hidden border-border">
                <div className="relative border-b border-border bg-muted/20 p-6 sm:p-8">
                  <div className="grid gap-6 sm:grid-cols-[96px_1fr] sm:items-start">
                    <div className="flex items-center gap-4 sm:flex-col sm:items-start">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-black sm:h-24 sm:w-24">
                        {selectedAccessory.icon}
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className={`${michroma.className} text-2xl font-bold text-foreground sm:text-3xl`}>
                          {selectedAccessory.name}
                        </h3>
                        {selectedAccessory.badge && (
                          <Badge className="bg-zinc-900 text-white dark:bg-white dark:text-black">
                            {selectedAccessory.badge}
                          </Badge>
                        )}
                      </div>

                      <p className="mt-2 text-lg font-medium text-zinc-900 dark:text-white">
                        {selectedAccessory.tagline}
                      </p>

                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        {selectedAccessory.description}
                      </p>

                      <div className="mt-5 overflow-hidden rounded-xl border border-border bg-background">
                        <div className="relative aspect-[16/9] w-full">
                          <Image
                            src={selectedAccessory.imageSrc}
                            alt={selectedAccessory.imageAlt}
                            fill
                            sizes="(min-width: 1024px) 720px, 100vw"
                            className="object-cover"
                            priority={selectedAccessory.id === accessories[0].id}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 sm:p-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className={`${michroma.className} mb-4 font-semibold text-foreground`}>
                        Caractéristiques
                      </h4>
                      <ul className="space-y-3">
                        {selectedAccessory.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-900/10 dark:bg-white/10">
                              <Check className="h-3 w-3 text-foreground" />
                            </div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className={`${michroma.className} mb-4 font-semibold text-foreground`}>
                        Spécifications
                      </h4>
                      <div className="space-y-2">
                        {selectedAccessory.specs.map((spec, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-lg bg-muted/40 px-3 py-2"
                          >
                            <span className="text-sm text-muted-foreground">{spec.label}</span>
                            <span className={`${michroma.className} text-sm font-medium text-foreground`}>
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row">
                    <Button
                      asChild
                      className={`${michroma.className} gap-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200`}
                    >
                      <Link href="/contact">
                        Demander un devis
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="bg-transparent">
                      <Link href="/produits/h-viz">Voir H-Viz</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className={`${michroma.className} text-3xl font-bold tracking-tight text-foreground sm:text-4xl`}>
              Tous les accessoires
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Une approche modulaire qui s’adapte à chaque poste.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {accessories.map((accessory) => (
              <Card
                key={accessory.id}
                className="group cursor-pointer border-border transition-all hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg"
                onClick={() => {
                  setSelectedAccessory(accessory)
                  window.scrollTo({ top: 420, behavior: 'smooth' })
                }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 overflow-hidden rounded-xl border border-border bg-background">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={accessory.imageSrc}
                        alt={accessory.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 240px, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {accessory.badge && (
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {accessory.badge}
                    </Badge>
                  )}

                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                      {accessory.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className={`${michroma.className} font-semibold text-foreground truncate`}>
                        {accessory.name}
                      </h3>
                      <p className="mt-0.5 text-sm text-muted-foreground truncate">{accessory.tagline}</p>
                    </div>
                  </div>

                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {accessory.description}
                  </p>

                  <div className="mt-4 flex items-center text-sm font-medium text-foreground">
                    Voir détails
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className={`${michroma.className} text-3xl font-bold tracking-tight text-foreground sm:text-4xl`}>
                Pourquoi choisir nos accessoires ?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Conçus pour un environnement manufacturier exigeant, nos accessoires s’intègrent parfaitement à H-Viz.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Accélère l’exécution des opérations",
                "Réduit les erreurs de saisie",
                "Traçabilité renforcée via RFID",
                "Signalisation Andon immédiate",
                "Configuration flexible par poste",
                "Support technique dédié",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-white dark:text-black">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
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
                Besoin d’une configuration personnalisée ?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Notre équipe vous aide à choisir les bons accessoires selon vos postes, vos procédés et vos priorités.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className={`${michroma.className} gap-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200`}
                >
                  <Link href="/contact">
                    Obtenir une soumission
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline" className="bg-transparent">
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