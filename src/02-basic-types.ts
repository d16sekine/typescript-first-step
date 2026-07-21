// レッスン02: 基本的な型
// プリミティブ型・配列・オブジェクト・Union型・リテラル型・型エイリアス・ジェネリクスの基礎

// オブジェクト型
export interface Person {
  name: string
  age: number
  email?: string // オプショナルプロパティ
}

// 関数の型定義
export function add(a: number, b: number): number {
  return a + b
}

// アロー関数の型定義
export const multiply = (x: number, y: number): number => x * y

// Literal型（特定の値のみ許可）
export type Status = "pending" | "success" | "error"

// 型エイリアス
export type UserId = string | number
export type User = {
  id: UserId
  name: string
  role: "admin" | "user"
}

// ジェネリクス
export function identity<T>(value: T): T {
  return value
}

// このファイルを直接実行したときだけデモを動かす
// 実行方法: yarn tsx src/02-basic-types.ts
if (typeof require !== "undefined" && require.main === module) {
  // プリミティブ型
  const userName: string = "太郎"
  const age: number = 25
  const isStudent: boolean = true

  // 配列
  const numbers: number[] = [1, 2, 3, 4, 5]
  const fruits: Array<string> = ["りんご", "バナナ", "オレンジ"]

  const person: Person = {
    name: "山田太郎",
    age: 30
  }

  // Union型（複数の型を許可）
  let id: string | number
  id = "ABC123"
  id = 123

  const currentStatus: Status = "success"

  const user: User = {
    id: 1,
    name: "管理者",
    role: "admin"
  }

  const str = identity<string>("Hello")
  const num = identity<number>(42)

  // 実行結果の確認
  console.log("=== TypeScript 基本的な型の例 ===")
  console.log("名前:", userName)
  console.log("年齢:", age)
  console.log("学生:", isStudent)
  console.log("数値配列:", numbers)
  console.log("フルーツ:", fruits)
  console.log("Person:", person)
  console.log("Union型のid:", id)
  console.log("1 + 2 =", add(1, 2))
  console.log("3 × 4 =", multiply(3, 4))
  console.log("現在のステータス:", currentStatus)
  console.log("ユーザー:", user)
  console.log("identity:", str, num)
}
