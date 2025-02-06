// ✅ Numbers in JavaScript

// Creating numbers
const score = 400;
console.log(score); // Output: 400

const balance = new Number(100); // Creating Number object
console.log(balance); // Output: [Number: 100]

// Converting number to string and finding its length
console.log(balance.toString().length); // Output: 3

// Formatting number to fixed decimal places (useful for prices, currency, etc.)
console.log(balance.toFixed(2)); // Output: "100.00"

const otherNum = 123.8948;
// Formatting number with precision (rounds intelligently)
console.log(otherNum.toPrecision(4)); // Output: "123.9"

const hundred = 1000000;
// Formatting number with comma separator based on locale
console.log(hundred.toLocaleString("en-IN")); // Output: "10,00,000"

// __________________________________________________________________________________________________________________________________________________

//✅ Math Operations in JavaScript

// Math object (contains common mathematical functions)
console.log(Math); // Output: Object with many math methods

// Absolute value (converts negative to positive)
console.log(Math.abs(-4)); // Output: 4

// Rounding a number (normal rounding)
console.log(Math.round(4.8)); // Output: 5

// Ceiling (rounds up)
console.log(Math.ceil(4.2)); // Output: 5

// Floor (rounds down)
console.log(Math.floor(4.9)); // Output: 4

// Minimum value from a set of numbers
console.log(Math.min(4, 9, 5, 8, 2)); // Output: 2

// Maximum value from a set of numbers
console.log(Math.max(4, 9, 5, 8, 2)); // Output: 9

//__________________________________________________________________________________________________________________________________________________

// ✅ Random Numbers (Important for Games, Security, OTPs, etc.)

// Math.random() generates a random number between 0 and 1
console.log(Math.random()); // Example Output: 0.3743 (varies)

// Getting a random number between 1 and 10
console.log(Math.random() * 10 + 1); // Example Output: 7.85

// Getting a whole random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Example Output: 8

const min = 10;
const max = 20;

// Generating a random number between min and max (inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: Random number between 10 and 20

//__________________________________________________________________________________________________________________________________________________

// ✅ More Advanced Number & Math Concepts for Interviews

// Exponentiation (Power of numbers)
console.log(Math.pow(2, 3)); // Output: 8 (2^3)

// Square root
console.log(Math.sqrt(25)); // Output: 5

// Cube root
console.log(Math.cbrt(27)); // Output: 3

// Logarithms (used in data science, machine learning)
console.log(Math.log(10)); // Output: Natural log of 10

// Trigonometric Functions (used in graphics, physics, AI)
console.log(Math.sin(Math.PI / 2)); // Output: 1
console.log(Math.cos(0)); // Output: 1
console.log(Math.tan(Math.PI / 4)); // Output: ~1

// Converting String to Number
console.log(Number("123")); // Output: 123
console.log(parseInt("123.45")); // Output: 123
console.log(parseFloat("123.45")); // Output: 123.45

// Checking if a value is NaN (Not a Number)
console.log(isNaN("hello")); // Output: true
console.log(isNaN(123)); // Output: false

// Checking if a number is finite
console.log(isFinite(100)); // Output: true
console.log(isFinite(Infinity)); // Output: false

/*
 🔥  JavaScript Numbers & Math - Key Interview Topics   

  ✅  1. Number Formatting 
- `toFixed(n)`: Fixes decimal places (useful for currency, prices).  
- `toPrecision(n)`: Formats number to n significant digits.  
- `toLocaleString()`: Formats number with regional separators.  

  ✅  2. Math Object & Basic Functions 
- `Math.abs(x)`: Absolute value.  
- `Math.round(x)`: Normal rounding.  
- `Math.ceil(x)`: Rounds up.  
- `Math.floor(x)`: Rounds down.  
- `Math.min(a, b, ...)` / `Math.max(a, b, ...)`: Find smallest/largest value.  

  ✅  3. Generating Random Numbers   
- `Math.random()`: Returns a random number between `0-1`.  
- `Math.floor(Math.random() * range) + min`: Random number in a range.  

  ✅  4. Exponents & Roots 
- `Math.pow(a, b)`: a raised to power b.  
- `Math.sqrt(x)`: Square root.  
- `Math.cbrt(x)`: Cube root.  

  ✅  5. String to Number Conversion   
- `Number("123")`: Converts string to number.  
- `parseInt("123.45")`: Converts to integer.  
- `parseFloat("123.45")`: Converts to float.  

✅  6. Checking Valid Numbers   
- `isNaN(value)`: Checks if value is NaN.  
- `isFinite(value)`: Checks if value is a finite number.  

✅  7. Logarithms & Trigonometry   
- `Math.log(x)`: Natural logarithm.  
- `Math.sin(x)`, `Math.cos(x)`, `Math.tan(x)`: Trigonometry functions.  

*/
