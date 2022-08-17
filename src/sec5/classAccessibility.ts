class UserAccessibility {
  constructor(public name: string, private age: number) {}

  public isAdult(): boolean {
    return this.age >= 20
  }
}

const altoac = new UserAccessibility("alto", 32)
console.log(altoac.name)
console.log(altoac.isAdult())
console.log(altoac.age) // src/sec5/classAccessibility.ts:18:20 - error TS2341: Property 'age' is private and only accessible within class 'UserAccessibility'.
