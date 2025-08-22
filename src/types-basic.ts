// 基本的な型定義の例

// プリミティブ型
const userName: string = "太郎"
const age: number = 25
const isStudent: boolean = true

// 配列
const numbers: number[] = [1, 2, 3, 4, 5]
const fruits: Array<string> = ["りんご", "バナナ", "オレンジ"]

// オブジェクト型
interface Person {
  name: string
  age: number
  email?: string // オプショナルプロパティ
}

const person: Person = {
  name: "山田太郎",
  age: 30
}

// 関数の型定義
function add(a: number, b: number): number {
  return a + b
}

// アロー関数の型定義
const multiply = (x: number, y: number): number => x * y

// Union型（複数の型を許可）
let id: string | number
id = "ABC123"
id = 123

// Literal型（特定の値のみ許可）
type Status = "pending" | "success" | "error"
const currentStatus: Status = "success"

// 型エイリアス
type UserId = string | number
type User = {
  id: UserId
  name: string
  role: "admin" | "user"
}

const user: User = {
  id: 1,
  name: "管理者",
  role: "admin"
}

// ジェネリクス
function identity<T>(value: T): T {
  return value
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
console.log("1 + 2 =", add(1, 2))
console.log("3 × 4 =", multiply(3, 4))
console.log("現在のステータス:", currentStatus)
console.log("ユーザー:", user)