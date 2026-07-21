// 演習05の解答例: 型の絞り込み

import { check } from "../check"

// 問題1: typeof で分岐すると、各ブロック内で型が絞り込まれる
export function describeValue(value: string | number | boolean): string {
  if (typeof value === "string") {
    return `文字列: ${value}`
  }
  if (typeof value === "number") {
    return `数値: ${value}`
  }
  return `真偽値: ${value}`
}

// 問題2: kind（判別子）で分岐する。switch文でもif文でもOK
export type Dog = { kind: "dog"; name: string }
export type Cat = { kind: "cat"; name: string }
export type Animal = Dog | Cat

export function getVoice(animal: Animal): string {
  switch (animal.kind) {
    case "dog":
      return `${animal.name}: ワンワン`
    case "cat":
      return `${animal.name}: ニャー`
  }
}

// 問題3: 判別子を比較した結果を返すだけで型ガードになる
export function isDog(animal: Animal): animal is Dog {
  return animal.kind === "dog"
}

// --- 答え合わせ ---
check("問題1: describeValue('abc')", () => describeValue("abc"), "文字列: abc")
check("問題1: describeValue(42)", () => describeValue(42), "数値: 42")
check("問題1: describeValue(true)", () => describeValue(true), "真偽値: true")
check("問題2: getVoice(dog)", () => getVoice({ kind: "dog", name: "ポチ" }), "ポチ: ワンワン")
check("問題2: getVoice(cat)", () => getVoice({ kind: "cat", name: "タマ" }), "タマ: ニャー")
check("問題3: isDog(dog)", () => isDog({ kind: "dog", name: "ポチ" }), true)
check("問題3: isDog(cat)", () => isDog({ kind: "cat", name: "タマ" }), false)
