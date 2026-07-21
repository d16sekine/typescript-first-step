// 演習の答え合わせ用ヘルパー
// 期待値と一致すれば ✅、不一致や未実装（エラー）なら ❌ を表示する

// オブジェクトのプロパティ順に依存せず比較できるよう、キーをソートしてから文字列化する
// （例: { id, title } と { title, id } は同じ内容なので一致とみなす）
function normalize(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(normalize)
  }
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, v]) => [key, normalize(v)])
    )
  }
  return value
}

function isEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(normalize(a)) === JSON.stringify(normalize(b))
}

export function check(label: string, actual: () => unknown, expected: unknown): void {
  try {
    const value = actual()
    if (isEqual(value, expected)) {
      console.log(`✅ ${label}`)
    } else {
      console.log(`❌ ${label}: 結果 ${JSON.stringify(value)} / 期待値 ${JSON.stringify(expected)}`)
    }
  } catch (error) {
    console.log(`❌ ${label}: ${error instanceof Error ? error.message : String(error)}`)
  }
}

export async function checkAsync(
  label: string,
  actual: () => Promise<unknown>,
  expected: unknown
): Promise<void> {
  try {
    const value = await actual()
    if (isEqual(value, expected)) {
      console.log(`✅ ${label}`)
    } else {
      console.log(`❌ ${label}: 結果 ${JSON.stringify(value)} / 期待値 ${JSON.stringify(expected)}`)
    }
  } catch (error) {
    console.log(`❌ ${label}: ${error instanceof Error ? error.message : String(error)}`)
  }
}
