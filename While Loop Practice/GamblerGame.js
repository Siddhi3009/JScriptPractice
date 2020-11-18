let money = 100;
let noOfWins=0;
let noOfBets=0;
while(money!=0 && money!=200)
{
    let bet = Math.floor(Math.random()*10)%2;
    if(bet==1)
    {
        noOfWins++;
        noOfBets++;
        money++;
    }
    else
    {
        money--;
        noOfBets++;
    }
}
console.log("Final Money: " + money);
console.log("No. of wins: " + noOfWins);
console.log("No of bets made: " + noOfBets);
