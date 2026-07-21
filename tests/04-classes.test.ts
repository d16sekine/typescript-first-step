// レッスン04のテスト: クラスとインターフェース

import { describe, expect, it } from "vitest"
import { Box, Cat, Dog } from "../src/04-classes"

describe("Dog", () => {
  it("抽象クラスの共通メソッドを継承する", () => {
    const dog = new Dog("ポチ", "柴犬")
    expect(dog.introduce()).toBe("私の名前はポチです")
    expect(dog.breed).toBe("柴犬")
  })
})

describe("Cat", () => {
  it("ゲッターでprivateな年齢を取得できる", () => {
    const cat = new Cat("タマ", 3)
    expect(cat.catAge).toBe(3)
  })

  it("セッターは負の年齢を無視する", () => {
    const cat = new Cat("タマ", 3)
    cat.catAge = -1
    expect(cat.catAge).toBe(3)
    cat.catAge = 5
    expect(cat.catAge).toBe(5)
  })
})

describe("Box", () => {
  it("ジェネリッククラスとして任意の型を格納できる", () => {
    const box = new Box<string>()
    box.add("りんご")
    box.add("バナナ")
    expect(box.getAll()).toEqual(["りんご", "バナナ"])
  })
})
