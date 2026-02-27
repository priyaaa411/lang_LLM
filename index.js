// mathFunctions.js

// Function 1: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function 2: Check if a number is even
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// Calling the functions
let sum = addNumbers(10, 5);
console.log("Sum:", sum);

let check = isEven(10);
console.log("Is 10 even?", check);