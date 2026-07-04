import type { DiagnosisTypeKey } from "@/lib/diagnosis/types";

const positions: Record<DiagnosisTypeKey, string> = {
  challenge: "0% 0%",
  coordination: "33.333% 0%",
  analysis: "66.667% 0%",
  empathy: "100% 0%",
  stable: "0% 100%",
  creative: "33.333% 100%",
  growth: "66.667% 100%",
  specialist: "100% 100%",
};

// CSS内のURLにはNext.jsのbasePathが自動付与されないため、明示的に連結する
const spriteUrl = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/career-type-sprite.png`;

export function ResultCharacter({
  type,
  className = "",
}: {
  type: DiagnosisTypeKey;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${type}タイプの人物イラスト`}
      className={`bg-[length:400%_200%] bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${spriteUrl})`,
        backgroundPosition: positions[type],
      }}
    />
  );
}
