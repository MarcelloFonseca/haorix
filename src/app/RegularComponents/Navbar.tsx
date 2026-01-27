'use client';

import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import { ReactElement } from 'react';
import { michroma } from '@/Fonts/Michroma';
import { SetThemeButton } from './setTheme';
import { montserrat } from '@/Fonts/Montserrat';
import { HamburgerMenu } from './Hamburger-menu';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';


//FAIT!(Tablette)

type NavItems = { href: string; label: string };

const navLinks: NavItems[] = [
  { href: '#', label: 'Produits' },
  { href: '#', label: 'Solutions' },
  { href: '#', label: 'Comment ça marche' },
  { href: '#', label: 'Prix' },
  { href: '#', label: 'Ressources' }
];

function NavBar(): ReactElement {

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <NavigationMenu viewport={false} className="hidden lg:flex lg:w-full lg:ml-2.5">
        <NavigationMenuList className="flex w-full flex-row items-center space-x-6">
          <NavigationMenuItem className={michroma.className}>
            <NavigationMenuTrigger className="rounded-xs cursor-pointer dark:bg-secondary/80">
              Produits
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={`${montserrat.className} cursor-pointer`}>H-Viz</NavigationMenuLink>
              <NavigationMenuLink className={`${montserrat.className} cursor-pointer`}>H-Dash</NavigationMenuLink>
              <NavigationMenuLink className={`${montserrat.className} cursor-pointer`}>Accessoires & Add-ons</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className={michroma.className}>
            <NavigationMenuTrigger className="rounded-xs cursor-pointer dark:bg-secondary/80">
              Solutions
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={`${montserrat.className} cursor-pointer`}>Exécution au poste (MES)</NavigationMenuLink>
              <NavigationMenuLink className={`${montserrat.className} cursor-pointer`}>Traçabilité (QR / RFID)</NavigationMenuLink>
              <NavigationMenuLink className={`${montserrat.className} cursor-pointer`}>Andon & signalisation</NavigationMenuLink>
              <NavigationMenuLink className={`${montserrat.className} cursor-pointer`}>Instructions 2D/3D & qualité</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/*<NavigationMenuItem className={michroma.className}>
            <NavigationMenuTrigger className="rounded-xs cursor-pointer dark:bg-secondary/80">
              Comment ça marche
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={`${montserrat.className} cursor-pointer`}>Link three</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>*/}

          <NavigationMenuLink 
          className={`${michroma.className} cursor-pointer bg-inherit dark:bg-secondary/80 dark:text-primary`}>
          Comment ça marche
          </NavigationMenuLink>

          <NavigationMenuLink 
          className={`${michroma.className} cursor-pointer bg-inherit dark:bg-secondary/80 dark:text-primary`}>
          Prix
          </NavigationMenuLink>

          {/*<NavigationMenuItem className={michroma.className}>
            <NavigationMenuTrigger className="rounded-xs cursor-pointer dark:bg-secondary/80">
            Prix
            </NavigationMenuTrigger>
            {/*<NavigationMenuContent>
              <NavigationMenuLink className={`${montserrat.className} cursor-pointer`}>Link Four</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem> */}

          <NavigationMenuLink
            className={`${michroma.className} cursor-pointer bg-inherit dark:bg-secondary/80 dark:text-primary`}>
            Ressources
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex lg:items-center lg:h-auto lg:w-auto lg:space-x-4 lg:overflow-y-hidden">
        <Link href="/demo"><button 
          className={`${michroma.className} text-xs inline w-[200px] p-1.5 cursor-pointer
                      text-background dark:text-background
                      bg-accent-foreground dark:bg-accent-foreground
                      border border-accent-foreground dark:border-accent-foreground
                      hover:bg-background hover:text-foreground ml-2.5`}>
                        Demander une démo
        </button></Link>
        <SetThemeButton />
      </div>

      <div className="relative ml-auto lg:hidden">
        <div className='flex items-center gap-2'>
          <SetThemeButton />
          <HamburgerMenu isOpen={open} onClick={() => setOpen((o) => !o)} controlsId="mobile-nav" />
            </div>
        <div
          id="mobile-nav"
          aria-hidden={!open}
          className={[
            'absolute right-0 top-full z-50 mt-2',
            'w-[min(20rem,70vw)] rounded-md',
            'bg-background/95 dark:bg-secondary/95',
            'backdrop-blur-3xl border border-border/30 shadow-lg',
            'origin-top-right transition-all duration-200',
            open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none',
          ].join(' ')}>
          <nav className="p-3 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} className={`${michroma.className} block w-full py-2 text-center`}>
                {link.label}
              </Link>
            ))}
            <Link href="/demo"><button 
              className={`${michroma.className} text-xs inline w-full p-1.5 cursor-pointer
                          text-background dark:text-background
                          bg-accent-foreground dark:bg-accent-foreground
                          border border-accent-foreground dark:border-accent-foreground
                          hover:bg-background hover:text-foreground mt-2.5`}>
                            Demander une démo
            </button></Link>
          </nav>
        </div>
      </div>
    </>
  );
}

export { NavBar };
