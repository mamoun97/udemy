"use client";

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from './theme-provider';
import { AuthContextProvider } from './auth-provider';
import { store } from '@/store';
import { Provider } from 'react-redux';


export function NextuiProvider({ children }: { children: React.ReactNode }) {

  return (
    <NextUIProvider disableAnimation>
      <Provider store={store}>
        <AuthContextProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>

        </AuthContextProvider>
      </Provider>


    </NextUIProvider>
  )
}