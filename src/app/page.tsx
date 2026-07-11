import {
  ArrowRight,
  Compass,
  Flag,
  Target,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ButtonLink } from "@/components/Button";
import { VoxelTypeIcon } from "@/components/ResultCharacter";
import { TypeArtwork } from "@/components/TypeArtwork";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const heroFacts = [
  { icon: "/assets/icons/icon-diagnosis-note.svg", label: "30問・約5分" },
  { icon: "/assets/icons/icon-type-classification.svg", label: "登録不要" },
  { icon: "/assets/icons/icon-result-quick.svg", label: "結果はすぐに確認" },
];

const recommendations = [
  "自分の強みがわからない",
  "自己PRに自信がない",
  "面接でうまく伝えられない",
];

const benefits = [
  {
    no: "01",
    accent: "#2767d8",
    title: "自分の強みが\n言語化できる",
    text: "診断結果から、あなたの強みや価値観をわかりやすく言語化。",
    visualType: "analysis" as const,
  },
  {
    no: "02",
    accent: "#17a5a6",
    title: "自己PRの軸が\n見つかる",
    text: "強みをもとに、あなただけの自己PRの軸が見つかります。",
    visualType: "coordination" as const,
  },
  {
    no: "03",
    accent: "#f1665a",
    title: "面接での伝え方が\nわかる",
    text: "職種や状況に合わせた、効果的な伝え方のコツがわかります。",
    visualType: "empathy" as const,
  },
];

const typeIntroPoints = [
  {
    icon: Target,
    text: "行動スタイルや価値観の違いを元に、8つのタイプを定義",
  },
  {
    icon: UsersRound,
    text: "自分の強みを言語化し、面接での伝え方までサポート",
  },
];

const frontTypeCards = [
  {
    key: "challenge" as const,
    typeNo: "01",
    englishLabel: "CHALLENGER",
    name: "挑戦突破型",
    description:
      "高い目標に向かって主体的に挑戦し、困難を突破していくリーダータイプ。",
    tags: ["挑戦心", "突破力", "主体性"],
    prDirection:
      "目標に向けた挑戦経験や、困難を乗り越えた具体的なエピソードを中心に伝える。",
    color: "#2368d8",
    paleColor: "#edf5ff",
  },
  {
    key: "coordination" as const,
    typeNo: "02",
    englishLabel: "COORDINATOR",
    name: "調整推進型",
    description:
      "周囲と連携しながら全体を前に進め、チームの力を最大化するタイプ。",
    tags: ["協調性", "推進力", "巻き込み力"],
    prDirection:
      "チームでの役割や調整経験、成果につながった工夫を具体的に伝える。",
    color: "#159774",
    paleColor: "#eefaf4",
  },
  {
    key: "analysis" as const,
    typeNo: "03",
    englishLabel: "ANALYST",
    name: "分析参謀型",
    description:
      "情報を整理・分析し、論理的に課題解決へ導く参謀タイプ。",
    tags: ["分析力", "論理性", "課題解決力"],
    prDirection:
      "データや情報をもとに考え、改善や意思決定に貢献した経験を伝える。",
    color: "#7152d4",
    paleColor: "#f5f1ff",
  },
  {
    key: "empathy" as const,
    typeNo: "04",
    englishLabel: "SUPPORTER",
    name: "共感サポート型",
    description:
      "相手に寄り添い、安心感を与えながら支援・サポートするタイプ。",
    tags: ["共感力", "傾聴力", "サポート力"],
    prDirection:
      "相手の状況に寄り添い、支えた経験や信頼関係を築いたエピソードを伝える。",
    color: "#d84e7d",
    paleColor: "#fff1f6",
  },
];

const backTypeCards = [
  {
    key: "stable" as const,
    typeNo: "05",
    name: "安定実行型",
    description: "着実に取り組み、安定した成果を出す行動派。",
    tags: ["継続力", "責任感", "安定志向"],
    color: "#459438",
    paleColor: "#f0fae9",
    visualSrc: "/assets/types/careertype-type05-visual.png",
  },
  {
    key: "creative" as const,
    typeNo: "06",
    name: "企画創造型",
    description: "アイデアを形にし、価値を生み出すクリエイター。",
    tags: ["発想力", "創造力", "企画力"],
    color: "#8a58d4",
    paleColor: "#f6f0ff",
    visualSrc: "/assets/types/careertype-type06-visual.png",
  },
  {
    key: "growth" as const,
    typeNo: "07",
    name: "成長追求型",
    description: "高い目標を掲げ、自分を磨き続ける努力家。",
    tags: ["向上心", "ストイック", "チャレンジ"],
    color: "#e39a21",
    paleColor: "#fff7df",
    visualSrc: "/assets/types/careertype-type07-visual.png",
  },
  {
    key: "specialist" as const,
    typeNo: "08",
    name: "専門探究型",
    description: "専門性を深め、本質を追求する探究者。",
    tags: ["探究心", "分析力", "専門性"],
    color: "#2f76cc",
    paleColor: "#eef6ff",
    visualSrc: "/assets/types/careertype-type08-visual.png",
  },
];

