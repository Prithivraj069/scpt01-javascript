
const prompt = require("prompt-sync")();

// let name = prompt("enter the name: ");

// console.log(name);

let n = 42 + "";
console.log(typeof(n));



let length = Number(prompt("enter the length: "));
let width = Number(prompt("enter the width: "));

let perimeter = (length + width) * 2;
console.log("perimeter of rectangle: ", perimeter);

// console.log(Math.max(1,2));
let array = [1, 2, 3, 6, 7];
console.log(array);

// let x = parseInt(prompt("Enter a number in three digit: "));

// while(x < 100 || x >999) {
//     x = parseInt(prompt("Enter a number in three digit: "));
   
// }

// console.log("number is ", x);


function customSlice(arr, start, end) {
    let result = [];
    if (start < 0) start = Math.max(arr.length + start, 0);
    if (end === undefined) end = arr.length;
    if (end < 0) end = Math.max(arr.length + end, 0);
    
    for (let i = start; i < end && i < arr.length; i++) {
      result.push(arr[i]);
    }
    
    return result;
  }
  
  let arr = [2,46,6,8,21,65,79];
  console.log(customSlice(arr, 1, 3));

  // sum of two arrays

  let arr1 = [3,5,9];
let arr2 = [6,9,4];
let result = [];
for(let i =0; i < arr1.length; i++) {
   
        result.push(arr1[i] + arr2[i]);
    
}

// console.log(result);

