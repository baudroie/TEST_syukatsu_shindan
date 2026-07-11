import type { DiagnosisTypeKey } from "@/lib/diagnosis/types";

export type CareerTypeProfile = {
  key: DiagnosisTypeKey;
  typeNo: string;
  name: string;
  description: string;
  tags: string[];
  prAxis: string;
  color: string;
  paleColor: string;
  warmColor: string;
  englishLabel: string;
};

export const careerTypeProfiles: CareerTypeProfile[] = [
  {
    key: "challenge",
    typeNo: "01",
    name: "挑戦突破型",
    description: "困難を越えて、目標に向かう行動派。",
    tags: ["行動力", "突破力", "主体性"],
    prAxis: "挑戦経験を強みにしやすい",
    color: "#ef6d5c",
    paleColor: "#fff1ed",
    warmColor: "#ffe9df",
    englishLabel: "CHALLENGER",
  },
  {
    key: "coordination",
    typeNo: "02",
    name: "調整推進型",
    description: "人との間に立ち、チームを前に進めるタイプ。",
    tags: ["調整力", "協働性", "推進力"],
    prAxis: "チーム経験を語りやすい",
    color: "#2fb4c6",
    paleColor: "#eefbfc",
    warmColor: "#e4f7f8",
    englishLabel: "CONNECTOR",
  },
  {
    key: "analysis",
    typeNo: "03",
    name: "分析参謀型",
    description: "状況を整理し、筋道立てて考える導くタイプ。",
    tags: ["論理性", "課題発見力", "冷静さ"],
    prAxis: "課題解決経験と相性が良い",
    color: "#4d7fdd",
    paleColor: "#eef5ff",
    warmColor: "#e7f0ff",
    englishLabel: "ANALYST",
  },
  {
    key: "empathy",
    typeNo: "04",
    name: "共感サポート型",
    description: "相手に寄り添い、安心感をつくるタイプ。",
    tags: ["傾聴力", "共感力", "信頼構築"],
    prAxis: "人を支えた経験が伝わりやすい",
    color: "#eb6b91",
    paleColor: "#fff1f6",
    warmColor: "#ffe7ef",
    englishLabel: "SUPPORTER",
  },
  {
    key: "stable",
    typeNo: "05",
    name: "安定実行型",
    description: "やるべきことを着実に進め、成果につなげるタイプ。",
    tags: ["継続力", "責任感", "正確性"],
    prAxis: "継続した取り組みが武器になる",
    color: "#42ad71",
    paleColor: "#effaf2",
    warmColor: "#e7f8ea",
    englishLabel: "BUILDER",
  },
  {
    key: "creative",
    typeNo: "06",
    name: "企画創造型",
    description: "新しい視点から、現状をより良くするタイプ。",
    tags: ["発想力", "改善力", "企画力"],
    prAxis: "アイデアや改善経験を語りやすい",
    color: "#8f72dc",
    paleColor: "#f7f1ff",
    warmColor: "#f1e9ff",
    englishLabel: "CREATOR",
  },
  {
    key: "growth",
    typeNo: "07",
    name: "成長追求型",
    description: "学び続けながら、自分をアップデートするタイプ。",
    tags: ["向上心", "学習意欲", "素直さ"],
    prAxis: "成長過程を魅力に変えやすい",
    color: "#f0a139",
    paleColor: "#fff7ea",
    warmColor: "#ffefd2",
    englishLabel: "LEARNER",
  },
  {
    key: "specialist",
    typeNo: "08",
    name: "専門探究型",
    description: "興味のある分野を深く掘り下げるタイプ。",
    tags: ["探究心", "専門性", "集中力"],
    prAxis: "学びや研究経験と相性が良い",
    color: "#4c88cf",
    paleColor: "#eff7ff",
    warmColor: "#e5f1ff",
    englishLabel: "EXPLORER",
  },
];

export const careerTypeProfileByKey = Object.fromEntries(
  careerTypeProfiles.map((profile) => [profile.key, profile]),
) as Record<DiagnosisTypeKey, CareerTypeProfile>;
