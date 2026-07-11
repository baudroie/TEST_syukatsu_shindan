import Link from "next/link";

const summaryItems = [
  "入力情報と回答内容をもとに診断結果を作成します",
  "送信内容は指定のGoogleスプレッドシートに保存されます",
  "診断結果は自己分析・就活準備の参考情報であり、選考結果等を保証するものではありません",
  "入力内容に誤りがある場合、正しい結果連絡ができない場合があります",
  "同意後も、診断開始前であればブラウザを閉じて中止できます",
];

const sections = [
  {
    title: "1. 診断結果について",
    body: [
      "本サービスは、ユーザーが入力した情報および診断質問への回答内容をもとに、就活タイプや自己PRの参考となる情報を作成します。",
      "診断結果は、就職活動における自己理解や面接準備の補助を目的としたものであり、特定の職業・企業・選考結果を保証するものではありません。",
    ],
  },
  {
    title: "2. 取得する情報",
    body: [
      "本サービスでは、診断の実施および結果連絡のため、以下の情報を取得する場合があります。",
    ],
    list: [
      "ユーザーがフォームに入力した情報",
      "診断質問への回答内容",
      "診断結果",
      "結果連絡に必要な連絡先情報",
      "送信日時などの利用記録",
    ],
  },
  {
    title: "3. 情報の保存先",
    body: [
      "送信された内容は、運営者が管理する指定のGoogleスプレッドシートに保存されます。",
      "保存された情報は、診断結果の作成、結果連絡、サービス改善、問い合わせ対応の目的で利用します。",
    ],
  },
  {
    title: "4. 入力内容の正確性について",
    body: [
      "入力内容に誤りがある場合、正しい診断結果の作成や結果連絡ができない場合があります。",
      "送信前に、入力内容に誤りがないかご確認ください。",
    ],
  },
  {
    title: "5. 情報の管理について",
    body: [
      "運営者は、取得した情報について、漏えい、紛失、不正アクセス等が起こらないよう、適切な管理に努めます。",
      "ただし、通信環境や外部サービスの仕様により、完全な安全性を保証するものではありません。",
    ],
  },
  {
    title: "6. 第三者提供について",
    body: [
      "取得した情報は、法令に基づく場合を除き、本人の同意なく第三者に提供しません。",
      "ただし、Googleスプレッドシート等、サービス運営に必要な外部サービスを利用する場合があります。",
    ],
  },
  {
    title: "7. 診断の中止について",
    body: [
      "同意後であっても、診断を開始する前であれば、ブラウザを閉じることで利用を中止できます。",
      "診断開始後に送信が完了した情報については、システムの仕様上、保存される場合があります。",
    ],
  },
  {
    title: "8. 免責事項",
    body: [
      "本サービスの診断結果は、就職活動や自己分析の参考情報として提供されるものです。",
      "診断結果の利用により発生した不利益、選考結果、進路選択等について、運営者は責任を負いません。",
    ],
  },
  {
    title: "9. 内容の変更",
    body: [
      "本規約および個人情報の取扱いに関する内容は、必要に応じて変更される場合があります。",
      "変更後の内容は、本サービス上に表示した時点で効力を生じるものとします。",
    ],
  },
  {
    title: "10. お問い合わせ",
    body: [
      "本サービスに関するお問い合わせは、運営者が指定する問い合わせ窓口までご連絡ください。",
    ],
  },
];

export function TermsSummaryCards() {
  return (
    <div className="grid gap-3">
      <h2 className="text-base font-black text-ink">利用規約の要点</h2>
      <div className="grid gap-2">
        {summaryItems.map((item) => (
          <div
            key={item}
            className="rounded-[10px] border border-[#e7dcc8] bg-[#fff8e8] px-4 py-3 text-sm font-bold leading-7 text-[#263653]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TermsContent({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div>
      <div className={compact ? "space-y-4" : "space-y-6"}>
        <TermsSummaryCards />

        <div className="rounded-[12px] border border-[#dce3ec] bg-white">
          <div className="border-b border-[#e6edf5] px-4 py-3">
            <p className="text-sm font-black text-ink">詳細内容</p>
            <p className="mt-1 text-xs font-bold leading-5 text-[#647086]">
              小さなウィンドウ内をスクロールして、必要な内容を確認できます。
            </p>
          </div>
          <div
            className={
              compact
                ? "max-h-[300px] overflow-y-auto px-4 py-4 sm:max-h-[340px]"
                : "max-h-[560px] overflow-y-auto px-5 py-5 sm:px-7"
            }
          >
            <div className="space-y-6 pr-2 text-sm leading-7 text-[#41506b]">
              {sections.map((section) => (
                <section key={section.title}>
                  <h3 className="font-black text-ink">{section.title}</h3>
                  <div className="mt-2 space-y-2">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.list ? (
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}

              <section className="rounded-[10px] bg-[#fff8e8] p-4">
                <h3 className="font-black text-ink">未設定項目</h3>
                <p className="mt-2">
                  運営者名、問い合わせ先、保存期間は確定後に本サービス上で明示します。
                </p>
                {/* TODO: 運営者名を設定 */}
                {/* TODO: 問い合わせ先メールアドレスを設定 */}
                {/* TODO: 保存期間を設定 */}
              </section>
            </div>
          </div>
        </div>
      </div>

      {compact ? (
        <Link
          href="/terms"
          className="mt-4 inline-flex text-sm font-black text-[#0d4caf] underline decoration-[#f7c734] decoration-2 underline-offset-4"
        >
          利用規約の全文ページを開く
        </Link>
      ) : null}
    </div>
  );
}
