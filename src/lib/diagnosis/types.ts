export const diagnosisTypeKeys = [
  "challenge",
  "coordination",
  "analysis",
  "empathy",
  "stable",
  "creative",
  "growth",
  "specialist",
] as const;

export type DiagnosisTypeKey = (typeof diagnosisTypeKeys)[number];
export type Scores = Record<DiagnosisTypeKey, number>;

export type DiagnosisOption = {
  text: string;
  scores: Partial<Scores>;
};

export type DiagnosisQuestion = {
  id: number;
  question: string;
  hint?: string;
  options: DiagnosisOption[];
};

export type Answers = Record<number, number>;

export type DiagnosisResult = {
  mainType: DiagnosisTypeKey;
  subType: DiagnosisTypeKey;
  scores: Scores;
  completedAt: string;
};

export type ResultMessage = {
  name: string;
  shortName: string;
  catchphrase: string;
  description: string;
  strengths: string[];
  cautions: string[];
  esStrengths: string[];
  selfPrDirection: string;
  suitableEnvironments: string[];
  interviewAdvice: string;
  color: string;
  paleColor: string;
};
