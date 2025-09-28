'use client';

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Mail,
  MapPin,
  Linkedin,
  Phone,
  Sun,
  Moon,
  CheckCircle2,
} from "lucide-react";

import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import Logo from "../../components/Logo";

/* =============================
   Perfil & Tema
============================= */
const profile = {
  name: "Felipe Pessoa de Sousa",
  location: "Macaé – RJ, Brasil",
  email: "felipe7rugany@gmail.com",
  linkedin: "https://www.linkedin.com/in/SEU-LINK-AQUI", // ajuste aqui
  whatsapp:
    "https://wa.me/5522992474747?text=Ol%C3%A1%20Felipe%2C%20vi%20seu%20curr%C3%ADculo%20online",
  headline_pt:
    "Consultor de Operações | Auditor Marítimo | Supervisor de Equipes Offshore",
  headline_en:
    "Operations Consultant | Marine Surveyor | Offshore Team Supervisor",
  cv_pt: "/assets/CV_Felipe_Pessoa_PT.pdf",
  cv_en: "/assets/CV_Felipe_Pessoa_EN.pdf",
  theme: {
    brand: "#003366",
    brandAlt: "#00D1FF",
  },
} as const;

/* =============================
   Conteúdo PT/EN
============================= */
const content = {
  pt: {
    summary:
      "Profissional com mais de 5 anos no sistema Petrobras, atuando em auditorias marítimas, inspeções de embarcações offshore (AHTS, PSV, OSRV, FSV) e conformidade regulatória. Atualmente supervisiona equipe de oficiais portuários no Porto de Macaé, com foco em eficiência operacional, SMS e confiabilidade técnica. Certificação STCW III/1. Inglês fluente.",
    about:
      "Atuo com integridade operacional, segurança e melhoria contínua. Minha trajetória combina auditoria técnica, coordenação de equipes e interface regulatória para garantir desempenho confiável e compliance em operações offshore.",
    sections: {
      experience: "Experiência Profissional",
      education: "Educação",
      certs: "Certificações Técnicas",
      extras: "Formações e Certificações Extras",
      skills: "Competências",
      downloads: "Downloads",
      about: "Sobre mim",
    },
    experience: [
      {
        role: "Consultor de Operações Marítimas",
        company: "SONDA PROCKWORK / Porto de Macaé",
        period: "Dez/2023 – Atual",
        bullets: [
          "Lidera equipe de oficiais portuários em operações offshore, garantindo segurança e eficiência.",
          "Coordena interface entre operação, SMS e requisitos contratuais Petrobras.",
          "Produz relatórios técnicos que suportam decisões estratégicas da gerência.",
        ],
      },
      {
        role: "Auditor Técnico e Surveyor",
        company: "RINA | APSEG | Ápice Gestão de Projetos",
        period: "2019 – 2023",
        bullets: [
          "Realizou inspeções em embarcações offshore sob contratos Petrobras (AHTS, PSV, OSRV, FSV).",
          "Testou e avaliou sistemas críticos (geradores, bombas, DP, fire pumps).",
          "Verificou planos de manutenção e compliance legal (ANP, ANTAQ, Capitania dos Portos).",
        ],
      },
      {
        role: "Cadet Engineer (Praticante de Máquinas)",
        company: "Aliança Navegação e Logística / Bourbon Offshore",
        period: "2017 – 2019",
        bullets: [
          "Apoio na praça de máquinas, rotinas de manutenção e testes de sistemas.",
          "Participação em drydock internacional (Portugal), manutenção e reparos.",
        ],
      },
    ],
    education: [
      { course: "B.Sc. Ciências Náuticas", place: "CIABA – Belém", period: "2014 – 2019" },
      { course: "Port Management & Logistics", place: "Abracomex", period: "2017" },
    ],
    certs: [
      "STCW III/1 – Oficial de Máquinas",
      "Survival, Firefighting (básico e avançado), Tanker Operations",
      "Survival Crafts & Rescue Boats / Fast Rescue Boats",
      "Medical First Aid",
    ],
    extras: [
      "UX/UI Design – UX Unicórnio (2024)",
      "Full Stack Development – Infinity School (2022–2023)",
      "Power BI – Infinity School (2022–2023)",
      "Lean Green Belt Six Sigma (2020)",
    ],
    skills: {
      technical: [
        "Auditorias Marítimas (Padrões Petrobras)",
        "Engine Room Systems",
        "Testes Técnicos de DP",
        "SMS & Compliance",
        "RCA (Análise de Causa Raiz)",
        "Relatórios Técnicos",
      ],
      management: ["Liderança de Equipes", "Fiscalização Contratual", "Coordenação de Operações Portuárias"],
      languages: ["Português (Nativo)", "Inglês (Fluente)", "Espanhol (Básico)", "Francês (Básico)"],
    },
    ctas: {
      downloadPT: "Baixar CV (PT)",
      downloadEN: "Download CV (EN)",
      email: "E-mail",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      dark: "Modo Escuro",
      light: "Modo Claro",
    },
  },
  en: {
    summary:
      "Professional with 5+ years within Petrobras' ecosystem, performing marine audits, offshore vessel inspections (AHTS, PSV, OSRV, FSV) and regulatory compliance. Currently supervising a team of port officers in Macaé, focused on operational efficiency, HSE and technical reliability. STCW III/1. Fluent English.",
    about:
      "I focus on operational integrity, safety and continuous improvement. My background blends technical auditing, team coordination and regulatory interface to ensure reliable performance and compliance in offshore operations.",
    sections: {
      experience: "Professional Experience",
      education: "Education",
      certs: "Technical Certifications",
      extras: "Additional Education & Certificates",
      skills: "Skills",
      downloads: "Downloads",
      about: "About me",
    },
    experience: [
      {
        role: "Maritime Operations Consultant",
        company: "SONDA PROCKWORK / Porto de Macaé",
        period: "Dec/2023 – Present",
        bullets: [
          "Leads a team of port officers in offshore operations, ensuring safety and efficiency.",
          "Coordinates the interface among operations, HSE and Petrobras contractual requirements.",
          "Produces technical reports to support management decision-making.",
        ],
      },
      {
        role: "Technical Auditor & Marine Surveyor",
        company: "RINA | APSEG | Ápice Gestão de Projetos",
        period: "2019 – 2023",
        bullets: [
          "Inspected offshore vessels under Petrobras contracts (AHTS, PSV, OSRV, FSV).",
          "Tested and assessed critical systems (generators, pumps, DP, fire pumps).",
          "Verified maintenance plans and legal compliance (ANP, ANTAQ, Harbor Master).",
        ],
      },
      {
        role: "Cadet Engineer (Engine Cadet)",
        company: "Aliança Navegação e Logística / Bourbon Offshore",
        period: "2017 – 2019",
        bullets: [
          "Supported engine room routines, maintenance and system tests.",
          "Participated in an international drydock (Portugal), maintenance and repairs.",
        ],
      },
    ],
    education: [
      { course: "B.Sc. Nautical Sciences", place: "CIABA – Belém", period: "2014 – 2019" },
      { course: "Port Management & Logistics", place: "Abracomex", period: "2017" },
    ],
    certs: [
      "STCW III/1 – Engine Officer",
      "Survival, Firefighting (basic & advanced), Tanker Operations",
      "Survival Crafts & Rescue Boats / Fast Rescue Boats",
      "Medical First Aid",
    ],
    extras: [
      "UX/UI Design – UX Unicórnio (2024)",
      "Full Stack Development – Infinity School (2022–2023)",
      "Power BI – Infinity School (2022–2023)",
      "Lean Green Belt Six Sigma (2020)",
    ],
    skills: {
      technical: [
        "Marine Audits (Petrobras Standards)",
        "Engine Room Systems",
        "DP Technical Tests",
        "HSE & Compliance",
        "Root Cause Analysis",
        "Technical Reporting",
      ],
      management: ["Team Leadership", "Contract Oversight", "Port Operations Coordination"],
      languages: ["Portuguese (Native)", "English (Fluent)", "Spanish (Basic)", "French (Basic)"],
    },
    ctas: {
      downloadPT: "Download CV (PT)",
      downloadEN: "Download CV (EN)",
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      dark: "Dark Mode",
      light: "Light Mode",
    },
  },
} as const;