const finalFloatingCards = [
  {
    type: "analysis" as const,
    typeNo: "02",
    name: "分析参謀型",
    className: "final-floating-card-analysis",
  },
  {
    type: "challenge" as const,
    typeNo: "01",
    name: "挑戦突破型",
    className: "final-floating-card-challenge",
  },
  {
    type: "coordination" as const,
    typeNo: "03",
    name: "調整推進型",
    className: "final-floating-card-coordination",
  },
  {
    type: "empathy" as const,
    typeNo: "04",
    name: "共感サポート型",
    className: "final-floating-card-empathy",
  },
  {
    type: "growth" as const,
    typeNo: "05",
    name: "成長追求型",
    className: "final-floating-card-growth",
  },
];

const finalFooterLinks = [
  { href: "#flow", label: "診断の流れ" },
  { href: "#use", label: "活用方法" },
  { href: "#faq", label: "よくある質問" },
  { href: "#types", label: "タイプ一覧" },
  { href: "#articles", label: "お役立ち記事" },
];

function FinalFloatingCard({
  card,
}: {
  card: (typeof finalFloatingCards)[number];
}) {
  return (
    <article className={`final-floating-card ${card.className}`}>
      <VoxelTypeIcon
        type={card.type}
        className="final-floating-visual aspect-square"
      />
      <p>TYPE {card.typeNo}</p>
      <h3>{card.name}</h3>
    </article>
  );
}

