'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from ".components/ui/button"; // <— caminho correto
import { Moon, Sun } from "lucide-react";

export default function NavBar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("fp_theme");
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = saved ? saved === "dark" : prefers;
      setDark(initial);
      if (initial) document.documentElement.classList.add("dark");
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem("fp_theme", dark ? "dark" : "light"); } catch {}
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/70 dark:bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60">
      <nav className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold">Felipe Pessoa</Link>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <Link href="/" className="hover:underline">Início</Link>
            <Link href="/resume" className="hover:underline">Currículo</Link>
            <Link href="/uxui" className="hover:underline">UX/UI</Link>
            <Link href="/photography" className="hover:underline">Fotografia</Link>
          </div>
        </div>
        <Button variant="secondary" className="rounded-full px-3" onClick={() => setDark(!dark)}>
          {dark ? <Sun size={16} className="mr-1" /> : <Moon size={16} className="mr-1" />}
          {dark ? "Modo Claro" : "Modo Escuro"}
        </Button>
      </nav>
    </header>
  );
}
