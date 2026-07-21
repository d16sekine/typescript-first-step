// 演習03: 関数の型（レッスン: src/03-functions.ts）
//
// 各関数の `throw new Error("TODO...")` を削除して、実装を書いてください。
// 実行方法: yarn tsx exercises/03-functions.ts

import { check } from "./check"

// 問題1: 文字列を times 回繰り返して返す関数を実装してください
// times はデフォルト引数で、省略時は 2 回とします
export function repeat(text: string, times: number = 2): string {
  throw new Error("TODO: ここを実装してください")
}

// 問題2: 可変長引数で数値を受け取り、平均を返す関数を実装してください
// 引数が0個のときは 0 を返します
export function average(...nums: number[]): number {
  throw new Error("TODO: ここを実装してください")
}

// 問題3: 数値と「数値を受け取り数値を返す関数」を受け取り、
// その関数を2回適用した結果を返す関数を実装してください
// 例: applyTwice(5, n => n + 1) は 7
export function applyTwice(value: number, fn: (n: number) => number): number {
  throw new Error("TODO: ここを実装してください")
}

// --- 答え合わせ ---
check("問題1: repeat('あ', 3)", () => repeat("あ", 3), "あああ")
check("問題1: repeat('えっ')（デフォルト引数）", () => repeat("えっ"), "えっえっ")
check("問題2: average(1, 2, 3)", () => average(1, 2, 3), 2)
check("問題2: average()（引数なし）", () => average(), 0)
check("問題3: applyTwice(5, n => n + 1)", () => applyTwice(5, n => n + 1), 7)
check("問題3: applyTwice(3, n => n * 2)", () => applyTwice(3, n => n * 2), 12)
