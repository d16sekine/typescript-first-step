// レッスン06: ジェネリクス応用
// 型引数の制約・keyof・複数の型引数・ジェネリックインターフェース・デフォルト型引数

// 基本のジェネリック関数
// 配列の要素の型 T を保ったまま、最初の要素（またはundefined）を返す
export function firstElement<T>(arr: T[]): T | undefined {
  return arr[0]
}

// 型引数の制約（extends）
// lengthプロパティを持つ型だけを受け付ける
export function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b
}

// keyof とジェネリクスの組み合わせ
// K は「Tのプロパティ名のいずれか」に制約され、戻り値の型も正確に推論される
export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

// 複数の型引数
// 2つの配列をペアの配列にまとめる
export function zip<A, B>(as: A[], bs: B[]): Array<[A, B]> {
  const length = Math.min(as.length, bs.length)
  const result: Array<[A, B]> = []
  for (let i = 0; i < length; i++) {
    result.push([as[i], bs[i]])
  }
  return result
}

// ジェネリックインターフェース
export interface KeyValuePair<K, V> {
  key: K
  value: V
}

// デフォルト型引数（型引数を省略すると string になる）
export interface ApiResponse<T = string> {
  status: number
  data: T
}

// このファイルを直接実行したときだけデモを動かす
// 実行方法: yarn tsx src/06-generics.ts
if (typeof require !== "undefined" && require.main === module) {
  console.log("=== ジェネリクス応用の例 ===")

  // 型は自動で推論される（firstElement<number> と書かなくてもよい）
  console.log("最初の要素:", firstElement([10, 20, 30]))
  console.log("最初の要素:", firstElement(["あ", "い", "う"]))
  console.log("空配列の場合:", firstElement([]))

  // 制約: 文字列も配列も length を持つので渡せる
  console.log("長い方:", longest("short", "とても長い文字列"))
  console.log("長い方:", longest([1, 2], [1, 2, 3]))

  // keyof
  const book = { title: "TypeScript入門", pages: 300 }
  console.log("タイトル:", getProperty(book, "title")) // string型
  console.log("ページ数:", getProperty(book, "pages")) // number型
  // getProperty(book, "author") はコンパイルエラーになる

  // 複数の型引数
  console.log("zip:", zip(["a", "b", "c"], [1, 2, 3]))

  // ジェネリックインターフェース
  const pair: KeyValuePair<string, number> = { key: "score", value: 95 }
  console.log("ペア:", pair)

  // デフォルト型引数
  const textResponse: ApiResponse = { status: 200, data: "OK" }
  const numberResponse: ApiResponse<number> = { status: 200, data: 42 }
  console.log("レスポンス:", textResponse, numberResponse)
}
