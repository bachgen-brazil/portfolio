mkdir -p src/app/uxui
cat > src/app/uxui/page.tsx <<'TSX'
'use client';

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import Link from "next/link";

type Case = { title: string; summary: string; tags: string[]; link?: string; };
const theme = { brand: "#003366" };

const cases: Case[] = [
  {
    title: "Dashboard Operacional Offshore",
    summary:
      "Proposta de UX para visão executiva e operacional (KPIs, backlog de inspeções, conformidade).",
    tags: ["UX", "Dashboard", "KPIs"],
  },
  {
    title: "App de Vistoria Embarcada",
    summary:
      "Fluxo mobile para checklists técnicos e evidências fotográficas.",
    tags: ["UX Research", "Mobile", "Formulários"],
  },
  {
    title: "Design System Minimal Navy",
    summary:
      "Paleta, tipografia e componentes reutilizáveis com acessibilidade AA.",
    tags: ["Design System", "Acessibilidade", "UI"],
  },
];

export default function UXUIPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold mb-2">Portfólio & Cases de UX/UI</h1>
      <p className="text-slate-700 dark:text-slate-300 mb-6">
        Seleção de projetos que conectam operação, clareza visual e usabilidade.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((c, i) => (
          <Card key={i} className="border-0 shadow-md bg-white dark:bg-slate-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: theme.brand }}>
                {c.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-slate-700 dark:text-slate-300">{c.summary}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((t, idx) => (
                  <Badge key={idx} className="rounded-full border-slate-300 dark:border-slate-700">
                    {t}
                  </Badge>
                ))}
              </div>
              {c.link && (
                <Link href={c.link} className="underline text-sm" target="_blank">
                  Ver estudo completo
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Link href="/resume" className="underline">Ver Currículo</Link>
      </div>
    </main>
  );
}
TSX
