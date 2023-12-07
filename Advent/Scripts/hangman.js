function hangmanGame () {
    const wordDisplay = document.querySelector(".word-display");
    const guessesText = document.querySelector(".guesses-text b");
    const keyboardDiv = document.querySelector(".keyboard");
    const hangmanImage = document.querySelector(".hangman-box img");
    const gameModal = document.querySelector(".game-modal");
    const playAgainBtn = gameModal.querySelector("button");

    // game variables
    let currentWord, correctLetters, wrongGuessCount;
    const maxGuesses = 6;

    const resetGame = () => {
        correctLetters = [];
        wrongGuessCount = 0;
        hangmanImage.src = "/Advent/images/hangman_images/hangman-0.svg";
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
        wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
        keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
        gameModal.classList.remove("show");
    }

    const getRandomWord = () => {
        // Selecting a random word and hint from the wordList
        const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
        currentWord = word;
        document.querySelector(".hint-text b").innerText = hint;
        resetGame();
    }

    const gameOver = (isVictory) => {
        // After game complete.. showing modal with relevant details
        const modalText = isVictory ? `You found the word:` : 'The correct word was:';
        gameModal.querySelector("img").src = `/Advent/images/hangman_images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Congratulations!' : 'Game Over!';
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }

    const initGame = (button, clickedLetter) => {
        // Checking if clickedLetter is exist on the currentWord
        if(currentWord.includes(clickedLetter)) {
            [...currentWord].forEach((letter, index) => {
                if(letter === clickedLetter) {
                    correctLetters.push(letter);
                    wordDisplay.querySelectorAll("li")[index].innerText = letter;
                    wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
                }
            });
        } else {
            // If clicked letter doesn't exist then update the wrongGuessCount and hangman image
            wrongGuessCount++;
            hangmanImage.src = `/Advent/images/hangman_images/hangman-${wrongGuessCount}.svg`;
        }
        button.disabled = true; // Disabling the clicked button so user can't click again
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

        if(wrongGuessCount === maxGuesses) return gameOver(false);
        if(correctLetters.length === currentWord.length) return gameOver(true);
    }

    for (let i = 97; i <= 122; i++) {
        const button = document.createElement("button");
        button.innerText = String.fromCharCode(i);
        keyboardDiv.appendChild(button);
        button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
    }

    getRandomWord();
    playAgainBtn.addEventListener("click", getRandomWord);

    let timer;
    let timeRemaining = 20; // Total time in seconds (adjust as needed)

    const startTimer = () => {
        timer = setInterval(() => {
            timeRemaining--;
            document.querySelector('.timer').innerText = `Time: ${timeRemaining} seconds`;

            if (timeRemaining <= 0) {
                clearInterval(timer);
                // Add code to handle when the time is up (game over or other action)
                gameOver(false); // For example, end the game when the time runs out
            }
        }, 1000); // Update the timer every second (1000 milliseconds)
    };

    const resetTimer = () => {
        clearInterval(timer);
        timeRemaining = 20; // Reset the time
        startTimer(); // Start the timer again
    };

    // Add the startTimer function call when starting the game
    getRandomWord();
    startTimer(); // Start the timer when the game begins

    // Reset the timer when resetting the game
    playAgainBtn.addEventListener("click", () => {
        getRandomWord();
        resetTimer(); // Reset the timer when starting a new game
    });

}



const wordList = [
    {
        word: "guitar",
        hint: "A musical instrument with strings."
    },
    {
        word: "oxygen",
        hint: "A colorless, odorless gas essential for life."
    },
    {
        word: "mountain",
        hint: "A large natural elevation of the Earth's surface."
    },
    {
        word: "painting",
        hint: "An art form using colors on a surface to create images or expression."
    },
    {
        word: "astronomy",
        hint: "The scientific study of celestial objects and phenomena."
    },
    {
        word: "football",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "chocolate",
        hint: "A sweet treat made from cocoa beans."
    },
    {
        word: "butterfly",
        hint: "An insect with colorful wings and a slender body."
    },
    {
        word: "history",
        hint: "The study of past events and human civilization."
    },
    {
        word: "pizza",
        hint: "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        word: "jazz",
        hint: "A genre of music characterized by improvisation and syncopation."
    },
    {
        word: "camera",
        hint: "A device used to capture and record images or videos."
    },
    {
        word: "diamond",
        hint: "A precious gemstone known for its brilliance and hardness."
    },
    {
        word: "adventure",
        hint: "An exciting or daring experience."
    },
    {
        word: "science",
        hint: "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        word: "bicycle",
        hint: "A human-powered vehicle with two wheels."
    },
    {
        word: "sunset",
        hint: "The daily disappearance of the sun below the horizon."
    },
    {
        word: "coffee",
        hint: "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        word: "dance",
        hint: "A rhythmic movement of the body often performed to music."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },
];