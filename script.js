const second = 1000,

minute = second * 60,

hour = minute * 60,

day = hour * 24;

let countDown = new Date('jan 1, 2022 00:00:00').getTime(),

x = setInterval(function() {
let now = new Date().getTime(),
    distance = countDown - now;
document.getElementById('days').innerHTML = Math.floor(distance / (day)),

  document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)),

  document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)),

  document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second);

}, second)

var modal = document.querySelector(".modal"); 
var trigger = document.querySelector(".home__aply"); 
var closeButton = document.querySelector(".close-button"); 
var submitButton = document.querySelector("#submit");

console.log(modal);

function toggleModal() { 
    modal.classList.toggle("show-modal"); 
}

function windowOnClick(event) { 
    if (event.target === modal) { 
        toggleModal(); 
    } 
}

trigger.addEventListener("click", toggleModal); 
closeButton.addEventListener("click", toggleModal); 

submit.addEventListener("click", toggleModal); 
window.addEventListener("click", windowOnClick); 
