// 🚀 **JavaScript Objects - Interview Short Notes** 🚀

// **1️⃣ Singleton Pattern** (Creates a single instance of an object)
const singleton = Object.create(null); // Alternative way to create objects

// **2️⃣ Object Literals (Most common way to create objects)**
const mySym = Symbol("key1"); // Symbol as a unique key

const jsUser = {
    name: "Om", 
    "full name": "Om Barabhai", // Space in key requires quotes
    [mySym]: "mykey1", // Symbol key, accessed via jsUser[mySym]
    age: 21,
    location: "Amaravti",
    email: "Om@google",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// **3️⃣ Accessing Object Properties**
console.log(jsUser.email);  // ✅ Dot notation (Most used)
console.log(jsUser["email"]);  // ✅ Bracket notation (Needed for special keys)
console.log(jsUser["full name"]);  // ✅ Required for space-containing keys
console.log(jsUser[mySym]);  // ✅ Accessing symbol key

// **4️⃣ Modifying Object Properties**
jsUser.email = "hitesh@chatgpt.com"; // ✅ Updating existing property

// **5️⃣ Preventing Object Modification**
Object.freeze(jsUser); // ❄️ Freezes object (No changes allowed)
jsUser.email = "hitesh@microsoft.com"; // ❌ Won't change due to freeze()

// **6️⃣ Adding Methods to Objects**
jsUser.greeting = function() {
    console.log("Hello JS User");
};
jsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`); // 'this' refers to jsUser
};

console.log(jsUser.greeting()); // 🟢 Output: Hello JS User
console.log(jsUser.greetingTwo()); // 🟢 Output: Hello JS User, Om

// ✅ **Interview Essential Topics** ✅

// **7️⃣ Object.keys(), Object.values(), Object.entries()** (Frequently asked)
console.log(Object.keys(jsUser)); // 🟢 Array of keys
console.log(Object.values(jsUser)); // 🟢 Array of values
console.log(Object.entries(jsUser)); // 🟢 Array of key-value pairs

// **8️⃣ Checking if a property exists**
console.log(jsUser.hasOwnProperty("email")); // 🟢 true
console.log(jsUser.hasOwnProperty("password")); // 🔴 false

// **9️⃣ Object Destructuring** (Short & clean way to extract values)
const { name, age } = jsUser;
console.log(name, age); // 🟢 Om 21

// **🔟 Spread Operator in Objects** (Modern JS feature)
const newUser = { ...jsUser, country: "India" };
console.log(newUser);

// 🎯 **This covers all basics for JavaScript Objects in Interviews!** 🎯
// 🚀 Keep practicing & revise before interviews! 🚀

/*
🔥 Additional Important Topics (In Simple Code Format)
1️⃣ Object.assign() (Copying Objects)

const user1 = { name: "Om", age: 21 };
const user2 = { location: "Amaravti" };

const mergedUser = Object.assign({}, user1, user2);
console.log(mergedUser); // 🟢 { name: 'Om', age: 21, location: 'Amaravti' }
2️⃣ Object.entries() with Loop (Common in real-world projects)

for (let [key, value] of Object.entries(jsUser)) {
    console.log(`${key}: ${value}`);
}
3️⃣ Optional Chaining (?.) - Modern Feature

console.log(jsUser?.address?.city); // 🟢 Undefined (No error if property is missing)

*/