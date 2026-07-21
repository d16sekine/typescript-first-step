// レッスン02のテスト: 基本的な型

import { describe, expect, it } from "vitest"
import { add, identity, multiply } from "../src/02-basic-types"

describe("add", () => {
  it("2つの数値を足す", () => {
    expect(add(1, 2)).toBe(3)
  })
})

describe("multiply", () => {
  it("2つの数値を掛ける", () => {
    expect(multiply(3, 4)).toBe(12)
  })
})

describe("identity", () => {
  it("渡した値をそのまま返す（型も保たれる）", () => {
    expect(identity("Hello")).toBe("Hello")
    expect(identity(42)).toBe(42)
  })
})
