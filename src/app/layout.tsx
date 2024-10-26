
import { NextuiProvider } from "@/providers/nextui-provider";
import "./globals.css";
import NextProgress from "@/components/next-progress";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body
        className="font-myfont no-scrollbar"
      >
        <NextProgress/>
        <NextuiProvider>
          {children}
        </NextuiProvider>
      </body>
    </html>
  );
}
