const second = 1000;
const minute= 60*second;
const hour = 60*minute;
const day = 24*hour;

const days =document.querySelector(".days");
const hours =document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds= document.querySelector(".seconds");
const counterTimer = document.querySelector(".counterTimer");
const heading = document.querySelector("h1");
const inputDay = prompt("Enter day");
const inputMonth = prompt("Enter month");
const inputYear = prompt("Enter year");

const timerdate= `${inputMonth}/${inputDay}/${inputYear}`;

const intervalID =setInterval(()=>{
    const timer = new Date(timerdate).getTime();
    const today = new Date().getTime();
    const difference = timer-today;
    const leftDay = Math.floor(difference/day);
    const leftHour =Math.floor((difference%day)/hour);
    const leftMinute = Math.floor((difference%hour)/minute);
    const leftSeconds =Math.floor((difference%minute)/second);

    days.innerText = String(leftDay).padStart(2,'0');
    hours.innerText =String(leftHour).padStart(2,'0');
    minutes.innerText =String(leftMinute).padStart(2,'0');
    seconds.innerText = String(leftSeconds).padStart(2,'0');;
    if(difference<0){
        heading.innerText = "Time is Up";
        counterTimer.style.display= "none";
        clearInterval(intervalID);224
    }
},0);
// timerFunction();


