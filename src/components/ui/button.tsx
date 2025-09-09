import * as React from "react";

// Utilitário simples para juntar classes sem precisar instalar "clsx"
function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "secondary" | "outline";
};

export function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center h-9 px-4 text-sm font-medium rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 disabled:opacity-50 disabled:pointer-events-none";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    default:
      "bg-slate-900 text-white border-transparent hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white",
    secondary:
      "bg-slate-100 text-slate-900 border-transparent hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
    outline:
      "bg-transparent text-slate-900 border-slate-300 hover:bg-slate-50 dark:text-slate-100 dark:border-slate-700 dark:hover:bg-slate-800",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props} />
  );
}

export default Button;
