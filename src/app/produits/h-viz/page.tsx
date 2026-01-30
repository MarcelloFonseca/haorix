import { ProductPageLayout } from '@/app/RegularComponents/Product-page-layout';
import { Monitor, Hand, Wifi, QrCode, Rss, BellRing, Shield, Zap } from 'lucide-react';

export default function HVizProductPage() {
  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: 'Console atelier dédiée',
      description:
        "Une interface opérateur claire et structurée pour accéder rapidement aux informations de production directement au poste.",
    },
    {
      icon: <Hand className="h-6 w-6" />,
      title: 'Option écran tactile',
      description:
        "Le modèle standard n’est pas tactile pour rester plus abordable. Une version tactile est disponible sur demande.",
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: 'Connexion WiFi ou Ethernet',
      description:
        "Connexion simple au réseau de l’usine : WiFi pour la flexibilité, ou Ethernet pour une stabilité maximale.",
    },
    {
      icon: <QrCode className="h-6 w-6" />,
      title: 'Lecture Code-barres / QR',
      description:
        "Intégration possible d’un lecteur sans fil pour accélérer l’exécution et réduire les erreurs de saisie.",
    },
    {
      icon: <Rss className="h-6 w-6" />,
      title: 'RFID pour la traçabilité',
      description:
        "Identification rapide via tags RFID pour attribuer des opérations, suivre les tâches et améliorer la traçabilité sur le plancher.",
    },
    {
      icon: <BellRing className="h-6 w-6" />,
      title: 'Gestion des arrêts & événements',
      description:
        "Suivi des arrêts prévus ou imprévus (pause, maintenance, bris, manque matière) avec historique utile pour l’amélioration continue.",
    },
  ]

  const specs = [
    { label: 'Format', value: 'Console tout-en-un (ordinateur intégré)' },
    { label: 'Réseau', value: 'WiFi / Ethernet' },
    { label: 'Montage', value: 'Bras articulé ou support mural' },
    { label: 'Périphériques', value: 'QR/Code-barres, RFID, Andon (selon configuration)' },
    { label: 'Usage', value: 'Conçu pour l’atelier (chocs, particules, usage intensif)' },
    { label: 'Énergie', value: 'Faible consommation + mode standby' },
  ]

  const highlights = [
    'Aucun ordinateur externe requis',
    'Déploiement poste par poste, rapide et simple',
    'Affichage d’instructions et de données de production',
    'Modulaire et personnalisable selon le poste et le procédé',
    'Réduction de la saisie manuelle et des erreurs',
    'Pensé pour une utilisation claire, rapide et robuste en usine',
  ]

  return (
    <ProductPageLayout
      badge="H-Viz"
      title="H-Viz"
      subtitle="La console atelier tout-en-un pour exécuter, suivre et standardiser."
      description="H-Viz est une station opérateur dédiée conçue pour le manufacturier. Accédez rapidement à vos informations de production, suivez les opérations en temps réel et simplifiez l’exécution au poste grâce à une interface claire, modulaire et pensée pour le plancher."
      features={features}
      specs={specs}
      highlights={highlights}
      ctaText="Demander une démo"
      ctaLink="/contact"
      secondaryCtaText="Voir comment ça marche"
      secondaryCtaLink="/#how-it-works"
    />
  )
}