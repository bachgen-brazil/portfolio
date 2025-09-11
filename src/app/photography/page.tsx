'use client';

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";

const theme = { brand: "#003366" };

// ajuste para seu Instagram/500px/galeria externa
const EXTERNAL_GALLERY = "https://instagram.com/SEU_USUARIO";

// Se quiser já exibir imagens locais, crie public/photos e adicione aqui:
// const photos = [
//   { src: "/photos/photo-1.jpg", alt: "Foto 1" },
//   { src: "/photos/photo-2.jpg", alt: "Foto 2" },
// ];
const photos: { src: string; alt: string }[] = [];

export default function PhotographyPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-2xl font-semibold mb-2">Fotografia</h1>
      <p className="text-slate-700 dark:text-slate-300 mb-6">
        Narrativa visual explorando luz, composição e contexto.
      </p>

      <Card className="border-0 shadow-md bg-white dark:bg-slate-900">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg" style={{ color: theme.brand }}>
            Galeria
          </CardTitle>
        </CardHeader>
        <CardContent>
          {photos.length === 0 ? (
            <p className="text-slate-600 dark:text-slate-400">
              Em breve, uma seleção das minhas fotografias. Enquanto isso, veja a galeria completa:
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((p, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
                  <Image src={p.src} alt={p.alt} width={800} height={600} className="object-cover w-full h-48" />
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3 mt-6">
            <Link href={EXTERNAL_GALLERY} target="_blank">
              <Button className="rounded-2xl">Ver Galeria Completa</Button>
            </Link>
            <Link href="/uxui">
              <Button variant="outline" className="rounded-2xl">Portfólio UX/UI</Button>
            </Link>
            <Link href="/resume">
              <Button variant="outline" className="rounded-2xl">Ver Currículo</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
