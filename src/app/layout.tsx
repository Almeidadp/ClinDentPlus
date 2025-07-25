// src/app/layout.tsx
import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils"; // ✅ Certifique-se de importar o `cn`

// Fonte personalizada com Tailwind
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
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
      <body className={cn("bg-background text-foreground font-sans antialiased")}>
        {children}
      </body>
    </html>
  );
}
