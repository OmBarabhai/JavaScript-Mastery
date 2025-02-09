// JavaScript Execution Context, Call Stack & Phases

/*
1. JavaScript Execution Context
   - Global Execution Context (GEC): Created first, represents the entire script.
     - 'this' refers to the global object (window in browsers, global in Node.js).
   - Function Execution Context (FEC): Created when a function is invoked.
     - Each function call creates a new execution context.
   - Eval Execution Context: Created when eval() function is used (rarely used in practice).

2. Execution Context Phases:
   - Memory Creation Phase: Allocates memory for variables and stores function references.
   - Execution Phase: Code runs line by line, variables get assigned values, functions execute.

3. Call Stack (LIFO - Last In, First Out):
   - The Call Stack keeps track of function execution order.
   - When a function is called, a new execution context is pushed onto the stack.
   - When the function completes, its execution context is popped off the stack.
   - The Global Execution Context remains at the bottom of the stack until the script finishes execution.
*/

// Code Example (How Execution Works)
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;  // 'total' is created in Function Execution Context
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

/*
Execution Flow:

1. Global Execution Context (GEC) is created:
   - 'this' -> global object
   - val1 -> undefined
   - val2 -> undefined
   - addNum -> function reference
   - result1 -> undefined
   - result2 -> undefined

2. Execution Context Phases:

   **Memory Creation Phase (for GEC)**
   - val1 -> undefined
   - val2 -> undefined
   - addNum -> function reference
   - result1 -> undefined
   - result2 -> undefined

   **Execution Phase**
   - val1 = 10, val2 = 5
   - result1 = addNum(10, 5) -> Calls function, new FEC created
     - num1 = 10, num2 = 5, total = 15
   - Function Execution Context is deleted after returning 15.
   - result1 = 15
   - result2 = addNum(10, 2) -> Calls function, new FEC created
     - num1 = 10, num2 = 2, total = 12
   - Function Execution Context is deleted after returning 12.
   - result2 = 12

3. Call Stack Operations (LIFO - Last In, First Out):
   - GEC is pushed onto the Call Stack.
   - addNum(10, 5) is called → new Execution Context is pushed onto the Call Stack.
   - Execution completes, addNum's Execution Context is popped.
   - addNum(10, 2) is called → new Execution Context is pushed onto the Call Stack.
   - Execution completes, addNum's Execution Context is popped.
   - GEC is popped after script execution finishes.

4. Call Stack Structure:
   - Initial:
     | Global Execution Context |
     
   - Function call (addNum(10,5)):
     | addNum Execution Context |
     | Global Execution Context |
     
   - Function returns, stack pops:
     | Global Execution Context |
     
   - Function call (addNum(10,2)):
     | addNum Execution Context |
     | Global Execution Context |
     
   - Function returns, stack pops:
     | Global Execution Context |
   - Script finishes, GEC is removed.

*/

// Example of Call Stack Working
two();

function one() {
    console.log("One");
    two();
}

function two() {
    console.log("Two");
    three();
}

function three() {
    console.log("Three");
}

/*
Call Stack Execution:
1. Global Execution Context is created.
2. 'two()' is called → Execution Context for 'two' is pushed.
3. 'console.log("Two")' executes.
4. 'three()' is called → Execution Context for 'three' is pushed.
5. 'console.log("Three")' executes.
6. Execution Context for 'three' is popped.
7. Execution Context for 'two' is popped.
8. Global Execution Context is removed.
*/
