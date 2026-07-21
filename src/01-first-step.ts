// レッスン01: はじめの一歩 - 関数と型注釈
// 引数に number 型の注釈を付けることで、数値以外を渡すとコンパイルエラーになる

export const increment = (num: number) => {
  return num + 1
}

// このファイルを直接実行したときだけデモを動かす
// 実行方法: yarn dev（または yarn tsx src/01-first-step.ts）
if (typeof require !== "undefined" && require.main === module) {
  // 宣言と代入を分ける例のため、あえて let を使っている
  let v: number

  // eslint-disable-next-line prefer-const
  v = 99

  const result = increment(v)

  console.log(result)
}
