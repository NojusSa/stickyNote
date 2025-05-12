import { cardRender } from "./cards.js";

export let gameSection, minutes, seconds, milliseconds;
let gameBox;

function gameSectionRender() {
    const body = document.querySelector('body');
    gameSection = document.createElement('section');
    gameSection.className = 'gameSection';
    body.appendChild(gameSection);
}

function timerRender() {
    const timerContainer = document.createElement('div');
    timerContainer.className = 'timerContainer';
    gameSection.appendChild(timerContainer);

    const timerDisplay = document.createElement('h1');
    timerDisplay.className = 'timerDisplay';
    timerContainer.appendChild(timerDisplay);

    let isRunning = false;
    let startTime = 0;
    let timer = null;
    let elapsedTime = 0;

    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTimer, 10);
        isRunning = true;
    }

    function updateTimer() {
        const currentTime = Date.now();
        elapsedTime = currentTime - startTime;

        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / 1000 % 60);
        let milliseconds = Math.floor(elapsedTime % 1000 / 10);

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        timerDisplay.textContent = `${minutes}:${seconds}:${milliseconds}`;

        localStorage.setItem('storedMinutes', minutes);
        localStorage.setItem('storedSeconds', seconds);
        localStorage.setItem('storedMilliseconds', milliseconds);
    }

    return timer;
}

export function gameBoxRender() {
    gameBox = document.createElement('div');
    gameBox.className = 'gameBox';
    gameSection.appendChild(gameBox);
}

function resetButtonRender() {
    const resetButton = document.createElement('input');
    resetButton.className = 'resetButton';
    resetButton.type = 'button';
    resetButton.value = 'RESET';
    gameSection.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        gameSection.remove();
        gameRender();
        cardRender();
    })
}

export function gameRender() {
    gameSectionRender();
    const timer = timerRender()
    gameBoxRender();
    cardRender(gameBox, timer, minutes, seconds, milliseconds);
    resetButtonRender();
}