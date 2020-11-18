process = require('process');
let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);
if(end>=start)
{
    for(let number = start; number<= end; number++)
    {
        if(PrimeNumber(number)==true)
        {
            console.log(number);
        }
    }
}
else
{
    console.log("Invalid Range");
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