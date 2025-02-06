// ✅ Declaring variables using different keywords
const accId = 1343;  // ❌ Constant (Cannot be reassigned)
let accPwd = "12344"; // ✅ Mutable (Can be reassigned)
var accEmail = "om@gmail.com"; // ⚠️ Avoid var (Hoisting & Scope Issues)

accCity = "amt"; // ✅ Allowed but NOT recommended (Becomes Global)
let accState; // ✅ Undefined (Declared but not assigned)

// accId = 2; // ❌ Not allowed (TypeError)

// ✅ Reassigning values
accEmail = "hc@hc.com";
accPwd = "21212121";
accCity = "Bangalore";

// ✅ Logging variables
console.log(accId);
console.table([accId, accEmail, accPwd, accCity, accState]);

// ----------------------------------------
// 🚀 Interview Concepts - JavaScript Variables
// ----------------------------------------

// ✅ 1. Variable Hoisting (var is hoisted, but let & const are not)
console.log(myVar); // ✅ Undefined (Hoisted but not initialized)
// console.log(myLet); // ❌ ReferenceError (Not Hoisted)
// console.log(myConst); // ❌ ReferenceError (Not Hoisted)
var myVar = 10;
let myLet = 20;
const myConst = 30;

// ✅ 2. Block Scope vs. Function Scope
function testScope() {
  var a = 10; // ✅ Function Scope (Accessible only in this function)
  let b = 20; // ✅ Block Scope
  const c = 30; // ✅ Block Scope
  console.log(a, b, c);
}
testScope();
// console.log(a); // ❌ Error (Function Scope)
// console.log(b, c); // ❌ Error (Block Scope)

// ✅ 3. Shadowing (Same variable in different scopes)
let x = "Global";
{
  let x = "Block"; // ✅ Shadows global x
  console.log(x); // Block
}
console.log(x); // Global

// ✅ 4. Temporal Dead Zone (TDZ)
console.log(typeof undeclaredVar); // ✅ Undefined (not declared)
console.log(typeof undeclaredLet); // ❌ ReferenceError (in TDZ)
let undeclaredLet = "Hello";

// ✅ 5. Dynamic Typing (JavaScript allows changing types)
let myVarType = "Hello";
console.log(typeof myVarType); // string
myVarType = 42;
console.log(typeof myVarType); // number

// ✅ 6. Global Variables (Avoid using global variables)
globalVar = "I am global"; // ❌ Avoid this (Becomes a property of window in browsers)
console.log(globalVar);

// ✅ 7. Constants with Objects & Arrays
const person = { name: "John", age: 30 };
// person = {}; // ❌ Error (Cannot reassign a new object)
person.age = 31; // ✅ Allowed (Can modify properties)
console.log(person);

const myArray = [1, 2, 3];
// myArray = [4, 5, 6]; // ❌ Error (Cannot reassign array)
myArray.push(4); // ✅ Allowed (Can modify contents)
console.log(myArray);

// ✅ 8. Destructuring (Extract values from objects/arrays)
const user = { name: "Om", city: "Pune" };
const { name, city } = user;
console.log(name, city);

const numbers = [1, 2, 3];
const [first, second] = numbers;
console.log(first, second);

// ✅ 9. Template Literals (String Interpolation)
const myName = "Om";
console.log(`Hello, my name is ${myName}!`);

// ✅ 10. Default Parameters (Handling undefined values)
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest
greet("Om"); // Hello, Om

/*
🚀 Key JavaScript Variable Concepts for Interviews:
-Hoisting (var hoisted, let/const not)
 Hoisting in JavaScript
 Hoisting is JavaScript's default behavior of moving variable and function declarations to the top of their scope during execution.

However, only the declaration is hoisted, not the initialization.

🔹 Example of Hoisting with var (Hoisted with undefined)
    console.log(a); // ❌ Output: undefined (hoisted but not initialized)
    var a = 10;
    console.log(a); // ✅ Output: 10

🔹 var variables are hoisted with undefined as their initial value.


🔹 Hoisting with Functions

    greet(); // ✅ Output: "Hello!"
    function greet() {
      console.log("Hello!");
    }
🔹 Function declarations are fully hoisted, meaning they can be called before their definition.

-Block Scope vs. Function Scope (let/const vs. var)
🔹Block Scope vs. Function Scope –

    var is function-scoped (accessible throughout the function).
    let & const are block-scoped (accessible only inside {} where declared).

-Shadowing (Same variable in different scopes)
🔹Shadowing – A variable in a local scope can override a variable in a parent scope if it has the same name. Example:
    let x = "Global";
    { let x = "Block"; console.log(x); } // "Block"
    console.log(x); // "Global"

-Temporal Dead Zone (TDZ) (Accessing let/const before declaration)
🔹 Temporal Dead Zone (TDZ) – A phase between hoisting and variable declaration where accessing let or const causes an error.

    console.log(a); // ❌ ReferenceError
    let a = 10;

🔹 Hoisting with let and const (Temporal Dead Zone - TDZ)

    console.log(b); // ❌ ReferenceError (Cannot access 'b' before initialization)
    let b = 20;
    console.log(b); // ✅ Output: 20

🔹 let and const are hoisted but not initialized, causing a ReferenceError if accessed before declaration. This phase is called the Temporal Dead Zone (TDZ).

-Dynamic Typing (Variables can change types)
🔹Dynamic Typing – Variables in JavaScript can change data types at runtime.

    let x = 10; 
    x = "Hello"; // No error, type changed from number to string

-Global Variables (Avoid creating global scope variables)
🔹Global Variables – Variables declared without let/const/var become global (which is risky and should be avoided).

    myVar = "I am global"; // ❌ Avoid this (Implicit global variable)

-Constants in Objects & Arrays (const only prevents reassigning)
🔹Constants in Objects & Arrays – const prevents reassignment, but object properties and array elements can be changed.

    const obj = { name: "Om" }; 
    obj.name = "John"; // ✅ Allowed (modifying property)
    // obj = {}; ❌ Not allowed (reassigning object)

-Destructuring (Extracting values from arrays/objects)
🔹Destructuring – Extracting values from arrays/objects into variables.

    const [a, b] = [1, 2]; // Array destructuring
    const { name, age } = { name: "Om", age: 25 }; // Object destructuring

-Template Literals (String interpolation using ${})

🔹Template Literals – Using backticks () for multi-line strings & embedding variables using ${}.

    let name = "Om";  
    console.log(`Hello, my name is ${name}!`);

-Default Parameters (Handle undefined function arguments)
🔹Default Parameters – Setting a default value for function parameters if no argument is provided.

    function greet(name = "Guest") {
      console.log(`Hello, ${name}`);
    }
    greet(); // "Hello, Guest"
    greet("Om"); // "Hello, Om"


💡 Key Points for Interviews:
✅ var is hoisted with undefined, while let & const remain in the TDZ.
✅ Function declarations are hoisted fully, but function expressions (with var, let, const) are not.
✅ Accessing let or const before declaration results in a ReferenceError due to TDZ

💡 Tip for Cracking Interviews:
-Practice writing code snippets for these concepts, and try explaining them in simple words. Most JavaScript interviews test hoisting, scope, closures, and dynamic typing, so focus on these.
*/