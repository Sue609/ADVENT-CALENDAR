const wordsToFind = ['REINDEER', 'SNOWFLAKE', 'MISTLETOE', 'PRESENTS', 'SLEIGH', 'HOLIDAY'];

const wordSearchGrid = [
    ['H', 'O', 'L', 'I', 'D', 'A', 'Y', 'C'],
    ['R', 'E', 'I', 'N', 'D', 'E', 'E', 'R'],
    ['P', 'R', 'E', 'S', 'E', 'N', 'T', 'S'],
    ['S', 'N', 'O', 'W', 'F', 'L', 'A', 'K'],
    ['S', 'L', 'E', 'I', 'G', 'H', 'O', 'T'],
    ['M', 'I', 'S', 'T', 'L', 'E', 'T', 'O'],
    ['E', 'L', 'F', 'S', 'E', 'K', 'A', 'C'],
    ['G', 'I', 'F', 'T', 'S', 'G', 'N', 'S']
];

let selectedLetters = [];
let foundWords = [];

function generateWordSearch() {
    const table = document.getElementById('wordSearch');
    for (let i = 0; i < wordSearchGrid.length; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < wordSearchGrid[i].length; j++) {
            const cell = document.createElement('td');
            cell.textContent = wordSearchGrid[i][j];
            cell.setAttribute('data-row', i);
            cell.setAttribute('data-col', j);
            cell.addEventListener('click', handleClick);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

function handleClick(event) {
    const clickedCell = event.target;
    const row = parseInt(clickedCell.getAttribute('data-row'));
    const col = parseInt(clickedCell.getAttribute('data-col'));

    // Check if clicked cell is already selected
    const alreadySelected = selectedLetters.some(cell => cell.row === row && cell.col === col);
    if (alreadySelected) return;

    selectedLetters.push({ row, col });
    clickedCell.style.backgroundColor = 'lightblue';

    const word = getSelectedWord();
    if (word) {
        foundWords.push(word);
        alert(`Found word: ${word}`);
        clearSelectedLetters();
    }
}

function getSelectedWord() {
    const word = selectedLetters.map(cell => wordSearchGrid[cell.row][cell.col]).join('');
    for (const w of wordsToFind) {
        if (word === w) return word;
    }
    return null;
}

function clearSelectedLetters() {
    selectedLetters.forEach(cell => {
        const tableCell = document.querySelector(`[data-row="${cell.row}"][data-col="${cell.col}"]`);
        tableCell.style.backgroundColor = '';
    });
    selectedLetters = [];
}

generateWordSearch();
