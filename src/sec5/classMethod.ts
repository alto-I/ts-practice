class UserClassMethod {
  name: string = "";
  age: number = 0;

  isAdult(): boolean {
    return this.age >= 20;
  }

  setAge(newAge: number) {
    this.age = newAge
  }
}

const alto = new UserClassMethod()
const baby = new UserClassMethod()

alto.setAge(32)
console.log(alto.isAdult())
console.log(baby.isAdult())

