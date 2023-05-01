"use strict";

const timer = document.querySelector(".timer__counter--label");
const timerBtn = document.querySelector(".timer__btn");
const pomodoro1 = document.querySelectorAll(".nav__link[pomodoro]");
const timerNav = document.querySelectorAll(".timer__nav--link[type]");
const nextBtn = document.querySelector(".timer__counter--btn");
const resetTimerLabel = document.querySelector(".timer__reset--label");

let time;
let isCounting = false;

let startTimer;

// NAV ============================================================
pomodoro1.forEach((item) => {
  item.addEventListener("click", (e) => {
    resetTimer();

    pomodoro1.forEach((item) => {
      item.classList.remove("nav__link--active");
    });
    if (!e.target.classList.contains("nav__link--active")) {
      e.target.classList.add("nav__link--active");

      const pomodoroValue = e.target.attributes.pomodoro.value;
      const timerNavActive = document.querySelector(
        ".timer__nav--link--active"
      );
      if (pomodoroValue == 0) {
        if (timerNavActive.attributes.type.value == 0) {
          timer.textContent = "25:00";
        } else {
          timer.textContent = "05:00";
        }
      } else {
        if (timerNavActive.attributes.type.value == 0) {
          timer.textContent = "50:00";
        } else {
          timer.textContent = "10:00";
        }
      }
    }
  });
});

//Pomodoro timer NAV ==================================================
timerNav.forEach((item) => {
  item.addEventListener("click", (e) => {
    const nowActive = document.querySelector(".nav__link--active");

    resetTimer();

    timerNav.forEach((item) => {
      item.classList.remove("timer__nav--link--active");
    });

    if (!e.target.classList.contains("timer__nav--link--active")) {
      e.target.classList.add("timer__nav--link--active");
      const timerOrBreak = e.target.attributes.type.value;

      if (nowActive.attributes.pomodoro.value == 0) {
        timerOrBreak == 0
          ? (timer.textContent = "25:00")
          : (timer.textContent = "05:00");
      } else {
        timerOrBreak == 0
          ? (timer.textContent = "50:00")
          : (timer.textContent = "10:00");
      }
    }
  });
});

//timer logic==========================================================
function initializeValues(pomodoroValue) {
  time = 60 * pomodoroValue;
  calcTimer();
  isCounting = true;
}

timerBtn.addEventListener("click", () => {
  const pomodoroValue = document.querySelector(".nav__link--active");
  const timerNavValue = document.querySelector(".timer__nav--link--active");
  if (isCounting) {
    console.log("Já esta contando");
  } else {
    if (pomodoroValue.attributes.pomodoro.value == 0) {
      //25 minutos
      if (timerNavValue.attributes.type.value == 0) {
        initializeValues(25);
      } else {
        initializeValues(5);
      }
    } else {
      //50 minutos
      if (timerNavValue.attributes.type.value == 0) {
        initializeValues(50);
      } else {
        initializeValues(10);
      }
    }
  }
});

function calcTimer() {
  if (time == undefined) {
    return;
  }
  function tick() {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    timer.textContent = `${min}:${sec}`;

    console.log(startTimer);
    if (time == 0) {
      clearInterval(startTimer);
      isCounting = false;
    } else {
      time--;
    }
  }

  return (startTimer = setInterval(tick, 1000));
}

//btn next
nextBtn.addEventListener("click", resetTimer);

function resetTimer() {
  clearInterval(startTimer);
  isCounting = false;

  const nowActive = document.querySelector(".nav__link--active");
  const timerNavValue = document.querySelector(".timer__nav--link--active");

  if (nowActive.attributes.pomodoro.value == 0) {
    if (timerNavValue.attributes.type.value == 0) {
      timer.textContent = "25:00";
    } else {
      timer.textContent = "05:00";
    }
  } else {
    if (timerNavValue.attributes.type.value == 0) {
      timer.textContent = "50:00";
    } else {
      timer.textContent = "10:00";
    }
  }
}

// RESET TIMER
resetTimerLabel.addEventListener("click", resetTimer);
