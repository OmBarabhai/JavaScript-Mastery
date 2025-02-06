// ✅ 1️⃣ Creating a Date Object (Different Ways)
let currentDate = new Date(); // ✅ Current Date & Time
console.log(currentDate);

let specificDate1 = new Date(2025, 0, 5); // ✅ (YYYY, MM (0-based), DD)
console.log(specificDate1); // ✅ Jan 5, 2025

let specificDate2 = new Date("2025-02-05"); // ✅ String Format (YYYY-MM-DD)
console.log(specificDate2); 

let specificDate3 = new Date("02-05-2025"); // ✅ MM-DD-YYYY
console.log(specificDate3);

// ✅ 2️⃣ Date Formats (Different Ways to Display Date)
console.log(currentDate.toDateString()); // ✅ "Wed Feb 05 2025"
console.log(currentDate.toISOString());  // ✅ "2025-02-05T12:00:00.000Z"
console.log(currentDate.toJSON());       // ✅ "2025-02-05T12:00:00.000Z"
console.log(currentDate.toLocaleDateString()); // ✅ Local Date "2/5/2025"
console.log(currentDate.toLocaleString()); // ✅ "2/5/2025, 12:00:00 PM"
console.log(currentDate.toLocaleTimeString()); // ✅ Local Time
console.log(currentDate.toUTCString());  // ✅ UTC Format

// ✅ 3️⃣ Get & Set Date Components (Extracting Specific Parts)
console.log(currentDate.getFullYear()); // ✅ 2025
console.log(currentDate.getMonth() + 1); // ✅ 1 (Months are 0-based, so +1)
console.log(currentDate.getDate()); // ✅ 5 (Day of Month)
console.log(currentDate.getDay());  // ✅ 3 (0=Sunday, 1=Monday, etc.)

// ✅ 4️⃣ Get & Set Time Components (Extracting Specific Parts)
console.log(currentDate.getHours()); // ✅ Current Hour (0-23)
console.log(currentDate.getMinutes()); // ✅ Current Minute (0-59)
console.log(currentDate.getSeconds()); // ✅ Current Second (0-59)
console.log(currentDate.getMilliseconds()); // ✅ Milliseconds (0-999)

// ✅ 5️⃣ Timestamp (Milliseconds from Jan 1, 1970)
console.log(Date.now()); // ✅ Get current timestamp in ms
console.log(Math.floor(Date.now() / 1000)); // ✅ Convert to seconds

// ✅ 6️⃣ Comparing Dates (Checking if Two Dates are Equal)
let date1 = new Date("2025-02-05");
let date2 = new Date("2025-02-05");

console.log(date1 === date2); // ❌ false (Dates are objects, reference comparison)
console.log(date1.getTime() === date2.getTime()); // ✅ true (Compare timestamps)

// ✅ 7️⃣ Date Math (Adding & Subtracting Days)
let futureDate = new Date();
futureDate.setDate(futureDate.getDate() + 10); // ✅ Adds 10 days
console.log(futureDate);

let pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 5); // ✅ Subtracts 5 days
console.log(pastDate);

// ✅ 8️⃣ Formatting Dates Using `toLocaleString`
let formattedDate = new Date().toLocaleString("en-US", {
    weekday: "long",  // ✅ "Wednesday"
    year: "numeric",  // ✅ "2025"
    month: "long",    // ✅ "February"
    day: "numeric"    // ✅ "5"
});
console.log(formattedDate);

// ✅ 9️⃣ Working with Time Zones
console.log(new Date().toLocaleString("en-US", { timeZone: "America/New_York" })); // ✅ Time in New York
console.log(new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })); // ✅ Time in India (IST)

// ✅ 🔟 Measuring Execution Time
let start = Date.now();
// Some Code Execution...
for (let i = 0; i < 1000000; i++) {}
let end = Date.now();
console.log(`Execution Time: ${end - start} ms`); // ✅ Execution Time in ms

/*
📌JavaScript Date & Time Interview Concepts

1️⃣ Creating Date Objects - new Date(), new Date("YYYY-MM-DD"), new Date(YYYY, MM, DD)
2️⃣ Formatting Dates - toDateString(), toISOString(), toLocaleDateString()
3️⃣ Getting Date Components - getFullYear(), getMonth(), getDate(), getDay()
4️⃣ Getting Time Components - getHours(), getMinutes(), getSeconds(), getMilliseconds()
5️⃣ Timestamps - Date.now() gives milliseconds since 1970
6️⃣ Comparing Dates - Convert to getTime() before comparing
7️⃣ Date Math - setDate(getDate() + X) to add/subtract days
8️⃣ Formatting Dates with toLocaleString() - Use different options for customization
9️⃣ Time Zones - toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
🔟 Measuring Execution Time - Date.now() before and after execution

*/