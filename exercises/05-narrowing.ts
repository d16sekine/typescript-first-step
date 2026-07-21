// 演習05: 型の絞り込み（レッスン: src/05-narrowing.ts）
//
// 各関数の `throw new Error("TODO...")` を削除して、実装を書いてください。
// 実行方法: yarn tsx exercises/05-narrowing.ts

import { check } from "./check"

// 問題1: typeof を使って型を絞り込み、型ごとに違う文字列を返す関数を実装してください
// string なら「文字列: <値>」、number なら「数値: <値>」、boolean なら「真偽値: <値>」
export function describeValue(value: string | number | boolean): string {
  throw new Error("TODO: ここを実装してください")
}

// 問題2: 判別可能なUnionを使って、動物ごとの鳴き声を返す関数を実装してください
// dog なら「<名前>: ワンワン」、cat なら「<名前>: ニャー」
export type Dog = { kind: "dog"; name: string }
export type Cat = { kind: "cat"; name: string }
export type Animal = Dog | Cat

export function getVoice(animal: Animal): string {
  throw new Error("TODO: ここを実装してください")
}

// 問題3: Animal が Dog かどうかを判定するユーザー定義型ガードを実装してください
// ヒント: 戻り値の型が `animal is Dog` になっています
export function isDog(animal: Animal): animal is Dog {
  throw new Error("TODO: ここを実装してください")
}

// --- 答え合わせ ---
check("問題1: describeValue('abc')", () => describeValue("abc"), "文字列: abc")
check("問題1: describeValue(42)", () => describeValue(42), "数値: 42")
check("問題1: describeValue(true)", () => describeValue(true), "真偽値: true")
check("問題2: getVoice(dog)", () => getVoice({ kind: "dog", name: "ポチ" }), "ポチ: ワンワン")
check("問題2: getVoice(cat)", () => getVoice({ kind: "cat", name: "タマ" }), "タマ: ニャー")
check("問題3: isDog(dog)", () => isDog({ kind: "dog", name: "ポチ" }), true)
check("問題3: isDog(cat)", () => isDog({ kind: "cat", name: "タマ" }), false)
