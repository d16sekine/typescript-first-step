// 演習07: ユーティリティ型（レッスン: src/07-utility-types.ts）
//
// 各関数の `throw new Error("TODO...")` を削除して、実装を書いてください。
// 実行方法: yarn tsx exercises/07-utility-types.ts

import { check } from "./check"

export type Todo = {
  id: number
  title: string
  done: boolean
  memo?: string
}

// 問題1: Partial を使って、Todoの一部のプロパティだけを上書きする関数を実装してください
// ヒント: スプレッド構文 { ...a, ...b } が使えます
export function updateTodo(todo: Todo, changes: Partial<Todo>): Todo {
  throw new Error("TODO: ここを実装してください")
}

// 問題2: Pick を使った TodoSummary 型（id と title だけ）に変換する関数を実装してください
export type TodoSummary = Pick<Todo, "id" | "title">

export function toSummary(todo: Todo): TodoSummary {
  throw new Error("TODO: ここを実装してください")
}

// 問題3: Record を使った「優先度ごとの件数」オブジェクトを受け取り、合計件数を返す関数を実装してください
export type Priority = "high" | "medium" | "low"
export type PriorityCount = Record<Priority, number>

export function totalCount(counts: PriorityCount): number {
  throw new Error("TODO: ここを実装してください")
}

// --- 答え合わせ ---
const todo: Todo = { id: 1, title: "買い物", done: false }

check("問題1: updateTodo（doneをtrueに）", () => updateTodo(todo, { done: true }), {
  id: 1,
  title: "買い物",
  done: true
})
check("問題2: toSummary", () => toSummary(todo), { id: 1, title: "買い物" })
check("問題3: totalCount", () => totalCount({ high: 2, medium: 3, low: 1 }), 6)
