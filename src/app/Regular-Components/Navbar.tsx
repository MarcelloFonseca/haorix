'use client';

import * as React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { ReactElement } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { HamburgerMenu } from './Hamburger-menu';
import { SetThemeButton } from './setTheme';
import { montserrat } from '@/Fonts/Montserrat';
import { michroma } from '@/Fonts/Michroma';

//FAIT!(Tablette)

type NavItems = { href: string; label: string };

const navLinks: NavItems[] = [
  { href: '#', label: 'Label-1' },
  { href: '#', label: 'Label-2' },
  { href: '#', label: 'Label-3' },
  { href: '#', label: 'Label-4' },
];

function NavBar(): ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavigationMenu viewport={false} className="hidden lg:flex lg:w-full lg:ml-2.5">
        <NavigationMenuList className="flex w-full flex-row items-center space-x-6">
          <NavigationMenuItem className={michroma.className}>
            <NavigationMenuTrigger className="rounded-xs cursor-pointer dark:bg-secondary/80">
              Item One
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={`${montserrat.className} cursor-pointer`}>Link One</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className={michroma.className}>
            <NavigationMenuTrigger className="rounded-xs cursor-pointer dark:bg-secondary/80">
              Item Two
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={`${montserrat.className} cursor-pointer`}>Link Two</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className={michroma.className}>
            <NavigationMenuTrigger className="rounded-xs cursor-pointer dark:bg-secondary/80">
              Item Three
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={`${montserrat.className} cursor-pointer`}>Link three</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className={michroma.className}>
            <NavigationMenuTrigger className="rounded-xs cursor-pointer dark:bg-secondary/80">
              Item Four
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={`${montserrat.className} cursor-pointer`}>Link Four</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuLink
            className={`${michroma.className} cursor-pointer bg-inherit dark:bg-secondary/80 dark:text-primary`}>
            Test
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex lg:items-center lg:h-auto lg:w-auto lg:space-x-4 lg:overflow-y-hidden">
        <button 
          className={`${michroma.className} inline w-[100px] p-1 cursor-pointer
                      text-background dark:text-background
                      bg-accent-foreground dark:bg-accent-foreground
                      border border-accent-foreground dark:border-accent-foreground
                      hover:bg-background hover:text-foreground ml-2.5`}>
          Test
        </button>
        <SetThemeButton />
      </div>

      <div className="relative ml-auto lg:hidden">
        <HamburgerMenu isOpen={open} onClick={() => setOpen((o) => !o)} controlsId="mobile-nav" className="" />

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
            <a
              className="inline-block w-full rounded bg-accent-foreground px-4 py-2 text-center text-background"
              href="#">
              CTA
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export { NavBar };
