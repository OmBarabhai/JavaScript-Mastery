// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// //True
// console.log("2">1)
// console.log("02">1)

// //False
// console.log("2"<1)
// console.log("02"<1)

/*
javascript
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

Explanation (in simple terms):  
1. `null > 0` → **false** (null is treated as 0, and 0 is not greater than 0)  
2. `null == 0` → **false** (null is only equal to undefined, not 0)  
3. `null >= 0` → **true** (null is treated as 0, and 0 is equal to 0)  
*/

/*
javascript
console.log("2" === 2);  // false

Summary:  
`===` (strict equality) checks both *value* and *type*.  
- "2" is a *string*, and `2` is a *number*, so they are *not* strictly equal.  
- The result is *false*.
*/

/*
javascript
console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false

Explanation:
1. `undefined == 0` → `false`
   - `undefined` is only equal to `null` in loose equality (`==`).  
   - It is **not** equal to `0`.

2.`undefined > 0` → `false`
   - Comparisons (`>`, `<`, `>=`, `<=`) convert `undefined` to `NaN` (Not-a-Number).  
   - Any comparison with `NaN` results in `false`.

3. `undefined < 0` → `false`  
   - Again, `undefined` becomes `NaN`, and `NaN < 0` is `false`.
*/


