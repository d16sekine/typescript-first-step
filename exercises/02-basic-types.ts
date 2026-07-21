// 演習02: 基本的な型（レッスン: src/02-basic-types.ts）
//
// 各関数の `throw new Error("TODO...")` を削除して、実装を書いてください。
// 実行方法: yarn tsx exercises/02-basic-types.ts
// すべて ✅ になったら exercises/solutions/02-basic-types.ts と見比べてみましょう。

import { check } from "./check"

// 問題1: Person型の値を受け取り、「山田さん（30歳）」の形式の文字列を返す関数を実装してください
export interface Person {
  name: string
  age: number
}

export function describePerson(person: Person): string {
  throw new Error("TODO: ここを実装してください")
}

// 問題2: Status型が "done" のときだけ true を返す関数を実装してください
export type Status = "todo" | "doing" | "done"

export function isCompleted(status: Status): boolean {
  throw new Error("TODO: ここを実装してください")
}

// 問題3: どんな型の値でも受け取り、その値だけを含む配列を返すジェネリック関数を実装してください
export function wrapInArray<T>(value: T): T[] {
  throw new Error("TODO: ここを実装してください")
}

// --- 答え合わせ ---
check("問題1: describePerson", () => describePerson({ name: "山田", age: 30 }), "山田さん（30歳）")
check("問題2: isCompleted('done')", () => isCompleted("done"), true)
check("問題2: isCompleted('doing')", () => isCompleted("doing"), false)
check("問題3: wrapInArray(1)", () => wrapInArray(1), [1])
check("問題3: wrapInArray('a')", () => wrapInArray("a"), ["a"])
