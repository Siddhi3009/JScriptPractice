let array = new Array();
while(array.length<10)
{
    let number= Math.floor(Math.random()*1000);
    if(number>=100 && number<=999)
    {
        array.push(number);
        console.log(number);
    }
}
let sortArray = array.sort();
console.log("Second largest number: " + sortArray[sortArray.length-2]);
console.log("Second smallest number: " + sortArray[1]);