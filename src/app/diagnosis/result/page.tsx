"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  AlertCircle,
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  FilePenLine,
  FileText,
  GraduationCap,
  Lightbulb,
  MessageCircle,
  MessagesSquare,
  RefreshCcw,
  Sparkles,
  TriangleAlert,
} from "lucide-react";
import { Button, ButtonLink } from "@/components/Button";
import { ResultCharacter } from "@/components/ResultCharacter";
import { resultMessages } from "@/lib/diagnosis/resultMessages";
import {
  ANSWERS_KEY,
  LEAD_KEY,
  RESULT_KEY,
  SUBMISSION_STATUS_KEY,
} from "@/lib/diagnosis/storage";
import type { DiagnosisResult } from "@/lib/diagnosis/types";

type SubmissionStatus = {
  status:
    | "lead_pending"
    | "lead_sent"
    | "lead_failed"
    | "pending"
    | "sent"
    | "failed"
    | "not_configured";
  reason?: string;
  updatedAt?: string;
};

export default function ResultPage() {
  const router = useRouter();
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const savedResult = window.localStorage.getItem(RESULT_KEY);
    if (savedResult) {
      try {
        setResult(JSON.parse(savedResult) as DiagnosisResult);
      } catch {
        window.localStorage.removeItem(RESULT_KEY);
      }
    }

    const savedSubmissionStatus = window.localStorage.getItem(
      SUBMISSION_STATUS_KEY,
    );

    if (savedSubmissionStatus) {
      try {
        setSubmissionStatus(
          JSON.parse(savedSubmissionStatus) as SubmissionStatus,
        );
      } catch {
        window.localStorage.removeItem(SUBMISSION_STATUS_KEY);
      }
    }

    setLoaded(true);
  }, []);

  function restartDiagnosis() {
    window.localStorage.removeItem(ANSWERS_KEY);
    window.localStorage.removeItem(LEAD_KEY);
    window.localStorage.removeItem(RESULT_KEY);
    window.localStorage.removeItem(SUBMISSION_STATUS_KEY);
    router.push("/diagnosis");
  }

  if (!loaded) return <div className="min-h-[70vh]" />;

  if (!result) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-5 text-center">
        <AlertCircle size={42} className="text-indigo-600" />
        <h1 className="mt-5 text-2xl font-bold tracking-tight text-ink">
          診断結果がまだありません
        </h1>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          30問に回答すると、あなたのメインタイプとサブタイプが表示されます。
        </p>
        <ButtonLink href="/diagnosis" className="mt-7">
          診断を始める
          <ArrowRight size={18} />
        </ButtonLink>
      </div>
    );
  }

  const main = resultMessages[result.mainType];
  const sub = resultMessages[result.subType];

  return (
    <div className="voxel-shell pb-16">
      <div className="border-b-2 border-[#172033]/10 bg-[#fffdf7]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-5 py-4 text-xs font-medium text-slate-400 sm:justify-end sm:px-8">
          <span className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 font-display">
              1
            </span>
            診断開始
          </span>
          <ArrowRight size={13} />
          <span className="flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 font-display">
              2
            </span>
            質問に回答
          </span>
          <ArrowRight size={13} />
          <span className="flex items-center gap-2 text-indigo-600">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 font-display text-white">
              3
            </span>
            結果を見る
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8">
        <section className="voxel-panel overflow-hidden">
          <div className="grid min-h-[330px] items-end gap-2 px-5 pt-8 sm:px-10 lg:grid-cols-[0.9fr_1.5fr_0.65fr]">
            <ResultCharacter
              type={result.mainType}
              className="voxel-icon-stage mx-auto mb-8 aspect-square w-full max-w-[280px] self-center rounded-lg lg:mb-0"
            />

            <div className="self-center pb-9 text-center lg:pb-12">
              <p className="voxel-chip mx-auto inline-flex px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-slate-500">
                Your Result
              </p>
              <p className="mt-5 text-sm font-medium text-slate-500">
                あなたのメインタイプは
              </p>
              <h1 className="voxel-title mt-3 font-palt text-4xl font-black tracking-tight text-ink sm:text-6xl lg:text-7xl">
                {main.name}
              </h1>
              <p className="mt-4 text-lg font-semibold text-indigo-600 sm:text-2xl">
                {main.catchphrase}
              </p>
              <div className="mx-auto mt-6 flex w-fit items-center gap-3">
                <span className="h-px w-10 bg-slate-200" />
                <span className="voxel-chip px-5 py-2 text-sm font-bold tracking-wider text-slate-600">
                  {main.shortName}
                </span>
                <span className="h-px w-10 bg-slate-200" />
              </div>
            </div>

            <div className="voxel-card mb-12 hidden self-center justify-self-center bg-white p-5 text-center lg:block">
              <p className="font-display text-xs font-medium uppercase tracking-widest text-slate-400">
                Sub Type
              </p>
              <p className="mt-2 text-xl font-semibold text-ink">
                {sub.name}
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200/60 bg-slate-50 px-6 py-4 text-center lg:hidden">
            <span className="text-xs font-medium text-slate-400">サブタイプ</span>
            <span className="ml-3 font-semibold text-ink">{sub.name}</span>
          </div>
        </section>

        <section className="voxel-panel mt-8 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <ResultPanel
              title="あなたの強み"
              icon={<Sparkles size={20} />}
            >
              <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {main.strengths.map((strength) => (
                  <div key={strength} className="flex items-start gap-3">
                    <Check size={16} strokeWidth={2.5} className="mt-1 shrink-0 text-indigo-600" />
                    <div>
                      <p className="font-semibold text-ink">{strength}</p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        あなたの経験を支える、再現性のある強みです。
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ResultPanel>

            <ResultPanel
              title="注意点"
              icon={<TriangleAlert size={20} />}
              className="border-t border-slate-200/60 lg:border-l lg:border-t-0"
            >
              <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {main.cautions.map((caution) => (
                  <div key={caution} className="flex items-start gap-3">
                    <Check size={16} strokeWidth={2.5} className="mt-1 shrink-0 text-slate-400" />
                    <p className="text-sm font-medium leading-6 text-slate-600">
                      {caution}
                    </p>
                  </div>
                ))}
              </div>
            </ResultPanel>
          </div>

          <div className="grid border-t border-slate-200/60 lg:grid-cols-4">
            <ReportColumn
              title="ESで使いやすい強み"
              icon={<FileText size={19} />}
            >
              <div className="flex flex-wrap gap-2">
                {main.esStrengths.map((strength) => (
                  <span
                    key={strength}
                    className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {strength}
                  </span>
                ))}
              </div>
            </ReportColumn>

            <ReportColumn
              title="自己PRの方向性"
              icon={<Lightbulb size={19} />}
            >
              <p>{main.selfPrDirection}</p>
              <div className="mt-4 rounded-lg bg-slate-50 p-3">
                <p className="text-xs font-semibold text-ink">
                  伝えると良いポイント
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  課題・工夫した行動・生まれた結果を具体的に。
                </p>
              </div>
            </ReportColumn>

            <ReportColumn
              title="向いている環境"
              icon={<BriefcaseBusiness size={19} />}
            >
              <ul className="space-y-2">
                {main.suitableEnvironments.map((environment) => (
                  <li key={environment} className="flex items-start gap-2">
                    <CheckCircle2
                      size={15}
                      className="mt-1 shrink-0 text-indigo-600"
                    />
                    {environment}
                  </li>
                ))}
              </ul>
            </ReportColumn>

            <ReportColumn
              title="面接で意識すること"
              icon={<MessageCircle size={19} />}
            >
              <p>{main.interviewAdvice}</p>
            </ReportColumn>
          </div>
        </section>

        <section className="mt-8">
          {submissionStatus &&
          ["failed", "lead_failed", "not_configured"].includes(
            submissionStatus.status,
          ) ? (
            <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-bold leading-7 text-amber-800">
              管理者向けメモ: Googleスプレッドシートへの送信設定を確認してください。
              {submissionStatus.reason ? (
                <span className="ml-1">理由: {submissionStatus.reason}</span>
              ) : null}
            </div>
          ) : null}

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ButtonLink
              href="/self-pr"
              size="large"
              className="w-full"
            >
              <FilePenLine size={20} />
              自己PRを作成する
              <ArrowRight size={17} />
            </ButtonLink>
            <ButtonLink
              href="/gakuchika"
              variant="secondary"
              size="large"
              className="w-full"
            >
              <GraduationCap size={21} />
              ガクチカを作成する
              <ArrowRight size={17} />
            </ButtonLink>
            <ButtonLink
              href="/interview"
              variant="secondary"
              size="large"
              className="w-full"
            >
              <MessagesSquare size={20} />
              面接対策を始める
              <ArrowRight size={17} />
            </ButtonLink>
            <Button
              variant="secondary"
              size="large"
              className="w-full"
              onClick={restartDiagnosis}
            >
              <RefreshCcw size={18} />
              もう一度診断する
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

function ResultPanel({
  title,
  icon,
  className = "",
  children,
}: {
  title: string;
  icon: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`bg-white/70 p-6 sm:p-8 ${className}`}>
      <h2 className="mb-6 flex items-center gap-3 text-lg font-semibold text-ink">
        <span className="voxel-chip p-2 text-indigo-600">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function ReportColumn({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-slate-200/60 bg-white/75 p-6 text-sm leading-7 text-slate-600 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0">
      <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-ink">
        <span className="voxel-chip p-1.5 text-indigo-600">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
