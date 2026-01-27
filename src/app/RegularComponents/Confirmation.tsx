'use client'

import Link from 'next/link'
import { CheckCircle, Mail, Calendar, ArrowRight, Clock, Users, Sparkles, Workflow } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { michroma } from '@/Fonts/Michroma'
import { montserrat } from '@/Fonts/Montserrat'

type NextSteps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const nextSteps: NextSteps[] = [
  {
    icon: Mail,
    title: 'Vérifiez votre boîte mail',
    description: 'Nous avons bien reçu votre demande. Un courriel de confirmation peut suivre selon votre configuration.',
  },
  {
    icon: Calendar,
    title: 'Planifiez votre démo',
    description: 'Notre équipe vous contacte sous 24h ouvrées pour valider le contexte et proposer un créneau.',
  },
  {
    icon: Users,
    title: 'Partagez votre réalité atelier',
    description: 'Postes, procédés, indicateurs, traçabilité : plus on connaît votre terrain, plus la démo est précise.',
  },
]

const resources = [
  {
    title: 'Fiche technique (PDF)',
    description: 'Spécifications et aperçu du système H-Viz',
    href: '/ressources/fiche-technique',
  },
  {
    title: 'Guide de déploiement',
    description: 'Comment installer et configurer poste par poste',
    href: '/ressources/deploiement',
  },
  {
    title: 'FAQ',
    description: 'Réponses aux questions les plus fréquentes',
    href: '/ressources/faq',
  },
]

export function ConfirmationPage() {
  return (
    <section className={`w-full py-12 md:py-16 lg:py-20 ${montserrat.className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900/10 dark:bg-white/10">
              <CheckCircle className="h-8 w-8 text-zinc-900 dark:text-white" />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50 w-fit">
              <Workflow className="h-4 w-4 text-zinc-900 dark:text-white" />
              <span className="text-sm text-zinc-700 dark:text-zinc-300">Demande • H-Viz</span>
            </div>

            <h1
              className={`${michroma.className} mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-balance`}
            >
              Demande envoyée avec succès
            </h1>

            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-md">
              Merci pour votre intérêt. Notre équipe a bien reçu votre demande et vous contactera très prochainement
              pour planifier une démo adaptée à votre environnement manufacturier.
            </p>

            <div className="mt-10 space-y-6">
              <h2 className={`${michroma.className} text-sm font-semibold uppercase tracking-wider text-muted-foreground`}>
                Prochaines étapes
              </h2>
              <div className="space-y-4">
                {nextSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted">
                      <step.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <h3 className={`${michroma.className} text-sm font-semibold text-foreground`}>{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3 rounded-lg border border-border bg-muted/50 p-4">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                <span className={`${michroma.className} font-medium text-foreground`}>Temps de réponse estimé :</span>{' '}
                moins de 24 heures ouvrées
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <Card className="border-border bg-card">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-900/10 dark:bg-white/10">
                    <Sparkles className="h-5 w-5 text-zinc-900 dark:text-white" />
                  </div>
                  <div>
                    <h2 className={`${michroma.className} font-semibold text-foreground`}>En attendant votre démo</h2>
                    <p className="text-sm text-muted-foreground">Explorez nos ressources</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {resources.map((resource, index) => (
                    <Link
                      key={index}
                      href={resource.href}
                      className="group flex items-center justify-between rounded-lg border border-border bg-background p-4 transition-colors hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-muted/50"
                    >
                      <div>
                        <h3 className={`${michroma.className} font-medium text-foreground transition-colors`}>
                          {resource.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>

                <div className="my-8 border-t border-border" />

                <div className="rounded-lg bg-muted/50 p-4">
                  <h3 className={`${michroma.className} font-medium text-foreground`}>Besoin d’aide immédiate ?</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Écrivez-nous et on vous répond rapidement.
                  </p>
                  <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                    <Button variant="outline" className="flex-1 bg-transparent" asChild>
                      <Link href="mailto:info@haorix.com">
                        <Mail className="mr-2 h-4 w-4" />
                        info@haorix.com
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    className={`${michroma.className} w-full bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200`}
                    size="lg"
                    asChild
                  >
                    <Link href="/">Retour à l&apos;accueil</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}