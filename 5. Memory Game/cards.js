import { gameBoxRender, milliseconds, minutes, seconds } from "./game.js";
import { endRender } from "./end.js";
import { gameSection } from "./game.js";

export function card1(gameBox) {
    const card = document.createElement('div');
    card.className = 'card';
    gameBox.appendChild(card);

    const cardBackFace = document.createElement('img');
    cardBackFace.src = 'assets/javascript-16-svgrepo-com.svg'
    cardBackFace.className = 'backFace';
    card.appendChild(cardBackFace);

    const cardFrontFace = document.createElement('img');
    cardFrontFace.src = 'assets/c-sharp-16-svgrepo-com.svg'
    cardFrontFace.className = 'frontFace';
    card.appendChild(cardFrontFace);
    
    return card;
}

function card2(gameBox) {
    const card = document.createElement('div');
    card.className = 'card';
    gameBox.appendChild(card);

    const cardBackFace = document.createElement('img');
    cardBackFace.src = 'assets/javascript-16-svgrepo-com.svg'
    cardBackFace.className = 'backFace';
    card.appendChild(cardBackFace);

    const cardFrontFace = document.createElement('img');
    cardFrontFace.src = 'assets/html-16-svgrepo-com.svg'
    cardFrontFace.className = 'frontFace';
    card.appendChild(cardFrontFace);
    
    return card;
}

function card3(gameBox) {
    const card = document.createElement('div');
    card.className = 'card';
    gameBox.appendChild(card);

    const cardBackFace = document.createElement('img');
    cardBackFace.src = 'assets/javascript-16-svgrepo-com.svg'
    cardBackFace.className = 'backFace';
    card.appendChild(cardBackFace);

    const cardFrontFace = document.createElement('img');
    cardFrontFace.src = 'assets/node-16-svgrepo-com.svg'
    cardFrontFace.className = 'frontFace';
    card.appendChild(cardFrontFace);
    
    return card;
}

function card4(gameBox) {
    const card = document.createElement('div');
    card.className = 'card';
    gameBox.appendChild(card);

    const cardBackFace = document.createElement('img');
    cardBackFace.src = 'assets/javascript-16-svgrepo-com.svg'
    cardBackFace.className = 'backFace';
    card.appendChild(cardBackFace);

    const cardFrontFace = document.createElement('img');
    cardFrontFace.src = 'assets/python-16-svgrepo-com.svg'
    cardFrontFace.className = 'frontFace';
    card.appendChild(cardFrontFace);
    
    return card;
}

function card5(gameBox) {
    const card = document.createElement('div');
    card.className = 'card';
    gameBox.appendChild(card);

    const cardBackFace = document.createElement('img');
    cardBackFace.src = 'assets/javascript-16-svgrepo-com.svg'
    cardBackFace.className = 'backFace';
    card.appendChild(cardBackFace);

    const cardFrontFace = document.createElement('img');
    cardFrontFace.src = 'assets/vscode-16-svgrepo-com.svg'
    cardFrontFace.className = 'frontFace';
    card.appendChild(cardFrontFace);
    
    return card;
}

function card6(gameBox) {
    const card = document.createElement('div');
    card.className = 'card';
    gameBox.appendChild(card);

    const cardBackFace = document.createElement('img');
    cardBackFace.src = 'assets/javascript-16-svgrepo-com.svg'
    cardBackFace.className = 'backFace';
    card.appendChild(cardBackFace);

    const cardFrontFace = document.createElement('img');
    cardFrontFace.src = 'assets/c-plusplus-16-svgrepo-com.svg'
    cardFrontFace.className = 'frontFace';
    card.appendChild(cardFrontFace);
    
    return card;
}

function card7(gameBox) {
    const card = document.createElement('div');
    card.className = 'card';
    gameBox.appendChild(card);

    const cardBackFace = document.createElement('img');
    cardBackFace.src = 'assets/javascript-16-svgrepo-com.svg'
    cardBackFace.className = 'backFace';
    card.appendChild(cardBackFace);

    const cardFrontFace = document.createElement('img');
    cardFrontFace.src = 'assets/c-sharp-16-svgrepo-com.svg'
    cardFrontFace.className = 'frontFace';
    card.appendChild(cardFrontFace);
    
    return card;
}

