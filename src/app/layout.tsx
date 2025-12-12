import './globals.css';
import Link from 'next/link';
import Image from 'next/image';
import { ReactElement } from 'react';
import type { Metadata } from 'next';
import { ThemeProvider } from './theme-provider';
import { Footer } from './Regular-Components/footer';
import { NavBar } from './Regular-Components/Navbar';

//FAIT:(Tablette)
//TODO: Résoudre le probème pour lorsque le breakpoint est un peu plus gros que md (entre md et lg)
export const metadata: Metadata = {
  title: 'Haorix | Accueil',
  description: 'Placer la description ici pour le SEO...', //TODO: Ajouter une description
  applicationName: 'Haorix',
  viewport: { width: 'device-width', initialScale: 1 },

  authors: [
    {
      name: 'HAORIX.Inc',
      url: 'https://haorix123.com', //TODO: Ajouter une URL valide
    },
  ],

  openGraph: {
    type: 'website',
    url: 'https://haorix123.com', //TODO: Ajouter une URL valide
    title: 'Haorix | Accueil',
    description: 'Placer la description ici pour le SEO...', //TODO: Ajouter une description
    siteName: 'Haorix',
    images: [{ url: 'https://haorix123.com/og.png' }], //TODO: Ajouter une image
  },
};

//IMPORTANT: Les premières className sont pour mobileFirst approach
function NavigationBar(): ReactElement {
  return (
    <header
      className="sticky top-0 z-50 flex w-full items-center
                  px-3 md:px-4 lg:px-6
                  min-h-20
                  bg-background/90 dark:bg-secondary/90
                  backdrop-blur md:backdrop-blur-xl lg:backdrop-blur-3xl
                  supports-[backdrop-filter]:bg-background/80 dark:supports-[backdrop-filter]:bg-secondary/80
                  border-b border-border/30 lg:border-b-2
                  shadow-lg">
      <div className="shrink-0 h-10 w-36">
        <Link href="/" aria-label="Retour à l’accueil">
          <Image
            src="/HaorixLogo.png"
            width={150}
            height={100}
            alt="Logo Haorix clair"
            className="w-36 h-auto dark:hidden md:w-40 lg:pr-4"
          />
          <Image
            src="/HaorixLogoDark.png"
            width={150}
            height={100}
            alt="Logo Haorix sombre"
            className="hidden dark:inline w-36 h-auto md:w-40 lg:pr-4"
          />
        </Link>
      </div>
      <NavBar />
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased min-h-dvh flex flex-col bg-background text-foreground dark:bg-secondary dark:text-primary">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavigationBar />
          <main className="flex-grow min-h-dvh">{children}</main>
          <Footer className="h-auto border-t border-border dark:border-border lg:min-h-20 lg:px-4 lg:p-3" />
        </ThemeProvider>
      </body>
    </html>
  );
}
