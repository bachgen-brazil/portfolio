import Image from "next/image";

interface LogoProps {
  size?: number;          // tamanho em px (default 56)
  className?: string;     // classes extras (ex.: "rounded-full")
  priority?: boolean;     // prioridade de carregamento
}

export default function Logo({ size = 56, className = "", priority = true }: LogoProps) {
  return (
    <div
      className={`relative`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo-felipe.png"  // ✅ caminho centralizado
        alt="Logo Felipe Pessoa"
        fill
        className={`object-contain ${className}`}
        sizes={`${size}px`}
        priority={priority}
      />
    </div>
  );
}
