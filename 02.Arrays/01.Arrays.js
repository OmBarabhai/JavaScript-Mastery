// Basic Array Declaration
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

// Accessing Array Elements
console.log(myArr[1]); // Output: 1

// Array Methods

// 1. push() - Adds one or more elements to the end of an array
myArr.push(6);
myArr.push(7);
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6, 7]

// 2. pop() - Removes the last element from an array
myArr.pop();
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6]

// 3. unshift() - Adds one or more elements to the beginning of an array
myArr.unshift(9);
console.log(myArr); // Output: [9, 0, 1, 2, 3, 4, 5, 6]

// 4. shift() - Removes the first element from an array
myArr.shift();
console.log(myArr); // Output: [0, 1, 2, 3, 4, 5, 6]

// 5. includes() - Checks if an array includes a certain element
console.log(myArr.includes(9)); // Output: false

// 6. indexOf() - Returns the first index at which a given element can be found
console.log(myArr.indexOf(3)); // Output: 3

// 7. join() - Joins all elements of an array into a string
const newArr = myArr.join();
console.log(newArr); // Output: "0,1,2,3,4,5,6"
console.log(typeof newArr); // Output: string

// 8. slice() - Returns a shallow copy of a portion of an array
console.log("A ", myArr); // Output: A  [0, 1, 2, 3, 4, 5, 6]
const myn1 = myArr.slice(1, 3);
console.log(myn1); // Output: [1, 2]
console.log("B ", myArr); // Output: B  [0, 1, 2, 3, 4, 5, 6]

// 9. splice() - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr); // Output: C  [0, 4, 5, 6]
console.log(myn2); // Output: [1, 2, 3]
// ------------------------------------------------------------
// 10. concat() - Merges two or more arrays
const myArr3 = myArr.concat(myArr2);
console.log(myArr3); // Output: [0, 4, 5, 6, 1, 2, 3, 4]

// 11. filter() - Creates a new array with all elements that pass the test implemented by the provided function
const filteredArr = myArr3.filter(num => num > 3);
console.log(filteredArr); // Output: [4, 5, 6, 4]

// 12. map() - Creates a new array populated with the results of calling a provided function on every element in the calling array
const mappedArr = myArr3.map(num => num * 2);
console.log(mappedArr); // Output: [0, 8, 10, 12, 2, 4, 6, 8]

// 13. reduce() - Executes a reducer function on each element of the array, resulting in a single output value
const reducedVal = myArr3.reduce((acc, num) => acc + num, 0);
console.log(reducedVal); // Output: 25

// 14. forEach() - Executes a provided function once for each array element
myArr3.forEach(num => console.log(num)); // Output: 0, 4, 5, 6, 1, 2, 3, 4

// 15. some() - Tests whether at least one element in the array passes the test implemented by the provided function
const hasEven = myArr3.some(num => num % 2 === 0);
console.log(hasEven); // Output: true

// 16. every() - Tests whether all elements in the array pass the test implemented by the provided function
const allEven = myArr3.every(num => num % 2 === 0);
console.log(allEven); // Output: false

// 17. find() - Returns the first element in the array that satisfies the provided testing function
const firstEven = myArr3.find(num => num % 2 === 0);
console.log(firstEven); // Output: 0

// 18. findIndex() - Returns the index of the first element in the array that satisfies the provided testing function
const firstEvenIndex = myArr3.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // Output: 0

// 19. sort() - Sorts the elements of an array in place and returns the sorted array
const sortedArr = myArr3.sort((a, b) => a - b);
console.log(sortedArr); // Output: [0, 1, 2, 3, 4, 4, 5, 6]

// 20. reverse() - Reverses the order of the elements in an array in place
const reversedArr = myArr3.reverse();
console.log(reversedArr); // Output: [6, 5, 4, 4, 3, 2, 1, 0]

// --------------------------------------------------------------------------------------------------------

// 21. Spread Operator - Expands an array into individual elements
const numArray = [1, 2, 3];
const newNumArray = [...numArray, 4, 5, 6];
console.log(newNumArray); // Output: [1, 2, 3, 4, 5, 6]

// 22. Rest Parameter - Collects multiple elements into an array in function arguments
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// 23. Deep vs. Shallow Copy
const originalArray = [1, 2, { a: 10 }];
const shallowCopy = originalArray.slice();
shallowCopy[2].a = 99;
console.log(originalArray[2].a); // Output: 99 (Shallow copy issue)

// 24. flat() - Flattens a nested array
const nestedArray = [1, [2, [3, [4]]]];
console.log(nestedArray.flat(2)); // Output: [1, 2, 3, [4]]

// 25. flatMap() - Combines map() and flat()
const nums = [1, 2, 3];
console.log(nums.flatMap(num => [num, num * 2])); // Output: [1, 2, 2, 4, 3, 6]

// 26. Array.from() - Converts an array-like object to an array
console.log(Array.from("Hello")); // Output: ['H', 'e', 'l', 'l', 'o']

// 27. Array.of() - Creates an array from given arguments
console.log(Array.of(1, 2, 3)); // Output: [1, 2, 3]

// 28. Set() - Removes duplicate values
const uniqueArray = [...new Set([1, 2, 2, 3, 4, 4])];
console.log(uniqueArray); // Output: [1, 2, 3, 4]

// 29. Array Destructuring - Extracting values from an array
const [first, second, ...rest] = [10, 20, 30, 40];
console.log(first, second, rest); // Output: 10 20 [30, 40]