/* =============================
   Animações
============================= */
const langVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
};

/* =============================
   Componente principal
============================= */
export default function ResumeOnline() {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [dark, setDark] = useState(false);
  const t = useMemo(() => content[lang], [lang]);

  // tema
  useEffect(() => {
    try {
      const saved = localStorage.getItem("fp_theme");
      if (saved) {
        setDark(saved === "dark");
        return;
      }
      const mql = window.matchMedia("(prefers-color-scheme: dark)");
      setDark(mql.matches);
    } catch {}
  }, []);
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try {
      localStorage.setItem("fp_theme", dark ? "dark" : "light");
    } catch {}
  }, [dark]);

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* HERO */}
      <header
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${profile.theme.brand} 0%, ${profile.theme.brand} 65%, ${profile.theme.brandAlt} 65%, ${profile.theme.brandAlt} 100%)`,
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <div className="flex flex-col gap-6 text-white">
            {/* Nome + LOGO */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <Logo size={56} />
              <h1 className="text-3xl sm:text-4xl font-bold">
                {profile.name}
              </h1>
            </motion.div>

            {/* Headline (anima por idioma) */}
            <AnimatePresence mode="wait">
              <motion.p
                key={lang}
                variants={langVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="text-base sm:text-lg max-w-3xl"
              >
                {lang === "pt" ? profile.headline_pt : profile.headline_en}
              </motion.p>
            </AnimatePresence>

            {/* Localização + CONTATOS (MOVIDOS PARA CÁ) */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Badge className="bg-white/20 hover:bg-white/30 text-white">
                <MapPin size={14} className="mr-1" /> {profile.location}
              </Badge>

              {/* Botões de contato (padronizados globalmente) */}
              <a href={`mailto:${profile.email}`} className="inline-block">
                <Button variant="outline" className="rounded-full h-8 px-3 bg-white/10 text-white border-white/40 hover:bg-white hover:text-black">
                  <Mail size={14} className="mr-1" /> {t.ctas.email}
                </Button>
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="inline-block">
                <Button variant="outline" className="rounded-full h-8 px-3 bg-white/10 text-white border-white/40 hover:bg-white hover:text-black">
                  <Phone size={14} className="mr-1" /> {t.ctas.whatsapp}
                </Button>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-block">
                <Button variant="outline" className="rounded-full h-8 px-3 bg-white/10 text-white border-white/40 hover:bg-white hover:text-black">
                  <Linkedin size={14} className="mr-1" /> {t.ctas.linkedin}
                </Button>
              </a>
            </div>

            {/* Seletor de idioma + tema */}
            <div className="flex items-center gap-3 mt-2">
              <div className="inline-flex rounded-full bg-white/20 p-1 w-fit">
                <Button
                  variant="secondary"
                  className={`rounded-full px-4 ${lang === "pt" ? "bg-white text-black" : "text-white"}`}
                  onClick={() => setLang("pt")}
                >
                  🇧🇷
                </Button>
                <Button
                  variant="secondary"
                  className={`rounded-full px-4 ${lang === "en" ? "bg-white text-black" : "text-white"}`}
                  onClick={() => setLang("en")}
                >
                  🇬🇧
                </Button>
              </div>
              <Button
                variant="secondary"
                className="rounded-full px-3"
                onClick={() => setDark(!dark)}
              >
                {dark ? <Sun size={16} className="mr-1" /> : <Moon size={16} className="mr-1" />}
                {dark ? t.ctas.light : t.ctas.dark}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="mx-auto max-w-6xl px-6 py-8 md:py-10 space-y-8">
        {/* Resumo / Sobre mim */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {lang === "pt" ? "Resumo Profissional" : "Professional Summary"}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>{t.summary}</p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {t.sections.about}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>{t.about}</p>
            </CardContent>
          </Card>
        </section>

        {/* Experiência */}
        <section>
          <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {t.sections.experience}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {t.experience.map((exp, i) => (
                <div key={i} className="border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <p className="font-semibold">{exp.role}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{exp.company}</p>
                    </div>
                    <span className="text-xs text-slate-500">{exp.period}</span>
                  </div>
                  <ul className="mt-3 grid gap-2">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="text-sm text-slate-700 dark:text-slate-300 flex">
                        <CheckCircle2 size={16} className="mt-0.5 mr-2 text-slate-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Educação / Certificações */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {t.sections.education}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {t.education.map((ed, i) => (
                <div key={i}>
                  <p className="font-medium">{ed.course}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {ed.place} — {ed.period}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {t.sections.certs}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {t.certs.map((c, i) => (
                <div key={i} className="text-sm text-slate-700 dark:text-slate-300">• {c}</div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Extras / Skills */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {t.sections.extras}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {t.extras.map((x, i) => (
                <div key={i} className="text-sm text-slate-700 dark:text-slate-300">• {x}</div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {t.sections.skills}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-semibold mb-2">{lang === "pt" ? "Técnicas" : "Technical"}</p>
                <div className="flex flex-wrap gap-2">
                  {t.skills.technical.map((s, i) => (
                    <Badge key={i} className="rounded-full border-slate-300 dark:border-slate-700">{s}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2">{lang === "pt" ? "Gestão" : "Management"}</p>
                <div className="flex flex-wrap gap-2">
                  {t.skills.management.map((s, i) => (
                    <Badge key={i} className="rounded-full border-slate-300 dark:border-slate-700">{s}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-2">{lang === "pt" ? "Idiomas" : "Languages"}</p>
                <div className="flex flex-wrap gap-2">
                  {t.skills.languages.map((s, i) => (
                    <Badge key={i} className="rounded-full border-slate-300 dark:border-slate-700">{s}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Downloads (SEM QR CODE e SEM CONTATOS — contatos já estão no topo) */}
        <section>
          <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {t.sections.downloads}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <a href={profile.cv_pt} target="_blank" rel="noreferrer">
                <Button className="rounded-2xl">
                  <Download size={16} className="mr-2" />
                  {t.ctas.downloadPT}
                </Button>
              </a>
              <a href={profile.cv_en} target="_blank" rel="noreferrer">
                <Button className="rounded-2xl" variant="outline">
                  <Download size={16} className="mr-2" />
                  {t.ctas.downloadEN}
                </Button>
              </a>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
