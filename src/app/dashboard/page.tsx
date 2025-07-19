'use client';

import {
  Users,
  CalendarDays,
  FileClock,
  CheckCircle,
} from "lucide-react";

const metrics = [
  {
    title: "Clientes Ativos",
    value: 150,
    icon: <Users className="text-blue-600" size={28} />,
  },
  {
    title: "Consultas Hoje",
    value: 8,
    icon: <CalendarDays className="text-emerald-600" size={28} />,
  },
  {
    title: "Orçamentos Pendentes",
    value: 12,
    icon: <FileClock className="text-yellow-600" size={28} />,
  },
  {
    title: "Pagamentos em Dia",
    value: "82%",
    icon: <CheckCircle className="text-green-600" size={28} />,
  },
];

export default function Dashboard() {
  return (
    <main className="bg-background min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <section className="mb-6">
          <h1 className="text-3xl font-bold text-primary">📊 Painel da Clínica</h1>
          <p className="text-gray-600 mt-2">
            Acompanhe os principais indicadores de atendimento e faturamento.
          </p>
        </section>

        {/* Cards com métricas */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white border shadow-card p-5 rounded-xl flex flex-col items-start gap-2 hover:shadow-md transition"
            >
              {metric.icon}
              <h3 className="text-gray-500 text-sm font-medium">{metric.title}</h3>
              <span className="text-2xl font-bold text-contrast">{metric.value}</span>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
