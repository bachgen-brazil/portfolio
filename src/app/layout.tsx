import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
  title: "Felipe Pessoa — Portfólio",
  description: "Currículo/portfólio online de Felipe Pessoa de Sousa",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <NavBar />
        {children}
        <footer className="py-10 text-center text-xs text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Felipe Pessoa de Sousa.
        </footer>
      </body>
    </html>
  );
}
