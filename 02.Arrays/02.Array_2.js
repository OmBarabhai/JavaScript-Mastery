
const marvel_heros =["thor", "Ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);



// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros= [...marvel_heros, ...dc_heros]

// console.log(all_new_heros)

const another_array =[1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]
 
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))


/* === 1. Destructuring Arrays ===
Explanation: Extract values from arrays into individual variables.
Interview Importance: Extremely common in modern JS codebases. Used for clean data extraction, handling function returns, and swapping variables. */
const [val1, val2] = [10, 20];
console.log(val1); // 10

// Skipping elements
const [,, thirdVal] = [1, 2, 3];
console.log(thirdVal); // 3

// Default values
const [a = 5, b] = [undefined, 10];
console.log(a); // 5 (default used)

// Variable swapping
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1


/* === 2. Rest/Spread Operators ===
Explanation: ... operator for gathering/spreading elements.
Interview Importance: Fundamental for array manipulation and function arguments. */
// Rest: Gather remaining elements
function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // 6

// Spread: Expand array elements
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2); // [1,2,3,4]

// Interview Tip: Often used in array cloning
const original = [1, 2, 3];
const copy = [...original];


/* === 3. Array.from() ===
Explanation: Creates array from array-like/iterable objects.
Interview Importance: Shows understanding of array-like structures. */
// From string
console.log(Array.from("hello")); // ['h','e','l','l','o']

// From Set
const set = new Set([1, 2, 2, 3]);
console.log(Array.from(set)); // [1,2,3]

// With map function
console.log(Array.from([1,2,3], x => x*2)); // [2,4,6]


/* === 4. Array.of() ===
Explanation: Creates array with variable arguments.
Interview Importance: Edge cases with single numeric element. */
console.log(Array.of(7)); // [7] (different from Array(7))
console.log(Array.of(1, 2, 3)); // [1,2,3]
console.log(Array(7)); // [empty × 7]


/* === 5. flat() ===
Explanation: Flattens nested arrays.
Interview Importance: Common in data transformation tasks. */
const nested = [1, [2, [3]]];
console.log(nested.flat()); // [1, 2, [3]]
console.log(nested.flat(2)); // [1, 2, 3]


/* === 6. flatMap() ===
Explanation: Map then flatten (depth 1).
Interview Importance: Efficient combination of operations. */
const nums = [1, 2, 3];
console.log(nums.flatMap(n => [n, n*2])); 
// [1,2,2,4,3,6]


/* === 7. fill() ===
Explanation: Fill array with static value.
Interview Importance: Useful for array initialization. */
const arr = new Array(3).fill(0);
console.log(arr); // [0,0,0]

// Modify existing array
const numsArr = [1,2,3,4];
numsArr.fill(0, 1, 3);
console.log(numsArr); // [1,0,0,4]


/* === 8. copyWithin() ===
Explanation: Copies array portion to another position.
Interview Importance: Demonstrates in-place modification. */
const arr3 = [1,2,3,4,5];
// Copy elements from index 3-4 to index 0
console.log(arr3.copyWithin(0, 3, 5)); // [4,5,3,4,5]


/* === 9. entries() ===
Explanation: Returns iterator with index-value pairs.
Interview Importance: Shows understanding of array iteration. */
const fruits = ['apple', 'banana'];
for (const [idx, fruit] of fruits.entries()) {
  console.log(idx, fruit);
}


/* === 10. keys() & values() ===
Explanation: Iterate array keys/values.
Interview Importance: Understanding of iterators. */
// Keys
for (const key of ['a','b'].keys()) {
  console.log(key); // 0, 1
}

// Values (similar to array iterator)
for (const value of ['a','b'].values()) {
  console.log(value); // 'a', 'b'
}


/* === Bonus: Array Methods Chaining ===
Interview Importance: Common pattern in functional programming. */
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(n => n % 2 === 0) // [2,4]
  .map(n => n * 2) // [4,8]
  .reduce((acc, n) => acc + n, 0); // 12

console.log(result);


/* === Important Interview Gotchas ===
1. Array methods creating new arrays vs modifying in-place
   - map(), filter() create new arrays
   - sort(), reverse(), fill() modify in-place

2. Handling sparse arrays
   const arr = [1,,3];
   console.log(arr[1]); // undefined

3. Understanding array length property
   const arr = [];
   arr[5] = 1;
   console.log(arr.length); // 6
*/