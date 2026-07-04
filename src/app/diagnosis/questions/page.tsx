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
import type { Answers } from "@/lib/diagnosis/types";

const ANSWERS_KEY = "career-type-answers";
const RESULT_KEY = "career-type-result";

export default function QuestionsPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
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
  }, []);

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

  function goNext() {
    if (!Number.isInteger(selectedOption)) return;

    if (isLastQuestion) {
      if (!hasAnsweredAllQuestions(answers)) return;
      const result = createDiagnosisResult(answers);
      window.localStorage.setItem(RESULT_KEY, JSON.stringify(result));
      router.push("/diagnosis/result");
      return;
    }

    setCurrentIndex((index) => index + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    if (currentIndex === 0) {
      router.push("/diagnosis");
      return;
    }
    setCurrentIndex((index) => index - 1);
  }

  if (!loaded) return <div className="min-h-[70vh]" />;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white">
      <div className="sticky top-16 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur-md sm:top-18">
        <div className="mx-auto max-w-4xl px-5 py-5 sm:px-8">
          <div className="flex items-center justify-between text-sm font-medium">
            <span className="text-slate-500">
              質問 {currentIndex + 1}
            </span>
            <span className="font-display text-slate-400">
              {currentIndex + 1} / {questions.length}
            </span>
          </div>
          <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all duration-300"
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
            disabled={!Number.isInteger(selectedOption)}
          >
            {isLastQuestion ? "結果を見る" : "次へ"}
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
}
