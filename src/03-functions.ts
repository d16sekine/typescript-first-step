// レッスン03: 関数の型
// オプショナル引数・デフォルト引数・残余引数・関数型エイリアス・コールバック・void と never

// オプショナル引数（? を付けると省略可能になる）
export function buildFullName(lastName: string, firstName?: string): string {
  if (firstName) {
    return `${lastName} ${firstName}`
  }
  return lastName
}

// デフォルト引数（省略時に使われる値を指定できる）
export function greet(name: string, greeting: string = "こんにちは"): string {
  return `${greeting}、${name}さん！`
}

// 残余引数（可変長引数を配列として受け取る）
export function sum(...nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0)
}

// 関数型エイリアス（関数のシグネチャに名前を付ける）
export type Calc = (a: number, b: number) => number

export const addCalc: Calc = (a, b) => a + b
export const subtractCalc: Calc = (a, b) => a - b

// コールバック関数（関数を引数として受け取る）
export function applyOperation(a: number, b: number, op: Calc): number {
  return op(a, b)
}

// void型（何も返さない関数の戻り値の型）
export function logMessage(message: string): void {
  console.log(`[LOG] ${message}`)
}

// never型（決して正常に戻らない関数の戻り値の型）
export function throwError(message: string): never {
  throw new Error(message)
}

// このファイルを直接実行したときだけデモを動かす
// 実行方法: yarn tsx src/03-functions.ts
if (typeof require !== "undefined" && require.main === module) {
  console.log("=== 関数の型の例 ===")

  // オプショナル引数
  console.log(buildFullName("山田"))
  console.log(buildFullName("山田", "太郎"))

  // デフォルト引数
  console.log(greet("花子"))
  console.log(greet("花子", "おはよう"))

  // 残余引数
  console.log("1+2+3+4+5 =", sum(1, 2, 3, 4, 5))

  // 関数型エイリアスとコールバック
  console.log("10 + 3 =", applyOperation(10, 3, addCalc))
  console.log("10 - 3 =", applyOperation(10, 3, subtractCalc))
  console.log(
    "10 × 3 =",
    applyOperation(10, 3, (a, b) => a * b)
  )

  // void型
  logMessage("処理が完了しました")

  // never型（try-catchで捕まえる）
  try {
    throwError("重大なエラーが発生しました")
  } catch (error) {
    if (error instanceof Error) {
      console.log("キャッチしたエラー:", error.message)
    }
  }
}