function BottomCtaVisual() {
  return (
    <div className="final-cta-visual" aria-hidden="true">
      <div className="final-dot-grid final-dot-grid-top" />
      <div className="final-dot-grid final-dot-grid-bottom" />
      <div className="final-orbit final-orbit-one" />
      <div className="final-orbit final-orbit-two" />
      <span className="final-cube final-cube-blue" />
      <span className="final-cube final-cube-white" />
      <span className="final-cube final-cube-yellow" />
      <span className="final-plane final-plane-large" />
      <span className="final-plane final-plane-small" />
      {finalFloatingCards.map((card) => (
        <FinalFloatingCard key={`${card.typeNo}-${card.name}`} card={card} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <section className="hero-section px-4 pb-8 sm:px-6 lg:px-8">
        <div className="hero-panel mx-auto grid max-w-[1240px] items-center gap-12 rounded-b-[14px] border border-t-0 border-[#dce3ec] bg-white/95 px-6 pb-10 pt-8 shadow-[0_14px_30px_rgba(16,34,71,0.10)] sm:px-10 sm:pb-12 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:gap-16 lg:px-14 lg:pb-12 lg:pt-10 xl:gap-[68px]">
          <div className="hero-copy min-w-0 lg:pl-1">
            <p className="hero-handcopy">
              自分の強み、ちゃんとわかってる？
            </p>
            <h1 className="hero-title mt-8">
              <span className="hero-title-line">30問で見つかる、</span>
              <span className="hero-title-line">あなただけの</span>
              <span className="hero-title-line">就活タイプ。</span>
            </h1>
            <p className="mt-7 max-w-[570px] text-[0.98rem] font-bold leading-8 text-[#41506b] sm:text-base sm:leading-8">
              行動や考え方の傾向をもとに、あなたの強み・自己PRの軸・
              <br className="hidden sm:block" />
              面接での伝え方までをタイプ別にナビゲートします。
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {heroFacts.map(({ icon, label }) => (
                <span key={label} className="hero-fact-chip">
                  <Image
                    src={basePath + icon}
                    alt=""
                    width={24}
                    height={24}
                    aria-hidden="true"
                  />
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-5 flex max-w-[500px] flex-col gap-2">
              <ButtonLink
                href="/diagnosis"
                size="large"
                className="reference-primary-cta hero-main-cta w-full"
              >
                無料で診断をはじめる
                <ArrowRight size={20} strokeWidth={2.6} />
              </ButtonLink>
              <p className="text-center text-xs font-bold text-[#8a94a4]">
                スマホでもサクッと受験できます
              </p>
            </div>
          </div>

          <TypeArtwork priority />
        </div>
      </section>

      <section id="flow" className="section-two-shell px-4 py-7 sm:px-6 lg:px-8">
        <div className="section-two-panel mx-auto max-w-[1360px] rounded-[14px] border border-[#dce3ec] bg-white/92 p-7 shadow-[0_12px_28px_rgba(16,34,71,0.08)] sm:p-8">
          <div className="recommend-strip rounded-[10px] bg-[#102247] text-white">
            <div className="recommend-strip-inner grid items-center gap-0 lg:grid-cols-[1.1fr_1fr_1fr_1fr]">
              <div className="recommend-strip-label flex items-center gap-4 px-7 py-5">
                <span className="recommend-icon-wrap flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] text-[#f7c734]">
                  <Image
                    src={`${basePath}/assets/icons/icon-recommend-target.svg`}
                    alt=""
                    width={34}
                    height={34}
                    aria-hidden="true"
                  />
                </span>
                <p className="text-[1.35rem] font-extrabold tracking-[0.02em]">
                  こんな人におすすめ！
                </p>
              </div>
              {recommendations.map((item) => (
                <div key={item} className="recommend-item flex items-center gap-4 px-7 py-5">
                  <span className="recommend-check flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#102247]">
                    <Image
                      src={`${basePath}/assets/icons/icon-recommend-check.svg`}
                      alt=""
                      width={21}
                      height={21}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[1.02rem] font-extrabold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="features-panel mt-8 grid gap-7 rounded-[12px] border border-[#cfe0f2] bg-[#f8fbff] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)] lg:grid-cols-[0.92fr_1fr_1fr_1fr] lg:items-stretch">
            <div className="features-heading-block flex min-h-[350px] flex-col justify-center rounded-[10px] px-3 py-5">
              <p className="features-heading-kicker">
                <span>キャリタイプで</span>
              </p>
              <h2 className="features-heading-title" aria-label="キャリタイプで得られる3つのこと">
                <span>得られる</span>
                <strong>3つのこと</strong>
              </h2>
              <span className="features-dotted-line mt-6" aria-hidden="true" />
            </div>

            {benefits.map((benefit) => (
              <article
                key={benefit.no}
                className="feature-card grid min-h-[350px] grid-rows-[auto_auto_auto_auto_1fr] overflow-hidden rounded-[12px] border border-[#dce3ec] bg-white px-7 pb-7 pt-8 shadow-[0_12px_24px_rgba(16,34,71,0.11)]"
                style={{ "--feature-color": benefit.accent } as CSSProperties}
              >
                <div className="feature-card-line" />
                <p className="feature-card-number text-center font-extrabold leading-none">
                  {benefit.no}
                </p>
                <VoxelTypeIcon
                  type={benefit.visualType}
                  className="feature-card-visual mx-auto mt-5 aspect-[1.55/1] w-full max-w-[210px]"
                />
                <h3 className="feature-card-title mt-6 text-center text-[1.72rem] font-extrabold leading-[1.35] text-ink">
                  {benefit.title.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <div className="feature-card-divider mt-5" />
                <p className="feature-card-body mt-5 text-[0.98rem] font-bold leading-8 text-[#4f5e78]">
                  {benefit.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="types" className="types-front-shell px-4 py-7 sm:px-6 lg:px-8">
        <div className="types-front-panel mx-auto max-w-[1360px] rounded-[14px] border border-[#dce3ec] bg-white/94 px-7 py-8 shadow-[0_14px_30px_rgba(16,34,71,0.10)] sm:px-10 sm:py-10">
          <div className="types-front-head grid gap-8 lg:grid-cols-[1fr_0.94fr] lg:items-center">
            <div>
              <p className="types-front-label">8 CAREER TYPES</p>
              <h2 className="mt-3 text-[2.75rem] font-extrabold leading-[1.1] tracking-[0.01em] text-ink sm:text-[3.45rem]">
                8つの就活タイプ
              </h2>
              <p className="mt-4 max-w-[640px] text-[0.98rem] font-bold leading-8 text-[#41506b]">
                行動や考え方の傾向をもとに、あなたの強み・自己PRの軸・
                面接での伝え方までをタイプ別にナビゲートします。
                まずは自分に近いタイプを見つけてみましょう。
              </p>
            </div>

            <div className="types-front-points space-y-6">
              {typeIntroPoints.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-5">
                  <span className="types-front-point-icon">
                    <Icon size={22} strokeWidth={2.6} />
                  </span>
                  <p className="text-[0.98rem] font-extrabold leading-7 text-ink">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="types-front-grid mt-8 grid gap-6 lg:grid-cols-4">
            {frontTypeCards.map((card) => (
              <article
                key={card.key}
                className="type-front-card"
                style={
                  {
                    "--type-color": card.color,
                    "--type-pale": card.paleColor,
                    borderColor: `${card.color}42`,
                    backgroundColor: card.paleColor,
                  } as CSSProperties
                }
              >
                <div className="type-front-meta flex items-start justify-between gap-3">
                  <p className="type-front-number">TYPE {card.typeNo}</p>
                  <p className="type-front-english">{card.englishLabel}</p>
                </div>

                <h3 className="type-front-title">{card.name}</h3>

                <VoxelTypeIcon
                  type={card.key}
                  className="type-front-visual mx-auto aspect-square w-full max-w-[190px]"
                />

                <p className="type-front-description">{card.description}</p>

                <div className="type-front-tags">
                  {card.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="type-front-pr">
                  <p className="type-front-pr-heading">
                    <Flag size={15} fill="currentColor" strokeWidth={2.4} />
                    向いている自己PRの方向性
                  </p>
                  <p className="type-front-pr-text">{card.prDirection}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="types-back-shell px-4 pb-7 sm:px-6 lg:px-8">
        <div className="types-back-panel mx-auto max-w-[1360px] rounded-[14px] border border-[#dce3ec] bg-white/94 px-7 py-8 shadow-[0_14px_30px_rgba(16,34,71,0.10)] sm:px-10 sm:py-10">
          <div className="types-back-grid grid gap-6 lg:grid-cols-4">
            {backTypeCards.map((card) => (
              <article
                key={card.key}
                className="type-back-card"
                style={
                  {
                    "--type-color": card.color,
                    "--type-pale": card.paleColor,
                  } as CSSProperties
                }
              >
                <span className="paper-tape type-back-tape" aria-hidden="true" />
                <div className="type-back-visual mx-auto aspect-[1.14/1] w-full">
                  <Image
                    src={`${basePath}${card.visualSrc}`}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 70vw, 260px"
                    aria-hidden="true"
                    className="object-contain"
                  />
                </div>
                <p className="type-back-number">TYPE {card.typeNo}</p>
                <h3 className="type-back-title">{card.name}</h3>
                <p className="type-back-description">{card.description}</p>
                <div className="type-back-tags">
                  {card.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div id="use" className="types-small-cta">
            <div className="types-small-cta-copy">
              <span className="types-small-cta-icon">
                <Compass size={42} strokeWidth={2.3} />
              </span>
              <div>
                <h2>まずは結果を見てみよう！</h2>
                <p>
                  たった30問で、あなたの強み・適性・向いている働き方が見えてきます。
                </p>
              </div>
            </div>
            <ButtonLink
              href="/diagnosis"
              variant="secondary"
              className="types-small-cta-button"
            >
              タイプ一覧をもっと詳しく見る
              <ArrowRight size={18} strokeWidth={2.6} />
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="final-cta-section px-4 pb-12 pt-5 sm:px-6 sm:pb-16 lg:px-8">
        <div className="final-cta-panel mx-auto max-w-[1360px] overflow-hidden rounded-[14px] text-white shadow-[0_18px_38px_rgba(16,34,71,0.20)]">
          <div className="final-cta-main grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className="final-cta-copy px-8 py-10 sm:px-12 sm:py-14 lg:py-20 lg:pl-20">
              <h2 className="final-cta-title">
                {"就活の『"}
                <span>軸</span>
                {"』が見つかる。"}
              </h2>
              <p className="final-cta-description">
                30問の診断で、あなたの強み・向いている働き方・活躍タイプを可視化。
                <br className="hidden sm:block" />
                自分らしいキャリアの第一歩を、ここから始めましょう。
              </p>
              <div className="mt-8 w-full max-w-[510px]">
                <ButtonLink
                  href="/diagnosis"
                  size="large"
                  className="final-yellow-cta w-full"
                >
                  <Image
                    src={`${basePath}/assets/icons/icon-feature-note.svg`}
                    alt=""
                    width={27}
                    height={27}
                    aria-hidden="true"
                    className="final-cta-button-icon"
                  />
                  無料で診断をはじめる
                  <ArrowRight size={23} strokeWidth={2.7} />
                </ButtonLink>
              </div>
            </div>
            <BottomCtaVisual />
          </div>
          <footer className="final-cta-footer" aria-label="フッターナビゲーション">
            <nav className="final-cta-footer-nav" aria-label="フッターナビゲーション">
              {finalFooterLinks.map((link, index) => (
                <a key={link.label} href={link.href} className="final-cta-footer-link">
                  {link.label}
                  {index < finalFooterLinks.length - 1 ? (
                    <span aria-hidden="true" />
                  ) : null}
                </a>
              ))}
            </nav>
            <p className="final-cta-copyright">© 2026 キャリタイプ</p>
          </footer>
        </div>
      </section>

      <section id="faq" className="sr-only" aria-label="よくある質問">
        <h2>よくある質問</h2>
        <p>30問に回答すると、あなたの就活タイプを確認できます。</p>
      </section>

      <section id="articles" className="sr-only" aria-label="お役立ち記事">
        <h2>お役立ち記事</h2>
        <p>就活準備に役立つ記事を準備中です。</p>
      </section>
    </>
  );
}
