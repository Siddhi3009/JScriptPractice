process = require('process');
let n = parseInt(process.argv[2]);
let result = 0;
let harmonicNumber = 0;
for(let iterator = 1; iterator <= n; iterator++)
{
    result = 1/iterator;
    console.log(iterator + " harmonic is " + result);
    harmonicNumber = harmonicNumber + result;
}
console.log("Harmonic Number: " + harmonicNumber);