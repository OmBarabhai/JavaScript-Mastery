// ============== Core Concepts ==============
const user = {
  username: "Om",
  price: 999,
  welcomMessage: function () {
    console.log(`${this.username}, welcome!`); // Output: Om, welcome!
    // Q: What does 'this' point to in object methods?
    // A: 'this' refers to the object itself (user) here.
  },
};
user.welcomMessage();

// ============== 'this' Behavior ==============
function regularFunc() {
  console.log(this.username); // undefined (global scope)
  // Q: Why does this print undefined?
  // A: Regular functions have their own 'this' context (global/window here).
}
regularFunc();

const arrowFunc = () => {
  console.log(this.username); // undefined (inherits outer scope)
  // Q: Why does arrowFunc() show undefined?
  // A: Arrow functions inherit 'this' from the lexical (outer) scope.
};
arrowFunc();

// ============== Interview Q&A Section ==============
// ===== 1. Implicit vs Explicit Returns =====
// Implicit return (no curly braces - single expression)
const add = (a, b) => a + b;
console.log("Implicit Return:", add(2, 3)); // 5

// Explicit return (curly braces require 'return' keyword)
const logName = (name) => {
  console.log(name);
};
logName("Om"); // Output: Om

/* Interview Importance:
- Implicit returns are preferred for concise transformations (map/filter)
- Common Question: "When must you use curly braces with arrow functions?"
  Answer: When needing multiple statements or explicit control flow
*/

// ===== 2. Arrow Functions in Classes =====
class Counter {
  count = 0;

  // Arrow method (bound to instance)
  increment = () => {
    this.count++;
    console.log("Arrow Method:", this.count);
  };

  // Regular method (on prototype)
  decrement() {
    this.count--;
    console.log("Regular Method:", this.count);
  }
}

const counter = new Counter();
counter.increment(); // 1 (arrow)
counter.decrement(); // 0 (regular)

/* Interview Importance:
- Arrow methods create instance-level functions (memory intensive)
- Regular methods are shared via prototype
- Common Question: "Why avoid arrow functions for class methods?"
  Answer: They prevent method sharing via prototype and waste memory
*/

// ===== 3. Lexical Scoping with setTimeout =====
function Timer() {
  this.seconds = 0;

  // Arrow function preserves 'this' context
  setTimeout(() => {
    this.seconds++;
    console.log("Timer:", this.seconds); // 1
  }, 1000);
}
new Timer();

/* Interview Importance:
- Demonstrates solving classic 'this' binding issue
- Common Question: "How would arrow functions help in event handlers?"
  Answer: They preserve context without needing bind()/that=this
*/

// Q1: Why can't arrow functions be used as constructors?
// A1: They lack their own 'this' and a 'prototype' property.
try {
  const ArrowConstructor = () => {};
  new ArrowConstructor(); // Throws TypeError
} catch (e) {
  console.log("Q1 Answer:", e.message); // "ArrowConstructor is not a constructor"
}

// Q2: How to return object literals from arrow functions?
// A2: Wrap in parentheses to avoid syntax ambiguity.
const returnObject = () => ({ username: "Om" });
console.log("Q2 Answer:", returnObject()); // { username: "Om" }

// Q3: When to avoid arrow functions in object methods?
// A3: When accessing object properties via 'this'.
const badObject = {
  name: "Om",
  greet: () => console.log(`Hi ${this.name}`), // undefined
};
console.log("Q3 Answer:");
badObject.greet(); // Output: Hi undefined

// Q4: What happens with arrow functions as event handlers?
// A4: 'this' refers to the parent scope, not the DOM element.
document.querySelector("button")?.addEventListener("click", () => {
  // console.log(this); // Window/global object (usually not desired)
  // Fix: Use regular functions for DOM event handlers.
});

// Q5: Difference between arguments in arrow vs regular functions?
// A5: Arrow functions don't have the 'arguments' object.
function regularArgs() {
  console.log(arguments);
} // Works: [1,2,3]
const arrowArgs = () => {
  // console.log(arguments) // ReferenceError
};
console.log("Q5 Answer:");
regularArgs(1, 2, 3); // Arguments(3) [1, 2, 3]
// arrowArgs(1, 2, 3); // Throws error

// ============== Key Differences Table ==============
/*
______________________________________________________________________________________
| Feature                | Arrow Functions               | Regular Functions         |
|------------------------|-------------------------------|---------------------------|
| 'this' Context         | Inherits from parent scope    | Own dynamic context       |
| Constructor Usage      | ❌ (TypeError)               | ✅                        |
| arguments Object       | ❌                           | ✅                        |
| Implicit Returns       | ✅ (No {} needed)            | ❌ (Requires return)      |
| Best For               | Callbacks, map/filter         | Object methods, prototypes|
|________________________|_______________________________|___________________________|
*/
