'use client';

import { ReactElement, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { DarkModeIcon } from '@/icons/darkMode';
import { LightModeIcon } from '@/icons/lightMode';

function SetThemeButton(): ReactElement | null {
  const { resolvedTheme, setTheme } = useTheme(); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; 

  const toggleTheme = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  return resolvedTheme === 'dark' ? (
    <LightModeIcon onClick={toggleTheme} className="lg:cursor-pointer" size="lg" />
  ) : (
    <DarkModeIcon onClick={toggleTheme} className="lg:cursor-pointer" size="lg" />
  );
}

export {
  SetThemeButton
}