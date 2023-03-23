// Ask the user to enter two numbers
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

// Calculate the sum, difference, product, and quotient
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;
const quotient = num1 / num2;

// Display the results to the user
document.write(`The sum of ${num1} and ${num2} is ${sum} <br>`);
document.write(`The difference between ${num1} and ${num2} is ${difference}<br>`);
document.write(`The product of ${num1} and ${num2} is ${product} <br>`);
document.write(`The quotient of ${num1} and ${num2} is ${quotient}<br>`);
