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
    let timeRemaining = 100; // Total time in seconds (adjust as needed)

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
        timeRemaining = 0; // Reset the time
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
        word: "swaniker",
        hint: "The founder of ALX Africa. But do you know his second name "
    },
    {
        word: "dohardthings",
        hint: "ALX's rallying call urging individuals to embrace challenges, break barriers, and grow through perseverance and determination."
    },

    {
        word: "christmas",
        hint: "During this festive season, it's a time of giving, joy, and merriment celebrated worldwide with decorations, gifts, and gatherings."
    },

    {
        word: "mastercard",
        hint: "Financial empowerment partner supporting ALX's mission to cultivate leadership and innovation through access to resources and opportunities.."
    },

    {
        word: "alx_ai",
        hint: "What is the popular hashtag for the latest unique and visionary initiative meticulously designed by Kalkidan Betre and Julien Barbier that is available for ALX graduates"
    },
    
    {
        word: "orchestra",
        hint: "A large ensemble of musicians playing various instruments."
    },

    {
        word: "Irene",
        hint: "The Community whisperer Your #1 Cheerleader through your learning journey",
    },

    {
        word: "mastercard",
        hint: "Our partnership with __ Foundation allows us to offer eligible candidates access to world-class programme training at no cost"
    }
];