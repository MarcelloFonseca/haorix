import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { ReactElement } from "react";
import { Footer } from "./Regular-Components/footer";
import Image from "next/image";
import { NavBar } from "./Regular-Components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

//TODO: Faire les types pour les éléments du nav
//TODO: Réparer le footer (elements sans triggers)-> élément TEST
//TODO: Faire responsiveness du footer
//TODO: Faire responsiveness du mobile (page #1)
//TODO: Ajouter bouton dark/light mode nav
//TODO: Rendre le header sticky
//TODO: Ajouter le font de la brand

//TODO: Ajouter le state du dark mode ici (root)

//IMPORTANT: Les premières className sont pour mobileFirst approach
export function NavigationBar(): ReactElement {
  return (
    <header className="sticky top-0 z-50 flex w-full items-center px-3 sm:px-4 sm:p-3 sm:sticky sm:top-0 sm:bg-white sm:z-50 sm:backdrop-blur sm:supports-[backdrop-filter]:bg-white/70">
      <div className="relative h-10 w-36 sm:h-10 sm:w-32 sm:inline">
        <Image
          src="/HaorixLogo.png"
          width={150}
          height={100}
          alt="Logo Haorix"
          className="w-36 h-auto sm:w-32 sm:h-auto md:w-40 md:h-auto sm:pr-4"
        />
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col bg-white 
        overflow-y-auto dark:bg-neutral-900 dark:text-neutral-100`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          <main className="flex-grow border-[5px] border-yellow-500">
            {children}
          </main>
          <Footer className=" border-4 border-indigo-500" />
        </ThemeProvider>
      </body>
    </html>
  );
}
