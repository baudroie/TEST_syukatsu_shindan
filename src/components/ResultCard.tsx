import type { ReactNode } from "react";

export function ResultCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-slate-200/60 py-8 last:border-b-0">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold text-ink">
        {icon}
        {title}
      </h2>
      <div className="text-sm leading-7 text-slate-600 sm:text-base">
        {children}
      </div>
    </section>
  );
}
