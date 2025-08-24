'use client';

import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { michroma } from "@/Fonts/Michroma";

function Footer({ className }: { className: string }): ReactElement {
  interface FooterElements {
    elementName?: string;
    url?: string;
    image?: string;
  }

  const footerElements: FooterElements[] = [
    {
      image: '/HaorixLogo.png',
      url: '/',
    },
    { elementName: 'Div 1', url: '#' },
    { elementName: 'Div 2', url: '#' },
    { elementName: 'Div 3', url: '#' },
  ];

  return (
    <footer className={className}>
      <div className="grid grid-cols-1 pt-3.5 sm:pt-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {footerElements.map((element: FooterElements, index) => (
          <Link
            key={index}
            href={element.url ?? '#'}
            className={`${michroma.className} text-muted-foreground hover:text-primary block duration-150`}
          >
            {element.elementName}
            {element.image && (
              <>
                {/* Logo light mode */}
                <Image
                  src="/HaorixLogo.png"
                  alt="Haorix Logo Light"
                  width={100}
                  height={40}
                  className="inline-block dark:hidden w-[100px] h-auto "
                />
                {/* Logo dark mode */}
                <Image
                  src="/HaorixLogoDark.png"
                  alt="Haorix Logo Dark"
                  width={100}
                  height={40}
                  className="hidden dark:inline-block w-[100px] h-auto"
                />
              </>
            )}
          </Link>
        ))}
      </div>
    </footer>
  );
}

export {
  Footer
}