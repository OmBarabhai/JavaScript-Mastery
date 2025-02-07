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
