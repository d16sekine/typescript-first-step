// レッスン03のテスト: 関数の型

import { describe, expect, it } from "vitest"
import { applyOperation, buildFullName, greet, sum } from "../src/03-functions"

describe("buildFullName", () => {
  it("オプショナル引数を省略できる", () => {
    expect(buildFullName("山田")).toBe("山田")
  })

  it("オプショナル引数を渡すと連結される", () => {
    expect(buildFullName("山田", "太郎")).toBe("山田 太郎")
  })
})

describe("greet", () => {
  it("greetingを省略するとデフォルト引数が使われる", () => {
    expect(greet("花子")).toBe("こんにちは、花子さん！")
  })

  it("greetingを指定するとそれが使われる", () => {
    expect(greet("花子", "おはよう")).toBe("おはよう、花子さん！")
  })
})

describe("sum", () => {
  it("可変長引数を合計する", () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15)
  })

  it("引数なしなら0を返す", () => {
    expect(sum()).toBe(0)
  })
})

describe("applyOperation", () => {
  it("コールバック関数を適用する", () => {
    expect(applyOperation(10, 3, (a, b) => a - b)).toBe(7)
  })
})
