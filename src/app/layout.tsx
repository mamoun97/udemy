

import { NextuiProvider } from "@/providers/nextui-provider";
import "./globals.css";
import NextProgress from "@/components/next-progress";

import Head from "next/head";
import { Toaster } from "react-hot-toast";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

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
          <Toaster position="bottom-center" />
        </NextuiProvider>
      </body>
    </html>
  );
}
