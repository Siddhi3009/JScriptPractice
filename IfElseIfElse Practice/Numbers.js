process = require('process');
input =  process.argv[2];
if(input == 1)
{
    console.log("Unity");
}
else if(input == 10)
{
    console.log("Ten");
}
else if (input == 100) 
{
    console.log("Hundered");
}
else if(input == 1000)
{
    console.log("Thousand");
}
else
{
    console.log("Invalid input");
}