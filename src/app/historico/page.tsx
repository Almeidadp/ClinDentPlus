"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Printer, FileEdit, Trash2 } from "lucide-react";
import Link from "next/link";
import historico from "./historico.json";


export default function HistoricoPage() {
  const [dados, setDados] = useState(historico);

  // Exportar como CSV
  const exportCSV = () => {
    const csv = [
      ["Paciente", "Procedimento", "Data", "Observações"],
      ...dados.map(item => [item.paciente, item.procedimento, item.data, item.observacoes])
    ]
      .map(row => row.join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "historico_consultas.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Imprimir
  const imprimir = () => {
    window.print();
  };

  return (
    <main className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-3xl font-bold text-blue-700">Histórico de Consultas</h1>
        <div className="flex gap-2 flex-wrap">
          <Button onClick={exportCSV} className="bg-green-600 hover:bg-green-700 text-white">
            <Download className="w-4 h-4 mr-2" /> Exportar CSV
          </Button>
          <Button onClick={imprimir} className="bg-yellow-500 hover:bg-yellow-600 text-white">
            <Printer className="w-4 h-4 mr-2" /> Imprimir
          </Button>
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/">Voltar ao Início</Link>
          </Button>
        </div>
      </div>

      {/* Tabela */}
      <Card>
        <CardContent className="overflow-x-auto p-4">
          <table className="min-w-full table-auto border border-gray-200 text-sm">
            <thead className="bg-blue-100 text-blue-800 font-semibold">
              <tr>
                <th className="px-4 py-2 border">Paciente</th>
                <th className="px-4 py-2 border">Procedimento</th>
                <th className="px-4 py-2 border">Data</th>
                <th className="px-4 py-2 border">Observações</th>
                <th className="px-4 py-2 border">Ações</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item, index) => (
                <tr key={index} className="hover:bg-blue-50">
                  <td className="border px-4 py-2">{item.paciente}</td>
                  <td className="border px-4 py-2">{item.procedimento}</td>
                  <td className="border px-4 py-2">{item.data}</td>
                  <td className="border px-4 py-2">{item.observacoes}</td>
                  <td className="border px-4 py-2 text-center space-x-2">
                    <Button variant="outline" size="sm">
                      <FileEdit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </main>
  );
}
