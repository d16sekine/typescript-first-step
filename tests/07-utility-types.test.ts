// レッスン07のテスト: ユーティリティ型

import { describe, expect, it } from "vitest"
import { toPublicUser, updateUser, type User } from "../src/07-utility-types"

const user: User = {
  id: 1,
  name: "山田太郎",
  email: "taro@example.com"
}

describe("updateUser", () => {
  it("Partialで一部のプロパティだけ更新できる", () => {
    const renamed = updateUser(user, { name: "山田次郎" })
    expect(renamed).toEqual({ id: 1, name: "山田次郎", email: "taro@example.com" })
  })

  it("元のオブジェクトは変更しない", () => {
    updateUser(user, { name: "別名" })
    expect(user.name).toBe("山田太郎")
  })
})

describe("toPublicUser", () => {
  it("Omitで指定したemailを取り除く", () => {
    const publicUser = toPublicUser(user)
    expect(publicUser).toEqual({ id: 1, name: "山田太郎" })
    expect(publicUser).not.toHaveProperty("email")
  })
})
