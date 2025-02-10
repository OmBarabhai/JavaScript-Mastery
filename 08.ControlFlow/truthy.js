// ✅ TRUTHY & FALSY VALUES - Important in conditions
const userEmail = [];
if (userEmail) console.log("Got user email");
else console.log("No user email");

// Falsy values: false, 0, -0, 0n, "", null, undefined, NaN
// Truthy values: "0", 'false', " ", [], {}, function() {}

// Interview Explanation:
// - Truthy values are values that evaluate to `true` in a boolean context.
// - Falsy values evaluate to `false`.
// - Understanding truthy and falsy values is crucial for writing conditions and avoiding bugs.
// - Common falsy values include `false`, `0`, `""`, `null`, `undefined`, and `NaN`.
// - Everything else is truthy, including empty arrays `[]` and objects `{}`.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const userEmail1 = [] 

if(userEmail1){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
//"0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty"); 
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ✅ NULLISH COALESCING OPERATOR (??) - Handles null & undefined
let val1 = null ?? 10 ?? 20;
console.log(val1); // Returns first non-null/undefined value

// Interview Explanation:
// - The nullish coalescing operator (`??`) is used to provide a default value when dealing with `null` or `undefined`.
// - It is different from the logical OR (`||`) operator, which considers all falsy values (`0`, `""`, `false`, etc.).
// - Use `??` when you only want to check for `null` or `undefined`.
// - Example: `const value = input ?? defaultValue;`

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let val2;
// val2 = 5 ?? 10
// val2 = null ?? 10
// var2 = undefined ?? 15
val2 = null ?? 10 ?? 20

console.log(val2);
//Terniary Operator
// condition ? true : false

const IceTeaPrice = 100

IceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++