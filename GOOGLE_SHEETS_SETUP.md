# Google Sheets 連携設定

診断回答をGoogleスプレッドシートに保存するには、Google Apps ScriptをWebアプリとして公開し、そのURLをビルド時の環境変数に設定します。

## 1. Apps Scriptを作成

1. 保存先スプレッドシートを開く  
   `https://docs.google.com/spreadsheets/d/1hO866bqccDvM6RsMwFnvE_WOvAalyqx-3CW3OJBMkaw/edit`
2. メニューの「拡張機能」→「Apps Script」を開く
3. [scripts/google-sheets-webhook.gs](scripts/google-sheets-webhook.gs) の内容を貼り付ける
4. 保存する

## 2. Webアプリとしてデプロイ

1. Apps Script画面右上の「デプロイ」→「新しいデプロイ」
2. 種類を「ウェブアプリ」にする
3. 実行ユーザー: 自分
4. アクセスできるユーザー: 全員
5. デプロイ後に表示されるURLを控える

URLの形式:

```text
https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxxxxxxxx/exec
```

## 3. ローカル環境で使う

`.env.local` を作成し、以下のように設定します。

```text
NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxxxxxxxx/exec
```

## 4. GitHub Pagesで使う

GitHubリポジトリの Settings → Secrets and variables → Actions → New repository secret で以下を追加します。

```text
Name: GOOGLE_SHEETS_WEBHOOK_URL
Value: https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxxxxxxxx/exec
```

その後、`main` ブランチへpushすると、GitHub Actionsのビルド時にURLが埋め込まれます。

## 送信される内容

診断開始フォームの送信時に、氏名・電話番号・メールアドレス・性別・同意日時を `lead_entry` として保存します。  
30問回答後には、診断結果と回答内容を含めて `diagnosis_result` として再度保存します。

- 氏名
- 電話番号
- メールアドレス
- 性別
- 利用規約同意日時
- 30問の回答内容
- メインタイプ / サブタイプ
- 各タイプのスコア
- 送信元URL
- User Agent
