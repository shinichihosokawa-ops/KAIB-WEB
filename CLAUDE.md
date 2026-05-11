# KAIB-WEB プロジェクト設定

## セキュリティチェック（git push 前に必ず実施）

git push を行う前に、以下のセキュリティチェックを必ず実施し、結果をユーザーに報告すること。

### 1. 機密情報の漏洩チェック
- `.env` ファイル、APIキー、トークン、パスワードがコミットに含まれていないか確認
- `git diff --cached` および `git diff` で機密情報パターンを検索
- 検索パターン: `password`, `secret`, `token`, `api_key`, `apikey`, `ghp_`, `sk-`, `private_key`

### 2. 不審なコード変更の検出
- 外部への不正なデータ送信コード（fetch/XMLHttpRequest で未知のドメインへ送信）がないか
- `eval()`, `Function()`, `document.write()` など危険な関数の新規追加がないか
- base64エンコードされた不審な文字列の挿入がないか
- `<script>` タグの不正な挿入（XSS）がないか

### 3. 依存関係の安全性
- `package.json` に変更がある場合、追加されたパッケージが正規のものか確認
- typosquatting（名前が似た悪意あるパッケージ）に注意

### 4. リンク・URLの整合性
- 外部リンクが改ざんされていないか（特に決済リンク、フォームリンク）
- Square決済リンク、Google Formsリンクが正しいものか確認

### レポート形式
チェック完了後、以下の形式で報告:
```
🔒 セキュリティチェック結果:
- 機密情報: ✅ 問題なし / ⚠️ 要確認
- 不審コード: ✅ 問題なし / ⚠️ 要確認
- 依存関係: ✅ 問題なし / ⚠️ 要確認
- リンク整合性: ✅ 問題なし / ⚠️ 要確認
```

## デプロイフロー

1. コード修正・ビルド確認
2. セキュリティチェック実施
3. コミット・プッシュ
4. `gh pr create` でPR作成
5. `gh pr merge` でマージ
6. Vercel が自動デプロイ → kaib.jp に反映

## 技術スタック
- Vite + React + TypeScript
- Tailwind CSS v4 + shadcn/ui
- wouter（ルーティング）
- tRPC + @tanstack/react-query
- Vercel（ホスティング）
- pnpm（パッケージマネージャー）
