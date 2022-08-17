var UserClassMethod = /** @class */ (function () {
    function UserClassMethod() {
        this.name = "";
        this.age = 0;
    }
    UserClassMethod.prototype.isAdult = function () {
        return this.age >= 20;
    };
    UserClassMethod.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    return UserClassMethod;
}());
var alto = new UserClassMethod();
var baby = new UserClassMethod();
alto.setAge(32);
console.log(alto.isAdult());
console.log(baby.isAdult());
