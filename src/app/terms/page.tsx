import { TermsContent } from "@/components/TermsContent";

export default function TermsPage() {
  return (
    <div className="voxel-shell px-5 py-12 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="voxel-chip inline-flex px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-slate-500">
          Terms and Privacy
        </p>
        <h1 className="voxel-title mt-4 text-balance font-palt text-3xl font-black tracking-tight text-ink sm:text-5xl">
          利用規約と個人情報の取扱いについて
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
          キャリタイプをご利用いただく前に、以下の内容をご確認ください。
          内容に同意いただいた場合のみ、診断を開始できます。
        </p>

        <div className="voxel-panel mt-10 bg-white p-6 sm:p-8">
          <TermsContent />
        </div>
      </div>
    </div>
  );
}
