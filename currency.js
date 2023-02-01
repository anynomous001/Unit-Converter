let inputEl = document.getElementById("input-div");
let conBtn = document.getElementById("input-btn");
let resultOne = document.getElementById("result-one");
let resultTwo = document.getElementById("result-two");
let resultThree = document.getElementById("result-three");
let darkModebtn = document.getElementById("dark-mode");


let data = inputEl.value;
conBtn.addEventListener("click", function () {

    meterFeet(inputEl.value);
    literGallon(inputEl.value);
    kilogramPound(inputEl.value);
})
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
function meterFeet(data) {
    let meterToFeet = data * 3.281;
    let feetToMeter = data / 3.281;
    resultOne.textContent = `${inputEl.value} meters = ${meterToFeet.toFixed(2)} feet || ${data} feet  = ${feetToMeter.toFixed(2)} meters`;
}
/*20 meters = 65.616 feet | 20 feet = 6.096 meters*/

function literGallon(data) {
    let literToGallon = data * 0.264;
    let gallonToLiter = data / 0.264;
    resultTwo.textContent = `${inputEl.value} liters = ${literToGallon.toFixed(2)}  gallons || ${data} gallons =${gallonToLiter.toFixed(2)} liters`;
}

function kilogramPound(data) {
    let kilogramToPound = data * 2.204;
    let poundToKilogram = data / 2.204;
    resultThree.textContent = `${inputEl.value} kilograms = ${kilogramToPound.toFixed(2)}  pounds || ${data} pounds =${poundToKilogram.toFixed(2)} kilograms`;
}

darkModebtn.addEventListener("click", function () {
    console.log("hello");
})

