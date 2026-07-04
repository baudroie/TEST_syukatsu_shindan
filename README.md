# キャリタイプ

就活生が30問の自己分析診断に回答し、自分の就活タイプと強みを把握できる無料Webアプリです。

診断結果ではメインタイプとサブタイプを表示し、自己PR・ガクチカ・面接対策へつながるヒントを確認できます。

## 技術構成

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- App Router
- Lucide React
- localStorage
- GitHub Pagesでの公開（静的書き出し）

DB、認証、決済、外部APIは使用していません。

## セットアップ

Node.js 20以上を推奨します。

```bash
npm install
```

## 開発サーバー

```bash
npm run dev
```

起動後、ブラウザで `http://localhost:3000` を開いてください。

品質確認用のコマンド:

```bash
npm run typecheck
npm run lint
npm run build
```

## 公開（GitHub Pages）

`main` ブランチに push すると、GitHub Actions（`.github/workflows/deploy.yml`）が自動で静的ビルドを行い GitHub Pages へデプロイします。

初回のみ、リポジトリの Settings → Pages で Source を「GitHub Actions」に設定してください。

basePath はリポジトリ名から自動で設定されるため、リポジトリ名の変更に伴う設定修正は不要です。

## 画面一覧

| パス | 内容 |
| --- | --- |
| `/` | トップページ |
| `/diagnosis` | 診断開始ページ |
| `/diagnosis/questions` | 30問の診断ページ |
| `/diagnosis/result` | 診断結果ページ |
| `/self-pr` | 自己PR作成の仮ページ |
| `/gakuchika` | ガクチカ作成の仮ページ |
| `/interview` | 面接対策の仮ページ |

## 診断ロジック

診断は以下の8タイプで構成されています。

- 挑戦突破型
- 調整推進型
- 分析参謀型
- 共感サポート型
- 安定実行型
- 企画創造型
- 成長追求型
- 専門探究型

各質問には4つの選択肢があり、選択肢ごとに主タイプへ2点、必要に応じて関連する副タイプへ1点を加算します。

30問の合計点が最も高いタイプをメインタイプ、2番目をサブタイプとして判定します。同点の場合はタイプ定義の配列順を優先します。

回答と診断結果はブラウザの `localStorage` に保存されます。診断結果画面の「もう一度診断する」で回答と結果を削除できます。

診断に関するコードは以下に分離しています。

- `src/lib/diagnosis/questions.ts`: 質問と配点
- `src/lib/diagnosis/types.ts`: 型定義
- `src/lib/diagnosis/diagnosisLogic.ts`: 集計と判定
- `src/lib/diagnosis/resultMessages.ts`: 8タイプの表示内容

## 今後追加予定の機能

- 診断結果を使った自己PR生成
- 経験の深掘りによるガクチカ生成
- AIを利用した面接練習
- 作成内容の保存・編集
- ログインと端末間同期
- 企業別の選考対策
- 診断結果の共有
- アクセス解析と質問・配点の改善

## デザイン方針

- 診断中は1問に集中できるシンプルな構成
- トップページは8タイプへの期待感を持てる親しみやすい表現
- 結果ページはタイプの発見と就活での実用性を両立
- 白とスレートグレーを基調に、彩度を抑えたインディゴ1色をアクセントとするミニマルなトーン
- UI、診断データ、判定ロジックを分離し、後から差し替えやすい構成
