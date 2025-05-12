import { cardRender } from "./cards.js";
import { endRender } from "./end.js";
import { gameRender } from "./game.js";
import { menuRender } from "./menu.js";

function startGame() {
    const startButton = document.querySelector('.startButton');
    if (startButton) {
        startButton.addEventListener('click', () => {
            const menuSection = document.querySelector('.menuSection');
            if (menuSection) {
                menuSection.remove();
            }
            gameRender();
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    menuRender();
    startGame();
    // gameRender();
    // cardRender();
    // endRender();
});