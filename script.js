var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Task 1 — Basic Types & Variables
var nameZaeem = "Hello";
var ageZaeem = 22;
var isStudentZaeem = true;
var anythingZaeem = "Can be anything";
var unknownZaeem = 123;
var fruits = ["Apple", "Banana", "Cherry"];
var personZaeem = ["Zaeem", 22];
function checkTypeZaeem(value) {
    if (typeof value === "string")
        console.log("It's a string:", value);
    else
        console.log("It's a number:", value);
}
checkTypeZaeem("Hello");
checkTypeZaeem(10);
// Task 2 — Functions & Parameters
function addZaeem(a, b) {
    return a + b;
}
function greetZaeem(name) {
    console.log("Hello", name || "Guest");
}
function logZaeem(message) {
    if (message === void 0) { message = "Welcome"; }
    console.log(message);
}
function sumZaeem() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (a, b) { return a + b; }, 0);
}
console.log(addZaeem(3, 4));
greetZaeem("Zaeem");
greetZaeem();
logZaeem();
console.log(sumZaeem(1, 2, 3, 4));
function showUserZaeem(u) {
    console.log("ID:", u.id, "Name:", u.name, "Email:", u.email || "None");
}
var usersZaeem = [
    { id: 1, name: "Zaeem", email: "z@gmail.com" },
    { id: 2, name: "Ali" }
];
usersZaeem.forEach(showUserZaeem);
// Task 4 — Classes & Access Modifiers
var PersonMainZaeem = /** @class */ (function () {
    function PersonMainZaeem(n, a) {
        this.name = n;
        this.age = a;
    }
    PersonMainZaeem.prototype.introduce = function () {
        console.log("Hi, I'm ".concat(this.name, ", ").concat(this.age, " years old"));
    };
    return PersonMainZaeem;
}());
var StudentZaeem = /** @class */ (function (_super) {
    __extends(StudentZaeem, _super);
    function StudentZaeem(n, a, i) {
        var _this = _super.call(this, n, a) || this;
        _this.id = i;
        return _this;
    }
    StudentZaeem.prototype.study = function () {
        console.log(this.name, "is studying");
    };
    return StudentZaeem;
}(PersonMainZaeem));
var s1 = new StudentZaeem("Zaeem", 21, 1001);
s1.introduce();
s1.study();
// Task 5 — Inheritance & Abstract Classes
var ShapeZaeem = /** @class */ (function () {
    function ShapeZaeem() {
    }
    return ShapeZaeem;
}());
var CircleZaeem = /** @class */ (function (_super) {
    __extends(CircleZaeem, _super);
    function CircleZaeem(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    CircleZaeem.prototype.area = function () { return Math.PI * this.radius * this.radius; };
    return CircleZaeem;
}(ShapeZaeem));
var RectangleZaeem = /** @class */ (function (_super) {
    __extends(RectangleZaeem, _super);
    function RectangleZaeem(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    RectangleZaeem.prototype.area = function () { return this.width * this.height; };
    return RectangleZaeem;
}(ShapeZaeem));
var c1 = new CircleZaeem(5);
var r1 = new RectangleZaeem(4, 6);
console.log("Circle area:", c1.area());
console.log("Rectangle area:", r1.area());
// Task 6 — Generics
function identityZaeem(value) {
    return value;
}
console.log(identityZaeem("Hello"));
console.log(identityZaeem(123));
var BoxZaeem = /** @class */ (function () {
    function BoxZaeem() {
        this.items = [];
    }
    BoxZaeem.prototype.add = function (item) { this.items.push(item); };
    BoxZaeem.prototype.getAll = function () { return this.items; };
    return BoxZaeem;
}());
var box1 = new BoxZaeem();
box1.add("Apple");
console.log(box1.getAll());
var box2 = new BoxZaeem();
box2.add(10);
console.log(box2.getAll());
// Task 7 — Union & Intersection Types
function printIdZaeem(id) {
    console.log("ID:", id);
}
var admin1 = { role: "admin", name: "Zaeem" };
console.log(admin1);
// Task 8 — Type Guards
function isStringZaeem(v) {
    return typeof v === "string";
}
function checkValueZaeem(v) {
    if (isStringZaeem(v))
        console.log("String length:", v.length);
    else if (typeof v === "number")
        console.log("Number square:", v * v);
    else
        console.log("Unsupported type");
}
checkValueZaeem("Hello");
checkValueZaeem(5);
checkValueZaeem(true);
// Task 9 — Enums
var StatusZaeem;
(function (StatusZaeem) {
    StatusZaeem[StatusZaeem["Active"] = 0] = "Active";
    StatusZaeem[StatusZaeem["Inactive"] = 1] = "Inactive";
    StatusZaeem[StatusZaeem["Pending"] = 2] = "Pending";
})(StatusZaeem || (StatusZaeem = {}));
function getStatusZaeem(s) {
    if (s === StatusZaeem.Active)
        console.log("Active");
    else if (s === StatusZaeem.Inactive)
        console.log("Inactive");
    else
        console.log("Pending");
}
getStatusZaeem(StatusZaeem.Active);
getStatusZaeem(StatusZaeem.Pending);
var newUser = { name: "Zaeem", email: "z@mail.com" };
console.log(newUser);
// Task 11 — Type Assertions & Casting
var valZaeem = "123";
var numZaeem = Number(valZaeem);
console.log(numZaeem * 2);
var msgZaeem = "Welcome";
console.log(msgZaeem.toUpperCase());
// Task 12 — Simple Logging (no decorators)
function logCreationZaeem(objName) {
    console.log("Object created:", objName);
}
var PersonDecoZaeem = /** @class */ (function () {
    function PersonDecoZaeem(name) {
        this.name = name;
        logCreationZaeem("PersonDecoZaeem");
    }
    PersonDecoZaeem.prototype.greet = function (msg) {
        console.log(this.name, "says:", msg);
    };
    return PersonDecoZaeem;
}());
var p1 = new PersonDecoZaeem("Zaeem");
p1.greet("Hello");
// Task 13 — Advanced Generics
var RepositoryZaeem = /** @class */ (function () {
    function RepositoryZaeem() {
        this.data = [];
    }
    RepositoryZaeem.prototype.add = function (item) { this.data.push(item); };
    RepositoryZaeem.prototype.getAll = function () { return this.data; };
    return RepositoryZaeem;
}());
var userRepo = new RepositoryZaeem();
userRepo.add({ id: 1, name: "Zaeem", email: "z@mail.com" });
var productRepo = new RepositoryZaeem();
productRepo.add({ id: 101, title: "Laptop" });
console.log(userRepo.getAll());
console.log(productRepo.getAll());
