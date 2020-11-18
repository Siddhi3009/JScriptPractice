process = require('process');
let number = parseInt(process.argv[2]);
if(PrimeNumber(number) == true)
{
    console.log("It is a prime number");
}
else
{
    console.log("It is not a prime number")
}
if(PalindromeCheck(number) == true)
{
    console.log("It is a palindrome");
}
else
{
    console.log("It is not a palindrome")
}
function PrimeNumber(number)
{
    let copy = number;
    if(number == 1)
        return false;
    else if(number == 2)
        return true;
    else if(number>2)
    {
        let iterator;
        for( iterator = 2; iterator < number; iterator++)
        {
            if(copy%iterator!=0)
                continue;
            else
            {
                return false;
            }
        }
        if(iterator==number)
            return true;
    }
    else
    {
        return false;
    }
}
function PalindromeCheck(number) 
{
    let string = number.toString();
    let reverseString = string.split('').reverse().join(''); 
    return reverseString === string;
}