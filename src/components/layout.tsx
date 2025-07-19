// app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";

// Importa a fonte Poppins com variação de peso
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // Cria a variável para o Tailwind
});

export const metadata: Metadata = {
  title: "ClinDentPlus",
  description: "Sistema de gestão odontológica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body className="bg-neutral-50 text-neutral-900 font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
