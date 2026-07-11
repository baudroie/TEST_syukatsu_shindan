import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const navItems = [
  { href: "#flow", label: "診断の流れ" },
  { href: "#use", label: "活用方法" },
  { href: "#faq", label: "よくある質問" },
  { href: "#types", label: "タイプ一覧" },
  { href: "#articles", label: "お役立ち記事" },
];

export function Header() {
  return (
    <header className="site-header relative z-50 bg-transparent px-4 pt-5 sm:px-6 lg:px-8">
      <div className="site-header-panel mx-auto flex h-[86px] max-w-[1240px] items-center justify-between gap-7 rounded-t-[14px] border border-b-0 border-[#dce3ec] bg-white/95 px-7 shadow-[0_8px_22px_rgba(16,34,71,0.08)] backdrop-blur-md sm:px-8 lg:h-[96px]">
        <Link
          href="/"
          className="brand-lockup flex min-w-0 items-center gap-3.5 text-ink"
          aria-label="キャリタイプのトップへ"
        >
          <span className="brand-mark flex h-[54px] w-[54px] shrink-0 items-center justify-center lg:h-[58px] lg:w-[58px]">
            <Image
              src={basePath + "/assets/brand/careertype-logo-icon.svg"}
              alt=""
              width={58}
              height={58}
              priority
              className="h-full w-full"
            />
          </span>
          <span className="flex min-w-0 flex-col justify-center gap-1">
            <span className="brand-wordmark truncate text-[1.72rem] font-extrabold leading-none text-ink lg:text-[2rem]">
              キャリタイプ
            </span>
            <span className="hidden text-[0.78rem] font-bold leading-none tracking-[0.15em] text-[#647086] sm:block">
              就活タイプ診断
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center justify-center gap-8 text-[0.88rem] font-extrabold text-[#23314d] lg:flex xl:gap-10"
          aria-label="主要ナビゲーション"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition-colors hover:text-[#1259c9]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/diagnosis"
          className="header-cta inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-[8px] bg-[#102247] px-5 text-[0.86rem] font-extrabold text-white shadow-[0_10px_20px_rgba(16,34,71,0.22)] transition hover:bg-[#0e4caf] sm:px-6 sm:text-sm lg:px-7"
        >
          <span className="hidden sm:inline">無料で診断をはじめる</span>
          <span className="sm:hidden">無料診断</span>
          <ArrowRight size={16} strokeWidth={2.6} />
        </Link>
      </div>
    </header>
  );
}
