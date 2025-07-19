'use client';

import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InternalLayoutProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

export default function InternalLayout({ title, icon, children }: InternalLayoutProps) {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-white p-4 sm:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-10">
        <header className="flex justify-between items-center border-b pb-4 mb-6">
          <div className="flex items-center gap-3 text-blue-700">
            {icon}
            <h1 className="text-2xl sm:text-3xl font-semibold">{title}</h1>
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 hover:underline transition-all"
          >
            ← Início
          </Link>
        </header>

        <section>{children}</section>
      </div>
    </main>
  );
}
