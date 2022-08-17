const UserExpression = class {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  public isAdult(): boolean {
    return this.age >= 20
  }
}

const alto = new UserExpression("alto", 32)
console.log(alto.name)
console.log(alto.isAdult())
