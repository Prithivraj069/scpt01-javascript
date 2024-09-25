
const prompt = require("prompt-sync")();

let name = prompt("enter the name: ");

console.log(name);

let n = 42 + "";
console.log(typeof(n));



let length = Number(prompt("enter the length: "));
let width = Number(prompt("enter the width: "));

let perimeter = (length + width) * 2;
console.log("perimeter of rectangle: ", perimeter);

console.log(Math.max(1,2));