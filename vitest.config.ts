import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    // tests/ ディレクトリの *.test.ts だけをテストとして実行する
    include: ["tests/**/*.test.ts"]
  }
})
