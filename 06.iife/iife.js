// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`); 
})();

// (function chai()
// {
//     console.log(`DB CONNECTED TWO`); 
// })()

((name) =>{
    console.log(`DB CONNECTED TWO ${name}`); 
})('Om')// ============== Immediately Invoked Function Expressions (IIFE) ==============

// 1. Named IIFE (Immediately Invoked Function Expression)
(function chai() {
    // This is a named IIFE - has its own scope
    console.log(`DB CONNECTED`); // Output: DB CONNECTED
})();

/* Interview Importance:
- Why IIFE? 
  Answer: Creates isolated scope, prevents global namespace pollution
- When to use? 
  Answer: For one-time initialization, encapsulation, avoiding variable collisions
*/

// 2. Unnamed IIFE with Arrow Function + Parameter
((name) => {
    console.log(`DB CONNECTED TWO ${name}`); // Output: DB CONNECTED TWO Om
})('Om');

/* Interview Importance:
- Can arrow functions be IIFEs? 
  Answer: Yes, but less common due to implicit return behavior
- Parameter passing? 
  Answer: IIFEs can accept arguments like regular functions
*/

// ============== Common Interview Questions ==============
// Q: Why the wrapping parentheses?
// A: To make the function an expression (would throw error otherwise)

// Q: What happens if we omit the semicolon before IIFE?
// (function() {})()

// ============== Additional IIFE Topics ==============

// 1. Async IIFE (Common in Modern JS)
(async () => {
    const data = await fetchData();
    console.log(data);
})();

// 2. IIFE Returning Values
const result = (() => {
    return "IIFE Return Value";
})();
console.log(result); // Output: IIFE Return Value

// 3. IIFE with Private State (Module Pattern)
const counterModule = (() => {
    let count = 0;
    return {
        increment: () => ++count,
        getCount: () => count
    };
})();
counterModule.increment();
console.log(counterModule.getCount()); // Output: 1

// 4. Classic Semicolon Issue
// ;(function() { 
//     console.log('Safe IIFE'); 
// })()
/* Why? 
   Previous code without semicolon might cause concatenation issues:
   someCode()(function(){})() → TypeError
*/

// ============== IIFE Cheat Sheet ==============
/*
| Feature            | Importance                                  |
|--------------------|---------------------------------------------|
| Scope Isolation    | Avoids global variable collisions            |
| One-time Execution | Used for initialization tasks               |
| Module Pattern     | Enapsulation with private/public members    |
| Async Operations   | Can be used with async/await                |
| Minification       | Helps minifiers rename variables safely     |
*/