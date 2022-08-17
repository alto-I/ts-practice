var UserExpression = /** @class */ (function () {
    function class_1(name, age) {
        this.name = name;
        this.age = age;
    }
    class_1.prototype.isAdult = function () {
        return this.age >= 20;
    };
    return class_1;
}());
var alto = new UserExpression("alto", 32);
console.log(alto.name);
console.log(alto.isAdult());
