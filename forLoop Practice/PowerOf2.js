process = require('process');
let power = parseInt(process.argv[2]);
let result = 1;
for(let iterator = 1; iterator <= power; iterator++)
{
    result = result*2;
    console.log("2 to the power " + iterator + " is " + result);
}