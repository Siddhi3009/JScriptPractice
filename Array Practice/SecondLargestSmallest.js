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
//Second largest number calculated
let max = Math.max.apply(null, array)
array.splice(array.indexOf(max),1)
max=Math.max.apply(null,array);
console.log("Second largest number: " + max);
//Second smallest number calculated
let min = Math.min.apply(null, array)
array.splice(array.indexOf(min),1)
min=Math.min.apply(null,array);
console.log("Second smallest number: " + min);