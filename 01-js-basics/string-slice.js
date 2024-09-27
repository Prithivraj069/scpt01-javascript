const prompt = require("prompt-sync")();


let userInput = prompt("enter image name:");

userInput = userInput.slice(-3);
if (userInput == 'png' || userInput == 'jpg' ) {
    console.log("It is an image file");
} else {
  console.log("it is an not image file");
}