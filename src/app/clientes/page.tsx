"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Users } from "lucide-react";
import { FaEdit, FaTrash, FaArrowLeft } from "react-icons/fa";

const clientesFicticios = [
  { nome: "Ana Beatriz Silva", email: "ana.silva@email.com", nascimento: "1992-04-15" },
  { nome: "Carlos Henrique Souza", email: "carlos.henrique@email.com", nascimento: "1987-08-03" },
  { nome: "Fernanda Lima", email: "fernanda.lima@email.com", nascimento: "1995-11-21" },
  { nome: "Marcos Vinícius", email: "marcos.vinicius@email.com", nascimento: "1990-02-10" },
  { nome: "Juliana Castro", email: "juliana.castro@email.com", nascimento: "1985-06-30" },
  { nome: "Roberto Carlos", email: "roberto.carlos@email.com", nascimento: "1980-12-05" },
  { nome: "Patrícia Gomes", email: "patricia.gomes@email.com", nascimento: "1998-09-18" },
  { nome: "Eduardo Martins", email: "eduardo.martins@email.com", nascimento: "1993-07-07" },
  { nome: "Sofia Almeida", email: "sofia.almeida@email.com", nascimento: "1996-05-12" },
  { nome: "Guilherme Lima", email: "guilherme.lima@email.com", nascimento: "1989-03-25" },
  { nome: "Isabela Rocha", email: "isabela.rocha@email.com", nascimento: "1994-10-08" },
  { nome: "Lucas Pereira", email: "lucas.pereira@email.com", nascimento: "1997-01-15" },
  { nome: "Mariana Costa", email: "mariana.costa@email.com", nascimento: "1991-08-22" },
  { nome: "Thiago Fernandes", email: "thiago.fernandes@email.com", nascimento: "1988-11-30" },
  { nome: "Camila Dias", email: "camila.dias@email.com", nascimento: "1999-06-14" },
];

export default function ClientesPage() {
  const [clientes, setClientes] = useState(clientesFicticios);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Cabeçalho */}
      <Card className="shadow-lg border rounded-xl">
        <CardContent className="space-y-4 p-6">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-600" />
            <h1 className="text-2xl font-bold text-neutral-800">Gerenciamento de Clientes</h1>
          </div>
          <p className="text-neutral-600">
            Visualize, edite e gerencie as informações dos pacientes cadastrados.
          </p>

          {/* Botão de retorno */}
          <div>
            <Link href="/">
              <Button variant="ghost" className="text-blue-700 hover:text-blue-900">
                <FaArrowLeft className="mr-2" />
                Voltar para Home
              </Button>
            </Link>
          </div>

          {/* Botão de cadastro com modal */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Cadastrar novo cliente
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Novo Cliente</DialogTitle>
              </DialogHeader>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
                <input
                  type="date"
                  placeholder="Data de nascimento"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Salvar
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      {/* Lista de clientes */}
      <Card className="shadow-lg border rounded-xl">
        <CardContent className="p-6 overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4 text-blue-800">Lista de Clientes</h2>
          <table className="min-w-full table-auto border border-gray-200 text-sm text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border-b">Nome</th>
                <th className="px-4 py-2 border-b">E-mail</th>
                <th className="px-4 py-2 border-b">Nascimento</th>
                <th className="px-4 py-2 border-b text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{cliente.nome}</td>
                  <td className="px-4 py-2 border-b">{cliente.email}</td>
                  <td className="px-4 py-2 border-b">
                    {new Date(cliente.nascimento).toLocaleDateString("pt-BR")}
                  </td>
                  <td className="px-4 py-2 border-b text-center space-x-2">
                    <Button size="sm" variant="outline" className="text-blue-600 hover:bg-blue-50">
                      <FaEdit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:bg-red-50"
                      onClick={() => {
                        const novosClientes = [...clientes];
                        novosClientes.splice(index, 1);
                        setClientes(novosClientes);
                      }}
                    >
                      <FaTrash className="w-4 h-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
