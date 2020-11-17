//Minimum and Maximum 3 Digit value
let maxValue = 0;
let minValue = 0;
function GetMaximumNumber(number1, number2, number3)
{
    if(number1>number2)
    {
       maxValue = number1;
    }
    else
    {
        maxValue = number2;
    }
    if(number3 > maxValue)
    {
        maxValue = number3;
    }
    return maxValue;
}
function GetMinimumNumber(number1, number2, number3)
{
    if(number1>number2)
    {
       minValue = number2;
    }
    else
    {
        minValue = number1;
    }
    if(number3 < minValue)
    {
        minValue = number3;
    }
    return minValue;
}
let number1 = Math.floor(Math.random() * 999);
let number2 = Math.floor(Math.random() * 999);
let number3 = Math.floor(Math.random() * 999);
console.log("Number 1: " + number1 + " Number 2: " + number2 + " Number 3: " + number3);
maxValue =GetMaximumNumber(number1, number2, number3);
minValue =GetMinimumNumber(number1, number2, number3);
console.log("Maximum Number: " + maxValue + " Minimum Number: " + minValue);