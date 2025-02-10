// switch(key){
//     case value:
//         break;

//         default:
//             break
// }

// ✅ SWITCH CASE - Alternative to multiple if-else statements
// Evaluates an expression and executes the matching case
const month = 3;
switch (month) {
    case 1: console.log("January"); break;
    case 2: console.log("February"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    default: console.log("Invalid month");
}

// Interview Explanation:
// - Switch case is used when you have multiple conditions to check against a single variable.
// - It is more readable and efficient than multiple if-else statements.
// - Always include a `break` statement to prevent fall-through (executing multiple cases).
// - Use `default` for handling unexpected values.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const month1 = 3
// const month = "april"
// const month = "march"

switch (month1){
    case 1:
        console.log("january");
        break;
    case 2:       
        console.log("feb");
        break;
    // case march:
    //     console.log("march");
    //     break;
    case 3:
        console.log("march");
        break;
    // case "april":
    //     console.log("april");
    //     break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    case 8:
        console.log("augast");
        break;
    case 9:
        console.log("sept");
        break;
    case 10:
        console.log("oct");
        break;
        
    default:
        console.log("default case match");
        break;
}