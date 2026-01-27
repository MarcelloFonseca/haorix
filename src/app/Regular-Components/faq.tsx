'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { michroma } from '@/Fonts/Michroma'
import { montserrat } from '@/Fonts/Montserrat'
import { QuickQuestionModal } from './QuestionForm';


const faqItems = [
  {
    question: "Est-ce possible d'avoir un écran tactile ?",
    answer:
      "Oui, absolument. Le modèle H-Viz standard n'est pas tactile afin d'offrir une solution plus abordable. En revanche, une version tactile peut être ajoutée sur demande.",
  },
  {
    question: 'À quoi sert le module RFID ?',
    answer:
      "Le module RFID permet d'identifier l'utilisateur au poste via un tag magnétique unique. Cela facilite le suivi des opérations, l'attribution des tâches et la traçabilité en usine.",
  },
  {
    question: 'Avez-vous des options de lecture Code-barres / QR ?',
    answer:
      "Le H-Viz peut intégrer un lecteur Code-barres / QR sans fil, ce qui rend l'exécution des opérations plus rapide et réduit les erreurs de saisie.",
  },
  {
    question: 'Est-ce que H-Viz peut afficher des instructions de travail ?',
    answer:
      "Tout à fait. Notre système permet d'afficher des informations textuelles et des données de production pour aider les opérateurs dans leurs tâches quotidiennes.",
  },
  {
    question: 'Le système est-il adapté aux environnements industriels ?',
    answer:
      "Oui. Le H-Viz est conçu pour être robuste et résister aux chocs ainsi qu'aux particules, ce qui le rend idéal en usine.",
  },
  {
    question: "Quelle est la consommation d'énergie du système ?",
    answer:
      "L'afficheur H-Viz consomme très peu d'énergie et inclut un mode standby pour les longues périodes d'inactivité.",
  },
  {
    question: "Comment se déroule l'installation et la mise en service ?",
    answer:
      "Nous commençons par valider vos besoins et votre utilisation cible. Ensuite, le H-Viz est installé (bras articulé ou support mural) puis configuré pour se connecter à vos services et données de production.",
  },
  {
    question: 'Est-ce que le H-Viz peut se connecter au réseau sans fil ?',
    answer:
      "Oui. L'ordinateur intégré du système peut se connecter facilement à votre WiFi. Cela dit, vous pouvez également le connecter par câble Ethernet si le réseau est moins bon dans l'usine.",
  },
  {
    question: "Est-ce qu'on a besoin d'un ordinateur externe ?",
    answer:
      "Non. Le H-Viz est une console « tout-en-un », ce qui simplifie l'installation et réduit les équipements à gérer au poste. De plus, le système est très peu encombrant et conçu pour l'ergonomie d'utilisation.",
  },
  {
    question: 'Est-ce que H-Viz remplace un poste de travail PC traditionnel ?',
    answer:
      "Oui, dans de nombreux cas. H-Viz est conçu comme une solution tout-en-un orientée atelier : plus simple à utiliser, plus stable au quotidien et mieux adaptée aux contraintes d'espace et à l'usage intensif qu'un ordinateur conventionnel.",
  },
  {
    question: 'Est-ce que le système H-Viz est personnalisable ?',
    answer:
      "Oui. HAORIX est pensé comme une plateforme modulaire : l'affichage, les interactions et certaines fonctionnalités peuvent être ajustés selon le poste, le procédé et vos priorités (production, qualité, traçabilité, Andon, etc.)",
  },
  {
    question: 'Est-ce que le H-Viz gère les arrêts, pauses et problèmes de production ?',
    answer:
      "Oui. Le logiciel embarqué permet de suivre des arrêts prévus ou imprévus (pause, maintenance, bris, manque de matières premières) et de conserver un historique utile pour l'amélioration continue.",
  },
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? faqItems.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === faqItems.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className={`w-full py-12 md:py-16 lg:py-20 ${montserrat.className}`}>
      <div className="flex justify-center mb-12 md:mb-16">
        <div className="w-[180px] sm:w-[240px] md:w-[300px] h-px bg-zinc-300 dark:bg-zinc-700" />
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50 mx-auto">
            <HelpCircle className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
            <span className="text-sm text-zinc-700 dark:text-zinc-300">FAQ • H-Viz</span>
          </div>

          <h2 className={`${michroma.className} mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl`}>
            Questions fréquentes
          </h2>
          <p className="mt-3 text-muted-foreground">
            Trouvez rapidement les réponses à vos questions sur H-Viz.
          </p>
        </div>

        <div className="mb-6 flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="h-8 w-8 shrink-0 bg-transparent"
            aria-label="Question précédente"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-1.5 overflow-x-auto px-2 py-1 scrollbar-hide">
            {faqItems.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`${montserrat.className} flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-sm font-medium transition-colors ${
                  activeIndex === index
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-black'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
                aria-label={`Aller à la question ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="h-8 w-8 shrink-0 bg-transparent"
            aria-label="Question suivante"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="min-h-[220px] rounded-lg border border-border bg-card p-6">
          <p className={`${michroma.className} mb-4 text-lg font-semibold text-foreground`}>
            {faqItems[activeIndex].question}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {faqItems[activeIndex].answer}
          </p>
        </div>

        <div className="mt-4 text-center text-sm text-muted-foreground">
          Question {activeIndex + 1} sur {faqItems.length}
        </div>

        <div className="mt-8 text-center p-8">
          <p className="text-sm text-muted-foreground mb-2">
            Vous n{"'"}avez pas trouvé votre réponse ?{' '}
          </p>
          <QuickQuestionModal />
        </div>
      </div>
    </section>
  )
}