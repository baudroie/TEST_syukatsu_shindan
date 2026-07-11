import { questions } from "./questions";
import { resultMessages } from "./resultMessages";
import type { Answers, DiagnosisResult } from "./types";

export const GOOGLE_SHEET_ID = "1hO866bqccDvM6RsMwFnvE_WOvAalyqx-3CW3OJBMkaw";
export const GOOGLE_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1hO866bqccDvM6RsMwFnvE_WOvAalyqx-3CW3OJBMkaw/edit";

export type LeadFormData = {
  fullName: string;
  phone: string;
  email: string;
  gender: string;
  termsAccepted: true;
  agreedAt: string;
  createdAt: string;
};

export type DiagnosisSubmissionPayload = {
  submittedAt: string;
  sheetId: string;
  sourceUrl: string;
  userAgent: string;
  lead: LeadFormData;
  result: DiagnosisResult & {
    mainTypeName: string;
    subTypeName: string;
  };
  answers: Array<{
    questionId: number;
    question: string;
    selectedOptionIndex: number | null;
    selectedOptionText: string;
  }>;
};

export function getGoogleSheetsWebhookUrl() {
  return (process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL ?? "").trim();
}

export function buildDiagnosisSubmissionPayload({
  lead,
  answers,
  result,
}: {
  lead: LeadFormData;
  answers: Answers;
  result: DiagnosisResult;
}): DiagnosisSubmissionPayload {
  return {
    submittedAt: new Date().toISOString(),
    sheetId: GOOGLE_SHEET_ID,
    sourceUrl: typeof window === "undefined" ? "" : window.location.href,
    userAgent: typeof navigator === "undefined" ? "" : navigator.userAgent,
    lead,
    result: {
      ...result,
      mainTypeName: resultMessages[result.mainType].name,
      subTypeName: resultMessages[result.subType].name,
    },
    answers: questions.map((question) => {
      const selectedOptionIndex = answers[question.id];
      return {
        questionId: question.id,
        question: question.question,
        selectedOptionIndex: Number.isInteger(selectedOptionIndex)
          ? selectedOptionIndex
          : null,
        selectedOptionText:
          Number.isInteger(selectedOptionIndex) &&
          question.options[selectedOptionIndex]
            ? question.options[selectedOptionIndex].text
            : "",
      };
    }),
  };
}

export async function submitDiagnosisToGoogleSheets(
  payload: DiagnosisSubmissionPayload,
) {
  const webhookUrl = getGoogleSheetsWebhookUrl();

  if (!webhookUrl) {
    return {
      ok: false,
      reason: "missing_webhook_url" as const,
    };
  }

  const body = new URLSearchParams();
  body.set("sheetId", GOOGLE_SHEET_ID);
  body.set("payload", JSON.stringify(payload));

  await fetch(webhookUrl, {
    method: "POST",
    mode: "no-cors",
    body,
  });

  return {
    ok: true,
    reason: "sent" as const,
  };
}
