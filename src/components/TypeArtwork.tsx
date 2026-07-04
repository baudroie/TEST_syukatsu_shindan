import Image from "next/image";

// unoptimized指定のnext/imageはbasePathを自動付与しないため、明示的に連結する
const artworkUrl = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/career-types.png`;

export function TypeArtwork({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-50 ${className}`}
    >
      <Image
        src={artworkUrl}
        alt="8つの就活タイプを表現した人物イラスト"
        width={1536}
        height={1024}
        priority={priority}
        unoptimized
        className="h-full w-full object-cover"
      />
    </div>
  );
}
