function loadMemoryGameLogic() {
    const cards = document.getElementById('cards');
    const result = document.getElementById('result');
    let flippedCards = [];
    let matchedCards = [];

    // Create an array of card pairs (for a 4x4 grid)
    const cardValues = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];

    // Shuffle the cards
    const shuffledCards = cardValues.sort(() => Math.random() - 0.5);

    // Create the cards in the DOM
    shuffledCards.forEach((value, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = value;
        card.textContent = index + 1; // Just an example text
        card.addEventListener('click', flipCard);
        cards.appendChild(card);
    });

    function flipCard() {
        if (flippedCards.length < 2) {
            this.classList.add('flipped');
            flippedCards.push(this);
            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 1000);
            }
        }
    }

    function checkMatch() {
        if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
            flippedCards.forEach(card => {
                card.removeEventListener('click', flipCard);
                matchedCards.push(card);
            });
            if (matchedCards.length === shuffledCards.length) {
                result.textContent = 'Congratulations! You won!';
            }
        } else {
            flippedCards.forEach(card => card.classList.remove('flipped'));
        }
        flippedCards = [];
    }
}