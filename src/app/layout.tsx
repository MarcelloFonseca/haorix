import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { ReactElement } from "react";
import { Footer } from "./Regular-Components/footer";
import Image from "next/image";
import { NavBar } from "./Regular-Components/Navbar";
import Link from 'next/link'

//TODO: Réparer le footer (elements sans triggers)-> élément TEST
//TODO: Vérifier que les variables css sont respectées
//TODO: Vérifier mobile vers sm (car de mobile ça s'applique au reste, donc voir l'application)
//TODO: Ajouter les dernières fonctionnalités en commentaire dans les files

export const metadata: Metadata = {
  title: "Haorix | Accueil",
  description: "Placer la description ici pour le SEO...", //TODO: Ajouter une description
  applicationName: "Haorix",
  viewport: { width: "device-width", initialScale: 1 },

  authors: [
    {
      name: "HAORIX.Inc",
      url: "https://haorix123.com", //TODO: Ajouter une URL valide
    },
  ],

  openGraph: {
    type: "website",
    url: "https://haorix123.com", //TODO: Ajouter une URL valide
    title: "Haorix | Accueil",
    description: "Placer la description ici pour le SEO...", //TODO: Ajouter une description
    siteName: "Haorix",
    images: [{ url: "https://haorix123.com/og.png" }], //TODO: Ajouter une image
  },
};


//IMPORTANT: Les premières className sont pour mobileFirst approach
function NavigationBar(): ReactElement {
  return (
    <header
      className="sticky top-0 z-50 flex w-full items-center px-3 sm:px-5 bg-background backdrop-blur 
    sm:supports-[backdrop-filter]:bg-white/70 sm:border-b-2 sm:border-b-border sm:dark:bg-background sm:dark:border-b-2 dark:border-b-border min-h-20"
    >
      <div className="relative h-10 w-36 sm:inline">
        {/* Logo pour le light mode */}
        <Link href="/">
        <Image
          src="/HaorixLogo.png" 
          width={150}
          height={100}
          alt="Logo Haorix"
          className="w-36 h-auto dark:hidden inline md:w-40 md:h-auto sm:pr-4"
        /> 
        </Link>
        {/* Logo pour le dark mode */}
        <Link href="/">
        <Image
          src="/HaorixLogoDark.png"
          width={150}
          height={100}
          alt="Logo Haorix"
          className="w-36 h-auto dark:inline hidden md:w-40 md:h-auto sm:pr-4"
        />
        </Link>
      </div>
      <NavBar />
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className="antialiased min-h-dvh flex flex-col dark:text-primary"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer className="h-auto border-t-1 border-t-border dark:border-t-1 dark:border-t-border sm:min-h-20
          sm:px-4 sm:p-3" />
        </ThemeProvider>
      </body>
    </html>
  );
}
