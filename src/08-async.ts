// レッスン08: 非同期処理
// async/await・Promise・並列実行（Promise.all）・エラーハンドリング

// 指定ミリ秒だけ待つヘルパー関数
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// 1. 基本的な非同期関数（async/await）
export async function wait(seconds: number): Promise<string> {
  console.log(`${seconds}秒待機します...`)

  // Promiseを使って指定時間待機
  await delay(seconds * 1000)

  return `${seconds}秒待機しました！`
}

// 2. ユーザーデータを取得する関数（APIの代わり）
export type UserInfo = {
  id: number
  name: string
  age: number
}

// delayMs を引数にしておくと、テストでは 0 を渡してすぐに完了させられる
export async function getUser(userId: number, delayMs: number = 1000): Promise<UserInfo> {
  // API呼び出しの代わりに待機
  await delay(delayMs)

  // ダミーデータを返す
  return {
    id: userId,
    name: `ユーザー${userId}`,
    age: 20 + userId
  }
}

// 3. エラーハンドリングの例
export async function getDataWithError(
  shouldSucceed: boolean,
  delayMs: number = 500
): Promise<string> {
  await delay(delayMs)

  if (shouldSucceed) {
    return "データの取得に成功しました"
  } else {
    throw new Error("データの取得に失敗しました")
  }
}

// 4. 複数の非同期処理を順番に実行
async function sequential() {
  console.log("=== 順番に実行 ===")

  const result1 = await wait(1)
  console.log(result1)

  const result2 = await wait(2)
  console.log(result2)

  console.log("すべて完了！")
}

// 5. 複数の非同期処理を並列で実行
async function parallel() {
  console.log("\n=== 並列で実行 ===")

  // Promise.allで同時に実行
  const results = await Promise.all([
    getUser(1),
    getUser(2),
    getUser(3)
  ])

  console.log("取得したユーザー:")
  results.forEach(user => {
    console.log(`- ${user.name} (${user.age}歳)`)
  })
}

// 6. try-catchでエラーをキャッチ
async function errorHandling() {
  console.log("\n=== エラーハンドリング ===")

  try {
    const success = await getDataWithError(true)
    console.log("✅", success)
  } catch (error) {
    console.log("❌", error)
  }

  try {
    const failure = await getDataWithError(false)
    console.log("✅", failure)
  } catch (error) {
    if (error instanceof Error) {
      console.log("❌", error.message)
    }
  }
}

// メイン処理
async function main() {
  console.log("=== TypeScript 非同期処理の基本 ===\n")

  // 順番に実行
  await sequential()

  // 並列で実行
  await parallel()

  // エラーハンドリング
  await errorHandling()
}

// このファイルを直接実行したときだけデモを動かす
// 実行方法: yarn tsx src/08-async.ts
if (typeof require !== "undefined" && require.main === module) {
  main()
}
