var score = 0;
​
var timer = document.getElementById("timer");
var timerId;
​
function startTimer() {
  time = 5;
  timer.innerHTML = time;
  timerId = setInterval(() => {
    time--;
    if (time == 0) location.href = "./gameover.html?score=" + score;
    timer.innerHTML = time;
  }, 1000);
}
​
function resetTime(intervalId) {
  clearInterval(intervalId);
  startTimer();
}
​
startTimer();