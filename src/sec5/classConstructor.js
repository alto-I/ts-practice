var UserClassConstructor = /** @class */ (function () {
    function UserClassConstructor(name, age) {
        this.name = name;
        this.age = age;
    }
    UserClassConstructor.prototype.isAdult = function () {
        return ;
        this.age >= 20;
    };
    return UserClassConstructor;
}());
var altom = new UserClassConstructor("alto", 32);
console.log(altom.name);
console.log(altom.isAdult());
