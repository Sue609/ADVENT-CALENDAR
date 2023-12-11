function holidayPuzzle() {
    let correctOrder = [1, 2, 3, 4]; // Change this array according to the correct order

    // Function to shuffle the puzzle pieces randomly
    function shufflePuzzle() {
        let puzzlePieces = document.querySelectorAll('.puzzle-piece');
        puzzlePieces.forEach(piece => {
            let randomPos = Math.floor(Math.random() * puzzlePieces.length);
            piece.style.order = randomPos;
        });
    }

    // Function to check if the puzzle is solved
    function checkSolution() {
        let puzzlePieces = document.querySelectorAll('.puzzle-piece');
        let currentOrder = Array.from(puzzlePieces).map(piece => parseInt(piece.textContent));
        
        let result = document.getElementById('result');
        if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
            result.textContent = "Congratulations! Puzzle solved!";
        } else {
            result.textContent = "Keep trying! Puzzle not solved yet.";
        }
    }

    shufflePuzzle(); // Shuffle the puzzle pieces when the game starts
    checkSolution(); // Check the solution after shuffling
}

// Call the holidayPuzzle function when the window loads
window.onload = holidayPuzzle;
