// Node.js program to demonstrate basic operations and error handling.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Please enter your name: ", (name) => {
  rl.question("Please enter your age: ", (age) => {
    try {
      let sum = parseFloat(age) + 1;
      console.log(`Hello ${name}, you are ${sum} years old.`);
    } catch (error) {
      console.error(`Error processing the input: ${error.message}`);
      rl.close();
    }
  });
});
