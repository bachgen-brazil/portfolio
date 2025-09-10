cat > src/app/page.tsx <<'TSX'
'use client';

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const theme = { brand: "#003366", brandAlt: "#00D1FF" };
const langVariants = { initial: { opacity: 0, y: 15 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -15 } };

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-950 transition-colors duration-500">
      <header
        className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${theme.brand} 0%, ${theme.brand} 65%, ${theme.brandAlt} 65%, ${theme.brandAlt} 100%)` }}
      >
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16 text-white">
          <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl sm:text-4xl font-bold">
            Felipe Pessoa de Sousa
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.p variants={langVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.4 }} className="text-base sm:text-lg max-w-3xl mt-3">
              Consultor de Operações, Auditor Marítimo e Supervisor de Equipes Offshore — com frente criativa em UX/UI e fotografia.
            </motion.p>
          </AnimatePresence>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/resume"><Button className="rounded-2xl">Ver Currículo</Button></Link>
            <Link href="/uxui"><Button variant="outline" className="rounded-2xl">Portfólio & Cases UX/UI</Button></Link>
            <Link href="/photography"><Button variant="outline" className="rounded-2xl">Fotografia</Button></Link>
          </div>
        </div>
        <div className="absolute -bottom-6 right-0 h-16 w-2/3 rotate-2" style={{ background: "rgba(255,255,255,0.15)" }} />
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="border-0 shadow-md bg-white dark:bg-slate-900 lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg" style={{ color: theme.brand }}>Sobre mim</CardTitle>
          </CardHeader>
          <CardContent className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
            <p>Experiência em auditorias marítimas, inspeções de embarcações offshore e conformidade regulatória. Atual supervisão de equipe de oficiais portuários no Porto de Macaé.</p>
            <p>Exploro UX/UI e fotografia como extensões naturais de comunicação clara e rigor operacional — resultando em soluções objetivas, funcionais e visuais.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/resume"><Button className="rounded-2xl">Currículo Detalhado</Button></Link>
              <Link href="/uxui"><Button variant="outline" className="rounded-2xl">Portfólio UX/UI</Button></Link>
              <Link href="/photography"><Button variant="outline" className="rounded-2xl">Galeria de Fotografia</Button></Link>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg" style={{ color: theme.brand }}>Formações & Highlights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div><p className="font-medium text-slate-900 dark:text-slate-100">Ciências Náuticas</p><p className="text-sm text-slate-600 dark:text-slate-400">CIABA — Belém</p></div>
            <div><p className="font-medium text-slate-900 dark:text-slate-100">Port Management & Logistics</p><p className="text-sm text-slate-600 dark:text-slate-400">Abracomex</p></div>
            <div><p className="font-medium text-slate-900 dark:text-slate-100">MBA em Gestão (em andamento)</p><p className="text-sm text-slate-600 dark:text-slate-400">IBMEC</p></div>
            <div className="pt-2">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">Competências-chave</p>
              <div className="flex flex-wrap gap-2">
                <Badge className="rounded-full border-slate-300 dark:border-slate-700">Auditorias Marítimas</Badge>
                <Badge className="rounded-full border-slate-300 dark:border-slate-700">SMS & Compliance</Badge>
                <Badge className="rounded-full border-slate-300 dark:border-slate-700">Relatórios Técnicos</Badge>
                <Badge className="rounded-full border-slate-300 dark:border-slate-700">Liderança de Equipes</Badge>
                <Badge className="rounded-full border-slate-300 dark:border-slate-700">UX/UI</Badge>
                <Badge className="rounded-full border-slate-300 dark:border-slate-700">Fotografia</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-md bg-white dark:bg-slate-900 lg:col-span-3">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg" style={{ color: theme.brand }}>Acessos rápidos</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Link href="/resume"><Button className="rounded-2xl">Currículo</Button></Link>
            <Link href="/uxui"><Button variant="outline" className="rounded-2xl">Portfólio UX/UI</Button></Link>
            <Link href="/photography"><Button variant="outline" className="rounded-2xl">Fotografia</Button></Link>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
TSX
