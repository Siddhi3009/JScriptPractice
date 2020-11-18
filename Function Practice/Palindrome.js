process = require('process');
function PalindromeCheck(number) 
{
    var string = number;
    var reverseString = string.split('').reverse().join(''); 
    return reverseString === string;
}
if(PalindromeCheck(process.argv[2]))
    console.log("It is a palindrome");
else
    console.log("It is not a palindrome");