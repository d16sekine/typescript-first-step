// 演習08の解答例: 非同期処理

import { checkAsync } from "../check"

// 指定ミリ秒だけ待つヘルパー関数
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// 問題1: await で待ってから文字列を組み立てて返す
export async function delayedEcho(message: string, delayMs: number): Promise<string> {
  await delay(delayMs)
  return `echo: ${message}`
}

// 問題2: Promise の配列を作って Promise.all で並列に待つ
export async function fetchNumber(n: number): Promise<number> {
  await delay(10)
  return n * 10
}

export async function fetchAll(count: number): Promise<number[]> {
  const promises = Array.from({ length: count }, (_, i) => fetchNumber(i + 1))
  return Promise.all(promises)
}

// 問題3: try-catch で失敗時にフォールバック値を返す
export async function mightFail(shouldSucceed: boolean): Promise<string> {
  await delay(10)
  if (!shouldSucceed) {
    throw new Error("失敗しました")
  }
  return "成功しました"
}

export async function safeFetch(shouldSucceed: boolean): Promise<string> {
  try {
    return await mightFail(shouldSucceed)
  } catch {
    return "フォールバック"
  }
}

// --- 答え合わせ ---
async function main() {
  await checkAsync("問題1: delayedEcho", () => delayedEcho("こんにちは", 10), "echo: こんにちは")
  await checkAsync("問題2: fetchAll(3)", () => fetchAll(3), [10, 20, 30])
  await checkAsync("問題3: safeFetch(true)", () => safeFetch(true), "成功しました")
  await checkAsync("問題3: safeFetch(false)", () => safeFetch(false), "フォールバック")
}

main()
