/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let answerel=document.getElementById("answer")
let textel=document.getElementById("text")
let bottomel=document.getElementById("c2")
let button=document.getElementById("btn")
button.addEventListener("click",func)
function func(){
    let num=textel.value
    bottomel.innerHTML=
    `<div class="c3">
        Length(Meter/Feet)
        <div class="c4">
            ${num} meters=${(num*3.281).toFixed(3)} | ${num} feet=${(num/3.281).toFixed(3)}
        </div>
    </div>
    <div class="c3">
        Volume(Liters/gallon)
        <div class="c4">
            ${num} liters=${(num*0.264).toFixed(3)} | ${num} gallon=${(num/0.264).toFixed(3)}
        </div>
    </div>
    <div class="c3">
        Mass(Kilograms/Pounds)
        <div class="c4">
            ${num} kilogram=${(num*2.204).toFixed(3)} | ${num} pound=${(num/2.204).toFixed(3)}
        </div>
    </div>
    `
}
