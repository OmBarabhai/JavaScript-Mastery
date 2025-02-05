const name = "Om" 
const repoCount = 50

// String concatenation using '+' (not recommended, use template literals instead)
console.log(name + repoCount + " Value");

// Template literals (recommended way to embed variables in strings)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hello-world') // Creating a string object

// Accessing character at index
console.log(gameName[0]); 

// Checking string prototype (contains methods like toUpperCase, slice, etc.)
console.log(gameName.__proto__);

// Getting length of string
console.log(gameName.length);

// Converting to uppercase
console.log(gameName.toUpperCase());

// Getting character at specific index
console.log(gameName.charAt(2));

// Finding index of first occurrence of a character
console.log(gameName.indexOf('o'));

// Extracting substring (excluding end index)
const newString = gameName.substring(0, 4) 
console.log(newString);

// Extracting substring with negative indexing allowed (slice supports negatives, substring does not)
const anotherString = gameName.slice(-8, 4) 
console.log(anotherString);

const newStringOne="  om  " // String with extra spaces
console.log(newStringOne);

// Removing leading & trailing spaces
console.log(newStringOne.trim()); 

const url = "https://hitesh.com/hitesh%20choudhary"

// Replacing '%20' (URL encoded space) with '-'
console.log(url.replace('%20', '-')) // Output: "https://hitesh.com/hitesh-choudhary"

// Checking if the string contains 'sundar' (returns true or false)
console.log(url.includes('sundar')) // Output: false (because 'sundar' is not in the URL)

// Uncomment the next line to check for 'hitesh' (it would return true)
// console.log(url.includes('hitesh')) // Output: true

console.log(gameName.split('-'));
/*
Concepts Used:
replace(oldValue, newValue) → Replaces the first occurrence of oldValue with newValue in the string.
includes(substring) → Checks if the given substring exists in the string (returns true or false).
*/

/*
🔥 Most Popular String Concepts for Interviews in One-Line:

-String Concatenation (+ vs. Template Literals `${}`)
-String Methods (length, toUpperCase(), toLowerCase(), trim(), slice(), substring())
-Character Access (charAt(), [] notation)
-Finding Index (indexOf(), lastIndexOf())
-Splitting Strings (split())
-Replacing Text (replace(), replaceAll())
-Checking Substrings (includes(), startsWith(), endsWith())
-Trimming & Padding (trim(), padStart(), padEnd())
-Converting to Array (split())
-String Comparison (localeCompare())

*/

/*Here's your code with explanations in comments, plus additional **popular string concepts** for interviews:  

```javascript
const url = "https://hitesh.com/hitesh%20choudhary"

// Replacing part of a string (commonly used for formatting URLs, cleaning data)
console.log(url.replace('%20', '-'))

// Checking if a substring exists inside a string (returns true/false)
console.log(url.includes('hitesh')) 
console.log(url.includes('sundar')) // false since 'sundar' is not in url

const gameName = "hello-world"

// Splitting string into an array based on a delimiter ('-' here)
console.log(gameName.split('-')); // Output: ['hello', 'world']
```

---

### 🔥 **More Popular String Concepts for Interviews**
1. **String Reversal**  
 javascript
   const str = "hello";
   console.log(str.split('').reverse().join('')); // Output: "olleh"
 
2. **Checking Palindrome**  
 javascript
   const isPalindrome = (str) => str === str.split('').reverse().join('');
   console.log(isPalindrome("madam")); // true
   console.log(isPalindrome("hello")); // false
 
3. **Counting Characters in a String**  
 javascript
   function countCharacters(str) {
       let count = {};
       for (let char of str) {
           count[char] = (count[char] || 0) + 1;
       }
       return count;
   }
   console.log(countCharacters("hello")); 
   // Output: { h: 1, e: 1, l: 2, o: 1 }
 
4. **Removing Duplicates in a String**  
 javascript
   const removeDuplicates = (str) => [...new Set(str)].join('');
   console.log(removeDuplicates("hello")); // Output: "helo"
 
5. **Extracting Domain from URL**  
 javascript
   const url = "https://hitesh.com/hitesh-choudhary";

   console.log(new URL(url).hostname); // Output: "hitesh.com"
 
6. **Replacing All Occurrences of a Substring**  
 javascript
   const sentence = "apple orange apple";
   console.log(sentence.replaceAll("apple", "banana")); // Output: "banana orange banana"
 
7. **String Padding (useful for formatting)**  
 javascript
   const num = "5";
   console.log(num.padStart(3, '0')); // Output: "005"
   console.log(num.padEnd(3, '0'));   // Output: "500"
 
8. **Repeat a String**  
 javascript
   console.log("hi ".repeat(3)); // Output: "hi hi hi "

### **Most Important String Topics for Interviews:**
✅ String manipulation (replace, split, join, trim, substring, slice)  
✅ Searching in strings (indexOf, lastIndexOf, includes, startsWith, endsWith)  
✅ Regular Expressions (match, replace, test)  
✅ Reversing a string / Checking palindrome  
✅ Counting characters / Removing duplicates  
✅ URL manipulation (`new URL()`, `replace`, `encodeURIComponent()`)  
✅ Formatting strings (padStart, padEnd, repeat)  
*/