// 30. Typed Arrays - Handling binary data
const typedArray = new Uint8Array([10, 20, 30]);
console.log(typedArray); // Output: Uint8Array(3) [10, 20, 30]

/*
Explanation of Key Concepts:

1. push() / pop() : These methods are used to add/remove elements from the end of an array.
2. unshift() / shift() : These methods are used to add/remove elements from the beginning of an array.
3. includes() : Checks if an array contains a specific element.
4. indexOf() : Finds the index of a specific element in the array.
5. join() : Converts an array into a string with elements separated by commas.
6. slice() : Returns a shallow copy of a portion of an array without modifying the original array.
7. splice() : Modifies the original array by removing or replacing elements and/or adding new elements.
8. concat() : Merges two or more arrays into a new array.
9. filter() : Creates a new array with elements that pass a certain condition.
10. map() : Creates a new array by applying a function to each element of the original array.
11. reduce() : Reduces the array to a single value by applying a function to each element.
12. forEach() : Executes a function for each element in the array.
13. some() : Checks if at least one element in the array passes a condition.
14. every() : Checks if all elements in the array pass a condition.
15. find() : Returns the first element that satisfies a condition.
16. findIndex() : Returns the index of the first element that satisfies a condition.
17. sort() : Sorts the elements of an array in place.
18. reverse() : Reverses the order of elements in an array.
// -------------------------------------------------------------------------------------------------------
Your list covers *most of the essential array concepts* for JavaScript interviews, but a few *important topics* are missing. Below are additional *must-know array concepts* that will help you crack any interview round:

---

*🚀 Additional Important Array Topics for Interviews:*
1. *Spread Operator (`...`)*  
   - Expands an array into individual elements, useful for copying and merging arrays.  
  
   const arr1 = [1, 2, 3];
   const arr2 = [...arr1, 4, 5]; // Creates a new array with arr1 elements + 4, 5
   console.log(arr2); // Output: [1, 2, 3, 4, 5]
  

2. *Rest Parameter (`...`)*  
   - Collects multiple function arguments into an array.  
 
   function sum(...numbers) {
       return numbers.reduce((acc, num) => acc + num, 0);
   }
   console.log(sum(1, 2, 3, 4)); // Output: 10
  

3. *Flat() (Flattening Nested Arrays)*  
   - Flattens a multi-dimensional array into a single array.  

   const nestedArr = [1, [2, 3], [4, [5, 6]]];
   console.log(nestedArr.flat(2)); // Output: [1, 2, 3, 4, 5, 6]
  

4. *FlatMap() (Combination of `map()` + `flat()`)*  
   - Maps each element using a function and flattens the result.  

   const arr = [1, 2, 3];
   console.log(arr.flatMap(num => [num, num * 2])); 
   // Output: [1, 2, 2, 4, 3, 6]
  

5. *Fill() (Fills an array with a static value)*  
 
   const arr = new Array(5).fill(0);
   console.log(arr); // Output: [0, 0, 0, 0, 0]
  

6. *Set (Unique Elements in Arrays)*  
   - Removes duplicate values from an array.  

   const arr = [1, 2, 2, 3, 4, 4];
   console.log([...new Set(arr)]); // Output: [1, 2, 3, 4]
  

7. *from() (Convert Iterables to Arrays)*  
   - Converts a string, NodeList, or Set into an array.  
 
   console.log(Array.from("hello")); // Output: ['h', 'e', 'l', 'l', 'o']
  

8. *isArray() (Check if a variable is an array)*  

   console.log(Array.isArray([1, 2, 3])); // Output: true
   console.log(Array.isArray("hello"));  // Output: false
  

9. *Sorting Edge Cases (Sorting Strings & Numbers)*  
   - The default `sort()` method *does not work correctly* for numbers.  

   const numbers = [5, 1, 10, 2];
   console.log(numbers.sort()); // Wrong Output: [1, 10, 2, 5]
   console.log(numbers.sort((a, b) => a - b)); // Correct Output: [1, 2, 5, 10]
  

10. *Array Destructuring (Extracting Values from Arrays)*  

   const [a, b, ...rest] = [10, 20, 30, 40, 50];
   console.log(a, b, rest); // Output: 10 20 [30, 40, 50]
  

---

*📌Final List of Important Interview Topics on Arrays*

✅ *Basic Methods:* `push()`, `pop()`, `shift()`, `unshift()`, `includes()`, `indexOf()`, `join()`  
✅ *Extracting & Modifying:* `slice()`, `splice()`  
✅ *Merging & Flattening:* `concat()`, `flat()`, `flatMap()`  
✅ *Transforming & Filtering:* `map()`, `filter()`, `reduce()`  
✅ *Looping & Iterating:* `forEach()`, `some()`, `every()`  
✅ *Finding Elements:* `find()`, `findIndex()`  
✅ *Sorting & Reversing:* `sort()`, `reverse()`, `fill()`  
✅ *Other Essentials:* `isArray()`, `from()`, `Set (Unique Values)`, `Spread Operator (...)`, `Rest Parameter (...)`, `Destructuring`

---

*🛠 Why These Topics?*
These topics *cover all possible interview questions* on JavaScript arrays, including *basic operations, performance optimizations, and real-world scenarios*. Mastering these concepts will *help you crack any JavaScript coding interview*. 🚀  

These concepts are fundamental and frequently asked in JavaScript interviews. Understanding and practicing these methods will help you crack any interview round related to arrays in JavaScript.
*/ 