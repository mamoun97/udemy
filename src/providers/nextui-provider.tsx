"use client";

import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider } from './theme-provider';

export function NextuiProvider({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}