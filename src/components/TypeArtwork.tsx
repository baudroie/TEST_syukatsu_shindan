import { VoxelTypeIcon } from "@/components/ResultCharacter";
import type { DiagnosisTypeKey } from "@/lib/diagnosis/types";

type MiniCard = {
  key: DiagnosisTypeKey;
  displayNo: string;
  name: string;
  className: string;
};

const miniCards: MiniCard[] = [
  {
    key: "analysis",
    displayNo: "03",
    name: "分析参謀型",
    className: "hero-mini-card hero-mini-card-analysis",
  },
  {
    key: "coordination",
    displayNo: "02",
    name: "調整推進型",
    className: "hero-mini-card hero-mini-card-coordination",
  },
  {
    key: "empathy",
    displayNo: "04",
    name: "共感サポート型",
    className: "hero-mini-card hero-mini-card-empathy",
  },
  {
    key: "growth",
    displayNo: "07",
    name: "成長追求型",
    className: "hero-mini-card hero-mini-card-growth",
  },
];

function MiniTypeCard({
  type,
  displayNo,
  name,
  className,
}: {
  type: DiagnosisTypeKey;
  displayNo: string;
  name: string;
  className: string;
}) {
  return (
    <article className={className}>
      <span className="paper-tape paper-tape-sm" aria-hidden="true" />
      <VoxelTypeIcon
        type={type}
        className="hero-mini-visual aspect-square w-full"
      />
      <p className="hero-card-type mt-3">TYPE {displayNo}</p>
      <h3 className="hero-card-name mt-0.5">{name}</h3>
    </article>
  );
}

export function TypeArtwork({
  className = "",
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={"hero-artboard relative min-h-[560px] w-full max-w-[650px] justify-self-center " + className}
    >
      <div className="hero-grid-sheet" aria-hidden="true" />
      <div className="hero-paper-back hero-paper-back-one" aria-hidden="true" />
      <div className="hero-paper-back hero-paper-back-two" aria-hidden="true" />

      <article className="hero-feature-card">
        <span className="paper-tape paper-tape-main" aria-hidden="true" />
        <VoxelTypeIcon
          type="challenge"
          className="hero-feature-visual mx-auto aspect-square w-[86%] max-w-[330px]"
        />
        <div className="mt-4 border-t border-[#d9e0ea] pt-4">
          <p className="hero-card-type text-[#195ac5]">TYPE 01</p>
          <h2 className="mt-1 text-[1.72rem] font-extrabold leading-tight text-ink">
            挑戦突破型
          </h2>
          <p className="mt-2 text-sm font-bold leading-6 text-[#536079]">
            壁を越えて、目標に向かう行動派。
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["行動力", "突破力", "挑戦心"].map((tag) => (
              <span key={tag} className="hero-type-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {miniCards.map(({ key, displayNo, name, className }) => (
        <MiniTypeCard
          key={key}
          type={key}
          displayNo={displayNo}
          name={name}
          className={className}
        />
      ))}

      <div className="hero-blue-badge" aria-label="あなたの強みを言語化しよう">
        <span>あなたの</span>
        <strong>強み</strong>
        <span>を言語化</span>
      </div>

      <span className="hero-spark hero-spark-left" aria-hidden="true" />
      <span className="hero-spark hero-spark-right" aria-hidden="true" />
    </div>
  );
}
