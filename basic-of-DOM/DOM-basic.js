
let submitBtn = document.querySelector("#submitBtn");

let calculateNumber = function() {

    let selectNumber = document.querySelectorAll(".number:checked");
    let extractCheckedValue = 0;

    for(let n of selectNumber) {
        extractCheckedValue += Number(n.value); 
    }
    alert(extractCheckedValue);



};

submitBtn.addEventListener('click',calculateNumber );

















let button = document.querySelector("#button");

let calculatBMI = function () {
    let weight = document.querySelector("#weight");
    let height = document.querySelector("#height");
    
    let result = weight.value / height.value ** 2;
     console.log(result);
}

button.addEventListener('click', calculatBMI);

