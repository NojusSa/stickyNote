const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let p = document.querySelector('p');

function startTimer () {
  start.addEventListener('click', () => {
    isRunning = true;
  })
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 1);
  }
  console.log(startTime);
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedTime / 1000 % 60);
  let milliseconds = Math.floor(elapsedTime % 1000 / 10);
  p.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
startTimer();
update();