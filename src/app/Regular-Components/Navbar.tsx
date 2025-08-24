'use client'

import * as React from "react";
import { ReactElement } from "react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { HamburgerMenu } from "./Hamburger-menu";
import { SetThemeButton } from "./setTheme";
import { montserrat } from "@/Fonts/Montserrat";
import { michroma } from "@/Fonts/Michroma";
import Link from 'next/link'

type NavItems = {
  href: string;
  label: string;
}

const navLinks:NavItems[] = [{
  href: "#",
  label: "Label-1"
}, {
  href: "#",
  label: "Label-2"
}, {
  href: "#",
  label: "Label-3"
},
{
  href: "#",
  label: "Label-4"
}
]

function NavBar(): ReactElement {
  const [open, setOpen] = useState(false); //State pour hamburger menu

  return (
    <>
      <NavigationMenu viewport={false} className="hidden sm:w-full sm:flex sm:ml-2.5">
        <NavigationMenuList className="hidden sm:w-full sm:flex sm:flex-row sm:items-center sm:space-x-4">

          <NavigationMenuItem className={`${michroma.className}`}>
            <NavigationMenuTrigger className="sm:rounded-xs sm:cursor-pointer">
              Item One
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={`${montserrat.className} sm:cursor-pointer`}>Link One</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className={`${michroma.className}`}>
            <NavigationMenuTrigger className="sm:rounded-xs sm:cursor-pointer">
              Item Two
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={`${montserrat.className} sm:cursor-pointer`}>Link Two</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className={`${michroma.className}`}>
            <NavigationMenuTrigger className="sm:rounded-xs sm:cursor-pointer">
              Item Three 
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={`${montserrat.className} sm:cursor-pointer`}>Link three</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem className={`${michroma.className}`}>
            <NavigationMenuTrigger className="rounded-xs sm:cursor-pointer">
              Item Four
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink className={`${montserrat.className} sm:cursor-pointer`}>Link Four</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuLink className={`${michroma.className} sm:bg-inherit sm:dark:bg-background sm:dark:text-primary sm:cursor-pointer`}>
            Test
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden sm:flex sm:items-center sm:h-auto space-x-6">
        <button className={`${michroma.className} hidden sm:bg-background sm:border-1 sm:border-accent-foreground sm:inline sm:w-[100px] sm:cursor-pointer sm:hover:bg-accent 
        sm:hover:text-foreground`}>
          Test
        </button>
        <SetThemeButton />
      </div>

      <div className="w-full flex flex-row-reverse relative sm:hidden">
        <div className="ml-auto relative">
          <HamburgerMenu
            isOpen={open}
            onClick={() => setOpen((o) => !o)}
            controlsId="mobile-nav"
            className=""
          />
        </div>

        <div
          id="mobile-nav"
          aria-hidden={!open}
          className={[
            "absolute right-0 top-full z-50 mt-2",
            "w-[min(20rem,70vw)] rounded-md bg-background shadow-lg dark:bg-secondary",
            "origin-top-right transition-all duration-200",
            open
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none",
          ].join(" ")}
        > 
          <nav className="p-3 space-y-2">

            {navLinks.map((link):ReactElement => {
              return (
                <Link key={link.label} href={link.href} className={`${michroma.className} w-full text-left py-2 block`}>
                  {link.label}
                </Link>
              );
            })}
            <a className="inline-block bg-amber-500 px-4 py-2 rounded" href="#">
              CTA
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}

export {
  NavBar
}