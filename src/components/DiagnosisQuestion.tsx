"use client";

import { Check } from "lucide-react";
import type { DiagnosisQuestion as DiagnosisQuestionType } from "@/lib/diagnosis/types";

export function DiagnosisQuestion({
  question,
  selectedOption,
  onSelect,
}: {
  question: DiagnosisQuestionType;
  selectedOption?: number;
  onSelect: (index: number) => void;
}) {
  return (
    <section>
      <h1 className="mx-auto max-w-3xl text-balance text-center text-2xl font-semibold leading-relaxed tracking-tight text-ink sm:text-3xl">
        {question.question}
      </h1>
      <p className="mt-3 text-center text-sm text-slate-400">
        深く考えすぎず、普段の自分に近いものを選んでください
      </p>

      <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
        {question.options.map((answer, index) => {
          const selected = selectedOption === index;
          return (
            <button
              key={answer.text}
              type="button"
              onClick={() => onSelect(index)}
              aria-pressed={selected}
              className={`flex min-h-16 w-full items-center gap-4 rounded-xl border px-5 py-4 text-left text-sm font-medium leading-relaxed transition-colors duration-150 sm:px-6 sm:text-base ${
                selected
                  ? "border-indigo-600 bg-indigo-50 text-ink"
                  : "border-slate-200/70 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors ${
                  selected
                    ? "border-indigo-600 bg-indigo-600 text-white"
                    : "border-slate-300 bg-white"
                }`}
              >
                {selected && <Check size={14} strokeWidth={3} />}
              </span>
              {answer.text}
            </button>
          );
        })}
      </div>
    </section>
  );
}
