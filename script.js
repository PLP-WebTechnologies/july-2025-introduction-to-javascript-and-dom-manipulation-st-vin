// =========================
// Part 1: JavaScript Basics
// =========================

// Variable declarations
let userName = "Beginner";
let userAge = 20;
let isStudent = true;

// Conditionals
if (isStudent) {
    console.log(userName + " is a student.");
} else {
    console.log(userName + " is not a student.");
}

// Output to the page
const outputDiv = document.getElementById("output");
outputDiv.textContent = `Welcome, ${userName}! Age: ${userAge}`;

// =========================
// Part 2: Functions
// =========================

// Function to calculate total
function calculateTotal(a, b) {
    // Adds two numbers and returns the result
    return a + b;
}

// Function to format a string
function formatGreeting(name) {
    // Returns a greeting message
    return `Hello, ${name}!`;
}

// Use the functions
let total = calculateTotal(5, 10);
console.log("Total:", total);
console.log(formatGreeting(userName));

// =========================
// Part 3: Loops
// =========================

// For loop example: List numbers
for (let i = 1; i <= 5; i++) {
    console.log("Number:", i);
}

// While loop example: Countdown
let countdown = 5;
while (countdown > 0) {
    console.log("Countdown:", countdown);
    countdown--;
}

// =========================
// Part 4: DOM Manipulation
// =========================

// 1. Change text on button click
const toggleBtn = document.getElementById("toggleBtn");
let showMessage = true;
toggleBtn.addEventListener("click", function() {
    if (showMessage) {
        outputDiv.textContent = "You toggled the message!";
    } else {
        outputDiv.textContent = `Welcome, ${userName}! Age: ${userAge}`;
    }
    showMessage = !showMessage;
});

// 2. Create a list dynamically
const list = document.getElementById("list");
const items = ["Apple", "Banana", "Cherry"];
items.forEach(function(item) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
});

// 3. Countdown on button click
const countdownBtn = document.getElementById("countdownBtn");
countdownBtn.addEventListener("click", function() {
    let count = 5;
    outputDiv.textContent = "Countdown: " + count;
    const interval = setInterval(function() {
        count--;
        outputDiv.textContent = "Countdown: " + count;
        if (count === 0) {
            clearInterval(interval);
            outputDiv.textContent = "Countdown finished!";
        }
    }, 1000);
});

// =========================
// End of Assignment
// =========================
