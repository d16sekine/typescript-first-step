// 演習02の解答例: 基本的な型

import { check } from "../check"

// 問題1: テンプレートリテラルでプロパティを埋め込む
export interface Person {
  name: string
  age: number
}

export function describePerson(person: Person): string {
  return `${person.name}さん（${person.age}歳）`
}

// 問題2: リテラル型との比較はそのまま === でよい
export type Status = "todo" | "doing" | "done"

export function isCompleted(status: Status): boolean {
  return status === "done"
}

// 問題3: 型引数 T をそのまま配列の要素型に使う
export function wrapInArray<T>(value: T): T[] {
  return [value]
}

// --- 答え合わせ ---
check("問題1: describePerson", () => describePerson({ name: "山田", age: 30 }), "山田さん（30歳）")
check("問題2: isCompleted('done')", () => isCompleted("done"), true)
check("問題2: isCompleted('doing')", () => isCompleted("doing"), false)
check("問題3: wrapInArray(1)", () => wrapInArray(1), [1])
check("問題3: wrapInArray('a')", () => wrapInArray("a"), ["a"])
