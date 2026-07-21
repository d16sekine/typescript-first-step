// 演習03の解答例: 関数の型

import { check } from "../check"

// 問題1: String.prototype.repeat を使う（自前のループでもOK）
export function repeat(text: string, times: number = 2): string {
  return text.repeat(times)
}

// 問題2: reduce で合計し、要素数で割る。0除算に注意
export function average(...nums: number[]): number {
  if (nums.length === 0) {
    return 0
  }
  const total = nums.reduce((sum, n) => sum + n, 0)
  return total / nums.length
}

// 問題3: 受け取った関数を2回適用する
export function applyTwice(value: number, fn: (n: number) => number): number {
  return fn(fn(value))
}

// --- 答え合わせ ---
check("問題1: repeat('あ', 3)", () => repeat("あ", 3), "あああ")
check("問題1: repeat('えっ')（デフォルト引数）", () => repeat("えっ"), "えっえっ")
check("問題2: average(1, 2, 3)", () => average(1, 2, 3), 2)
check("問題2: average()（引数なし）", () => average(), 0)
check("問題3: applyTwice(5, n => n + 1)", () => applyTwice(5, n => n + 1), 7)
check("問題3: applyTwice(3, n => n * 2)", () => applyTwice(3, n => n * 2), 12)
