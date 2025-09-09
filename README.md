# Portfólio — Felipe Pessoa de Sousa

Site de currículo/portfólio em **Next.js (App Router)** com **Tailwind CSS**, **shadcn/ui**, **modo claro/escuro**, seletor de idioma **🇧🇷/🇬🇧**, animações (**framer-motion**) e **QR code** para acesso rápido.

## ✨ Recursos
- Next.js 14 (App Router)
- Tailwind CSS (`darkMode: 'class'`)
- Componentes base shadcn/ui (Button, Card, Badge)
- Animações com framer-motion (transições de idioma e tema)
- PDFs para download (PT/EN)
- Botões de contato (E-mail, WhatsApp, LinkedIn)
- QR code dinâmico com a URL atual

---

## 🗂 Estrutura


portfolio/
├─ public/
│ └─ assets/
│ ├─ CV_Felipe_Pessoa_PT.pdf
│ └─ CV_Felipe_Pessoa_EN.pdf
├─ src/
│ ├─ app/
│ │ ├─ globals.css
│ │ ├─ page.tsx
│ │ └─ resume/
│ │ └─ ResumeOnline.tsx
│ └─ components/
│ └─ ui/
│ ├─ badge.tsx
│ ├─ button.tsx
│ └─ card.tsx
├─ next.config.mjs
├─ package.json
├─ postcss.config.js
├─ tailwind.config.ts
└─ tsconfig.json


> **Importante**: mantenha os PDFs exatamente em `public/assets/` e ajuste seu **LinkedIn** dentro de `ResumeOnline.tsx`.

---

## 🚀 Rodando localmente

### 1) Pré-requisitos
- Node.js LTS 18 ou 20: https://nodejs.org

### 2) Instalar dependências
```bash
npm install

3) Dev server

npm run dev

Acesse: http://localhost:3000
4) Build de produção

npm run build
npm start

☁️ Deploy na Vercel

    Faça push do repositório para o GitHub.

    Acesse https://vercel.com

    → Add New Project → Import Git Repository.

    Selecione o repo e confirme:

        Framework: Next.js

        Build command: npm run build

        Output: .next

        (Se seu projeto estiver em subpasta, configure Root Directory)

    Clique Deploy.

    A cada git push na branch configurada (ex.: main), a Vercel faz o redeploy automaticamente.

🔧 Configurações importantes

    Tailwind (dark mode): tailwind.config.ts com darkMode: 'class'.

    Alias @: tsconfig.json com:

{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}

Componentes shadcn/ui: se quiser usar a CLI oficial:

    npx shadcn@latest init -d
    npx shadcn@latest add button card badge

🧪 Checklist rápido

PDFs em public/assets/CV_Felipe_Pessoa_PT.pdf e public/assets/CV_Felipe_Pessoa_EN.pdf

src/app/resume/ResumeOnline.tsx com o código do currículo

src/app/page.tsx importando o componente do currículo

src/components/ui/ com button.tsx, card.tsx, badge.tsx

tailwind.config.ts com darkMode: 'class'

    tsconfig.json com alias @/*

🩹 Solução de problemas

    Vercel não encontra package.json
    → Verifique se o Root Directory aponta para a pasta correta (raiz do projeto).

    Erro: Cannot find module '@/components/ui/button'
    → Confirme tsconfig.json (alias @/*) e se os arquivos existem em src/components/ui/.

    404 nos PDFs
    → Os arquivos devem estar em public/assets/ (e não em src/).

    Dark mode não alterna
    → Garanta darkMode: 'class' no Tailwind e que o componente é client ('use client').

    Build local falha
    → Rode npm ci (instalação limpa) e depois npm run build.
    → Verifique versão do Node (LTS 18/20).








