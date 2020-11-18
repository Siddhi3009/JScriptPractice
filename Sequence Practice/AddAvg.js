let sum = 0;
for(let iterator = 0; iterator<5; iterator++ )
{
    sum += Math.floor(Math.random() * 100);
}
console.log("Sum is: " + sum);
console.log("Average is: " + sum/5);