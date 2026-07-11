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
    "voxel-btn voxel-btn-primary hover:bg-ink/90",
  secondary:
    "voxel-btn voxel-btn-secondary hover:bg-[#fff8e8]",
  ghost:
    "voxel-btn-ghost hover:bg-slate-100 hover:text-ink",
};

function buttonClass({
  variant = "primary",
  size = "default",
  className = "",
}: Omit<CommonProps, "children">) {
  return [
    "inline-flex items-center justify-center gap-2 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45",
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
