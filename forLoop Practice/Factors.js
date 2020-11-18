process = require('process');
let number = parseInt(process.argv[2]);
console.log("Factors of " + number + " are as follows: ");
for(let iterator = 1; iterator<= number; iterator++)
{
    if(number%iterator == 0)
    console.log(iterator);
}