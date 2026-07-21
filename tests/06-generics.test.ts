// レッスン06のテスト: ジェネリクス応用

import { describe, expect, it } from "vitest"
import { firstElement, getProperty, longest, zip } from "../src/06-generics"

describe("firstElement", () => {
  it("最初の要素を返す", () => {
    expect(firstElement([10, 20, 30])).toBe(10)
  })

  it("空配列ならundefinedを返す", () => {
    expect(firstElement([])).toBeUndefined()
  })
})

describe("longest", () => {
  it("lengthが大きい方を返す", () => {
    expect(longest("short", "とても長い文字列")).toBe("とても長い文字列")
    expect(longest([1, 2], [1, 2, 3])).toEqual([1, 2, 3])
  })
})

describe("getProperty", () => {
  it("keyofで制約されたキーの値を返す", () => {
    const book = { title: "TypeScript入門", pages: 300 }
    expect(getProperty(book, "title")).toBe("TypeScript入門")
    expect(getProperty(book, "pages")).toBe(300)
  })
})

describe("zip", () => {
  it("2つの配列をペアの配列にまとめる", () => {
    expect(zip(["a", "b"], [1, 2])).toEqual([
      ["a", 1],
      ["b", 2]
    ])
  })

  it("長さが違う場合は短い方に合わせる", () => {
    expect(zip(["a"], [1, 2, 3])).toEqual([["a", 1]])
  })
})
