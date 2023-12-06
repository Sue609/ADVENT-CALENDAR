const keyboard = document.querySelector(".keyboard");
const wordDisplay = document.querySelector(".word-display");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModel = document.querySelector(".game-model");
const guessesText = document.querySelector(".guesses-text b");
const PlayAgainBtn = gameModel.querySelector('button');

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 5;

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "/Advent/images/hangman_image/hangman-0.svg";
    guessesText.innerHTML = currentWord.split("").map(() => `<li class="lettere"></li>`).join("");
    keyboard.querySelectorAll(button).forEach(btn => btn.disabled = false);
    gameModel.classList.remove("show");
}

const getRandomWord = () => {
    const { wordList, hint } = wordList[Math.floor(Math.random() * wordList.length)]
    currentWord = word;
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
}

const initGame = (button, clickedLetter) => {
    if(currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

const gameOver = (isVictory) => {
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}



for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i)
    keyboard.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
PlayAgainBtn.addEventListener("click", getRandomWord);