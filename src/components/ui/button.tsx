import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

// util simples para juntar classes (evita depender de "@/lib/utils")
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandAlt focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // primário padrão (azul-marinho -> ciano no hover)
        default: "bg-brand text-white hover:bg-brandAlt hover:text-brand shadow",
        // contorno
        outline: "border border-brand text-brand hover:bg-brand hover:text-white",
        // secundário neutro
        secondary:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700",
        // fantasma
        ghost: "hover:bg-slate-100 dark:hover:bg-slate-800",
        // link
        link: "underline-offset-4 hover:underline text-brand",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {} // <- inclui "variant" e "size"

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { buttonVariants };
