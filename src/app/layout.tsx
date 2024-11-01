
"use client"
import { NextuiProvider } from "@/providers/nextui-provider";
import "./globals.css";
import NextProgress from "@/components/next-progress";
import { useEffect } from "react";
import Head from "next/head";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    // Register the service worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered:', registration);
          })
          .catch((error) => {
            console.log('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return (
    <html lang="en" className="no-scrollbar">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#F1F1F1" />
      </Head>
      <body
        className="font-myfont no-scrollbar"
      >
        <NextProgress />
        <NextuiProvider>
          {children}   
        </NextuiProvider>
      </body>
    </html>
  );
}
