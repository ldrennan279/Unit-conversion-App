
let meterEl = document.querySelector(".meters-el")
let litersEl = document.querySelector(".liters-el")
let kilosEl = document.querySelector(".kilos-el")
let selectEl = document.querySelector(".select-el")

selectEl.addEventListener("click", function(){
    let inputEl = document.querySelector("#input-el")
    let input = inputEl.value

//Length conversion
let meterToFeetConversion = 3.280 * input
let feetToMeterConversion = 0.304 * input
//Length output to HTML
meterEl.textContent = input + " meters =" + meterToFeetConversion.toFixed(3) + " feet | " + input + " feet = " + feetToMeterConversion.toFixed(3) + "meters"

//Volume conversion
let literToGallon = 0.219 * input
let gallonToLiters = 4.546 * input
//Volume output to HTML
litersEl.textContent = input + " liters =" + literToGallon.toFixed(3) + " gallons | " + input + " gallons = " + gallonToLiters.toFixed(3) + "liters"

//Mass conversion
let kiloToPounds = 2.204 * input
let poundToKilo = 0.453 * input
//Mass output to HTML
kilosEl.textContent = input + " kilos =" + kiloToPounds.toFixed(3) + " pounds | " + input + " pounds = " + poundToKilo.toFixed(3) + "kilos"

})