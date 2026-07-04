import { ArrowRight, CheckCircle2, Clock3, RotateCcw } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { Card } from "@/components/Card";

const points = [
  "全30問、直感に近い回答でOK",
  "メインタイプとサブタイプを判定",
  "自己PR・ガクチカ・面接のヒントを表示",
  "回答内容は端末内にのみ一時保存",
];

export default function DiagnosisStartPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-20">
      <div className="text-center">
        <p className="font-display text-xs font-medium uppercase tracking-widest text-slate-400">
          Career Type Diagnosis
        </p>
        <h1 className="mt-4 text-balance font-palt text-3xl font-bold tracking-tight text-ink sm:text-5xl">
          あなたらしい強みを、
          <br />
          30問から見つけよう。
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600">
          正解や良い回答はありません。就活で見せたい自分ではなく、
          普段の行動に近いものを選ぶと、あなたらしい結果につながります。
        </p>
      </div>

      <Card className="mx-auto mt-12 max-w-2xl p-6 sm:p-10">
        <div className="flex items-center gap-4 border-b border-slate-200/60 pb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <Clock3 size={24} />
          </div>
          <div>
            <p className="font-semibold text-ink">所要時間：約5分</p>
            <p className="mt-1 text-sm text-slate-500">登録不要・無料で利用できます</p>
          </div>
        </div>
        <ul className="mt-6 space-y-4">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-indigo-600" />
              {point}
            </li>
          ))}
        </ul>
        <ButtonLink
          href="/diagnosis/questions"
          size="large"
          className="mt-8 w-full"
        >
          診断を開始する
          <ArrowRight size={19} />
        </ButtonLink>
      </Card>

      <div className="mt-6 flex justify-center gap-2 text-xs text-slate-400">
        <RotateCcw size={15} />
        途中で閉じても、このブラウザで続きから再開できます
      </div>
    </div>
  );
}
