// Primitive

// 7 primitive data types in JavaScript:

// String - Represents a sequence of characters.
const score = 100;  // A number type, can be an integer or decimal.
const scoreValue = 100.3; // A decimal (floating-point number).

// Boolean - Represents true or false.
const isLoggedIn = false;

// Null - Represents the intentional absence of any object value.
const outsideTemp = null;

// Undefined - Represents a variable that has been declared but not assigned a value.
let userEmail;  // userEmail is undefined.

// Symbol - Represents a unique and immutable value, mainly used as object property keys.
const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId); // false (Symbols are unique even with the same description)

// BigInt - Represents very large integers beyond the safe range for regular numbers.
const bigNumber = 2342747828783487278487n; // Suffix 'n' denotes a BigInt.

/*
One-Line Interview Notes:
String: Text-based data, enclosed in quotes (', ", or `).
Number: Numeric values (integers or floating point numbers).
Boolean: True or false value for logic.
Null: Intentional absence of any value.
Undefined: A variable is declared but not assigned a value.
Symbol: Unique, immutable value mainly for object property keys.
BigInt: Integer values that are too large for regular Number type.
*/

/*
JavaScript is  dynamically typed .  
What does that mean?   
- You  don't  need to declare variable types explicitly.  
- The type of a variable can change at runtime.  

Example: 
```javascript
let x = 10;    // x is a number
x = "Hello";   // Now x is a string (no error)
```
In contrast, 
-statically typed  languages (like TypeScript, Java, or C++) require variable types to be defined explicitly and do not allow type changes. 🚀
*/


/*******************************************************************-********************************************************************/





// Reference(Non-Primitive)

// Arrays, Object, Functions.

// Arrays - Used to store multiple values in a single variable.
const heros = ["shaktiman", "naagraj", "doga"];

// Object - A collection of key-value pairs representing real-world entities.
let myObj = {
    name: "om",
    age: 22,
};

// Function - A reusable block of code that performs a specific task.
const myFun = function() {
    console.log("Hello world");
};

//typeof : Check DataTypes
console.log(typeof bigNumber);

// Calling the function to execute its code.
myFun();

/*
One-Line Interview Notes:
Arrays: Ordered collection of elements, indexed from 0.
Objects: Key-value pair structure for representing real-world entities.
Functions: Reusable block of code, defined using function keyword or as an expression.
*/


// https://262.ecma-international.org/5.1/#sec-11.4.3