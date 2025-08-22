# typescript-first-step

TypeScriptの環境構築からコンパイルまでの一連の流れを学習するためのリポジトリ

## 事前準備

- Node.jsのインストール
- yarnのインストール

## 本リポジトリの動作確認方法

下記の各ステップで作成したコンパイル前のコードおよび設定ファイルを保管しています。

### クイックスタート

```sh
# 依存関係のインストール
yarn install

# TypeScriptファイルを直接実行（開発時）
yarn dev

# TypeScriptをJavaScriptにコンパイル
yarn build

# コンパイル済みJavaScriptを実行
yarn start
```

### 利用可能なスクリプト

| コマンド | 説明 |
|---------|------|
| `yarn dev` | increment.ts を実行（基本例） |
| `yarn dev:types` | types-basic.ts を実行（型の基本） |
| `yarn dev:class` | class-example.ts を実行（クラスとインターフェース） |
| `yarn dev:async` | async-example.ts を実行（非同期処理） |
| `yarn build` | TypeScriptをJavaScriptにコンパイル |
| `yarn start` | コンパイル済みのJavaScriptを実行 |
| `yarn type-check` | 型チェックのみ実行（ファイル出力なし） |
| `yarn clean` | distディレクトリを削除 |

### サンプルコード

本リポジトリには以下の学習用サンプルが含まれています：

1. **increment.ts** - 関数と基本的な型定義の例
2. **types-basic.ts** - TypeScriptの基本的な型（プリミティブ、配列、オブジェクト、Union型、ジェネリクス等）
3. **class-example.ts** - クラス、継承、インターフェース、抽象クラスの使い方
4. **async-example.ts** - 非同期処理、Promise、async/await、エラーハンドリング


## 各ステップ解説

### 環境構築ステップ

#### 1. package.jsonの作成

```shell
yarn init -y
```

#### 2. typscriptおよびtsxのインストール

```shell
yarn add -D typescript tsx
```

#### 3. tsconfig.jsonの作成

- tscコマンドで、`tsconfig.json`を作成
```shell
yarn tsc --init
```

- `tsconfig.json`を下記に変更。必要に応じてカスタマイズする。
  
```json
{
  "compilerOptions": {
    /* 言語と環境 */
    "target": "ES2022",                     /* Node.js 20 は ES2022 まで完全サポート */
    "module": "commonjs",                    /* Node.js のデフォルトモジュールシステム */
    
    /* 入出力 */
    "rootDir": "./src",                     /* TypeScriptソースコードのルートディレクトリ */
    "outDir": "./dist",                     /* コンパイル後のJavaScriptの出力先 */
    "sourceMap": true,                      /* デバッグ用のソースマップを生成 */
    
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
- 各設定項目の解説はこちらを参考
  - [【TypeScript】tsconfig.jsonの設定](https://qiita.com/crml1206/items/8fbfbecc0b40968bfc42)
- targetの設定はこちらを参考。Node.jsのバージョンによって変更。
  - [Recommended Node TSConfig settings](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping)
- moduleの設定はこちらを参考。
  - https://typescriptbook.jp/reference/tsconfig/tsconfig.json-settings#%E3%83%95%E3%83%AD%E3%83%B3%E3%83%88%E3%82%A8%E3%83%B3%E3%83%89%E3%81%A8%E3%83%90%E3%83%83%E3%82%AF%E3%82%A8%E3%83%B3%E3%83%89


### 開発ステップ

#### 1. tsファイルを書く


[サンプルコード](./src/increment.ts)

```ts
const increment = (num: number) => {
  return num + 1
}

let v: number

v = 99

const result = increment(v)

console.log(result)
```

#### 2. 型チェックを行う（任意）

下記のコマンドで型チェックを実施可能。
```
yarn type-check
```

#### 3. tsファイルでの動作確認

- tsxを使って、tsファイルのまま動作を確認する

```sh
yarn dev
# 100
```

### コンパイルステップ

#### 1. コンパイル

```
yarn build
```

`tsconfig.json`の`outputDir`で指定したディレクトリにjsのコードが出力される。

#### 2. コンパイルされたコードの実行

```sh
yarn start
# 100
```
