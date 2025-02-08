// ========== SCOPE IN JAVASCRIPT ==========
// Global scope variable (declared with `var` - older syntax)
var c = 300;

// Global scope variable (declared with `let` - modern syntax)
let a = 300;

if (true) {
    // Block scope starts here
    
    // This `a` is block-scoped (different from global `a`)
    let a = 10;
    
    // `const` variables are also block-scoped
    const b = 20;
    
    console.log("INNER: ", a); // Output: 10
    // Interview Note: Shows block-scoped variables override global ones within their scope
}

console.log(a); // Output: 300 (global `a` is untouched)
// console.log(b); // Error: `b` is not accessible here (block-scoped)
// console.log(c); // Output: 300 (`var` has function/global scope)

// ===== Interview Importance =====
// 1. Block Scope vs Global Scope:
// - `let`/`const` are block-scoped, `var` is function/global scoped
// - Critical for predicting variable behavior in different contexts

// 2. Temporal Dead Zone (TDZ):
// - `let`/`const` declarations are hoisted but not initialized
// - Accessing them before declaration throws ReferenceError

// 3. Redeclaration:
// - `var` allows redeclaration, `let`/`const` do not
//   var c = 400; // Works
//   let a = 500; // SyntaxError

// Common Interview Questions:
// - "What is the output of this code?"
// - "Difference between `var`, `let`, and `const`?"
// - "What is the Temporal Dead Zone?"

// ========== MISSING SCOPE-RELATED TOPICS ==========

// 1. Closures (Scope Retention)
function outer() {
    const secret = "123";
    return function inner() {
        console.log(secret); // Remembers outer scope
    };
}
const innerFn = outer();
innerFn(); // Output: "123"
// Interview Importance: Demonstrates how functions retain access to their lexical scope

// 2. Lexical Scope (Static Scope)
let globalVar = "global";
function lexicalDemo() {
    let outerVar = "outer";
    function inner() {
        console.log(outerVar); // Accesses parent's scope
        console.log(globalVar); // Accesses global scope
    }
    inner();
}
lexicalDemo();
// Interview Importance: Explains scope chain resolution

// 3. Function Scope (var behavior)
function funcScopeDemo() {
    if (true) {
        var functionScoped = "I'm hoisted!";
    }
    console.log(functionScoped); // Output: "I'm hoisted!"
}
funcScopeDemo();
// Interview Importance: `var` is function-scoped, not block-scoped

// 4. Temporal Dead Zone (TDZ) Example
// console.log(tdzVar); // Throws ReferenceError
let tdzVar = "TDZ ends here";
// Interview Importance: TDZ prevents using variables before declaration

// 5. Shadowing
let shadowVar = "global";
function shadowDemo() {
    let shadowVar = "local";
    console.log(shadowVar); // Output: "local"
}
shadowDemo();
console.log(shadowVar); // Output: "global"
// Interview Importance: Shows variable shadowing in nested scopes

// ========== INTERVIEW CHEAT SHEET ==========
/*
| Concept             | Why It Matters                                                                 |
|---------------------|---------------------------------------------------------------------------------|
| Block Scope         | `let`/`const` stay within {} blocks. Critical for loop counters/conditional logic |
| Global Scope        | Variables declared outside functions. Risk of pollution with `var`               |
| Closures            | Functions remembering outer scope. Common in callbacks/event handlers            |
| TDZ                 | Prevents using `let`/`const` before declaration. Safety feature                   |
| Shadowing           | Inner scopes overriding outer variables. Can cause bugs if unintended            |
| Lexical Scope       | Determines variable lookup hierarchy (current → outer → global)                  |
*/