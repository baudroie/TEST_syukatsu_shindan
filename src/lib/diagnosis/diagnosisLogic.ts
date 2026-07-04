import {
  diagnosisTypeKeys,
  type Answers,
  type DiagnosisResult,
  type Scores,
} from "./types";
import { questions } from "./questions";

export const createEmptyScores = (): Scores =>
  Object.fromEntries(diagnosisTypeKeys.map((key) => [key, 0])) as Scores;

export function calculateScores(answers: Answers): Scores {
  return questions.reduce((scores, question) => {
    const selectedOptionIndex = answers[question.id];
    const selectedOption = question.options[selectedOptionIndex];

    if (!selectedOption) return scores;

    Object.entries(selectedOption.scores).forEach(([key, value]) => {
      scores[key as keyof Scores] += value ?? 0;
    });

    return scores;
  }, createEmptyScores());
}

export function determineTypes(scores: Scores) {
  const rankedTypes = diagnosisTypeKeys
    .map((key, order) => ({ key, score: scores[key], order }))
    .sort((a, b) => b.score - a.score || a.order - b.order);

  return {
    mainType: rankedTypes[0].key,
    subType: rankedTypes[1].key,
  };
}

export function createDiagnosisResult(answers: Answers): DiagnosisResult {
  const scores = calculateScores(answers);
  const { mainType, subType } = determineTypes(scores);

  return {
    mainType,
    subType,
    scores,
    completedAt: new Date().toISOString(),
  };
}

export function hasAnsweredAllQuestions(answers: Answers) {
  return questions.every((question) => Number.isInteger(answers[question.id]));
}
