// app/components/Navbar.tsx
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  CalendarCheck,
  FileText,
  History,
  BarChart3,
} from "lucide-react";

const links = [
  { href: "/", label: "Início", icon: Home },
  { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
  { href: "/clientes", label: "Clientes", icon: Users },
  { href: "/agendamentos", label: "Agendamentos", icon: CalendarCheck },
  { href: "/orcamentos", label: "Orçamentos", icon: FileText },
  { href: "/historico", label: "Histórico", icon: History },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-primary text-white px-4 py-3 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-4 text-sm font-medium">
        {links.map(({ href, label, icon: Icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-2 px-3 py-2 rounded transition-colors ${
              pathname === href
                ? "bg-secondary text-primary"
                : "hover:bg-secondary/20"
            }`}
          >
            <Icon size={18} />
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
