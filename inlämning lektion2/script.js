let input = document.querySelector("#input");
let buttonText = document.querySelector("#button");
let output = document.querySelector("#output");
let buttonReset = document.querySelector("#button-reset");
let buttonColor = document.querySelector("#button-change-color");

buttonText.addEventListener("click", function(){
    output.innerText = input.value;

})

buttonReset.addEventListener("click", function(){
    input.value = "";

})

buttonColor.addEventListener("click", function(){
let changeColor = document.getElementById("output");
changeColor.style.color = "orange";

})