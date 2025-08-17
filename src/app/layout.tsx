                  import type { Metadata } from "next";
                  import { Geist, Geist_Mono } from "next/font/google";
                  import "./globals.css";
                  import { ThemeProvider } from "./theme-provider";
                  import { ReactElement } from 'react';
                  import {
                    NavigationMenu,
                    NavigationMenuContent,
                    NavigationMenuIndicator,
                    NavigationMenuItem,
                    NavigationMenuLink,
                    NavigationMenuList,
                    NavigationMenuTrigger,
                    NavigationMenuViewport,
                  } from "@/components/ui/navigation-menu";
                  import { Footer } from "./Regular-Components/footer";
                  import Image from 'next/image'


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
                    description: "Placer la description ici pour le SEO...",//TODO: Ajouter une description
                    applicationName: "Haorix",
                    viewport: {
                      width: "device-width",
                      initialScale: 1.0
                    },
                    authors: [
                      {
                        name: "HAORIX.Inc",
                        url: "https://haorix123.com", //TODO: Ajouter une URL valide
                      }
                    ],
                    openGraph: {
                      type: "website",
                      url: "https://haorix123.com", //TODO: Ajouter une URL valide
                      title: "Haorix | Accueil",
                      description: "Placer la description ici pour le SEO...", //TODO: Ajouter une description
                      siteName: "Haorix",
                      images: [{ url: "https://haorix123.com/og.png" }] //TODO: Ajouter une image 
                    }
                  };

                  //TODO: Faire les types pour les éléments du nav
                  //TODO: Réparer le footer (elements sans triggers)-> élément TEST
                  //TODO: Faire responsiveness du footer
                  //TODO: Faire responsiveness du nav
                  //TODO: Faire responsiveness du mobile (page #1)s
                  //TODO: Ajouter bouton dark/light mode nav
                  //TODO: Ajouter state dans cette page pour le hamburger menu

                  export function NavigationBar(): ReactElement{
                    return(
                    <header>
                    <NavigationMenu viewport={false}>
                    <NavigationMenuList className="space-x-1">
                      <Image
                      src="/HaorixLogo.png"
                      width={150}
                      height={100}
                      alt="Picture of the author"
                      className="border-solid mx-2.5 p-2"
                      />
                      <NavigationMenuItem>

                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                        <NavigationMenuContent>
                        <NavigationMenuLink>Link One</NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <NavigationMenuLink>Link Two</NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <NavigationMenuLink>Link three</NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Item Four</NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <NavigationMenuLink>Link Four</NavigationMenuLink>
                        </NavigationMenuContent>
                      </NavigationMenuItem>

                        <NavigationMenuLink className="bg-black"> 
                          TEST
                        </NavigationMenuLink>

                    </NavigationMenuList>
                  </NavigationMenu>
                  </header>
                    )
                  }

                  export default function RootLayout({
                    children,
                  }: Readonly<{
                    children: React.ReactNode;
                  }>) {
                    return (
                      <html lang="fr" suppressHydrationWarning>
                        <body
                          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white overflow-x-hidden overflow-y-auto`}
                        >
                        <ThemeProvider
                              attribute="class"
                              defaultTheme="system"
                              enableSystem
                              disableTransitionOnChange
                            >
                        <NavigationBar /> 
                        <main className="flex-grow border-solid border-[5px] border-yellow-500">
                          {children}
                          </main>
                          <Footer className="border-solid border-4 border-indigo-500" /> 
                          </ThemeProvider>
                        </body>
                      </html>
                    );
                  }