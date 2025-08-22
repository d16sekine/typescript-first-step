// クラスとインターフェースの例

// インターフェース定義
interface Animal {
  name: string
  makeSound(): void
}

// 抽象クラス
abstract class Pet implements Animal {
  constructor(public name: string) {}
  
  abstract makeSound(): void
  
  // 共通メソッド
  introduce(): string {
    return `私の名前は${this.name}です`
  }
}

// クラスの継承
class Dog extends Pet {
  constructor(name: string, public breed: string) {
    super(name)
  }
  
  makeSound(): void {
    console.log(`${this.name}: ワンワン！`)
  }
  
  // 独自メソッド
  fetch(): void {
    console.log(`${this.name}がボールを取ってきました`)
  }
}

class Cat extends Pet {
  constructor(name: string, private age: number) {
    super(name)
  }
  
  makeSound(): void {
    console.log(`${this.name}: ニャーニャー`)
  }
  
  // ゲッター
  get catAge(): number {
    return this.age
  }
  
  // セッター
  set catAge(newAge: number) {
    if (newAge >= 0) {
      this.age = newAge
    }
  }
}

// ジェネリッククラス
class Box<T> {
  private contents: T[]
  
  constructor() {
    this.contents = []
  }
  
  add(item: T): void {
    this.contents.push(item)
  }
  
  getAll(): T[] {
    return this.contents
  }
}

// 使用例
console.log("=== クラスとインターフェースの例 ===")

const myDog = new Dog("ポチ", "柴犬")
console.log(myDog.introduce())
myDog.makeSound()
myDog.fetch()

const myCat = new Cat("タマ", 3)
console.log(myCat.introduce())
myCat.makeSound()
console.log(`${myCat.name}の年齢: ${myCat.catAge}歳`)

// ジェネリッククラスの使用
const stringBox = new Box<string>()
stringBox.add("りんご")
stringBox.add("バナナ")
console.log("文字列ボックスの中身:", stringBox.getAll())

const numberBox = new Box<number>()
numberBox.add(10)
numberBox.add(20)
numberBox.add(30)
console.log("数値ボックスの中身:", numberBox.getAll())