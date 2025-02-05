let score = "om"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNum = Number(score)

// console.log(typeof valueInNum);
// console.log(valueInNum);
//"33" => 33
//"33abc" => NaN (Not a Number)
//true => 1; false => 0

let isLoggedIn= "om"
let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// 1 => true; 0=> false
// "" => false
// "om" => true

let someNumber = 33

let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

/*---------------------Operation--------------------------------*/

let value= 3
let negVal=-value
// console.log(negVal)


// console.log(2+2)
// console.log(2*2)
// console.log(2-2)
// console.log(2/3)
// console.log(2**3)
// console.log(2%3)


let Str1="hello"
let Str2=" om"

let str3=Str1+Str2
console.log(str3)

// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+"2")
// console.log("1" + 2 +2)
// console.log(1 + 2 +"2")

// console.log((1 + 2)*5%3)

console.log(+true)
console.log(+"")

let num1, num2, num3

num1=num2=num3=2+2

let gameCounter=100
++gameCounter
console.log(gameCounter)
//link too study
//https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


let x = 3;

/*The `++` operator increments a number or BigInt. It first converts the operand to a numeric value and determines its type.  
- Postfix (x++): Returns the value before incrementing.  
    let x = 3;
    const y = x++;
    // x is 4; y is 3

    let x2 = 3n;
    const y2 = x2++;
    // x2 is 4n; y2 is 3n

- Prefix (++x): Returns the value after incrementing.  
    let x = 3;
    const y = ++x;
    // x is 4; y is 4

    let x2 = 3n;
    const y2 = ++x2;
    // x2 is 4n; y2 is 4n

- Rules:  
  - Only works on variables and object properties (valid assignment targets).  
  - Cannot chain multiple `++` operators together.*/

const y = ++x;

// const z = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"
