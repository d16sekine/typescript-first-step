// ESLint 設定（Flat Config）
// TypeScript向けの推奨ルール + Prettierと競合するルールの無効化

import eslint from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import tseslint from "typescript-eslint"

export default tseslint.config(
  { ignores: ["dist/", "coverage/"] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  {
    rules: {
      // 先頭が _ の変数・引数と、rest構文で除外するためのプロパティは未使用でも許可
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          ignoreRestSiblings: true
        }
      ]
    }
  },
  {
    // 演習スタブは未実装（throwのみ）のため、未使用の引数をエラーにしない
    files: ["exercises/**/*.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off"
    }
  }
)
