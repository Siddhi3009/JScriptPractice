process = require('process');
console.log(PrimeFactors(parseInt(process.argv[2])));
function PrimeFactors(num) 
{
    let result = [];
    for (let i = 2; i <= num; i++)
    {
      while (PrimeCheck(i) && num % i == 0) 
      {
        if (!result.includes(i)) 
        result.push(i);
        num = num/i;
      }
    }
    return result;
}
function PrimeCheck(num) 
{
  for (let i = 2; i <= Math.sqrt(num); i++)
  {
    if (num % i === 0) 
       return false;
  }
  return true;
}
