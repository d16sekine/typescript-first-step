// レッスン09: モダンな型安全機能
// any と unknown・型アサーション・as const・satisfies・オプショナルチェーン・Null合体演算子

// any vs unknown
// any: 何でも許可されてしまい、型チェックが効かなくなる（なるべく避ける）
// unknown: 何でも代入できるが、使う前に型の絞り込みが必須（安全）
export function safeParseNumber(value: unknown): number | null {
  if (typeof value === "number" && !Number.isNaN(value)) {
    return value
  }
  if (typeof value === "string") {
    const parsed = Number(value)
    return Number.isNaN(parsed) ? null : parsed
  }
  return null
}

// 型アサーション（as）
// 「この型だと信じて」とコンパイラに伝える。実行時チェックはないので乱用注意
export function getInputLength(input: unknown): number {
  // 本来は型ガードで絞り込むのが安全。asは最終手段
  const text = input as string
  return text.length
}

// as const: 値をリテラル型として固定し、readonly にする
export const APP_CONFIG = {
  name: "typescript-first-step",
  version: 1,
  locales: ["ja", "en"]
} as const
// APP_CONFIG.name の型は string ではなく "typescript-first-step" になる
// APP_CONFIG.version = 2 はコンパイルエラーになる

export type Locale = (typeof APP_CONFIG.locales)[number] // "ja" | "en"

// satisfies: 型に適合するかチェックしつつ、推論された詳細な型を保つ
type ColorConfig = Record<string, string | [number, number, number]>

export const colors = {
  primary: "#0088ff",
  danger: [255, 0, 0]
} satisfies ColorConfig
// satisfiesなら colors.primary は string 型のまま（.toUpperCase() が使える）
// 「: ColorConfig」と注釈すると string | [number, number, number] に広がってしまう

// オプショナルチェーン（?.）と Null合体演算子（??）
export type Profile = {
  name: string
  address?: {
    city?: string
  }
}

export function getCity(profile: Profile): string {
  // ?. は途中が undefined なら undefined を返す
  // ?? は左辺が null/undefined のときだけ右辺を使う
  return profile.address?.city ?? "未登録"
}

// このファイルを直接実行したときだけデモを動かす
// 実行方法: yarn tsx src/09-type-safety.ts
if (typeof require !== "undefined" && require.main === module) {
  console.log("=== モダンな型安全機能の例 ===")

  // unknown
  console.log("数値:", safeParseNumber(42))
  console.log("文字列から:", safeParseNumber("3.14"))
  console.log("変換できない:", safeParseNumber("abc"))
  console.log("対象外:", safeParseNumber({ value: 1 }))

  // 型アサーション
  console.log("文字数:", getInputLength("こんにちは"))

  // as const
  console.log("アプリ名:", APP_CONFIG.name)
  const locale: Locale = "ja"
  console.log("ロケール:", locale)

  // satisfies
  console.log("primary色:", colors.primary.toUpperCase())

  // ?. と ??
  console.log(getCity({ name: "太郎", address: { city: "東京" } }))
  console.log(getCity({ name: "花子" }))
}
