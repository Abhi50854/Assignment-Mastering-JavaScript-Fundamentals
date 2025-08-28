// ==============================
// 🎯 Part 1: JavaScript Basics
// ==============================
let userName = "Alex";  // variable
let userAge = 20;       // number

// Conditional check
if (userAge >= 18) {
    document.getElementById("part1").innerText = userName + " is an adult.";
} else {
    document.getElementById("part1").innerText = userName + " is a minor.";
}

// ==============================
// ❤️ Part 2: Functions
// ==============================

// Function 1: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function 2: Format a greeting
function greet(name) {
    return "Hello, " + name + "!";
}

// Show results in HTML
document.getElementById("part2").innerHTML = `
<p>Sum of 5 + 3 = ${addNumbers(5, 3)}</p>
<p>${greet("Alex")}</p>
`;

// ==============================
// 🔁 Part 3: Loops
// ==============================

// For loop: Count from 1 to 5
let numbers = "";
for (let i = 1; i <= 5; i++) {
    numbers += i + " ";
}

// While loop: Countdown from 5
let countdown = "";
let j = 5;
while (j > 0) {
    countdown += j + " ";
    j--;
}

document.getElementById("part3").innerHTML = `
<p>Counting up: ${numbers}</p>
<p>Countdown: ${countdown}</p>
`;

// ==============================
// 🌐 Part 4: DOM Manipulation
// ==============================
let changeBtn = document.getElementById("changeBtn");
let toggleBtn = document.getElementById("toggleBtn");
let text = document.getElementById("text");

// Event 1: Change text when button is clicked
changeBtn.addEventListener("click", function() {
    text.innerText = "The text has been changed!";
});

// Event 2: Toggle class (red color) on button click
toggleBtn.addEventListener("click", function() {
    text.classList.toggle("red");
});

// Event 3: Create a new element dynamically
let newPara = document.createElement("p");
newPara.innerText = "This paragraph was created using JavaScript!";
document.getElementById("part4").appendChild(newPara);
