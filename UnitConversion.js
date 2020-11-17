let length = Math.floor(Math.random() * 99);
let breadth = Math.floor(Math.random() * 99);
console.log("Length of plot in ft " + length + " Breadth of plot in ft " + breadth);
function GetArea(length, breadth)
{
    length = length/12;
    breadth = breadth/12;
    console.log("Length of plot in m " + length + " Breadth of plot in m " + breadth);
    return length*breadth;
}
let area = GetArea(length, breadth);
console.log("Area in metre sq: " + area);