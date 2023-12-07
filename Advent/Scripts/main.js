document.addEventListener('DOMContentLoaded', function() {
    const days = document.querySelectorAll('.day');
    const contentDisplay = document.getElementById('contentDisplay');

    // Functions for changing text color, font size, and saving goals
    function changeTextColor() {
        const textColor = document.getElementById('textColorPicker').value;
        document.getElementById('goalTextArea').style.color = textColor;
    }

    function changeFontSize() {
        const fontSize = document.getElementById('fontSize').value;
        document.getElementById('goalTextArea').style.fontSize = fontSize;
    }

    function saveGoals() {
        const goals = document.getElementById('goalTextArea').value;
        // Save goals to storage or backend
        alert("Goals saved successfully!");
    }

    // Iterating through each day and adding click event listeners
    days.forEach(day => {
        day.addEventListener('click', function(){

            // Getting the id element of the clicked day
            const dayId = this.id;
            let content = ""

            switch (dayId) {
                case 'day1':
                    content = "<h2>Day 1</h2><p>How are you doing this December</p>";
                    content += "<p style='font-size: 20px;'>🎄 Happy 1st of December! As we step into this magical month, may your days be filled with the warmth of love, the joy of giving, and the comfort of cherished moments.</p>"
                    content += "<p style='font-size: 20px;'>Embrace the spirit of kindness and let this month be a tapestry of beautiful memories waiting to unfold. Wishing you a December full of love and laughter!🌟</p>"
                    
                    content += "<img src='/Advent/images/day1.jpg' alt='Day 1 Image' style='width: 400px; height: 200px;'>";
                    break;

                case 'day2':
                    content = "<h2>Day 2 Content</h2>";
                    content += "<p style='font-size: 20px;'>In the journey of pursuing greatness, challenges pave the path to triumph. 🛤️ Embrace the difficulties, for within them lie the seeds of growth and achievement. 🌱 Every obstacle is an opportunity to learn, to innovate, and to surpass limitations. 💡</p>";
                    content += "<p style='font-size: 20px;'>Remember, the road to success often winds through the terrain of hard work, perseverance, and resilience. As you embark on this path, know that each hurdle overcome is a testament to your strength and determination. 🏋️‍♂️ Believe in your capacity to #DoHardThings, for it's in these challenges that your true potential thrives. 💪</p>";
                    content += "<p style='font-size: 20px;'>Your perseverance today will sculpt the success stories of tomorrow. 📖 Keep pushing forward; greatness awaits! 🚀</p>";
                    content += "<img src='/Advent/images/day2.png' alt='Day 2 Image' style='width: 400px; height: 200px;'>";
                    content += "<h3>#DoHardThings</h3>";
                    break;
                    

                case 'day3':
                    content = "<h2>Day 3 Content</h2><p>Content for Day 3</p>";
                    content += "<img src='/Advent/images/day3.jpg' alt='Day 3 Image' alt='Day 1 Image' style='width: 400px; height: 200px;'>";
                    break;

                case 'day4':
                    content += `
                        <body onload='DesignArt()'>
                            <div class='container-day4'>
                                <h2>Artwork and Design</h2>
                                <P>Design your own christmass giftcard</p>
                                <div class='design-tools'>
                                    <input type='color' id='colorPicker'>
                                    <button id='penTool'>Pen</button>
                                    <input type='text' id='textInput' placeholder'start designing...'>
                                    <button id='rectangleTool'>Rectangle</button>
                                    <button id='saveButton'>Save</button>
                                    <button id="undoButton">Undo</button>
                                    <button id="clearButton">Clear</button>
                                    <button id='showChristmasGIFs'>GIFs</button>
                                    <div id ='christmasGIFs' style='display: none'>
                                        <img src='/Advent/images/day4-Images/christmas-tree.gif' class='christmasGIFs'>
                                        <img src='/Advent/images/day4-Images/gift.gif' class='christmasGIFs'>
                                        <img src='/Advent/images/day4-Images/gift2.gif' class='christmasGIFs'>
                                        <img src='/Advent/images/day4-Images/santa.gif' class='christmasGIFs'>
                                        <img src='/Advent/images/day4-Images/santaStuck.gif' class='christmasGIFs'>
                                        <img src='/Advent/images/day4-Images/snowman3.jpg' class='christmasGIFs'>
                                        <img src='/Advent/images/day4-Images/snowman4.gif' class='christmasGIFs'>
                                        <img src='/Advent/images/day4-Images/snowman5.jpg' class='christmasGIFs'>
                                        <img src='/Advent/images/day4-Images/xmassTree.gif' class='christmasGIFs'>
                                    </div>
                                </div>
                                <div>
                                    <canvas id='myCanvas' width='400' height='400'></canvas>
                                </div>
                            </div>
                        <body>    
                    `;
                    break;

                case 'day5':
                    content += `
                        <body class="body-game">
                        <!-- Inside your game box where the hangman, word display, and keyboard are located -->
                        <div class="timer-box">
                            <span class="timer">Time: 0 seconds</span>
                        </div>

                        <div class="game-modal">
                            <div class="content">
                                <img src="/Advent/images/hangman_images/victory.gif" alt="gif">
                                <h4>Game Over!</h4>
                                <p>The correct word was: <b>rainbow</b></p>
                                <button class="play-again">Play Again</button>
                            </div>
                        </div>
                        <div class="container">
                            <div class="hangman-box">
                                <img src="/Advent/images/hangman_images/hangman-0.svg" draggable="false" alt="hangman-img">
                                <h1>Hangman Game</h1>
                            </div>
                            <div class="game-box">
                                <ul class="word-display"></ul>
                                <h4 class="hint-text">Hint: <b></b></h4>
                                <h4 class="guesses-text">Incorrect guesses: <b></b></h4>
                                <div class="keyboard"></div>
                            </div>
                        </div>
                    </body>`;
                    break;

                case 'day15':
                    content = "<h2>Ready to play a Memory Game!</h2>";
                    content += "<div class='memory-game'>";
                    content += "<div class='cards' id='cards'></div>";
                    content += "<div class='result' id='result'></div>";
                    content += "</div>";
                    content+= "<script "            
                    break;
                    

                case 'day17':
                    content = "<h2>Day 17: Celebrating Leadership with Fred Swaniker</h2>";
                    content += "<p style='font-size: 20px;'>🎉 Today, I dedicate this day to Fred Swaniker, CEO of ALX.</p>";
                    content += "<p style='font-size: 20px;'>His vision transformed not just my life but countless others through ALX's educational opportunities.</p>";
                    content += "<p style='font-size: 20px;'>Thanks to his leadership, I received a scholarship that changed the trajectory of my future. 🌟 His commitment to nurturing young leaders like me has empowered graduates worldwide, fostering a community of change-makers.</p>";
                    content += "<p style='font-size: 20px;'>🌍 Here's to Fred Swaniker's guidance and ALX's ethos of leadership, learning, and impact. #FredSwaniker #ALXImpact 🚀</p>";
                    content += "<img src='/Advent/images/fred_swaniker.jpg' alt='Fred Swaniker' style='width: 700px; height: 400px;'>";
                    content += "<h4 style='font-size: 20px;'>“All of us who are privileged enough to be healthy, to be alive, to have education and to have influence, our role is not to do small things and to solve small problems,” Swaniker said.</h4>";
                    content += "<h4 style='font-size: 20px;'>“The only way that we can justify privilege is by solving the world's biggest problems, and by doing hard things.”</h4>";
                    break;   
                

                case 'day31':
                    content = "<h2>Set Your 2024 Goals</h2>";
                    content += "<label for='textColor' style='font-size: 20px;'>Choose Text Color:</label>";
                    content += "<input type='color' id='textColorPicker'>";
                    content += "<label for='fontSize' style='font-size: 20px;'>Choose Font Size:</label>";
                    content += "<select id='fontSize'>";
                    content += "<option value='12px'>12px</option>";
                    content += "<option value='14px'>14px'>14px</option>";
                    content += "<option value='16px'>16px'>16px</option>";
                    content += "</select>";
                    content += "<textarea id='goalTextArea' rows='5' placeholder='Write your goals here...'></textarea>";
                    content += "<button class='day31-button' id='saveButton' style='font-size: 20px;'>Save Goals</button>";
                    break;

                default:
                    content = "<p>No content available.</p>";
            }

            contentDisplay.innerHTML = content;

            if (dayId === 'day4') {
                DesignArt();
            }

            if (dayId === 'day5') {
                hangmanGame();
            }

            if (dayId === 'day15') {
                loadMemoryGameLogic();
            }
            
            if (dayId === 'day31') {
                document.getElementById('textColorPicker').addEventListener('change', changeTextColor);
                document.getElementById('fontSize').addEventListener('change', changeFontSize);
                document.getElementById('saveButton').addEventListener('click', saveGoals);
            }
        });
    });

});
