// 演習07の解答例: ユーティリティ型

import { check } from "../check"

export type Todo = {
  id: number
  title: string
  done: boolean
  memo?: string
}

// 問題1: スプレッド構文で元の値を展開し、changes で上書きする
export function updateTodo(todo: Todo, changes: Partial<Todo>): Todo {
  return { ...todo, ...changes }
}

// 問題2: 必要なプロパティだけを持つ新しいオブジェクトを作る
export type TodoSummary = Pick<Todo, "id" | "title">

export function toSummary(todo: Todo): TodoSummary {
  return { id: todo.id, title: todo.title }
}

// 問題3: Object.values で値を取り出して合計する
export type Priority = "high" | "medium" | "low"
export type PriorityCount = Record<Priority, number>

export function totalCount(counts: PriorityCount): number {
  return Object.values(counts).reduce((sum, n) => sum + n, 0)
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
