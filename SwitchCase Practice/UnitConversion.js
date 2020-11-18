io = require('console-read-write');
async function UnitConversion()
{
    console.log("Enter your choice \n1. Convert feet to inch\n2. Convert feet to metre\n3. Convert inch to feet \n4. Convert metre to feet");
    let choice= parseInt(await io.read());
    switch(choice)
    {
        case 1:
            console.log("Enter in Feet");
            let feetToInch = parseInt(await io.read());
            console.log("Inches: " + feetToInch * 12);
            break;
        case 2:
            console.log("Enter in feet");
            let feetToMetre = parseInt(await io.read());
            console.log("Meters: " + feetToMetre/3.28084);
            break;
        case 3:
            console.log("Enter in inches");
            let inchToFeet = parseInt(await io.read());
            console.log("Feet: " + inchToFeet/12);
            break;
        case 4:
            console.log("Enter in metre");
            let meterToFeet = parseInt(await io.read());
            console.log("Feet: " + meterToFeet * 3.28084);
            break;    
        default:
            console.log("Invalid Choice");
            break;
    }
}
UnitConversion();