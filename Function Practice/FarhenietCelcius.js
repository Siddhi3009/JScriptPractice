io = require('console-read-write');
Convert();
async function Convert()
{
    console.log("Enter your choice\n1. Convert Farheniet to Celcius \n2. Convert Celcius to Farheniet");
    let choice = parseInt(await io.read());
    switch(choice)
    {
        case 1:
            FarhenietToCelcius();
            break;
        case 2:
            CelciusToFarheniet();
            break;
        default:
            console.log("Invalid choice");
            break;
    }
}
async function CelciusToFarheniet()
{
    console.log("Enter temperature in celcius");
    let degC= parseInt(await io.read());
    if(degC >= 0 && degC <= 100 )
    {
        let degF= (degC*(9/5))+32;
        console.log(degC + " in celcius is " + degF + " in farheniets");    
    }
    else
    {
        console.log("Temperature not in correct range");
    }
}
async function FarhenietToCelcius()
{
    console.log("Enter temperature in farheniets");
    let degF= parseInt(await io.read());
    if(degF >= 32 && degF <= 212 )
    {
        let degC= (degF-32)*(5/9);
        console.log(degF + " in farheniets is " + degC + " in celcius");    
    }
    else
    {
        console.log("Temperature not in correct range");
    }
}