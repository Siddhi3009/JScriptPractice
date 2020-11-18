io = require('console-read-write');
async function FindNumber()
{
    console.log("Think of a number between 1 and 100");
    let start = 0;
    let end = 100;
    let magicNumber = 0;
    let isNumber = false;
    while(isNumber != true)
    {
        magicNumber = Math.round((start+end)/2);
        console.log("Enter your choice \n1. Greater than " + magicNumber + "\n2. Lesser than " + magicNumber + "\n3. " + magicNumber + " is my number");
        let choice = await io.read(parseInt());
            if(choice == 1)
                start = magicNumber;
            if(choice == 2)
                end = magicNumber;
            if(choice == 3)
                isNumber = true;
    }
    console.log("The no. you thought was: "+ magicNumber);
}
FindNumber();
