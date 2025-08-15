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

          export function NavigationBar(): ReactElement{
            return(
                <header>
              <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link Two</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
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
                  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
                >
                <ThemeProvider
                //Component pour le light/dark theme
                      attribute="class"
                      defaultTheme="system"
                      enableSystem
                      disableTransitionOnChange
                    >
                <NavigationBar /> 
                <main>
                  {children}
                  </main>
                  </ThemeProvider>
                </body>
              </html>
            );
          }