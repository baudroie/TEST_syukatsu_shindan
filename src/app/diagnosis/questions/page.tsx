"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button";
import { DiagnosisQuestion } from "@/components/DiagnosisQuestion";
import {
  createDiagnosisResult,
  hasAnsweredAllQuestions,
} from "@/lib/diagnosis/diagnosisLogic";
import { questions } from "@/lib/diagnosis/questions";
import {
  buildDiagnosisSubmissionPayload,
  submitDiagnosisToGoogleSheets,
  type LeadFormData,
} from "@/lib/diagnosis/submission";
import {
  ANSWERS_KEY,
  LEAD_KEY,
  RESULT_KEY,
  SUBMISSION_STATUS_KEY,
} from "@/lib/diagnosis/storage";
import type { Answers } from "@/lib/diagnosis/types";

export default function QuestionsPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [loaded, setLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedLead = window.localStorage.getItem(LEAD_KEY);
    if (!savedLead) {
      router.replace("/diagnosis");
      return;
    }

    try {
      JSON.parse(savedLead) as LeadFormData;
    } catch {
      window.localStorage.removeItem(LEAD_KEY);
      router.replace("/diagnosis");
      return;
    }

    const saved = window.localStorage.getItem(ANSWERS_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Answers;
        setAnswers(parsed);
        const firstUnanswered = questions.findIndex(
          (question) => !Number.isInteger(parsed[question.id]),
        );
        if (firstUnanswered >= 0) setCurrentIndex(firstUnanswered);
      } catch {
        window.localStorage.removeItem(ANSWERS_KEY);
      }
    }
    setLoaded(true);
  }, [router]);

  const question = questions[currentIndex];
  const selectedOption = answers[question.id];
  const progress = useMemo(
    () => ((currentIndex + 1) / questions.length) * 100,
    [currentIndex],
  );
  const isLastQuestion = currentIndex === questions.length - 1;

  function selectAnswer(optionIndex: number) {
    const nextAnswers = { ...answers, [question.id]: optionIndex };
    setAnswers(nextAnswers);
    window.localStorage.setItem(ANSWERS_KEY, JSON.stringify(nextAnswers));
  }

  async function goNext() {
    if (!Number.isInteger(selectedOption) || isSubmitting) return;

    if (isLastQuestion) {
      if (!hasAnsweredAllQuestions(answers)) return;
      setIsSubmitting(true);
      const result = createDiagnosisResult(answers);
      window.localStorage.setItem(RESULT_KEY, JSON.stringify(result));

      try {
        const savedLead = window.localStorage.getItem(LEAD_KEY);
        if (!savedLead) {
          router.replace("/diagnosis");
          return;
        }

        const lead = JSON.parse(savedLead) as LeadFormData;
        const payload = buildDiagnosisSubmissionPayload({
          lead,
          answers,
          result,
        });

        window.localStorage.setItem(
          SUBMISSION_STATUS_KEY,
          JSON.stringify({
            status: "pending",
            updatedAt: new Date().toISOString(),
          }),
        );

        const submission = await submitDiagnosisToGoogleSheets(payload);

        window.localStorage.setItem(
          SUBMISSION_STATUS_KEY,
          JSON.stringify({
            status: submission.ok ? "sent" : "not_configured",
            reason: submission.reason,
            updatedAt: new Date().toISOString(),
          }),
        );
      } catch (error) {
        window.localStorage.setItem(
          SUBMISSION_STATUS_KEY,
          JSON.stringify({
            status: "failed",
            reason: error instanceof Error ? error.message : "unknown_error",
            updatedAt: new Date().toISOString(),
          }),
        );
      }

      router.push("/diagnosis/result");
      return;
    }

    setCurrentIndex((index) => index + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    if (isSubmitting) return;
    if (currentIndex === 0) {
      router.push("/diagnosis");
      return;
    }
    setCurrentIndex((index) => index - 1);
  }

  if (!loaded) return <div className="min-h-[70vh]" />;

  return (
    <div className="voxel-shell min-h-[calc(100vh-4rem)]">
      <div className="sticky top-16 z-40 border-b-2 border-[#172033]/10 bg-[#fffdf7]/90 backdrop-blur-md sm:top-18">
        <div className="mx-auto max-w-4xl px-5 py-5 sm:px-8">
          <div className="flex items-center justify-between text-sm font-bold">
            <span className="text-slate-500">
              質問 {currentIndex + 1}
            </span>
            <span className="font-display text-slate-500">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>
          <div className="voxel-progress mt-3 h-3 overflow-hidden">
            <div
              className="voxel-progress-fill h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        <DiagnosisQuestion
          question={question}
          selectedOption={selectedOption}
          onSelect={selectAnswer}
        />
        <div className="mx-auto mt-9 flex max-w-3xl items-center justify-between">
          <Button variant="ghost" onClick={goBack}>
            <ArrowLeft size={18} />
            戻る
          </Button>
          <Button
            onClick={goNext}
            disabled={!Number.isInteger(selectedOption) || isSubmitting}
          >
            {isLastQuestion
              ? isSubmitting
                ? "送信中..."
                : "送信して結果を見る"
              : "次へ"}
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
