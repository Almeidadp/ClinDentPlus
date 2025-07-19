"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const agendamentos = [
  {
    id: 1,
    paciente: "João da Silva",
    data: "2025-07-25",
    horario: "14:00",
    status: "Confirmado",
  },
  {
    id: 2,
    paciente: "Maria Oliveira",
    data: "2025-07-26",
    horario: "10:30",
    status: "Pendente",
  },
  {
    id: 3,
    paciente: "Carlos Souza",
    data: "2025-07-27",
    horario: "09:00",
    status: "Cancelado",
  },
  {
    id: 4,
    paciente: "Ana Costa",
    data: "2025-07-28",
    horario: "15:30",
    status: "Confirmado",
  },
  {
    id: 5,
    paciente: "Fernanda Lima",
    data: "2025-07-29",
    horario: "11:00",
    status: "Pendente",
  },
  {
    id: 6,
    paciente: "Roberto Pereira",
    data: "2025-07-30",
    horario: "13:30",
    status: "Confirmado",
  },
  {
    id: 7,
    paciente: "Luiza Santos",
    data: "2025-07-31",
    horario: "16:00",
    status: "Cancelado",
  },
  {
    id: 8,
    paciente: "Pedro Almeida",
    data: "2025-08-01",
    horario: "12:30",
    status: "Pendente",
  },
];

export default function AgendamentosPage() {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-700">Agendamentos</h1>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
          <Link href="/">Voltar ao Início</Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {agendamentos.map((item) => (
          <Card key={item.id} className="shadow-md border border-blue-100 rounded-xl">
            <CardContent className="space-y-2 p-5">
              <h2 className="text-lg font-semibold text-neutral-900">{item.paciente}</h2>
              <p className="text-sm text-gray-600">📅 Data: {item.data}</p>
              <p className="text-sm text-gray-600">⏰ Horário: {item.horario}</p>
              <p className="text-sm font-medium">
                Status:{" "}
                <span
                  className={
                    item.status === "Confirmado"
                      ? "text-green-600"
                      : item.status === "Pendente"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }
                >
                  {item.status}
                </span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
