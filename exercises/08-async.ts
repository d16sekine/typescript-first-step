// 演習08: 非同期処理（レッスン: src/08-async.ts）
//
// 各関数の `throw new Error("TODO...")` を削除して、実装を書いてください。
// 実行方法: yarn tsx exercises/08-async.ts

import { checkAsync } from "./check"

// 指定ミリ秒だけ待つヘルパー関数（そのまま使ってOK）
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// 問題1: delayMs ミリ秒待ってから「echo: <メッセージ>」を返す非同期関数を実装してください
export async function delayedEcho(message: string, delayMs: number): Promise<string> {
  throw new Error("TODO: ここを実装してください")
}

// 問題2: 1 から count までの数値それぞれについて fetchNumber を「並列で」呼び出し、
// 結果の配列を返す関数を実装してください
// ヒント: Promise.all と Array.from（または map）を使います
export async function fetchNumber(n: number): Promise<number> {
  await delay(10)
  return n * 10
}

export async function fetchAll(count: number): Promise<number[]> {
  throw new Error("TODO: ここを実装してください")
}

// 問題3: mightFail を try-catch で呼び出し、
// 成功したらその結果を、失敗したら "フォールバック" を返す関数を実装してください
export async function mightFail(shouldSucceed: boolean): Promise<string> {
  await delay(10)
  if (!shouldSucceed) {
    throw new Error("失敗しました")
  }
  return "成功しました"
}

export async function safeFetch(shouldSucceed: boolean): Promise<string> {
  throw new Error("TODO: ここを実装してください")
}

// --- 答え合わせ ---
async function main() {
  await checkAsync("問題1: delayedEcho", () => delayedEcho("こんにちは", 10), "echo: こんにちは")
  await checkAsync("問題2: fetchAll(3)", () => fetchAll(3), [10, 20, 30])
  await checkAsync("問題3: safeFetch(true)", () => safeFetch(true), "成功しました")
  await checkAsync("問題3: safeFetch(false)", () => safeFetch(false), "フォールバック")
}

main()