function card8(gameBox) {
    const card = document.createElement('div');
    card.className = 'card';
    gameBox.appendChild(card);

    const cardBackFace = document.createElement('img');
    cardBackFace.src = 'assets/javascript-16-svgrepo-com.svg'
    cardBackFace.className = 'backFace';
    card.appendChild(cardBackFace);

    const cardFrontFace = document.createElement('img');
    cardFrontFace.src = 'assets/html-16-svgrepo-com.svg'
    cardFrontFace.className = 'frontFace';
    card.appendChild(cardFrontFace);
    
    return card;
}

function card9(gameBox) {
    const card = document.createElement('div');
    card.className = 'card';
    gameBox.appendChild(card);

    const cardBackFace = document.createElement('img');
    cardBackFace.src = 'assets/javascript-16-svgrepo-com.svg'
    cardBackFace.className = 'backFace';
    card.appendChild(cardBackFace);

    const cardFrontFace = document.createElement('img');
    cardFrontFace.src = 'assets/node-16-svgrepo-com.svg'
    cardFrontFace.className = 'frontFace';
    card.appendChild(cardFrontFace);
    
    return card;
}

function card10(gameBox) {
    const card = document.createElement('div');
    card.className = 'card';
    gameBox.appendChild(card);

    const cardBackFace = document.createElement('img');
    cardBackFace.src = 'assets/javascript-16-svgrepo-com.svg'
    cardBackFace.className = 'backFace';
    card.appendChild(cardBackFace);

    const cardFrontFace = document.createElement('img');
    cardFrontFace.src = 'assets/python-16-svgrepo-com.svg'
    cardFrontFace.className = 'frontFace';
    card.appendChild(cardFrontFace);
    
    return card;
}

function card11(gameBox) {
    const card = document.createElement('div');
    card.className = 'card';
    gameBox.appendChild(card);

    const cardBackFace = document.createElement('img');
    cardBackFace.src = 'assets/javascript-16-svgrepo-com.svg'
    cardBackFace.className = 'backFace';
    card.appendChild(cardBackFace);

    const cardFrontFace = document.createElement('img');
    cardFrontFace.src = 'assets/vscode-16-svgrepo-com.svg'
    cardFrontFace.className = 'frontFace';
    card.appendChild(cardFrontFace);
    
    return card;
}

function card12(gameBox) {
    const card = document.createElement('div');
    card.className = 'card';
    gameBox.appendChild(card);

    const cardBackFace = document.createElement('img');
    cardBackFace.src = 'assets/javascript-16-svgrepo-com.svg'
    cardBackFace.className = 'backFace';
    card.appendChild(cardBackFace);

    const cardFrontFace = document.createElement('img');
    cardFrontFace.src = 'assets/c-plusplus-16-svgrepo-com.svg'
    cardFrontFace.className = 'frontFace';
    card.appendChild(cardFrontFace);
    
    return card;
}

export function cardRender(gameBox, timer, minutes, seconds, milliseconds) {
    const cards = [
        card1(gameBox),
        card2(gameBox),
        card3(gameBox),
        card4(gameBox),
        card5(gameBox),
        card6(gameBox),
        card7(gameBox),
        card8(gameBox),
        card9(gameBox),
        card10(gameBox),
        card11(gameBox),
        card12(gameBox)
    ];

    let flipped = false;
    let firstCard, secondCard;
    let lockBoard = false;
    let matches = 0;

    cards.forEach(card => {
        card.addEventListener('click', flipCard);
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });

    return cards;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;

        this.classList.toggle('flip');

        if (!flipped) {
            flipped = true;
            firstCard = this;
            return;
        }

        secondCard = this;
        checkForMatch();
    }

    function checkForMatch() {
        const isMatch =
            firstCard.querySelector('.frontFace').src ===
            secondCard.querySelector('.frontFace').src;

        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);

        matches++;

        if (matches === 6) {
            clearInterval(timer);
            gameSection.remove();
            endRender();
        }

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');

            resetBoard();
        }, 500);
    }

    function resetBoard() {
        [flipped, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
}