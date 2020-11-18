const io = require('console-read-write');
let dateCheck = false;
async function DateCheck()
{
console.log("Enter the month");
let month = await io.read();
console.log("Enter the day");
let day=  await io.read(parseInt());
console.log("Enter the year");
let year = await io.read(parseInt());
if(month.toLowerCase() =="march" || month.toLowerCase() =="april" || month.toLowerCase() =="may" || month.toLowerCase() =="june")
{
    if(day>=1 && day<=20)
    {
        dateCheck = true;
    }
    else
    {
        dateCheck = false;
    }
}
else
dateCheck = false;
console.log("Date check is " + dateCheck);
}
DateCheck();
