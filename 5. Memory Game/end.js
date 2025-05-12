import { minutes, seconds, milliseconds, gameSection, gameRender } from "./game.js";

let endSection;

function endSectionRender() {
    const body = document.querySelector('body');
    endSection = document.createElement('section');
    endSection.className = 'endSection';
    body.appendChild(endSection);
}

function convert(minutes, seconds, milliseconds) {
    return (parseInt(minutes) * 60 * 1000) + (parseInt(seconds) * 1000) + parseInt(milliseconds);
}

function currentFinishTimeRender() {
    const storedMinutes = localStorage.getItem('storedMinutes') || '00';
    const storedSeconds = localStorage.getItem('storedSeconds') || '00';
    const storedMilliseconds = localStorage.getItem('storedMilliseconds') || '00';

    const currentFinishTimeInMs = convert(storedMinutes, storedSeconds, storedMilliseconds);

    const personalBestTime = localStorage.getItem('personalBestTime') || '999:59:99';
    const [bestMinutes, bestSeconds, bestMilliseconds] = personalBestTime.split(':');
    const personalBestTimeInMs = convert(bestMinutes, bestSeconds, bestMilliseconds);

    if (currentFinishTimeInMs < personalBestTimeInMs) {
        localStorage.setItem('personalBestTime', `${storedMinutes}:${storedSeconds}:${storedMilliseconds}`);
    }

    const currentFinishTime = document.createElement('div');
    currentFinishTime.className = 'currentFinishTime';
    endSection.appendChild(currentFinishTime);

    const currentFinishTimeResult = document.createElement('h1');
    currentFinishTimeResult.className = 'currentResult';
    currentFinishTimeResult.textContent = `${storedMinutes}:${storedSeconds}:${storedMilliseconds}`;
    currentFinishTime.appendChild(currentFinishTimeResult);
}

function personalBestTimeRender() {
    const personalBestTime = localStorage.getItem('personalBestTime') || '999:59:99';
    
    const displayTime = personalBestTime === '999:59:99' ? '00:00:00' : personalBestTime;

    const personalBestTimeDisplay = document.createElement('div');
    personalBestTimeDisplay.className = 'personalBestTimeDisplay';
    endSection.appendChild(personalBestTimeDisplay);

    const personalBestTimeResult = document.createElement('h1');
    personalBestTimeResult.className = 'personalBestTimeResult';
    personalBestTimeResult.textContent = `Personal Best: ${displayTime}`;
    personalBestTimeDisplay.appendChild(personalBestTimeResult);
}

function tryAgainButtonRender() {
    const tryAgainButton = document.createElement('input');
    tryAgainButton.className = 'tryAgainButton';
    tryAgainButton.type = 'button';
    tryAgainButton.value = 'Try Again';
    endSection.appendChild(tryAgainButton);

    tryAgainButton.addEventListener('click', () => {
        endSection.remove();
        gameRender();
    })
}

export function endRender() {
    endSectionRender();
    currentFinishTimeRender();
    personalBestTimeRender();
    tryAgainButtonRender();
}