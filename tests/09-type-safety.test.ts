// レッスン09のテスト: モダンな型安全機能

import { describe, expect, it } from "vitest"
import { APP_CONFIG, getCity, safeParseNumber } from "../src/09-type-safety"

describe("safeParseNumber", () => {
  it("数値はそのまま返す", () => {
    expect(safeParseNumber(42)).toBe(42)
  })

  it("数値に変換できる文字列は変換する", () => {
    expect(safeParseNumber("3.14")).toBe(3.14)
  })

  it("変換できない値はnullを返す", () => {
    expect(safeParseNumber("abc")).toBeNull()
    expect(safeParseNumber({ value: 1 })).toBeNull()
    expect(safeParseNumber(NaN)).toBeNull()
  })
})

describe("getCity", () => {
  it("ネストしたプロパティがあれば返す（オプショナルチェーン）", () => {
    expect(getCity({ name: "太郎", address: { city: "東京" } })).toBe("東京")
  })

  it("なければフォールバック値を返す（Null合体演算子）", () => {
    expect(getCity({ name: "花子" })).toBe("未登録")
    expect(getCity({ name: "花子", address: {} })).toBe("未登録")
  })
})

describe("APP_CONFIG (as const)", () => {
  it("読み取り専用のリテラル値として固定されている", () => {
    expect(APP_CONFIG.name).toBe("typescript-first-step")
    expect(APP_CONFIG.locales).toEqual(["ja", "en"])
  })
})
