"use strict";

const timer = document.querySelector(".timer__counter--label");
const timerBtn = document.querySelector(".timer__btn");
const pomodoro1 = document.querySelectorAll(".nav__link[pomodoro]");
const nav = document.querySelector(".nav");

let pomodoroTime = 60 * 0.1;
let breakTime = 60 * 5;
let pomodoro2 = 60 * 50;
let break2 = 60 * 10;

let time;
let breakNumber;

let isCounting;
/* 
function calcTimer(timerN, breakN) {
  if (isCounting === true) {
    if (time == undefined || breakNumber == undefined) {
      time = timerN;
      breakNumber = breakN;
    }

    console.log("PARAAAAAAA");
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    timer.textContent = `${min}:${sec}`;

    if (time > 0) {
      time--;
    } else {
      calcTimer(0, breakN);

      clearInterval(startTimer);
      isCounting = false;
    }
  }
}

const startTimer = setInterval(() => {
  calcTimer(pomodoro1, break1);
  console.log("oe");
}, 1000);

timerBtn.addEventListener("click", () => {
  if (isCounting) {
    return;
  } else {
    startTimer;
    isCounting = true;
  }
});
 */
/* 
console.log(nav.closest("nav nav"));

pomodoro1.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.classList.contains("nav__link--active")) {
      return;
    } else {
      item.classList.add("nav__link--active");
    }
  });
});
 */
