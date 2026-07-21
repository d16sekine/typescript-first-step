// レッスン05のテスト: 型の絞り込み

import { describe, expect, it } from "vitest"
import { area, formatId, isCircle, type Shape } from "../src/05-narrowing"

describe("formatId", () => {
  it("文字列は大文字にする", () => {
    expect(formatId("abc123")).toBe("ABC123")
  })

  it("数値は0埋めのID形式にする", () => {
    expect(formatId(42)).toBe("ID-00042")
  })
})

describe("area", () => {
  it("円の面積を計算する", () => {
    const circle: Shape = { kind: "circle", radius: 1 }
    expect(area(circle)).toBeCloseTo(Math.PI)
  })

  it("正方形の面積を計算する", () => {
    const square: Shape = { kind: "square", sideLength: 4 }
    expect(area(square)).toBe(16)
  })
})

describe("isCircle", () => {
  it("型ガードとして機能し、filterで絞り込める", () => {
    const shapes: Shape[] = [
      { kind: "circle", radius: 5 },
      { kind: "square", sideLength: 4 }
    ]
    const circles = shapes.filter(isCircle)
    expect(circles).toHaveLength(1)
    expect(circles[0].radius).toBe(5)
  })
})
