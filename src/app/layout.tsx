

import type { Metadata } from "next";
import {Playfair_Display_SC, Inria_Serif, Karla, Mea_Culpa, Roboto } from "next/font/google";
import "./globals.css";
import { VhProvider } from "@/components/VhProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

const playFair = Playfair_Display_SC({
  variable: '--font-main',
  weight:'400',
  subsets: ['vietnamese'],
});

 const meaCupa = Mea_Culpa({
  variable: '--font-destac',
  weight: '400',
  subsets: ['vietnamese'],
});

const inriaSerif = Inria_Serif({
  variable: "--font-secondary",
  weight: '700',
  subsets: ["latin"],
});
const karla = Karla({
  variable: "--font-button",
  weight: '700',
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Império da Beleza",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="pt-br">  
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      
      <body
        className={`${playFair.variable} ${inriaSerif.variable} ${karla.variable} ${meaCupa.variable} antialiased`}
      >
        <VhProvider>
          {children}
          <SpeedInsights />
        </VhProvider>
      </body>
    </html>
  );
}
