process = require('process');
let number1 = parseInt(process.argv[2]);
let number2 = parseInt(process.argv[3]);
let number3 = parseInt(process.argv[4]);
let operation1 = number1 + number2 * number3;
let operation2 = number3 + number1 / number2;
let operation3 = number1 % number2 + number3;
let operation4 = number1 * number2 + number3;
console.log("a+b*c: " + operation1 + " c+a/b: " + operation2 + " a%b+c: " + operation3 + " a*b+c: " + operation4);
function GetMaximum(operation1, operation2, operation3, operation4)
{
    let maximum = 0;
    if(Math.max(operation1, operation2, operation3, operation4) == operation1)
    maximum = operation1;
    else if(Math.max(operation1, operation2, operation3, operation4) == operation2)
    maximum = operation2;
    else if(Math.max(operation1, operation2, operation3, operation4) == operation3)
    maximum = operation3;
    else if(Math.max(operation1, operation2, operation3, operation4) == operation4)
    maximum = operation4;
    else
    console.log("Invalid input");
    return maximum
}
function GetMinimum(operation1, operation2, operation3, operation4)
{
    let minimum = 0;
    if(Math.min(operation1, operation2, operation3, operation4) == operation1)
    minimum = operation1;
    else if(Math.min(operation1, operation2, operation3, operation4) == operation2)
    minimum = operation2;
    else if(Math.min(operation1, operation2, operation3, operation4) == operation3)
    minimum = operation3;
    else if(Math.min(operation1, operation2, operation3, operation4) == operation4)
    minimum = operation4;
    else
    console.log("Invalid input");
    return minimum
}
let maximum = GetMaximum(operation1, operation2, operation3, operation4);
let minimum = GetMinimum(operation1, operation2, operation3, operation4);
console.log("Maximum: " + maximum);
console.log("Minimum: " + minimum);