import Image from "next/image";
import type { CSSProperties } from "react";
import type { DiagnosisTypeKey } from "@/lib/diagnosis/types";
import { careerTypeProfileByKey } from "@/lib/careerTypeProfiles";

const iconFiles: Record<DiagnosisTypeKey, string> = {
  challenge: "career-type-voxel-challenge.png",
  coordination: "career-type-voxel-coordination.png",
  analysis: "career-type-voxel-analysis.png",
  empathy: "career-type-voxel-empathy.png",
  stable: "career-type-voxel-stable.png",
  creative: "career-type-voxel-creative.png",
  growth: "career-type-voxel-growth.png",
  specialist: "career-type-voxel-specialist.png",
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function VoxelTypeIcon({
  type,
  className = "",
}: {
  type: DiagnosisTypeKey;
  className?: string;
}) {
  const typeMeta = careerTypeProfileByKey[type];
  const imageSrc = `${basePath}/images/${iconFiles[type]}`;

  return (
    <div
      role="img"
      aria-label={`${typeMeta.name}の3Dボクセル風アイコン`}
      className={`voxel-type-icon relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        "--type-color": typeMeta.color,
        background: `radial-gradient(circle at 50% 34%, ${typeMeta.paleColor} 0%, #fffdf7 60%, #fff4d8 100%)`,
      } as CSSProperties}
    >
      <Image
        src={imageSrc}
        alt=""
        fill
        sizes="(max-width: 640px) 45vw, 280px"
        aria-hidden="true"
        draggable={false}
        className="relative z-[1] select-none object-contain"
        style={{ padding: "6%" }}
      />
    </div>
  );
}

export const ResultCharacter = VoxelTypeIcon;
