import type { DiagnosisQuestion, DiagnosisTypeKey } from "./types";

const option = (
  text: string,
  primary: DiagnosisTypeKey,
  secondary?: DiagnosisTypeKey,
) => ({
  text,
  scores: {
    [primary]: 2,
    ...(secondary ? { [secondary]: 1 } : {}),
  },
});

export const questions: DiagnosisQuestion[] = [
  {
    id: 1,
    question: "チームで何かに取り組むとき、自然と担うことが多い役割は？",
    options: [
      option("目標を決めて、先頭に立って動く", "challenge", "growth"),
      option("メンバーの意見をまとめ、進行を整える", "coordination", "empathy"),
      option("課題を整理し、進め方を設計する", "analysis", "stable"),
      option("新しい企画や改善案を提案する", "creative", "challenge"),
    ],
  },
  {
    id: 2,
    question: "アルバイトで忙しい時間帯になったとき、最初にすることは？",
    options: [
      option("優先順位を決め、目の前の業務を着実に進める", "stable", "analysis"),
      option("困っている人に声をかけ、必要な支援をする", "empathy", "coordination"),
      option("全体を見て、役割分担を調整する", "coordination", "stable"),
      option("もっと効率のよい方法をその場で試す", "creative", "challenge"),
    ],
  },
  {
    id: 3,
    question: "難しそうな目標を任されたとき、あなたに近い反応は？",
    options: [
      option("面白そうだと感じ、まず挑戦してみる", "challenge", "growth"),
      option("必要な知識やスキルを調べて学び始める", "growth", "specialist"),
      option("達成までの手順を細かく分ける", "analysis", "stable"),
      option("経験者に相談し、協力を得る", "coordination", "empathy"),
    ],
  },
  {
    id: 4,
    question: "グループで意見が分かれたとき、どのように対応しますか？",
    options: [
      option("それぞれの意見を聞き、共通点を探す", "coordination", "empathy"),
      option("判断基準を整理し、合理的に比較する", "analysis", "stable"),
      option("新しい第三の案を考える", "creative", "coordination"),
      option("目標達成を優先し、方向性をはっきり示す", "challenge", "analysis"),
    ],
  },
  {
    id: 5,
    question: "長期間の課題に取り組むとき、大切にしていることは？",
    options: [
      option("毎日の小さな目標を守り続ける", "stable", "growth"),
      option("途中でよりよい方法がないか見直す", "creative", "analysis"),
      option("テーマへの理解をじっくり深める", "specialist", "analysis"),
      option("仲間と進捗を共有し、励まし合う", "empathy", "coordination"),
    ],
  },
  {
    id: 6,
    question: "初めての仕事を覚えるとき、最も近い方法は？",
    options: [
      option("まずやってみて、失敗からコツをつかむ", "challenge", "growth"),
      option("手順をメモし、正確に再現できるようにする", "stable", "analysis"),
      option("詳しい人に質問し、考え方まで理解する", "growth", "empathy"),
      option("関連する情報も調べ、体系的に理解する", "specialist", "analysis"),
    ],
  },
  {
    id: 7,
    question: "サークルの参加者が減っているとき、あなたならどうしますか？",
    options: [
      option("原因をアンケートや数字から分析する", "analysis", "specialist"),
      option("メンバー一人ひとりの不満を聞く", "empathy", "coordination"),
      option("新しいイベントや発信方法を企画する", "creative", "challenge"),
      option("目標人数を決め、勧誘を積極的に進める", "challenge", "coordination"),
    ],
  },
  {
    id: 8,
    question: "自分が最も達成感を得やすいのはどんな瞬間ですか？",
    options: [
      option("高い目標を達成し、結果を出したとき", "challenge", "growth"),
      option("誰かの役に立ち、感謝されたとき", "empathy", "stable"),
      option("複雑な問題の原因を解明できたとき", "analysis", "specialist"),
      option("自分のアイデアが形になったとき", "creative", "challenge"),
    ],
  },
  {
    id: 9,
    question: "予定どおりに進まない状況では、何を意識しますか？",
    options: [
      option("状況に合わせて計画を柔軟に作り直す", "creative", "analysis"),
      option("やるべきことを整理し、着実に立て直す", "stable", "analysis"),
      option("周囲に状況を共有し、協力を集める", "coordination", "empathy"),
      option("多少のリスクを取ってでも突破口を探す", "challenge", "creative"),
    ],
  },
  {
    id: 10,
    question: "ゼミや授業で興味を持ったテーマに出会ったら？",
    options: [
      option("関連する本や論文まで深く調べる", "specialist", "growth"),
      option("学んだことをすぐ実践で試す", "growth", "challenge"),
      option("友人と話し、さまざまな見方を知る", "empathy", "coordination"),
      option("別の分野と組み合わせたアイデアを考える", "creative", "specialist"),
    ],
  },
  {
    id: 11,
    question: "後輩が仕事で失敗して落ち込んでいるとき、どう関わりますか？",
    options: [
      option("気持ちを聞き、安心して話せるようにする", "empathy", "coordination"),
      option("原因と次回の対策を一緒に整理する", "analysis", "growth"),
      option("自分の失敗談を伝え、再挑戦を後押しする", "growth", "challenge"),
      option("手順を確認し、次は確実にできるよう支える", "stable", "empathy"),
    ],
  },
  {
    id: 12,
    question: "締切がある課題への取り組み方で近いものは？",
    options: [
      option("早めに計画を立て、少しずつ進める", "stable", "analysis"),
      option("完成イメージを決め、集中して一気に進める", "challenge", "creative"),
      option("必要な品質や評価基準を詳しく調べる", "specialist", "stable"),
      option("途中で人に見せ、意見をもらいながら改善する", "coordination", "growth"),
    ],
  },
  {
    id: 13,
    question: "新しい環境に入ったとき、最初にすることは？",
    options: [
      option("自分から声をかけ、関係を作る", "coordination", "challenge"),
      option("周囲の様子を見て、ルールや流れを理解する", "stable", "analysis"),
      option("学べることや挑戦機会を探す", "growth", "challenge"),
      option("興味のある仕事やテーマを詳しく聞く", "specialist", "empathy"),
    ],
  },
  {
    id: 14,
    question: "誰かに説明するとき、どんな工夫をすることが多いですか？",
    options: [
      option("相手の反応を見て、言葉を選び直す", "empathy", "coordination"),
      option("結論と根拠を整理して順序立てて話す", "analysis", "stable"),
      option("具体例や図を使い、印象に残るようにする", "creative", "empathy"),
      option("自分が詳しく理解してから正確に説明する", "specialist", "analysis"),
    ],
  },
  {
    id: 15,
    question: "目標を決めるとき、最も近い考え方は？",
    options: [
      option("少し難しいくらいの高い目標を置く", "challenge", "growth"),
      option("無理なく続けられる具体的な目標にする", "stable", "analysis"),
      option("今の自分が伸ばしたい力から考える", "growth", "specialist"),
      option("周囲と目線を合わせ、共通目標にする", "coordination", "empathy"),
    ],
  },
  {
    id: 16,
    question: "作業の進め方を自由に決められるなら？",
    options: [
      option("これまでにない方法を試してみる", "creative", "challenge"),
      option("実績のある方法を丁寧に実行する", "stable", "specialist"),
      option("情報を集め、最も効率的な方法を選ぶ", "analysis", "creative"),
      option("関係者が動きやすい方法を相談して決める", "coordination", "empathy"),
    ],
  },
  {
    id: 17,
    question: "フィードバックを受けたときの反応に近いものは？",
    options: [
      option("改善点を素直に受け取り、すぐ試す", "growth", "challenge"),
      option("理由を詳しく聞き、納得してから修正する", "analysis", "specialist"),
      option("期待に応えられるよう丁寧に直す", "stable", "empathy"),
      option("別の表現や方法も考えて提案する", "creative", "growth"),
    ],
  },
  {
    id: 18,
    question: "チームの雰囲気が悪くなったとき、何をしますか？",
    options: [
      option("一人ずつ話を聞き、気持ちをほぐす", "empathy", "coordination"),
      option("話し合いの場を作り、役割や認識を調整する", "coordination", "analysis"),
      option("共通の目標を示し、行動に意識を戻す", "challenge", "coordination"),
      option("問題の構造を整理し、原因を共有する", "analysis", "stable"),
    ],
  },
  {
    id: 19,
    question: "自分の強みを伸ばすために行うことは？",
    options: [
      option("難しい課題に挑み、実践経験を増やす", "challenge", "growth"),
      option("詳しい人から学び、改善を繰り返す", "growth", "empathy"),
      option("一つの分野を継続して深く学ぶ", "specialist", "stable"),
      option("得意な理由を分析し、再現できる形にする", "analysis", "specialist"),
    ],
  },
  {
    id: 20,
    question: "イベントを企画するとき、特に力を入れる部分は？",
    options: [
      option("参加したくなる新しい企画を考える", "creative", "challenge"),
      option("参加者の希望や不安を丁寧に把握する", "empathy", "coordination"),
      option("担当やスケジュールを整理して進行する", "coordination", "stable"),
      option("抜け漏れがないよう準備を積み上げる", "stable", "analysis"),
    ],
  },
  {
    id: 21,
    question: "大切な判断をするとき、最も重視するものは？",
    options: [
      option("目標達成につながるか", "challenge", "analysis"),
      option("根拠やデータに納得できるか", "analysis", "specialist"),
      option("関わる人が受け入れやすいか", "coordination", "empathy"),
      option("自分や周囲の成長につながるか", "growth", "challenge"),
    ],
  },
  {
    id: 22,
    question: "単調な作業が続くとき、どう取り組みますか？",
    options: [
      option("ルールを決め、一定の品質で続ける", "stable", "specialist"),
      option("もっと楽にできる改善方法を探す", "creative", "analysis"),
      option("作業の意味や専門的な背景を調べる", "specialist", "growth"),
      option("小さな目標を設定して自分を奮い立たせる", "growth", "challenge"),
    ],
  },
  {
    id: 23,
    question: "友人から相談を受けたとき、どの対応が近いですか？",
    options: [
      option("まず最後まで話を聞き、気持ちを理解する", "empathy", "stable"),
      option("問題を整理し、具体的な選択肢を出す", "analysis", "creative"),
      option("本人が決めやすいよう問いかける", "coordination", "growth"),
      option("背中を押し、行動する勇気を与える", "challenge", "empathy"),
    ],
  },
  {
    id: 24,
    question: "知らない分野の課題に出会ったら、どうしますか？",
    options: [
      option("まず試して、必要なことを後から学ぶ", "challenge", "creative"),
      option("基礎から学び、理解を積み上げる", "specialist", "stable"),
      option("詳しい人を探し、協力をお願いする", "coordination", "empathy"),
      option("学習計画を立て、できることを増やす", "growth", "analysis"),
    ],
  },
  {
    id: 25,
    question: "成果が出なかった経験を振り返るとき、何を考えますか？",
    options: [
      option("次は行動量を増やして再挑戦する", "challenge", "growth"),
      option("原因を分解し、改善点を特定する", "analysis", "stable"),
      option("周囲との連携に問題がなかったか考える", "coordination", "empathy"),
      option("別の発想や方法がなかったか考える", "creative", "analysis"),
    ],
  },
  {
    id: 26,
    question: "自分が周囲から評価されやすい点は？",
    options: [
      option("最後まで責任を持ってやり抜くこと", "stable", "challenge"),
      option("相談しやすく、相手に寄り添えること", "empathy", "coordination"),
      option("物事を深く考え、詳しくなれること", "specialist", "analysis"),
      option("学びが早く、成長し続けられること", "growth", "creative"),
    ],
  },
  {
    id: 27,
    question: "会議で発言するとき、どんな内容が多いですか？",
    options: [
      option("次に何をするかという具体的な提案", "challenge", "coordination"),
      option("見落としている課題や判断材料", "analysis", "specialist"),
      option("メンバーの意見をつなぐまとめ", "coordination", "empathy"),
      option("これまでにないアイデアや視点", "creative", "growth"),
    ],
  },
  {
    id: 28,
    question: "仕事を選ぶうえで魅力を感じやすい環境は？",
    options: [
      option("早くから挑戦や裁量を得られる環境", "challenge", "growth"),
      option("仲間と協力して成果を出せる環境", "coordination", "empathy"),
      option("専門知識や技術を深められる環境", "specialist", "growth"),
      option("丁寧な仕事や継続的な貢献が評価される環境", "stable", "empathy"),
    ],
  },
  {
    id: 29,
    question: "自由時間に新しいことを始めるなら？",
    options: [
      option("今まで避けていた難しいことに挑戦する", "challenge", "growth"),
      option("興味のあるテーマをとことん調べる", "specialist", "analysis"),
      option("友人を誘い、一緒に楽しめる活動を始める", "coordination", "empathy"),
      option("作品や企画など、形に残るものを作る", "creative", "stable"),
    ],
  },
  {
    id: 30,
    question: "就活を通じて、最も見つけたいものは？",
    options: [
      option("自分が大きな目標に挑める場所", "challenge", "creative"),
      option("人と信頼関係を築き、貢献できる役割", "empathy", "coordination"),
      option("自分の得意を深め、専門性にできる道", "specialist", "analysis"),
      option("学び続け、将来の可能性を広げられる環境", "growth", "stable"),
    ],
  },
];
