# typescript-first-step

[English](./README.md) | 日本語

[![CI](https://github.com/d16sekine/typescript-first-step/actions/workflows/ci.yml/badge.svg)](https://github.com/d16sekine/typescript-first-step/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6.svg)](https://www.typescriptlang.org/)

TypeScriptの環境構築からモダンな型機能まで、手を動かしながら一歩ずつ学べる入門リポジトリです。
番号付きの9つのレッスンと、自分で解ける演習問題（解答付き）で構成されています。

## 目次

- [クイックスタート](#クイックスタート)
- [カリキュラム](#カリキュラム)
- [演習問題](#演習問題)
- [利用可能なスクリプト](#利用可能なスクリプト)
- [環境構築を自分でやってみる](#環境構築を自分でやってみる)
- [プロジェクト構成](#プロジェクト構成)
- [学習ロードマップ](#学習ロードマップ)
- [コントリビュート](#コントリビュート)
- [ライセンス](#ライセンス)

## クイックスタート

事前準備: [Node.js](https://nodejs.org/)（v20以上）と [yarn](https://classic.yarnpkg.com/) のインストール

```sh
# 依存関係のインストール
yarn install

# 最初のレッスンを実行
yarn dev
# => 100

# テストを実行
yarn test
```

## カリキュラム

各レッスンは独立したファイルになっており、`yarn tsx src/<ファイル名>` で実行しながら学べます。

| # | レッスン | 内容 | 実行コマンド |
|---|---------|------|------------|
| 01 | [はじめの一歩](./src/01-first-step.ts) | 関数と型注釈 | `yarn dev` |
| 02 | [基本的な型](./src/02-basic-types.ts) | プリミティブ・配列・Union型・型エイリアス | `yarn tsx src/02-basic-types.ts` |
| 03 | [関数の型](./src/03-functions.ts) | オプショナル引数・デフォルト引数・コールバック | `yarn tsx src/03-functions.ts` |
| 04 | [クラスとインターフェース](./src/04-classes.ts) | 継承・抽象クラス・ゲッター/セッター | `yarn tsx src/04-classes.ts` |
| 05 | [型の絞り込み](./src/05-narrowing.ts) | typeof・判別可能なUnion・型ガード | `yarn tsx src/05-narrowing.ts` |
| 06 | [ジェネリクス応用](./src/06-generics.ts) | 制約・keyof・複数型引数 | `yarn tsx src/06-generics.ts` |
| 07 | [ユーティリティ型](./src/07-utility-types.ts) | Partial・Pick・Omit・Record | `yarn tsx src/07-utility-types.ts` |
| 08 | [非同期処理](./src/08-async.ts) | async/await・Promise.all・エラー処理 | `yarn tsx src/08-async.ts` |
| 09 | [モダンな型安全機能](./src/09-type-safety.ts) | unknown・as const・satisfies | `yarn tsx src/09-type-safety.ts` |

## 演習問題

`exercises/` ディレクトリには、レッスンに対応した演習問題があります。

1. 演習ファイルを開き、`throw new Error("TODO...")` の部分を実装する
2. 実行して答え合わせをする（✅/❌ が表示されます）

```sh
yarn tsx exercises/02-basic-types.ts
```

3. すべて ✅ になったら、`exercises/solutions/` の解答例と見比べる

```sh
yarn tsx exercises/solutions/02-basic-types.ts
```

## 利用可能なスクリプト

| コマンド | 説明 |
|---------|------|
| `yarn dev` | 最初のレッスン（01-first-step.ts）を実行 |
| `yarn tsx <ファイル>` | 任意のTypeScriptファイルを直接実行 |
| `yarn test` | テストを実行（Vitest） |
| `yarn test:watch` | テストをwatchモードで実行 |
| `yarn type-check` | 型チェックのみ実行（ファイル出力なし） |
| `yarn check:tests` | tests の型チェック |
| `yarn check:exercises` | exercises の型チェック |
| `yarn check:all` | src・tests・exercises すべての型チェック |
| `yarn lint` | ESLintによる静的解析 |
| `yarn format` | Prettierによるコード整形 |
| `yarn format:check` | 整形チェックのみ（ファイルを書き換えない） |
| `yarn build` | TypeScriptをJavaScriptにコンパイル |
| `yarn start` | コンパイル済みのJavaScriptを実行 |
| `yarn clean` | distディレクトリを削除 |

## 環境構築を自分でやってみる

このリポジトリと同じ環境をゼロから作る手順です。

### 1. package.jsonの作成

```sh
yarn init -y
```

### 2. typescriptおよびtsxのインストール

```sh
yarn add -D typescript tsx
```

### 3. tsconfig.jsonの作成

tscコマンドで `tsconfig.json` を作成します。

```sh
yarn tsc --init
```

`tsconfig.json` を下記に変更します。必要に応じてカスタマイズしてください。

```json
{
  "compilerOptions": {
    /* 言語と環境 */
    "target": "ES2022",                     /* Node.js 20 は ES2022 まで完全サポート */
    "module": "commonjs",                   /* Node.js のデフォルトモジュールシステム */

    /* 入出力 */
    "rootDir": "./src",                     /* TypeScriptソースコードのルートディレクトリ */
    "outDir": "./dist",                     /* コンパイル後のJavaScriptの出力先 */
    "sourceMap": true,                      /* デバッグ用のソースマップを生成 */
    "removeComments": true,                 /* コンパイル後のJSからコメントを削除 */

    /* 型チェック */
    "strict": true,                         /* 厳格な型チェックを有効化 */
    "noUnusedLocals": true,                 /* 未使用のローカル変数を警告 */
    "noUnusedParameters": true,             /* 未使用の関数パラメータを警告 */
    "noImplicitReturns": true,              /* すべての分岐でreturnすることを強制 */

    /* モジュール解決 */
    "esModuleInterop": true,                /* CommonJSモジュールとの互換性 */
    "skipLibCheck": true,                   /* 型定義ファイルのチェックをスキップ */
    "forceConsistentCasingInFileNames": true, /* ファイル名の大文字小文字を厳密にチェック */
    "resolveJsonModule": true               /* JSONファイルのimportを許可 */
  },
  "include": ["src/**/*"],                  /* コンパイル対象のファイル */
  "exclude": ["node_modules", "dist"]       /* コンパイル対象外のファイル */
}
```

参考リンク:

- 各設定項目の解説: [【TypeScript】tsconfig.jsonの設定](https://qiita.com/crml1206/items/8fbfbecc0b40968bfc42)
- targetの設定（Node.jsのバージョンによって変更）: [Recommended Node TSConfig settings](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping)
- moduleの設定: [サバイバルTypeScript - tsconfig.jsonの設定](https://typescriptbook.jp/reference/tsconfig/tsconfig.json-settings)

### 4. 開発の流れ

```sh
# tsファイルを書いたら、コンパイルせずにそのまま実行して動作確認（tsx）
yarn tsx src/01-first-step.ts
# => 100

# 型チェック
yarn type-check

# JavaScriptにコンパイル（tsconfig.jsonのoutDirに出力される）
yarn build

# コンパイルされたコードを実行
node dist/01-first-step.js
# => 100
```

## プロジェクト構成

```
typescript-first-step/
├── src/                  # レッスン（01〜09の番号順）
├── exercises/            # 演習問題（TODOを実装して答え合わせ）
│   └── solutions/        # 解答例
├── tests/                # 各レッスンのテスト（Vitest）
├── dist/                 # コンパイル後のJavaScript（yarn build で生成）
├── tsconfig.json         # TypeScript設定
├── vitest.config.ts      # テスト設定
├── eslint.config.mjs     # ESLint設定
└── .prettierrc.json      # Prettier設定
```

## 学習ロードマップ

1. **01〜04**: TypeScriptの基本（型注釈・関数・クラス）をおさえる
2. **05〜07**: 実務で頻出の型機能（絞り込み・ジェネリクス・ユーティリティ型）を身につける
3. **08〜09**: 非同期処理とモダンな型安全機能まで到達する
4. 演習問題（レッスン02・03・05・07・08に対応）を解いて定着させる

### 次のステップ

- [サバイバルTypeScript](https://typescriptbook.jp/) - 実務で使える日本語の網羅的ガイド
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) - 公式ドキュメント
- [TypeScript Playground](https://www.typescriptlang.org/play) - ブラウザ上で型の挙動を試せる

## コントリビュート

Issue・Pull Requestを歓迎します。詳しくは [CONTRIBUTING.md](./CONTRIBUTING.md) をご覧ください。

## ライセンス

[MIT](./LICENSE)
