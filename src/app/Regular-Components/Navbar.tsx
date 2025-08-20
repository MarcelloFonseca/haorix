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

export function NavBar(): ReactElement {
  const [open, setOpen] = useState(false); //State pour hamburger menu!

  //TODO:Enlever middlebar de animation hamburger menu

  return (
    <>
      <NavigationMenu viewport={false} className="w-full hidden sm:flex">
        <NavigationMenuList className="w-full flex flex-row items-center">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-xs">
              Item One
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link One</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-xs">
              Item Two
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link Two</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-xs">
              Item Three
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link three</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-xs">
              Item Four
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link Four</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuLink className="sm:bg-inherit sm:dark:bg-black sm:dark:text-white">
            TEST
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden sm:flex sm:items-center sm:h-auto sm:border-solid sm:border-2 sm:border-red-300 space-x-2.5">
        <button className="bg-black hidden sm:inline sm:w-[100px] text-white">
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
            "w-[min(20rem,70vw)] rounded-md bg-white shadow-lg",
            "origin-top-right transition-all duration-200",
            open
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-95 pointer-events-none",
          ].join(" ")}
        >
          {/*TODO: Mapper,Transformer en Links components+styles*/}
          <nav className="p-3 space-y-2">
            <button className="w-full text-left py-2"></button>
            <button className="w-full text-left py-2">Item Two</button>
            <button className="w-full text-left py-2">Item Three</button>
            <button className="w-full text-left py-2">Item Four</button>
            <a className="inline-block bg-amber-500 px-4 py-2 rounded" href="#">
              CTA
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
