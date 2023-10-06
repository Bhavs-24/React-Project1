var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
//Types by Inference
var helloWorld = "Hello";
console.log(helloWorld, typeof (helloWorld));
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user1 = new UserAccount("honey", 9);
console.log(user1);
function logpoint(p) {
    console.log('${p.x},${p.y}');
}
var point = { x: 12, y: 24 };
console.log(point);
var Virtualpoint = /** @class */ (function () {
    function Virtualpoint(z, r) {
        this.z = z;
        this.r = r;
    }
    return Virtualpoint;
}());
var vpoint = new Virtualpoint(13, 10);
console.log(vpoint);
var Student1 = /** @class */ (function () {
    function Student1(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student1;
}());
//Emitts an error that got 1 argument but expected 2
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }
// greet("Brendan");
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
//anonymus functions
var names = ["Alice", "Bob", "Eve"];
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
// Contextual typing also applies to arrow functions
names.forEach(function (s) {
    console.log(s.toUpperCase());
});
//Object types
// The parameter's type annotation is an object type
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
//unions
function printId(id) {
    console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
function printCoordi(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoordi({ x: 80, y: 100 });
//Function Type
function greeter2(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter2(printToConsole);
