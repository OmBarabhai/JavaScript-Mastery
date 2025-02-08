function sayMyName(){
    console.log("O");
    console.log("M"); 
}

// sayMyName()

// Interview Importance: 
// - This is a basic function that demonstrates how to define and call a function.
// - It shows the importance of understanding function syntax and execution flow.
// - In interviews, you might be asked to explain how functions work or to write a simple function.

function addTwoNumbers(number1, number2){
    // let result = number1 + number2 
    // return result

    return number1 + number2

}
const result = addTwoNumbers(3, 8)
    
// console.log("Result: ", result);

// Interview Importance:
// - This function demonstrates parameter handling and return values.
// - It shows how to pass arguments to a function and return a result.
// - In interviews, you might be asked to write a function that performs a basic operation, like addition, and explain the difference between `console.log` and `return`.
          
function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in` 
}

// console.log(loginUserMessage("Om"));
console.log(loginUserMessage());

// Interview Importance:
// - This function demonstrates conditional logic within a function.
// - It shows how to handle default or missing arguments.
// - In interviews, you might be asked to write a function that handles edge cases, such as missing or undefined inputs.

// =================================================================================================================================
// Additional Important Function Topics
// =================================================================================================================================

const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(5, 3)); // Output: 15

// Interview Importance:
// - Demonstrates function expressions (storing functions in variables).
// - Helps in writing anonymous functions.
// - In interviews, you might be asked to explain the difference between function declarations and function expressions.

const arrowMultiply = (a, b) => a * b;
console.log(arrowMultiply(5, 3)); // Output: 15

// Interview Importance:
// - Demonstrates arrow functions (ES6).
// - Shorter syntax and different behavior with `this`.
// - In interviews, you might be asked to convert a function into an arrow function or explain its benefits.

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Om", sayGoodbye);

// Interview Importance:
// - Demonstrates callback functions.
// - Commonly used in JavaScript for handling asynchronous operations.
// - In interviews, you might be asked to explain callbacks or use them in asynchronous code.

function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter(); // Output: 1
counter(); // Output: 2

// Interview Importance:
// - Demonstrates closures (a function remembering variables from its parent).
// - Useful for data hiding and state management.
// - In interviews, you might be asked to explain how closures work and why they are useful.

(function(){
    console.log("This runs immediately!");
})();

// Interview Importance:
// - Demonstrates Immediately Invoked Function Expressions (IIFE).
// - Helps avoid polluting the global scope.
// - In interviews, you might be asked to write an IIFE or explain its purpose.

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// Interview Importance:
// - Demonstrates recursion (a function calling itself).
// - Commonly used for solving problems like tree traversal and mathematical calculations.
// - In interviews, you might be asked to write a recursive function for factorial, Fibonacci, or other problems.



// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 1. Rest Parameter Syntax (...)
function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500, 2000)); // Output: [500, 2000]

// Interview Importance:
// - Demonstrates REST PARAMETER SYNTAX (...), a key ES6 feature.
// - Rest parameters collect all remaining arguments into an array.
// - Interviewers often ask: "How to handle multiple function arguments?"
// - Note: `val1` and `val2` capture first two arguments; rest go to `num1`.

// ---------------------------------------------------------------------

// 2. Passing Objects to Functions
const user = {
    username: "Om",
    price: 199
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user); // Output: Username is Om and price is 199
handleObject({
    username: "Om",
    price: 399,
});

// Interview Importance:
// - Shows how to pass OBJECTS as function arguments.
// - Tests understanding of object destructuring/accessing properties.
// - Common question: "How would you handle missing properties in the object?"
//   (Answer: Use optional chaining `anyObject?.price` or default values)

// ---------------------------------------------------------------------

// 3. Passing Arrays to Functions
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray)); // Output: 400
console.log(returnSecondValue([200, 400, 500, 1000])); // Output: 400

// Interview Importance:
// - Demonstrates passing ARRAYS as function arguments.
// - Tests array indexing knowledge.
// - Common follow-up: "How to handle empty arrays?" 
//   (Answer: Add guard clause `if (getArray.length < 2) return null;`)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ==================================================
// 1. REST PARAMETERS (...)
// ==================================================
function calculateCartPrice(val1, val2, ...num1) {
    return num1; // Collects all remaining arguments into an array
}
// console.log(calculateCartPrice(200, 400, 500, 2000)); // Output: [500, 2000]

// Interview Importance:
// - Rest parameters allow handling variable numbers of arguments.
// - Commonly asked: "How to handle multiple arguments in a function?"

// ==================================================
// 2. DESTRUCTURING PARAMETERS
// ==================================================
function handleUser({ username, price = 299 }) { // Default value for price
    console.log(`${username}'s price: ${price}`);
}
const user1 = { username: "Om", price: 199 };
// handleUser(user1); // Output: Om's price: 199

// Interview Importance:
// - Destructuring simplifies extracting values from objects/arrays.
// - Default values handle missing properties gracefully.

