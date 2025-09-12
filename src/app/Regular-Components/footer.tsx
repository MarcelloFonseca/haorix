'use client';

import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { michroma } from '@/Fonts/Michroma';

//FAIT:(Tablette)

// Types & data hoisted
type FooterItem = {
  label?: string;
  href?: string;
  imageLight?: string;
  imageDark?: string;
};

const footerItems: FooterItem[] = [
  { imageLight: '/HaorixLogo.png', imageDark: '/HaorixLogoDark.png', href: '/' },
  { label: 'Div 1', href: '#' },
  { label: 'Div 2', href: '#' },
  { label: 'Div 3', href: '#' },
  { label: 'Div 4', href: '#' },
  { label: 'Div 5', href: '#' },
];

function Footer({ className = '' }: { className?: string }): ReactElement {
  return (
    <footer className={`bg-background border-t border-border/30 px-3 md:px-4 lg:px-6 py-6 ${className}`}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 md:place-items-start">
        {footerItems.map((item, idx) => {
          const isLogo = !!item.imageLight;
          const label = item.label ?? 'Logo Haorix';
          const href = item.href ?? '#';

          return (
            <Link
              key={idx}
              href={href}
              aria-label={isLogo ? 'Aller à l’accueil' : undefined}
              className={`${michroma.className} block text-muted-foreground hover:text-primary transition-colors`}>
              {isLogo ? (
                <span className="inline-flex items-center">
                  {/* Light logo */}
                  <Image
                    src={item.imageLight!}
                    alt="Haorix Logo (clair)"
                    width={100}
                    height={40}
                    className="inline-block dark:hidden h-auto w-[100px]"
                    sizes="(min-width:1024px) 100px, 80px"
                    priority={false}
                  />
                  {/* Dark logo */}
                  <Image
                    src={item.imageDark!}
                    alt="Haorix Logo (sombre)"
                    width={100}
                    height={40}
                    className="hidden dark:inline-block h-auto w-[100px]"
                    sizes="(min-width:1024px) 100px, 80px"
                  />
                </span>
              ) : (
                label
              )}
            </Link>
          );
        })}
      </div>
    </footer>
  );
}

export { Footer };
