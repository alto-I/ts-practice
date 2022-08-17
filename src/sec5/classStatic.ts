class UserStatic {
  static adminName: string = "alto"
  static getAdminUser() {
    return new UserStatic(UserStatic.adminName, 32)
  }

  name: string;
  age: number;


  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  isAdult() :boolean {
    return this.age >= 20
  }
}

console.log(UserStatic.adminName)
const admin = UserStatic.getAdminUser()
console.log(admin.age)
console.log(admin.isAdult())

const alto = new UserStatic("alto", 32)
console.log(alto.adminName)
