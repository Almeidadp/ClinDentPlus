"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const orcamentos = [
  {
    id: 1,
    paciente: "João da Silva",
    total: "R$ 450,00",
    procedimentos: ["Limpeza", "Restauração"],
    aprovado: true,
  },
  {
    id: 2,
    paciente: "Maria Oliveira",
    total: "R$ 1.200,00",
    procedimentos: ["Canal", "Coroa"],
    aprovado: false,
  },
  {
    id: 3,
    paciente: "Carlos Pereira",
    total: "R$ 800,00",
    procedimentos: ["Limpeza", "Coroa"],
    aprovado: true,
  },
  {
    id: 4,
    paciente: "Ana Souza",
    total: "R$ 600,00",
    procedimentos: ["Limpeza", "Coroa"],
    aprovado: false,
  },
  {
    id: 5,
    paciente: "Fernanda Lima",
    total: "R$ 1.500,00",
    procedimentos: ["Limpeza", "Coroa"],
    aprovado: true,
  },
  {
    id: 6,
    paciente: "Roberto Costa",
    total: "R$ 2.000,00",
    procedimentos: ["Canal", "Coroa"],
    aprovado: false,
  },
  {
    id: 7,
    paciente: "Luiza Santos",
    total: "R$ 1.200,00",
    procedimentos: ["Limpeza", "Coroa"],
    aprovado: false,
  },
  {
    id: 8,
    paciente: "Pedro Almeida",
    total: "R$ 800,00",
    procedimentos: ["Limpeza", "Coroa"],
    aprovado: false,
  },
];

export default function OrcamentosPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-700">Orçamentos</h1>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href="/">Voltar ao Início</Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {orcamentos.map((item) => (
          <Card
            key={item.id}
            className="shadow-md border border-blue-100 rounded-xl hover:shadow-lg transition"
          >
            <CardContent className="space-y-3 p-5">
              <h2 className="text-lg font-semibold text-neutral-900">{item.paciente}</h2>
              <p className="text-sm text-gray-600">💰 Total: {item.total}</p>
              <p className="text-sm text-gray-600">
                🦷 Procedimentos: {item.procedimentos.join(", ")}
              </p>
              <p className="text-sm font-medium">
                Status:{" "}
                <span
                  className={
                    item.aprovado ? "text-green-600" : "text-yellow-600"
                  }
                >
                  {item.aprovado ? "Aprovado" : "Pendente"}
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