// ==================================================
// 3. ARROW FUNCTIONS & `this` CONTEXT
// ==================================================
const arrowExample = () => console.log(this); // Uses lexical `this`
function regularExample() { console.log(this); } // Has its own `this`

// Interview Importance:
// - Arrow functions don't have their own `this`; they inherit from the parent scope.
// - Commonly asked: "Difference between arrow functions and regular functions?"

// ==================================================
// 4. ERROR HANDLING IN FUNCTIONS
// ==================================================
function safeSecondElement(arr) {
    if (!Array.isArray(arr)) throw new Error("Not an array!"); // Validate input
    return arr[1] ?? "No second element"; // Nullish coalescing for undefined values
}
// console.log(safeSecondElement([10, 20])); // Output: 20
// console.log(safeSecondElement([])); // Output: No second element

// Interview Importance:
// - Demonstrates defensive coding practices.
// - Common question: "How to handle edge cases in functions?"

// ==================================================
// 5. SPREAD OPERATOR VS REST PARAMETER
// ==================================================
const nums = [1, 2, 3];
// Spread operator (...) for expanding arrays/objects
console.log(Math.max(...nums)); // Output: 3

// Interview Importance:
// - Spread operator is used to expand elements, while rest parameters collect them.
// - Commonly asked: "Difference between spread and rest?"

// ==================================================
// 6. IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)
// ==================================================
(function iifeDemo() {
    console.log("IIFE executed immediately!");
})(); // Output: IIFE executed immediately!

// Interview Importance:
// - IIFE runs as soon as it is defined.
// - Commonly asked: "What is an IIFE, and why use it?"

// ==================================================
// 7. HIGHER-ORDER FUNCTIONS
// ==================================================
function createMultiplier(factor) {
    return (num) => num * factor; // Returns a function
}
const double = createMultiplier(2);
// console.log(double(5)); // Output: 10

// Interview Importance:
// - Higher-order functions accept or return other functions.
// - Commonly asked: "What is a higher-order function? Give an example."

// ==================================================
// 8. PASSING OBJECTS TO FUNCTIONS
// ==================================================
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject({ username: "Om", price: 399 }); // Output: Username is Om and price is 399

// Interview Importance:
// - Shows how to pass and manipulate objects in functions.
// - Common question: "How to handle missing properties in an object?"

// ==================================================
// 9. PASSING ARRAYS TO FUNCTIONS
// ==================================================
function returnSecondValue(getArray) {
    return getArray[1]; // Returns the second element
}
// console.log(returnSecondValue([200, 400, 500, 1000])); // Output: 400

// Interview Importance:
// - Demonstrates passing arrays and accessing elements.
// - Common question: "How to handle empty arrays?"

// ==================================================
// 10. FUNCTION TYPES (ARROW, REGULAR, IIFE)
// ==================================================
// Arrow Function
const add = (a, b) => a + b;
// Regular Function
function subtract(a, b) { return a - b; }
// IIFE
(function () { console.log("IIFE executed!"); })();

// Interview Importance:
// - Understanding different function types is crucial.
// - Commonly asked: "Difference between arrow functions and regular functions?"

// ==================================================
// 11. PARAMETER DEFAULTS
// ==================================================
function greet(name = "Guest") { // Default parameter
    return `Hello, ${name}`;
}
// console.log(greet()); // Output: Hello, Guest

// Interview Importance:
// - Default parameters handle missing arguments gracefully.
// - Commonly asked: "How to set default values for function parameters?"

// ==================================================
// 12. CALLBACK FUNCTIONS
// ==================================================
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched!");
    }, 1000);
}
// fetchData((data) => console.log(data)); // Output: Data fetched! (after 1 second)

// Interview Importance:
// - Callbacks are fundamental for asynchronous programming.
// - Commonly asked: "What is a callback function? Give an example."

// ==================================================
// 13. CLOSURES
// ==================================================
function outerFunction() {
    let count = 0;
    return function innerFunction() {
        count++;
        return count;
    };
}
const counter1 = outerFunction();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2

// Interview Importance:
// - Closures allow functions to retain access to their lexical scope.
// - Commonly asked: "What is a closure? Give an example."

// ==================================================
// 14. FUNCTION HOISTING
// ==================================================
console.log(hoistedFunction()); // Output: Hello
function hoistedFunction() {
    return "Hello";
}

// Interview Importance:
// - Function declarations are hoisted, but expressions are not.
// - Commonly asked: "What is hoisting in JavaScript?"

// ==================================================
// 15. NULLISH COALESCING (??) AND OPTIONAL CHAINING (?.)
// ==================================================
function getUserName(user1) {
    return user1?.name ?? "Guest"; // Optional chaining + nullish coalescing
}
// console.log(getUserName({ name: "Om" })); // Output: Om
// console.log(getUserName({})); // Output: Guest

// Interview Importance:
// - Modern JavaScript features for handling undefined/null values.
// - Commonly asked: "What is optional chaining? How is it different from nullish coalescing?"