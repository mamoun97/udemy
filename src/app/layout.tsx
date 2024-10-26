
import { NextuiProvider } from "@/providers/nextui-provider";
import "./globals.css";
import NextProgress from "@/components/next-progress";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-myfont"
      >
        <NextProgress/>
        <NextuiProvider>
          {children}
        </NextuiProvider>
      </body>
    </html>
  );
}
