"use client";

import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider } from './theme-provider';
import { useRouter } from 'next/navigation';

export function NextuiProvider({children}: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}