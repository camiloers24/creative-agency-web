// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, JetBrains_Mono, Reenie_Beanie } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const script = Reenie_Beanie({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "FRAME | Creatives' Lab",
  description: "Creative Agency based in Miami and Mexico City",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${jetbrains.variable} ${script.variable} antialiased bg-black`}
      >
        <Navbar />
        {/* Usamos un contenedor mínimo de altura para que el footer siempre se empuje al fondo */}
        <div className="min-h-screen flex flex-col justify-between">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}