class UserClassConstructor {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  isAdult(): boolean {
    return: this.age >= 20
  }
}

const altom = new UserClassConstructor("alto", 32)
console.log(altom.name)
console.log(altom.isAdult())
