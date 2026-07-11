"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { TermsContent } from "@/components/TermsContent";
import {
  ANSWERS_KEY,
  LEAD_KEY,
  RESULT_KEY,
  SUBMISSION_STATUS_KEY,
} from "@/lib/diagnosis/storage";
import {
  buildLeadSubmissionPayload,
  submitLeadToGoogleSheets,
  type LeadFormData,
} from "@/lib/diagnosis/submission";

const genderOptions = ["男性", "女性", "その他", "回答しない"];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  gender: "",
  termsAccepted: false,
};

export default function DiagnosisStartPage() {
  const router = useRouter();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(
    field: keyof typeof initialForm,
    value: string | boolean,
  ) {
    setForm((current) => ({ ...current, [field]: value }));
    if (error) setError("");
  }

  function validateForm() {
    if (!form.fullName.trim()) return "氏名を入力してください。";
    if (!form.phone.trim()) return "電話番号を入力してください。";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      return "メールアドレスを正しく入力してください。";
    }
    if (!form.gender) return "性別を選択してください。";
    if (!form.termsAccepted) {
      return "利用規約および個人情報の取扱いへの同意が必要です。";
    }
    return "";
  }

  async function submitLead(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    const now = new Date().toISOString();
    const lead: LeadFormData = {
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      gender: form.gender,
      termsAccepted: true,
      agreedAt: now,
      createdAt: now,
    };

    window.localStorage.setItem(LEAD_KEY, JSON.stringify(lead));
    window.localStorage.removeItem(ANSWERS_KEY);
    window.localStorage.removeItem(RESULT_KEY);
    window.localStorage.setItem(
      SUBMISSION_STATUS_KEY,
      JSON.stringify({
        status: "lead_pending",
        updatedAt: new Date().toISOString(),
      }),
    );

    setIsSubmitting(true);

    try {
      const submission = await submitLeadToGoogleSheets(
        buildLeadSubmissionPayload(lead),
      );

      window.localStorage.setItem(
        SUBMISSION_STATUS_KEY,
        JSON.stringify({
          status: submission.ok ? "lead_sent" : "not_configured",
          reason: submission.reason,
          updatedAt: new Date().toISOString(),
        }),
      );
    } catch (sendError) {
      window.localStorage.setItem(
        SUBMISSION_STATUS_KEY,
        JSON.stringify({
          status: "lead_failed",
          reason:
            sendError instanceof Error ? sendError.message : "unknown_error",
          updatedAt: new Date().toISOString(),
        }),
      );
    }

    router.push("/diagnosis/questions");
  }

  return (
    <div className="voxel-shell mx-auto max-w-5xl overflow-hidden px-5 py-12 sm:px-8 sm:py-20">
      <div className="min-w-0 text-center">
        <p className="voxel-chip mx-auto inline-flex px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-slate-500">
          Career Type Diagnosis
        </p>
        <h1 className="voxel-title mt-4 text-balance font-palt text-3xl font-black tracking-tight text-ink sm:text-5xl">
          診断の前に、
          <br />
          内容をご確認ください。
        </h1>
        <p className="mx-auto mt-6 max-w-2xl break-words text-base leading-8 text-slate-600">
          キャリタイプをご利用いただく前に、以下の内容をご確認ください。
          内容に同意いただいた場合のみ、診断を開始できます。
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-[1fr_0.92fr]">
        <Card className="min-w-0 p-6 sm:p-8">
          <div className="mb-6 flex items-center gap-4 border-b border-slate-200/70 pb-5">
            <div className="voxel-icon-stage flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-indigo-600">
              <ClipboardCheck size={23} />
            </div>
            <div>
              <h2 className="text-lg font-black text-ink">
                診断エントリーフォーム
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                すべての項目を入力すると質問に進めます。
              </p>
            </div>
          </div>

          <form className="space-y-5" onSubmit={submitLead}>
            <label className="lead-field">
              <span>氏名</span>
              <input
                value={form.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                className="lead-input"
                autoComplete="name"
                placeholder="山田 太郎"
              />
            </label>

            <label className="lead-field">
              <span>電話番号</span>
              <input
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="lead-input"
                autoComplete="tel"
                inputMode="tel"
                placeholder="09012345678"
              />
            </label>

            <label className="lead-field">
              <span>メールアドレス</span>
              <input
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                className="lead-input"
                autoComplete="email"
                inputMode="email"
                placeholder="example@mail.com"
              />
            </label>

            <label className="lead-field">
              <span>性別</span>
              <select
                value={form.gender}
                onChange={(event) => updateField("gender", event.target.value)}
                className="lead-input"
              >
                <option value="">選択してください</option>
                {genderOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="lead-consent">
              <input
                type="checkbox"
                checked={form.termsAccepted}
                onChange={(event) =>
                  updateField("termsAccepted", event.target.checked)
                }
              />
              <span>
                上記の利用規約および個人情報の取扱いに同意します。
              </span>
            </label>

            <p className="rounded-[10px] bg-[#fff8e8] px-4 py-3 text-xs font-bold leading-6 text-[#647086]">
              同意後も、診断を開始する前であればブラウザを閉じて中止できます。
            </p>

            {error ? (
              <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                {error}
              </p>
            ) : null}

            <Button
              type="submit"
              size="large"
              className="w-full"
              disabled={!form.termsAccepted || isSubmitting}
            >
              {isSubmitting ? "送信中..." : "同意して診断をはじめる"}
              <ArrowRight size={19} />
            </Button>
          </form>
        </Card>

        <aside className="voxel-panel h-fit p-6 sm:p-7">
          <h2 className="text-lg font-black text-ink">
            利用規約と個人情報の取扱いについて
          </h2>
          <p className="mt-3 text-sm font-bold leading-7 text-[#647086]">
            重要事項を先に要点で確認し、詳細は下の小さなウィンドウでスクロールして読めます。
          </p>
          <div className="mt-5">
            <TermsContent compact />
          </div>
        </aside>
      </div>
    </div>
  );
}
