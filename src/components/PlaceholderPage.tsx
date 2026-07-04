import type { LucideIcon } from "lucide-react";
import { ArrowLeft, Clock3 } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Card } from "@/components/Card";

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  icon: Icon,
}: {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl items-center px-5 py-12 sm:px-8">
      <Card className="w-full p-8 text-center sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
          <Icon size={28} />
        </div>
        <p className="mt-7 text-xs font-medium uppercase tracking-widest text-slate-400">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink">{title}</h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
        <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50 px-4 py-2 text-xs font-medium text-slate-500">
          <Clock3 size={15} />
          次の開発ステップで実装予定
        </div>
        <ButtonLink
          href="/diagnosis/result"
          variant="secondary"
          className="mt-8"
        >
          <ArrowLeft size={17} />
          診断結果に戻る
        </ButtonLink>
      </Card>
    </div>
  );
}
