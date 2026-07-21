# コントリビュートガイド / Contributing Guide

> English: Contributions are welcome! This guide is primarily in Japanese, but issues and pull requests in English are welcome too. Please run the quality checks listed under [PRを出す前のチェック](#prを出す前のチェック) before submitting a pull request.

このリポジトリへの Issue・Pull Request を歓迎します。誤字修正、レッスンの改善、新しいレッスンや演習の追加など、どんな貢献でも大歓迎です。

## 開発環境のセットアップ

```sh
git clone https://github.com/d16sekine/typescript-first-step.git
cd typescript-first-step
yarn install
yarn test  # 動作確認
```

## PRを出す前のチェック

CIと同じチェックをローカルで実行できます。すべてグリーンであることを確認してください。

```sh
yarn check:all      # src / tests / exercises の型チェック
yarn lint           # ESLint
yarn format:check   # Prettier（yarn format で自動整形）
yarn test           # Vitest
yarn build          # コンパイルが通ることを確認
```

## レッスン・演習を追加するときの規約

- レッスンは `src/NN-topic.ts` の番号順ファイルで、既存の連番に続けて追加してください
- コード内のコメントとconsole出力は日本語で書いてください
- 関数・型は `export` し、デモは次のガードで囲んでください（テストからimportしてもデモが動かないようにするため）

```ts
if (typeof require !== "undefined" && require.main === module) {
  // デモコード
}
```

- 演習は `exercises/NN-topic.ts` に問題（`throw new Error("TODO: ...")` のスタブ+答え合わせ）、`exercises/solutions/` に解答例を置いてください。未実装のままでも `yarn check:exercises` が通る必要があります
- レッスンを追加したら `tests/NN-topic.test.ts` にテストを追加し、README.md / README.ja.md のカリキュラム表を両方更新してください
- 学習用リポジトリなので、シンプルさと教育的な分かりやすさを最優先してください

## コミットメッセージ

`feat:` `fix:` `docs:` などの[Conventional Commits](https://www.conventionalcommits.org/ja/)形式を推奨します（必須ではありません）。
