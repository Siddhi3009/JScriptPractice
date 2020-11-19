let myMap = new Map();
while(1)
{
    let diceRoll = (Math.floor(Math.random() * 10) % 6) + 1;
    if(!myMap.has(diceRoll))
        myMap.set(diceRoll, 1);
    else
    {
        let count = myMap.get(diceRoll);
        myMap.set(diceRoll, ++count)
    }
    if(myMap.get(diceRoll) == 10)
        break;
}
let maxCount = Math.max(...myMap.values());
let maxKeys = [...myMap.entries()]
        .filter(({ 1: v }) => v == maxCount)
        .map(([k]) => k);
let minCount = Math.min(...myMap.values());
let minKeys = [...myMap.entries()]
        .filter(({ 1: v }) => v == minCount)
        .map(([k]) => k);

console.log("Maximum reached number: " + maxKeys + " Minimum reached number: " + minKeys); 