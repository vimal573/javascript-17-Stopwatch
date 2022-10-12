const timeEl = document.querySelector(".time");
const btnStartEl = document.querySelector(".btn-start");
const btnStopEl = document.querySelector(".btn-stop");
const btnResetEl = document.querySelector(".btn-reset");

let tens = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

const showTimer = function () {
  tens = String(tens).padStart(2, 0);
  seconds = String(seconds).padStart(2, 0);
  minutes = String(minutes).padStart(2, 0);
  hours = String(hours).padStart(2, 0);
  timeEl.innerText = `${hours}:${minutes}:${seconds}.${tens}`;
};
showTimer();

const startStopwatch = function () {
  tens++;
  showTimer();

  if (tens > 99) {
    tens = 0;
    seconds++;
    showTimer();
  }

  if (seconds > 59) {
    seconds = 0;
    minutes++;
    showTimer();
  }

  if (minutes > 59) {
    minutes = 0;
    hours++;
    showTimer();
  }
};

let stopwatch;

btnStartEl.addEventListener("click", () => {
  if (stopwatch) clearInterval(stopwatch);

  stopwatch = setInterval(startStopwatch, 10);
});

btnStopEl.addEventListener("click", () => {
  clearInterval(stopwatch);
});

btnResetEl.addEventListener("click", () => {
  tens = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  clearInterval(stopwatch);
  showTimer();
});
