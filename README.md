# typescript-first-step

TypeScriptの環境構築からコンパイルまでの一連の流れを学習するためのリポジトリ

## 事前準備

- Node.jsのインストール
  

## 本リポジトリの動作確認方法

下記の各ステップで作成したコンパイル前のコードおよび設定ファイルを保管しています。

tsファイルをコンパイル -> jsファイルの実行させるには、下記のコマンドを実行してください。

```sh
yarn install
yarn tsc
node dist/increment.js
```


## 各ステップ解説

### 環境構築ステップ

#### 1. package.jsonの作成

```shell
npm init -f
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
    "target": "es2016", 
    "rootDir": "./src",                                 
    "outDir": "./dist",
    "esModuleInterop": true,                             
    "strict": true,
    "skipLibCheck": true        
  }
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
yarn tsc --noEmit
```

#### 3. tsファイルでの動作確認

- tsxを使って、tsファイルのまま動作を確認する

```sh
yarn tsx src/increment.ts
// 100
```

### コンパイルステップ

#### 1. コンパイル

```
yarn tsc
```

`tsconfig.json`の`outputDir`で指定したディレクトリにjsのコードが出力される。

#### 2. コンパイルされたコードの実行

```sh
node dist/increment.js
// 100
```
