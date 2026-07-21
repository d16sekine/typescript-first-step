// レッスン05: 型の絞り込み（Narrowing）
// typeof・in・instanceof・判別可能なUnion・網羅性チェック・ユーザー定義型ガード

// typeof による絞り込み
// string | number のように複数の型を取りうる値を、条件分岐で安全に扱う
export function formatId(id: string | number): string {
  if (typeof id === "string") {
    // このブロック内では id は string 型として扱われる
    return id.toUpperCase()
  }
  // ここでは id は number 型
  return `ID-${id.toString().padStart(5, "0")}`
}

// 判別可能なUnion（Discriminated Union）
// kind プロパティ（判別子）で型を見分けられるようにする
export type Circle = {
  kind: "circle"
  radius: number
}

export type Square = {
  kind: "square"
  sideLength: number
}

export type Shape = Circle | Square

// switch文で判別子を調べると、各caseで型が絞り込まれる
export function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2
    case "square":
      return shape.sideLength ** 2
    default: {
      // 網羅性チェック: すべてのkindを処理していれば shape は never 型になる
      // 新しいShapeを追加してcaseを書き忘れると、ここがコンパイルエラーになる
      const exhaustiveCheck: never = shape
      throw new Error(`未知の図形です: ${JSON.stringify(exhaustiveCheck)}`)
    }
  }
}

// ユーザー定義型ガード（Type Predicate）
// 戻り値の型 `shape is Circle` により、trueのとき型が絞り込まれる
export function isCircle(shape: Shape): shape is Circle {
  return shape.kind === "circle"
}

// in 演算子による絞り込み
type Fish = { swim: () => string }
type Bird = { fly: () => string }

export function move(animal: Fish | Bird): string {
  if ("swim" in animal) {
    // swimプロパティを持つので Fish 型に絞り込まれる
    return animal.swim()
  }
  return animal.fly()
}

// instanceof による絞り込み
export function describeValue(value: Date | string): string {
  if (value instanceof Date) {
    return `日付: ${value.getFullYear()}年`
  }
  return `文字列: ${value}`
}

// このファイルを直接実行したときだけデモを動かす
// 実行方法: yarn tsx src/05-narrowing.ts
if (typeof require !== "undefined" && require.main === module) {
  console.log("=== 型の絞り込みの例 ===")

  // typeof
  console.log(formatId("abc123"))
  console.log(formatId(42))

  // 判別可能なUnion
  const circle: Shape = { kind: "circle", radius: 5 }
  const square: Shape = { kind: "square", sideLength: 4 }
  console.log("円の面積:", area(circle).toFixed(2))
  console.log("正方形の面積:", area(square))

  // 型ガード
  const shapes: Shape[] = [circle, square]
  const circles = shapes.filter(isCircle)
  console.log("円の数:", circles.length)

  // in 演算子
  const fish: Fish = { swim: () => "スイスイ泳ぐ" }
  const bird: Bird = { fly: () => "バサバサ飛ぶ" }
  console.log(move(fish))
  console.log(move(bird))

  // instanceof
  console.log(describeValue(new Date("2026-01-01")))
  console.log(describeValue("こんにちは"))
}
