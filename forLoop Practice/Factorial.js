process = require('process');
let number = parseInt(process.argv[2]);
let factorial = 1;
for(let iterator = 1; iterator<=number; iterator++)
{
    factorial = factorial * iterator;
}
console.log("Factorial of " + number + " is " + factorial);