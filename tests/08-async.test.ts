// レッスン08のテスト: 非同期処理
// 遅延ms（delayMs）に0を渡すことで、テストは待機なしで高速に実行できる

import { describe, expect, it } from "vitest"
import { getDataWithError, getUser } from "../src/08-async"

describe("getUser", () => {
  it("ユーザー情報をPromiseで返す", async () => {
    const user = await getUser(1, 0)
    expect(user).toEqual({ id: 1, name: "ユーザー1", age: 21 })
  })

  it("Promise.allで並列に取得できる", async () => {
    const users = await Promise.all([getUser(1, 0), getUser(2, 0), getUser(3, 0)])
    expect(users.map(u => u.name)).toEqual(["ユーザー1", "ユーザー2", "ユーザー3"])
  })
})

describe("getDataWithError", () => {
  it("成功時はデータを返す", async () => {
    await expect(getDataWithError(true, 0)).resolves.toBe("データの取得に成功しました")
  })

  it("失敗時はエラーをthrowする（rejectされる）", async () => {
    await expect(getDataWithError(false, 0)).rejects.toThrow("データの取得に失敗しました")
  })
})
