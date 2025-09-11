'use client';

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import Logo from "../components/Logo";

const theme = { brand: "#003366", brandAlt: "#00D1FF" };
const langVariants = { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -15 } };

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* HERO com LOGO */}
      <header
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${theme.brand} 0%, ${theme.brand} 65%, ${theme.brandAlt} 65%, ${theme.brandAlt} 100%)` }}
      >
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16 text-white">
          {/* Logo no topo */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <Logo size={64} className="rounded-md" />
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl font-bold">Felipe Pessoa de Sousa</h1>
              <AnimatePresence mode="wait">
                <motion.p
                  variants={langVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.4 }}
                  className="text-sm sm:text-base max-w-3xl opacity-90"
                >
                  Consultor de Operações, Auditor Marítimo e Supervisor de Equipes Offshore — com frente criativa em UX/UI e fotografia.
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sobre mim */}
        <Card className="border-0 shadow-md bg-white dark:bg-slate-900 lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg" style={{ color: theme.brand }}>Sobre mim</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
            <p>
              Experiência em auditorias marítimas, inspeções de embarcações offshore (AHTS, PSV, OSRV, FSV)
              e conformidade regulatória no sistema Petrobras. Supervisão de equipe de oficiais portuários
              no Porto de Macaé, com foco em eficiência operacional, SMS e confiabilidade técnica.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Badge className="rounded-full border-slate-300 dark:border-slate-700">Auditorias Marítimas</Badge>
              <Badge className="rounded-full border-slate-300 dark:border-slate-700">SMS & Compliance</Badge>
              <Badge className="rounded-full border-slate-300 dark:border-slate-700">Relatórios Técnicos</Badge>
              <Badge className="rounded-full border-slate-300 dark:border-slate-700">Liderança de Equipes</Badge>
              <Badge className="rounded-full border-slate-300 dark:border-slate-700">UX/UI</Badge>
              <Badge className="rounded-full border-slate-300 dark:border-slate-700">Fotografia</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg" style={{ color: theme.brand }}>Formações & Highlights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">Ciências Náuticas</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">CIABA — Belém</p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">Port Management & Logistics</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Abracomex</p>
            </div>
            <div>
              <p className="font-medium text-slate-900 dark:text-slate-100">MBA em Gestão (em andamento)</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">IBMEC</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
