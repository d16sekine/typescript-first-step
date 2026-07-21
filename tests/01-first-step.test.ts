// レッスン01のテスト: increment関数
// テストの実行方法: yarn test（watchモードは yarn test:watch）

import { describe, expect, it } from "vitest"
import { increment } from "../src/01-first-step"

describe("increment", () => {
  it("数値に1を加える", () => {
    expect(increment(99)).toBe(100)
  })

  it("負の数でも動作する", () => {
    expect(increment(-1)).toBe(0)
  })
})
