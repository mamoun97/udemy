
import { NextuiProvider } from "@/providers/nextui-provider";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <NextuiProvider>
          {/* <div className="dark"> */}

            {children}
          {/* </div> */}
        </NextuiProvider>
      </body>
    </html>
  );
}
