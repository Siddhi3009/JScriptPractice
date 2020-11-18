process = require('process');
let number = parseInt(process.argv[2]);
PrimeCheck(number);
function PrimeCheck(number)
{
    let copy = number;
    if(number == 1)
    {
        console.log("Neither prime nor composite");
    }
    else if(number == 2)
    {
        console.log("Prime Number");
    }
    else if(number>2)
    {
        let iterator;
        for( iterator = 2; iterator < number; iterator++)
        {
            if(copy%iterator!=0)
                continue;
            else
            {
                console.log("Not a prime number");
                break;
            }
        }
        if(iterator==number)
        {
            console.log("Prime Number");
        }    
    }
    else
    {
        console.log("Invalid Input");
    }
}