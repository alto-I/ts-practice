var UserStatic = /** @class */ (function () {
    function UserStatic(name, age) {
        this.name = name;
        this.age = age;
    }
    UserStatic.getAdminUser = function () {
        return new UserStatic(UserStatic.adminName, 32);
    };
    UserStatic.prototype.isAdult = function () {
        return this.age >= 20;
    };
    UserStatic.adminName = "alto";
    return UserStatic;
}());
console.log(UserStatic.adminName);
var admin = UserStatic.getAdminUser();
console.log(admin.age);
console.log(admin.isAdult());
var alto = new UserStatic("alto", 32);
console.log(alto.adminName);
