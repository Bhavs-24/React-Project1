
class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
 
//interface 
interface Person {
  firstName: string;
  lastName: string;
}
 
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
 
let user = new Student("Jane", "M.", "User");
 
document.body.textContent = greeter(user);

//Types by Inference
let helloWorld = "Hello";
console.log(helloWorld,typeof(helloWorld));

//Interface declaration with classes
interface User{
  name: string;
  id: number;
}
class UserAccount {
  name: string;
  id: number;
  constructor(name: string,id: number){
      this.name = name;
      this.id = id;
  }
}
const user1:User = new UserAccount("honey", 9);
console.log(user1);

//Structural type system
/*If 2 objects having same shape they are considered to under same type */
interface point{
  x:number;
  y:number;
 }
 function logpoint(p:point){
  console.log('${p.x},${p.y}')
 }
  const point = {x:12,y:24}
  console.log(point)


  class Virtualpoint{
      z: number;
      r: number;
      constructor(z:number,r:number){
          this.z=z;
          this.r=r;
      }
  }
  const  vpoint =new Virtualpoint(13,10)
  console.log(vpoint)

  interface Person {
    firstName: string;
    lastName: string;
  }
   
  class Student1 {
    fullName: string;
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
  }
   
  interface Person {
    firstName: string;
    lastName: string;
  }

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
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});
   
//Object types
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

//unions
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");

//Interfaces
/**Interface is another way to name an object type */
interface Point {
  x: number;
  y: number;
}
 
function printCoordi(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoordi({ x: 80, y: 100 });
 
//Function Type
function greeter2(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter2(printToConsole);