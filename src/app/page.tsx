import {
  ArrowRight,
  Clock3,
  FileText,
  MessageCircleQuestion,
  Sparkles,
  Target,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { TypeArtwork } from "@/components/TypeArtwork";
import { resultMessages } from "@/lib/diagnosis/resultMessages";
import { diagnosisTypeKeys } from "@/lib/diagnosis/types";

const benefits = [
  {
    icon: Sparkles,
    title: "自分らしい強みがわかる",
    text: "行動や考え方の傾向から、あなたのメインタイプとサブタイプを診断します。",
  },
  {
    icon: FileText,
    title: "自己PRの軸が見つかる",
    text: "ESで使いやすい強みと、エピソードを伝える方向性を整理できます。",
  },
  {
    icon: MessageCircleQuestion,
    title: "面接での伝え方がわかる",
    text: "タイプごとに、面接で意識したいポイントを具体的に確認できます。",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white px-4 py-1.5 text-xs font-medium text-slate-500">
              <Target size={14} className="text-indigo-600" />
              就活生のための無料自己分析
            </div>
            <h1 className="text-balance font-palt text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3rem]">
              就活の強みを、
              <br />
              <span className="text-indigo-600">
                タイプから見つけよう。
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              30問の質問から、あなたの行動や考え方を8つの就活タイプで診断。
              自己PRや面接で使える言葉まで見つかります。
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <ButtonLink href="/diagnosis" size="large">
                無料で診断を始める
                <ArrowRight size={19} />
              </ButtonLink>
              <span className="flex items-center gap-2 text-sm font-medium text-slate-400">
                <Clock3 size={17} />
                約5分・登録不要
              </span>
            </div>
          </div>
          <TypeArtwork className="aspect-[3/2] min-h-72" priority />
        </div>
      </section>

      <section className="border-t border-slate-200/60 bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-24 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title}>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Icon size={22} />
              </div>
              <h2 className="font-semibold text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200/60 bg-canvas">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-display text-xs font-medium uppercase tracking-widest text-slate-400">
                8 Career Types
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
                8つの就活タイプ
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-slate-500">
              一つの型に決めつけるのではなく、メインとサブの組み合わせからあなたらしさを読み解きます。
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {diagnosisTypeKeys.map((key, index) => {
              const type = resultMessages[key];
              return (
                <div
                  key={key}
                  className="rounded-2xl border border-slate-200/60 bg-white p-6 transition-colors hover:border-slate-300"
                >
                  <div
                    className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg font-display text-sm font-bold"
                    style={{ backgroundColor: type.paleColor, color: type.color }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-semibold text-ink">{type.name}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {type.catchphrase}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/60 bg-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-24 text-center sm:px-8 sm:py-28">
          <p className="text-sm font-medium text-slate-400">
            まずは、今の自分を知るところから
          </p>
          <h2 className="mt-4 text-balance font-palt text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            あなたの経験を、就活で伝わる強みに変えよう。
          </h2>
          <ButtonLink href="/diagnosis" size="large" className="mt-9">
            30問の診断を始める
            <ArrowRight size={19} />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
