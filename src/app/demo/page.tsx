'use client'
import { addData } from '@/DB/api'
import React, { useState } from 'react'
import { michroma } from '@/Fonts/Michroma'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { montserrat } from '@/Fonts/Montserrat'
import { Users, Zap, Shield, Clock, Workflow } from 'lucide-react'
import { ConfirmationPage } from '@/app/RegularComponents/Confirmation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'


type industriesType = string[];

const industries:industriesType  = [
  'Aéronautique',
  'Automobile',
  'Métal / Usinage',
  'Plasturgie',
  'Agroalimentaire',
  'Bois',
  'Électronique',
  'Manufacturier',
  'Logistique / Transport',
  'Autre',
]

const employeeCounts = ['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+']

const benefits = [
  {
    icon: Zap,
    title: 'Déploiement rapide',
    description: 'Installation et mise en service poste par poste, sans complexité.',
  },
  {
    icon: Users,
    title: 'Accompagnement terrain',
    description: 'On valide vos besoins et on configure selon vos procédés.',
  },
  {
    icon: Shield,
    title: 'Conçu pour le plancher de production',
    description: 'Robuste, stable et adapté à l’usage industriel continu.',
  },
  {
    icon: Clock,
    title: 'Gain de temps',
    description: 'Exécution plus rapide, moins de saisie et moins d’erreurs.',
  },
]

export default function ContactForm() {
  const [formData, setFormData] = useState<{[key: string]: string}>({
    nom: '',
    courriel: '',
    entreprise: '',
    poste: '',
    industrie: '',
    taille: '',
  })
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await addData({ data: formData });
    setIsSubmitted(true)  
  }
  
  return (
    (isSubmitted && (
      <ConfirmationPage />
    )) ||

    <section className={`w-full px-4 py-12 md:py-20 ${montserrat.className}`}>
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-300 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900/50 w-fit">
              <Workflow className="h-4 w-4 text-zinc-900 dark:text-white" />
              <span className="text-sm text-zinc-700 dark:text-zinc-300">
                Demander une démo
              </span>
            </div>

            <h1
              className={`${michroma.className} mt-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl`}
            >
              Prêt à équiper votre plancher avec H-Viz ?
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              Remplissez le formulaire et un membre de notre équipe vous contactera pour valider vos besoins,
              discuter de votre contexte plancher de production et planifier une démo.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-zinc-900/10 dark:bg-white/10">
                    <benefit.icon className="h-5 w-5 text-zinc-900 dark:text-white" />
                  </div>
                  <div>
                    <h3 className={`${michroma.className} text-sm font-semibold text-foreground`}>
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <div className="mb-6">
              <h2 className={`${michroma.className} text-xl font-semibold text-foreground`}>
                Demander une démo
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">Tous les champs sont requis</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label className={montserrat.className} htmlFor="nom">
                  Nom complet
                </Label>
                <Input
                  id="nom"
                  type="text"
                  placeholder="Jean Dupont"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label className={montserrat.className} htmlFor="courriel">
                  Courriel professionnel
                </Label>
                <Input
                  id="courriel"
                  type="email"
                  placeholder="jean@entreprise.com"
                  value={formData.courriel}
                  onChange={(e) => setFormData({ ...formData, courriel: e.target.value })}
                  required
                  className="h-11"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className={montserrat.className} htmlFor="entreprise">
                    Entreprise
                  </Label>
                  <Input
                    id="entreprise"
                    type="text"
                    placeholder="Entreprise ABC"
                    value={formData.entreprise}
                    onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label className={montserrat.className} htmlFor="poste">
                    Poste
                  </Label>
                  <Input
                    id="poste"
                    type="text"
                    placeholder="Directeur des opérations"
                    value={formData.poste}
                    onChange={(e) => setFormData({ ...formData, poste: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className={montserrat.className} htmlFor="industrie">
                  Industrie
                </Label>
                <Select
                  value={formData.industrie}
                  onValueChange={(value) => setFormData({ ...formData, industrie: value })}
                >
                  <SelectTrigger id="industrie" className="h-11 w-full">
                    <SelectValue placeholder="Sélectionnez votre industrie" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industrie) => (
                      <SelectItem key={industrie} value={industrie}>
                        {industrie}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className={montserrat.className} htmlFor="taille">
                  Taille de l&apos;entreprise
                </Label>
                <Select
                  value={formData.taille}
                  onValueChange={(value) => setFormData({ ...formData, taille: value })}
                >
                  <SelectTrigger id="taille" className="h-11 w-full">
                    <SelectValue placeholder="Nombre d'employés" />
                  </SelectTrigger>
                  <SelectContent>
                    {employeeCounts.map((count) => (
                      <SelectItem key={count} value={count}>
                        {count} employés
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className={`${michroma.className} h-11 w-full text-base bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200`}
              >
                Demander une démo
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                En soumettant ce formulaire, vous acceptez notre{' '}
                <a href="/confidentialite" className="underline hover:text-foreground">
                  politique de confidentialité
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}