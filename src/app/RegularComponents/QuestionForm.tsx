'use client'

import React, { useState } from 'react';
import { addDataQuestion } from '@/DB/api';
import { michroma } from '@/Fonts/Michroma';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { montserrat } from '@/Fonts/Montserrat';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const subjects = [
  { value: 'general', label: 'Question générale' },
  { value: 'prix', label: 'Prix & soumission' },
  { value: 'demo', label: 'Demande de démo' },
  { value: 'support', label: 'Support technique' },
  { value: 'integration', label: 'Intégration' },
  { value: 'autre', label: 'Autre' },
]

export function QuickQuestionModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(async () => {
      setIsSubmitted(false)
      setIsOpen(false)
      await addDataQuestion({data: {
        customerid: Math.floor(Math.random() * 1000000),
        nom: formData.name,
        courriel: formData.email,
        sujet: formData.subject,
        message: formData.message,
      }});
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2500)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className={`${michroma.className} gap-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 lg:cursor-pointer`}
        >
          <MessageCircle className="h-4 w-4" />
          Question rapide
        </Button>
      </DialogTrigger>

      <DialogContent className={`sm:max-w-md ${montserrat.className}`}>
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900/10 dark:bg-white/10">
              <CheckCircle className="h-8 w-8 text-zinc-900 dark:text-white" />
            </div>
            <h3 className={`${michroma.className} mb-2 text-xl font-semibold text-foreground`}>
              Message envoyé
            </h3>
            <p className="text-sm text-muted-foreground">
              Merci — on vous répond dans les plus brefs délais.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="flex items-center gap-2">
                <DialogTitle className={`${michroma.className}`}>
                  Une question rapide ?
                </DialogTitle>
              </div>
              <DialogDescription className="text-muted-foreground">
                Envoyez-nous votre question — idéalement en précisant votre contexte.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className={montserrat.className} htmlFor="quick-name">
                    Nom
                  </Label>
                  <Input
                    id="quick-name"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className={montserrat.className} htmlFor="quick-email">
                    Courriel
                  </Label>
                  <Input
                    id="quick-email"
                    type="email"
                    placeholder="vous@entreprise.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className={montserrat.className} htmlFor="quick-subject">
                  Sujet
                </Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) => handleChange('subject', value)}
                  required
                >
                  <SelectTrigger id="quick-subject">
                    <SelectValue placeholder="Choisir un sujet" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((subject) => (
                      <SelectItem key={subject.value} value={subject.value}>
                        {subject.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className={montserrat.className} htmlFor="quick-message">
                  Message
                </Label>
                <Textarea
                  id="quick-message"
                  placeholder="Votre question... (ex.: nombre de postes, réseau, RFID/QR, intégration, etc.)"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="min-h-[110px] resize-none"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <Button
                  type="button"
                  variant="outline"
                  className="bg-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  Annuler
                </Button>
                <Button
                  type="submit"
                  className={`${michroma.className} gap-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200`}
                >
                  <Send className="h-4 w-4" />
                  Envoyer
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}