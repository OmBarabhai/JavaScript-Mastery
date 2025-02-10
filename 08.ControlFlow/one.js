// 1. Basic if-else
const temperature = 41;
if (temperature === 40) {
    console.log("Temperature is 40");
} else {
    console.log("Temperature is not 40");
}
console.log("Execute");

// 2. Comparison Operators
const score = 200;
if (score > 100) {
    let power = "fly";
    console.log(`User Power: ${power}`);
}

// 3. Implicit Block
const balance = 1000;
if (balance > 500) console.log("test"), console.log("test2");

// 4. else-if Ladder
if (balance > 500) {
    console.log("Greater than 500");
} else if (balance < 750) {
    console.log("Less than 750");
} else if (balance < 900) {
    console.log("Less than 900");
} else {
    console.log("Default case");
}

// 5. Logical Operators
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const isUserloggedIn = true
// const temparature = 41
// if(temparature === 40){
//     console.log("less than 50");
// }else{
//     console.log("temparature is greater than 50");
// }
// console.log("Execute");

// <, >, <=, >=, ==, !=, ===,

// const score = 200

// if(score > 100){
//     // const power = "fly"
//     // var power = "fly"
//     let power = "fly"
    
//     console.log(`User Power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");

// if (balance > 500){
//     console.log("less than");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 1200");
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmial = true

// if(userLoggedIn && debitCard && 2==3){
//     console.log("Allow to buy course");
// }

// if(loggedInFromGoogle || loggedInFromEmial){
//     console.log("user logged in");
// }
