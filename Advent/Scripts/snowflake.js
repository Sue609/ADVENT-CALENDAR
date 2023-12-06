// Function to create snowflakes and red stars within intro-text
function createSnowflakesAndStarsInText() {
    const introText = document.querySelector('.intro-text');

    // Create snowflakes and red stars dynamically within intro-text
    for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Randomize animation delay
        setRandomPosition(snowflake); // Set random position within intro-text
        introText.appendChild(snowflake);

        const redStar = document.createElement('div');
        redStar.classList.add('red-star');
        redStar.style.animationDelay = `${Math.random() * 5}s`; // Randomize animation delay
        setRandomPosition(redStar); // Set random position within intro-text
        introText.appendChild(redStar);
    }
}

// Function to set random position within the intro-text
function setRandomPosition(element) {
    const introTextWidth = document.querySelector('.intro-text').offsetWidth;
    const introTextHeight = document.querySelector('.intro-text').offsetHeight;
    const randomX = Math.floor(Math.random() * introTextWidth);
    const randomY = Math.floor(Math.random() * introTextHeight);
    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
}

// Call the function to generate snowflakes and red stars within text area
createSnowflakesAndStarsInText();
