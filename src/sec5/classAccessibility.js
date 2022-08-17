var UserAccessibility = /** @class */ (function () {
    function UserAccessibility(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccessibility.prototype.isAdult = function () {
        return this.age >= 20;
    };
    return UserAccessibility;
}());
var altoac = new UserAccessibility("alto", 32);
console.log(altoac.name);
console.log(altoac.isAdult());
console.log(altoac.age); // src/sec5/classAccessibility.ts:18:20 - error TS2341: Property 'age' is private and only accessible within class 'UserAccessibility'.
