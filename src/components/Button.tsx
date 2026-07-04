import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "large";
};

const styles = {
  primary:
    "bg-ink text-white shadow-sm hover:bg-ink/90",
  secondary:
    "border border-slate-200 bg-white text-ink shadow-sm hover:bg-slate-50 hover:border-slate-300",
  ghost:
    "text-slate-500 hover:bg-slate-100 hover:text-ink",
};

function buttonClass({
  variant = "primary",
  size = "default",
  className = "",
}: Omit<CommonProps, "children">) {
  return [
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40",
    size === "large" ? "min-h-14 px-7 text-base" : "min-h-11 px-5 text-sm",
    styles[variant],
    className,
  ].join(" ");
}

export function Button({
  children,
  className,
  variant,
  size,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={buttonClass({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  children,
  className,
  variant,
  size,
}: CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={buttonClass({ variant, size, className })}
    >
      {children}
    </Link>
  );
}
