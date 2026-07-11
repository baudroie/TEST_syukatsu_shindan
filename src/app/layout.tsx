import type { Metadata } from "next";
import { Manrope, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "キャリタイプ | 就活タイプ診断",
  description:
    "30問の無料診断で、あなたの就活タイプと自己PR・面接に使える強みを見つけます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJp.variable} ${manrope.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-canvas font-sans">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
