'use client';

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Mail,
  MapPin,
  Linkedin,
  CheckCircle2,
  Phone,
  Sun,
  Moon,
} from "lucide-react";
// ✅ trocados para caminhos relativos (bypass do alias @)
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

// =============================
// Perfil & Tema
// =============================
const profile = {
  name: "Felipe Pessoa de Sousa",
  location: "Macaé – RJ, Brasil",
  email: "felipe7rugany@gmail.com",
  linkedin: "https://www.linkedin.com/in/felipepessoadesousa/", // ajuste aqui
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
    ink: "#1E293B",
    soft: "#F0F7FA",
  },
};

// =============================
// Conteúdo PT/EN (congelado)
// =============================
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
      downloads: "Downloads & Contato",
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
      "STCW III/1 – Oficial de Máquinas (Praticante habilitado)",
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
      downloads: "Downloads & Contact",
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
      "STCW III/1 – Engine Officer (Cadet-qualified)",
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

type Lang = keyof typeof content;

// =============================
// Utils
// =============================
function getQrUrl() {
  if (typeof window === "undefined") return "";
  const url = window.location.href;
  return `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(
    url
  )}`;
}

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 0.25 },
  exit: { opacity: 0 },
};

const langVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
};

// =============================
// Componente principal
// =============================
export default function ResumeOnline() {
  const [lang, setLang] = useState<Lang>("pt");
  const [qr, setQr] = useState("");
  const [dark, setDark] = useState(false);
  const t = useMemo(() => content[lang], [lang]);

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

  useEffect(() => {
    setQr(getQrUrl());
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Overlay animado ao alternar tema */}
      <AnimatePresence>
        <motion.div
          key={dark ? "dark" : "light"}
          className="pointer-events-none fixed inset-0 z-10"
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.35, ease: "easeInOut" }}
          style={{
            background: dark
              ? "radial-gradient(1200px 800px at 50% -10%, rgba(0,0,0,0.35), transparent 70%)"
              : "radial-gradient(1200px 800px at 50% -10%, rgba(255,255,255,0.6), transparent 70%)",
          }}
        />
      </AnimatePresence>

      {/* HERO */}
      <header
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${profile.theme.brand} 0%, ${profile.theme.brand} 65%, ${profile.theme.brandAlt} 65%, ${profile.theme.brandAlt} 100%)`,
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <div className="flex flex-col gap-6 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold"
            >
              {profile.name}
            </motion.h1>

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

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Badge className="bg-white/20 hover:bg-white/30 text-white">
                <MapPin size={14} className="mr-1" /> {profile.location}
              </Badge>
            </div>

            {/* Seletor de idioma + tema */}
            <div className="flex items-center gap-3 mt-2">
              <div className="inline-flex rounded-full bg-white/20 p-1 w-fit">
                <Button
                  variant="secondary"
                  className={`rounded-full px-4 ${lang === "pt" ? "bg-white text-black" : "text-white"}`}
                  onClick={() => setLang("pt")}
                  aria-label="Ver em Português"
                >
                  🇧🇷
                </Button>
                <Button
                  variant="secondary"
                  className={`rounded-full px-4 ${lang === "en" ? "bg-white text-black" : "text-white"}`}
                  onClick={() => setLang("en")}
                  aria-label="View in English"
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
        <div className="absolute -bottom-6 right-0 h-16 w-2/3 rotate-2" style={{ background: "rgba(255,255,255,0.15)" }} />
      </header>

      {/* Resumo */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <Card className="border-0 shadow-md bg-white dark:bg-slate-900 transition-colors duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
              {lang === "pt" ? "Resumo Profissional" : "Professional Summary"}
            </CardTitle>
          </CardHeader>
          <AnimatePresence mode="wait">
            <motion.div
              key={lang + "-summary"}
              variants={langVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35 }}
            >
              <CardContent className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {t.summary}
              </CardContent>
            </motion.div>
          </AnimatePresence>
        </Card>
      </section>

      {/* Sobre mim */}
      <section className="mx-auto max-w-6xl px-6">
        <Card className="border-0 shadow-md bg-white dark:bg-slate-900 transition-colors duration-500">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
              {t.sections.about}
            </CardTitle>
          </CardHeader>
        <AnimatePresence mode="wait">
          <motion.div
            key={lang + "-about"}
            variants={langVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35 }}
          >
            <CardContent className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {t.about}
            </CardContent>
          </motion.div>
        </AnimatePresence>
        </Card>
      </section>

      {/* Grid principal */}
      <main className="mx-auto max-w-6xl px-6 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* Coluna esquerda */}
        <div className="col-span-1 space-y-6">
          {/* Educação */}
          <Card className="border-0 shadow-md bg-white dark:bg-slate-900 transition-colors duration-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {t.sections.education}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang + "-edu"}
                  variants={langVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                >
                  {t.education.map((e, idx) => (
                    <div key={idx}>
                      <p className="font-medium text-slate-900 dark:text-slate-100">{e.course}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{e.place} • {e.period}</p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Certificações */}
          <Card className="border-0 shadow-md bg-white dark:bg-slate-900 transition-colors duration-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {t.sections.certs}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AnimatePresence mode="wait">
                <motion.ul
                  key={lang + "-certs"}
                  variants={langVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                  className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300"
                >
                  {t.certs.map((c, i) => (<li key={i}>{c}</li>))}
                </motion.ul>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Extras */}
          <Card className="border-0 shadow-md bg-white dark:bg-slate-900 transition-colors duration-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {t.sections.extras}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AnimatePresence mode="wait">
                <motion.ul
                  key={lang + "-extras"}
                  variants={langVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                  className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300"
                >
                  {t.extras.map((x, i) => (<li key={i}>{x}</li>))}
                </motion.ul>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>

        {/* Coluna direita */}
        <div className="col-span-2 space-y-6">
          {/* Experiência */}
          <Card className="border-0 shadow-md bg-white dark:bg-slate-900 transition-colors duration-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {t.sections.experience}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lang + "-exp"}
                  variants={langVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.35 }}
                >
                  {t.experience.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: idx * 0.06 }}
                      className="relative pl-6"
                    >
                      <div className="absolute left-0 top-1.5 h-full w-0.5 bg-slate-200 dark:bg-slate-700" />
                      <div className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full" style={{ background: profile.theme.brand }} />
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                        {exp.role} <span className="text-slate-500 dark:text-slate-400">• {exp.company}</span>
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{exp.period}</p>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5" size={16} style={{ color: profile.theme.brand }} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Competências */}
          <Card className="border-0 shadow-md bg-white dark:bg-slate-900 transition-colors duration-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {t.sections.skills}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-5">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">{lang === "pt" ? "Técnicas" : "Technical"}</p>
                <div className="flex flex-wrap gap-2">
                  {t.skills.technical.map((s, i) => (
                    <Badge key={i} className="rounded-full border-slate-300 dark:border-slate-700">{s}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">{lang === "pt" ? "Gestão" : "Management"}</p>
                <div className="flex flex-wrap gap-2">
                  {t.skills.management.map((s, i) => (
                    <Badge key={i} className="rounded-full border-slate-300 dark:border-slate-700">{s}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">{lang === "pt" ? "Idiomas" : "Languages"}</p>
                <div className="flex flex-wrap gap-2">
                  {t.skills.languages.map((s, i) => (
                    <Badge key={i} className="rounded-full border-slate-300 dark:border-slate-700">{s}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Downloads & Contato */}
          <Card className="border-0 shadow-md bg-white dark:bg-slate-900 transition-colors duration-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg" style={{ color: profile.theme.brand }}>
                {t.sections.downloads}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap items-center gap-3">
              {/* Downloads */}
              <a href={profile.cv_pt} download>
                <Button className="rounded-2xl">
                  <Download size={16} className="mr-2" /> {t.ctas.downloadPT}
                </Button>
              </a>
              <a href={profile.cv_en} download>
                <Button variant="outline" className="rounded-2xl">
                  <Download size={16} className="mr-2" /> {t.ctas.downloadEN}
                </Button>
              </a>

              {/* Contatos como botões */}
              <a href={`mailto:${profile.email}`}>
                <Button className="rounded-2xl">
                  <Mail size={16} className="mr-2" /> {t.ctas.email}
                </Button>
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noreferrer">
                <Button className="rounded-2xl">
                  <Phone size={16} className="mr-2" /> {t.ctas.whatsapp}
                </Button>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Button className="rounded-2xl">
                  <Linkedin size={16} className="mr-2" /> {t.ctas.linkedin}
                </Button>
              </a>

              {/* QR Code */}
              {qr && (
                <div className="ml-auto flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 p-2">
                  <img src={qr} alt="QR Code do currículo" className="h-16 w-16" />
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    {lang === "pt" ? "Aponte a câmera para acessar este currículo" : "Point your camera to access this resume"}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="py-10 text-center text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} {profile.name}. • Navy + Cyan • Dark/Light toggle • QR ready.
      </footer>
    </div>
  );
}
