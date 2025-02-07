// 🚀 **JavaScript Objects - Interview Short Notes (Part 2)** 🚀

// **1️⃣ Creating an Empty Object**
// Objects in JavaScript can be created in two ways:
const tinderUser = new Object(); // ✅ Singleton object (Not commonly used)
const tinderUser2 = {}; // ✅ Regular object (Preferred, lightweight)

// **2️⃣ Adding Properties to an Object**
// Properties (key-value pairs) can be added dynamically:
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// 🔹 **Checking Object Properties**
// Useful for debugging and retrieving data
console.log(Object.keys(tinderUser)); // 🟢 Returns array of keys ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser)); // 🟢 Returns array of values ['123abc', 'Sammy', false]
console.log(Object.entries(tinderUser)); // 🟢 Returns key-value pairs [['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false]]
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // 🟢 true (Checks if key exists in object)

// **3️⃣ Nested Objects (Important for Interviews)**
// Objects can contain other objects inside them:
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Om",
            lastname: "Barabhai"
        }
    }
};

// ✅ Accessing Nested Properties
console.log(regularUser.fullname.userfullname.firstname); // 🟢 Om

// **4️⃣ Merging Multiple Objects (Frequently Asked)**
const Obj1 = {1: "a", 2: "b"};
const Obj2 = {3: "a", 4: "b"};
const Obj4 = {5: "a", 6: "b"};

// ✅ Using Object.assign() (Older Method, less preferred)
const Obj3 = Object.assign({}, Obj1, Obj2, Obj4);

// ✅ Using Spread Operator (Modern & Preferred)
const Obj3_spread = { ...Obj1, ...Obj2, ...Obj4 };
console.log(Obj3_spread); // 🟢 Merges all objects into one

// **5️⃣ Array of Objects (Common in API Data Handling)**
// Often used when working with APIs or databases
const users = [
    { id: 1, email: "h@gmail" },
    { id: 2, email: "user2@gmail" },
    { id: 3, email: "user3@gmail" }
];

// ✅ Accessing Object Inside an Array
console.log(users[1].email); // 🟢 user2@gmail

// **6️⃣ Optional Chaining (?.) - Prevents Errors**
// This prevents errors when trying to access undefined properties
console.log(regularUser?.fullname?.userfullname?.firstname); // 🟢 Om
console.log(regularUser?.address?.city); // 🟢 Undefined (No error, safe check)

// 🎯 **This covers JavaScript Objects (Part 2) for Interviews!** 🎯
// 🚀 Revise these and practice for better understanding! 🚀
/*
Here’s a **quick revision short note** for your interview preparation on **JavaScript Objects (Part 2):**  

### 🚀 **JavaScript Objects - Quick Revision for Interviews** 🚀  

✅ **Creating Objects:**  
- `const obj = new Object();` // **Singleton Object** (Rarely used)  
- `const obj = {};` // **Regular Object** (Preferred)  

✅ **Adding & Accessing Properties:**  
- `obj.name = "John";` → Adds a new property  
- `console.log(obj.name);` → Access property  
- `console.log(obj["name"]);` → Alternative way  

✅ **Checking Properties:**  
- `Object.keys(obj)` → Returns all keys (Array)  
- `Object.values(obj)` → Returns all values (Array)  
- `Object.entries(obj)` → Returns key-value pairs (Array)  
- `obj.hasOwnProperty("name")` → Checks if key exists  

✅ **Nested Objects:**  
- Access deep properties → `obj.parent.child.subChild`  
- Use **Optional Chaining (?.)** to avoid errors → `obj?.parent?.child?.subChild`  

✅ **Merging Objects:**  
- `Object.assign({}, obj1, obj2)` // **Old method**  
- `{ ...obj1, ...obj2 }` // **Spread operator (Preferred)**  

✅ **Array of Objects (Important for APIs):**  
- `const users = [{id: 1, email: "a@gmail.com"}, {id: 2, email: "b@gmail.com"}]`  
- `console.log(users[0].email);` // Accessing inside array  

✅ **Preventing Errors (Optional Chaining `?.`)**  
- `console.log(obj?.property?.nestedProperty);` // Returns `undefined` if not found  

This **covers all key concepts** you need to **revise quickly before an interview**! 🚀🔥 Let me know if you need any modifications! 🎯
*/


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 🚀 **JavaScript Objects - Interview Short Notes (Part 3)** 🚀

// **1️⃣ Object Destructuring (Important for Interviews)**
// Destructuring allows extracting properties from an object easily

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
};

// ✅ Old way (Accessing properties manually)
// console.log(course.courseInstructor); // 🟢 "Hitesh"

// ✅ Modern way (Destructuring)
const { courseInstructor: instructor } = course;
console.log(instructor); // 🟢 "Hitesh"
// (Renamed 'courseInstructor' to 'instructor' for easier use)

// **2️⃣ JSON Structure (Common in APIs)**
// JSON (JavaScript Object Notation) is used for data exchange in APIs

const jsonData = {
    "name": "Om",
    "coursename": "JS in Hindi",
    "price": "Free"
};

// ✅ Accessing JSON Data
console.log(jsonData.name); // 🟢 "Om"

// **3️⃣ Array of Objects (Very Common in Real-World Apps)**
// Often used in APIs, Databases, and Complex Data Handling

const courses = [
    {
        coursename: "JavaScript Basics",
        price: "Free",
        instructor: "Hitesh"
    },
    {
        coursename: "React Advanced",
        price: "1999",
        instructor: "Chai Aur Code"
    },
    {
        coursename: "Node.js Mastery",
        price: "2999",
        instructor: "Hitesh"
    }
];

// ✅ Accessing Objects in an Array
console.log(courses[1].coursename); // 🟢 "React Advanced"
console.log(courses[2].price); // 🟢 "2999"

// 🎯 **Key Takeaways:**
// 🔹 Object Destructuring simplifies accessing properties.
// 🔹 JSON is the standard data format in APIs.
// 🔹 Arrays of Objects are widely used in real-world applications.

