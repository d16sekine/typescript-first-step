// 非同期処理の基本

// 1. 基本的な非同期関数（async/await）
async function wait(seconds: number): Promise<string> {
  console.log(`${seconds}秒待機します...`)
  
  // Promiseを使って指定時間待機
  await new Promise(resolve => setTimeout(resolve, seconds * 1000))
  
  return `${seconds}秒待機しました！`
}

// 2. ユーザーデータを取得する関数（APIの代わり）
type UserInfo = {
  id: number
  name: string
  age: number
}

async function getUser(userId: number): Promise<UserInfo> {
  console.log(`ユーザーID: ${userId} を取得中...`)
  
  // API呼び出しの代わりに1秒待機
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // ダミーデータを返す
  return {
    id: userId,
    name: `ユーザー${userId}`,
    age: 20 + userId
  }
}

// 3. エラーハンドリングの例
async function getDataWithError(shouldSucceed: boolean): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 500))
  
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

// 実行
main()