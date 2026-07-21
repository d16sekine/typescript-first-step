// レッスン07: ユーティリティ型
// Partial・Required・Pick・Omit・Readonly・Record・ReturnType

// ベースとなる型
export type User = {
  id: number
  name: string
  email: string
  bio?: string
}

// Partial<T>: すべてのプロパティをオプショナルにする
// 「一部のプロパティだけ更新する」処理にぴったり
export function updateUser(user: User, changes: Partial<User>): User {
  return { ...user, ...changes }
}

// Pick<T, K>: 指定したプロパティだけを取り出す
export type UserSummary = Pick<User, "id" | "name">

// Omit<T, K>: 指定したプロパティを取り除く
// メールアドレスを含まない公開用のユーザー情報を作る
export type PublicUser = Omit<User, "email">

export function toPublicUser(user: User): PublicUser {
  const { email: _email, ...publicUser } = user
  return publicUser
}

// Readonly<T>: すべてのプロパティを読み取り専用にする
export type FrozenUser = Readonly<User>

// Record<K, V>: キーの型と値の型を指定してオブジェクト型を作る
export type Translations = Record<"ja" | "en", string>

export const greetings: Translations = {
  ja: "こんにちは",
  en: "Hello"
}

// Required<T>: すべてのプロパティを必須にする（オプショナルの ? を外す）
export type CompleteUser = Required<User>

// ReturnType<T>: 関数の戻り値の型を取り出す
export function createUser(name: string, email: string): User {
  return { id: 0, name, email }
}

export type CreatedUser = ReturnType<typeof createUser> // = User

// このファイルを直接実行したときだけデモを動かす
// 実行方法: yarn tsx src/07-utility-types.ts
if (typeof require !== "undefined" && require.main === module) {
  console.log("=== ユーティリティ型の例 ===")

  const user: User = {
    id: 1,
    name: "山田太郎",
    email: "taro@example.com"
  }

  // Partial: nameだけ更新する
  const renamed = updateUser(user, { name: "山田次郎" })
  console.log("更新後:", renamed)

  // Pick
  const summary: UserSummary = { id: user.id, name: user.name }
  console.log("サマリー:", summary)

  // Omit
  console.log("公開用:", toPublicUser(user))

  // Readonly
  const frozen: FrozenUser = user
  // frozen.name = "変更" はコンパイルエラーになる
  console.log("読み取り専用:", frozen.name)

  // Record
  console.log("翻訳:", greetings.ja, "/", greetings.en)

  // Required
  const complete: CompleteUser = { ...user, bio: "自己紹介文です" }
  console.log("bio必須:", complete.bio)

  // ReturnType
  const created: CreatedUser = createUser("鈴木花子", "hanako@example.com")
  console.log("作成:", created)
}
