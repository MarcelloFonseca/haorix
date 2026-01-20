'use client';

import Link from 'next/link';
import Image from 'next/image';
import { michroma } from '@/Fonts/Michroma';
import { montserrat } from '@/Fonts/Montserrat';

const footerLinks = {
  produits: {
    title: 'Produits',
    links: [
      { label: 'H-Viz', href: '/produits/h-viz' },
      { label: 'H-Dash', href: '/produits/h-dash' },
      { label: 'Add-ons (QR / RFID / Andon)', href: '/produits/add-ons' },
      { label: 'Prix', href: '/prix' },
    ],
  },
  entreprise: {
    title: 'Entreprise',
    links: [
      { label: 'À propos', href: '/a-propos' },
      { label: 'Contact', href: '/contact' },
      { label: 'Partenaires', href: '/partenaires' },
      { label: 'Carrières', href: '/carrieres' },
    ],
  },
  ressources: {
    title: 'Ressources',
    links: [
      { label: 'Fiche technique (PDF)', href: '/ressources/fiche-technique' },
      { label: 'Guide de déploiement', href: '/ressources/deploiement' },
      { label: 'Support', href: '/ressources/support' },
      { label: 'FAQ', href: '/ressources/faq' },
    ],
  },
  legal: {
    title: 'Légal',
    links: [
      { label: 'Confidentialité', href: '/confidentialite' },
      { label: 'CGU', href: '/cgu' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'Mentions légales', href: '/mentions-legales' },
    ],
  },
};

export function Footer() {
  return (
    <footer className={`border-t border-border/30 bg-background ${montserrat.className}`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3
                className={`${michroma.className} text-sm font-semibold uppercase tracking-wider text-foreground`}
              >
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border/30 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Link href="/" className="flex items-center gap-3" aria-label="Aller à l’accueil">
              <Image
                src="/HaorixLogo.png"
                alt="Haorix Logo (clair)"
                width={120}
                height={40}
                className="h-auto w-[110px] dark:hidden"
                sizes="(min-width:1024px) 110px, 96px"
                priority={false}
              />
              <Image
                src="/HaorixLogoDark.png"
                alt="Haorix Logo (sombre)"
                width={120}
                height={40}
                className="hidden h-auto w-[110px] dark:inline-block"
                sizes="(min-width:1024px) 110px, 96px"
                priority={false}
              />
            </Link>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} HAORIX. Tous droits réservés.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>

              <Link
                href="https://youtube.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.01 3.01 0 0 0-2.12-2.13C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.378.556a3.01 3.01 0 0 0-2.12 2.13A31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .502 5.814 3.01 3.01 0 0 0 2.12 2.13C4.495 20.5 12 20.5 12 20.5s7.505 0 9.378-.556a3.01 3.01 0 0 0 2.12-2.13A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.502-5.814ZM9.75 15.5v-7l6.2 3.5-6.2 3.5Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}