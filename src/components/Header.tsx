import Link from "next/link";
import { Compass } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-white">
            <Compass size={19} strokeWidth={2.2} />
          </span>
          <span className="text-lg">キャリタイプ</span>
        </Link>
        <Link
          href="/diagnosis"
          className="rounded-lg px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-100 hover:text-ink"
        >
          診断について
        </Link>
      </div>
    </header>
  );
}
