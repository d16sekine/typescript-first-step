// 演習の答え合わせ用ヘルパー
// 期待値と一致すれば ✅、不一致や未実装（エラー）なら ❌ を表示する

export function check(label: string, actual: () => unknown, expected: unknown): void {
  try {
    const value = actual()
    if (JSON.stringify(value) === JSON.stringify(expected)) {
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
    if (JSON.stringify(value) === JSON.stringify(expected)) {
      console.log(`✅ ${label}`)
    } else {
      console.log(`❌ ${label}: 結果 ${JSON.stringify(value)} / 期待値 ${JSON.stringify(expected)}`)
    }
  } catch (error) {
    console.log(`❌ ${label}: ${error instanceof Error ? error.message : String(error)}`)
  }
}
