process = require('process');
input =  parseInt(process.argv[2]);
switch(input)
{
    case 1:
    console.log("Unity");
    break;
    case 10:
    console.log("Ten");    
    break;
    case 100:
    console.log("Hundered");
    break;
    case 1000:
    console.log("Thousand");
    break;
    default:
    console.log("Invalid input");
    break;
}