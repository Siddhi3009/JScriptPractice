let headWin=0;
let tailWin=0;
while(headWin<11 && tailWin<11)
{
    let checkToss= Math.floor(Math.random()*10)%2;
    if(checkToss==0)
    {
        headWin++;
        console.log("Heads");
        console.log("Head wins: " + headWin);
    }
    else
    {
        tailWin++;
        console.log("Tails");
        console.log("Tail wins: "+tailWin);
    }
}