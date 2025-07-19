"use client";

import Link from "next/link";
import {
  FaUsers,
  FaCalendarAlt,
  FaClipboardList,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const shortcuts = [
  {
    icon: <FaUsers size={32} className="text-blue-600" />,
    title: "Clientes",
    subtitle: "15 cadastrados",
    description: "Registre, edite e visualize dados dos pacientes.",
    href: "/clientes",
  },
  {
    icon: <FaCalendarAlt size={32} className="text-blue-600" />,
    title: "Agendamentos",
    subtitle: "8 marcados para hoje",
    description: "Controle datas, horários e confirmações.",
    href: "/agendamentos",
  },
  {
    icon: <FaClipboardList size={32} className="text-blue-600" />,
    title: "Histórico",
    subtitle: "124 atendimentos",
    description: "Veja todos os atendimentos de forma clara.",
    href: "/historico",
  },
  {
    icon: <FaFileInvoiceDollar size={32} className="text-blue-600" />,
    title: "Orçamentos",
    subtitle: "5 pendentes",
    description: "Crie e acompanhe propostas de tratamento.",
    href: "/orcamentos",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-sm border-b z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-xl font-bold text-blue-700">ClinDentPlus</h1>
          <div className="space-x-4 text-sm hidden md:flex">
            {shortcuts.map(({ title, href }) => (
              <Link key={href} href={href} className="hover:underline">
                {title}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Boas-vindas */}
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-800">
              Bem-vindo ao <span className="text-primary">ClinDentPlus</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Sistema inteligente para clínicas odontológicas: pacientes, agendamentos, orçamentos e muito mais.
            </p>
            <p className="text-sm text-gray-500">
              Último acesso: 19/07/2025 às 09:45
            </p>
            <Button className="bg-blue-600 text-white">+ Novo Cliente</Button>
          </section>

          {/* Acesso rápido */}
          <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {shortcuts.map(({ icon, title, subtitle, description, href }) => (
              <Card
                key={title}
                className="shadow-md border border-blue-100 hover:shadow-xl transition-all"
              >
                <CardContent className="p-5 flex flex-col gap-4 justify-between h-full">
                  <div className="flex items-center gap-4">
                    {icon}
                    <div>
                      <h2 className="text-lg font-semibold text-blue-900">{title}</h2>
                      <p className="text-xs text-muted-foreground">{subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1">
                      <Link href={href}>Acessar</Link>
                    </Button>
                    <Link href={href} className="text-xs text-blue-600 underline hover:text-blue-800">
                      Ver detalhes
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-blue-50 border-t mt-12">
        <div className="max-w-6xl mx-auto p-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} ClinDentPlus. Desenvolvido por Danilo Almeida.
        </div>
      </footer>
    </>
  );
}
