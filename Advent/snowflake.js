// Function to create snowflakes and red stars within intro-text
function createSnowflakesAndStarsInText() {
    const introText = document.querySelector('.intro-text');

    // Create snowflakes and red stars dynamically within intro-text
    for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Randomize animation delay
        introText.appendChild(snowflake);

        const redStar = document.createElement('div');
        redStar.classList.add('red-star');
        redStar.style.animationDelay = `${Math.random() * 5}s`; // Randomize animation delay
        introText.appendChild(redStar);
    }
}

// Call the function to generate snowflakes and red stars within text area
createSnowflakesAndStarsInText();