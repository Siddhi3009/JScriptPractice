let array = new Array();
FindTriplet();
console.log(array);
function FindTriplet()
{
    while(array.length!=3)
    {
    let number1= Math.floor(Math.random()*10);
    let number2= Math.floor(Math.random()*10)-9;
    let number3= Math.floor(Math.random()*10)-9;
    if(number1 + number2 + number3 == 0)
    {
        array.push(number1);
        array.push(number2);
        array.push(number3);
    }
    }
}