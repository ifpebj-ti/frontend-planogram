import type { Metadata } from "next";
import  localFont  from "next/font/local"; // Corrigido para usar o carregador do Next.js
import "@fontsource/roboto"; // Importa Roboto do Fontsource
import "./globals.css";

// Configuração da fonte Geist Sans
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// Configuração da fonte Geist Mono
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Planograma",
  description: "Planograma Farmacia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

