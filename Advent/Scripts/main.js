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
                    content += `
                        <div class='day1-content'>
                            <h2>Seasons Geetings</h2>
                            <img  class='day1-img' src='/Advent/images/day1.jpg' alt='Day 1 Image'>
                            <p style='font-size: 18px;'>How are you doing this December</p>
                            <p style='font-size: 18px;'>🎄 Happy 1st of December! As we step into this magical month, may your days be filled with the warmth of love, the joy of giving, and the comfort of cherished moments.</p>
                            <p style='font-size: 18px;'>Embrace the spirit of kindness and let this month be a tapestry of beautiful memories waiting to unfold. Wishing you a December full of love and laughter!🌟</p>
                        </div>`;
                    break;

                case 'day2':
                    content += `
                        <div class='day2-content'>
                            <h2>Beauty of Hardwork</h2>
                            <img class='day2-img' src='/Advent/images/day2.png' alt='Day 2 Image'>
                            <p style='font-size: 18px;'>In the journey of pursuing greatness, challenges pave the path to triumph.
                                🛤️ Embrace the difficulties, for within them lie the seeds of growth and achievement.
                                🌱 Every obstacle is an opportunity to learn, to innovate, and to surpass limitations. 💡
                            </p>
                            <p style='font-size: 18px;'>Remember, the road to success often winds through the terrain of hard work, perseverance, and resilience. As you embark on this path, know that each hurdle overcome is a testament to your strength and determination. 
                                🏋️‍♂️ Believe in your capacity to #DoHardThings, for it's in these challenges that your true potential thrives. 💪</p>
                            <p style='font-size: 18px;'>Your perseverance today will sculpt the success stories of tomorrow. 
                                📖 Keep pushing forward; greatness awaits! 🚀
                            </p>
                            <h3>#DoHardThings</h3>
                        </div>
                    `;
                    break;
                    

                case 'day3':
                    content += `
                        <div class="fun-fact-container">
                            <h1>Daily Fun Fact</h1>
                            <img src='/Advent/images/night.avif' class='nightImage'>
                            <p>
                            Did you know that the tradition of decorating Christmas trees originated in Germany in the 16th century? It's believed that Martin Luther, the Protestant reformer, was the first to add lighted candles to a tree. He was inspired by the stars shining through the evergreen trees on a winter night and wanted to replicate the effect by placing candles on a fir tree.
                            </p>
                        </div>
                
                    `;
                    break;
                case 'day8':
                    content += `
                        <div class="recipe-container">
                            <h2>Fun Family Holiday Activities</h2>
                            <ol>
                                <li>Desing Christmas Cards</li>
                                <li>Keepsake gifts for loved ones</li>
                                <li>Watch classic Christmas movies(don't forget Home Alone 😊)</li>
                                <li>Baking - cookies, cakes, ginger bread</li>
                                <li>Decorating christmas tree</li>
                                <li>Feeding the street families</li>
                                <li>Cooking festive meals</li>
                                <li>Story telling</li>
                                <li>Taking pictures</li>
                                <li>Holiday guessing games</li>
                                <li>Hosting get-togethers</li>
                                <li>scavenger hunt</li>
                                <li>Movie Marathon</li>
                            </ol>  
                        </div>
                        `;
                    break;

                case 'day4':
                    content += `
                        <body onload='DesignArt()'>
                            <div class='container-day4'>
                                <h2>Artwork and Design</h2>
                                <P>Design your own christmass giftcard</p>
                                <div class='design-tools'>
                                    <button id="addText">Add Text</button>
                                    <input type='color' id='colorPicker'>
                                    <button id='penTool'>Pen</button>
                                    <input type="range" id="penSizeInput" min="1" max="20" value="5">
                                    <button id='saveDrawing'>Save</button>
                                    <button id="clearCanvas">Clear Canvas</button>
                                    <button id='showChristmasGIFs'>GIFs</button>
                                </div>
                                <div id ='christmasGIFs' style='display: none'>
                                    <img src='/Advent/images/day4-Images/christmas-tree.gif' class='christmasGIFs' style='width: 100px; height: 100px'>
                                    <img src='/Advent/images/day4-Images/gift.gif' class='christmasGIF' style='width: 100px; height: 100px'>
                                    <img src='/Advent/images/day4-Images/gift2.gif' class='christmasGIF' style='width: 100px; height: 100px'>
                                    <img src='/Advent/images/day4-Images/santa.gif' class='christmasGIF' style='width: 100px; height: 100px'>
                                    <img src='/Advent/images/day4-Images/santaStuck.gif' class='christmasGIF' style='width: 100px; height: 100px'>
                                    <img src='/Advent/images/day4-Images/snowman3.jpg' class='christmasGIF' style='width: 100px; height: 100px'>
                                    <img src='/Advent/images/day4-Images/snowman4.gif' class='christmasGIF' style='width: 100px; height: 100px'>
                                    <img src='/Advent/images/day4-Images/snowman5.jpg' class='christmasGIF' style='width: 100px; height: 100px'>
                                    <img src='/Advent/images/day4-Images/xmassTree.gif' class='christmasGIF' style='width: 100px; height: 100px'>
                                </div>
                                
                                <div>
                                    <canvas id='myCanvas'></canvas>
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

                case 'day6':
                    content += `
                            <h1>ALX Africa Courage Storytelling</h1>
                            <p>Share your story of courage with the community!</p>
                            <section id="purpose">
                                <h2>Purpose of the Activity</h2>
                                <p style='font-size: 18px;'>The Courage Storytelling activity aims to celebrate and acknowledge the diverse experiences of courage within our community.
                                    We believe that sharing personal stories of courage can inspire and support others, fostering a sense of connection and strength.
                                    Through this it could even align you with your potential employers and even make friends. The journey of software engineering is a lonely one
                                    but it does not have to be share your story and meet peers who align with your experiences.</p>
                            </section>

                            <section id="instructions">
                                <h2>Instructions</h2>
                                <p style='font-size: 18px;'>To participate, write your story of courage in the provided textarea below and click the 'Submit' button.
                                    It could be as simple as a leep of faith, a personal experience, a lesson learned, or an inspiring moment that showcases courage.</p>
                                </section>

                                <form id="storyForm">
                                <label for="story">Share Your Story:</label>
                                <textarea id="story" rows="8" placeholder="Write your story here..."></textarea>
                                <button type="submit">Submit</button>
                                <div id="submissionMessage" style="display: none;"></div>
                                </form>

                                <section id="thoughts">
                                <h2>Share Your Thoughts</h2>
                                <p style='font-size: 18px;'>We encourage you to reflect on the stories shared by others and engage in respectful discussions.
                                    Your thoughts and comments can provide support and encouragement to fellow community members.
                                    Kindly make the stories not more than 300 words. Thank you for your participations.
                                    
                                    </p>
                            </section>

                            <div id="storyContainer"></div>`
                    break;

                case 'day7':
                        content += 
                        
                        `<div class='recipe-container'>
                            <h1>Chocolate Chip Cookies Recipe</h1>

                            <p>Indulge in the delightful taste of homemade chocolate chip cookies.
                                This classic recipe is perfect for creating delicious treats to savor during the festive season.
                                Follow the steps below to bake your batch of scrumptious cookies!
                            </p>

                            <img class='cookies' src='/Advent/images/chocolateChip.jpg'>

                            <h2>Ingredients:</h2>
                            <ul>
                                <li>1 cup (2 sticks) unsalted butter, softened</li>
                                <li>3/4 cup granulated sugar</li>
                                <li>3/4 cup packed brown sugar</li>
                                <li>2 large eggs</li>
                                <li>1 teaspoon vanilla extract</li>
                                <li>2 1/4 cups all-purpose flour</li>
                                <li>1 teaspoon baking soda</li>
                                <li>1/2 teaspoon salt</li>
                                <li>2 cups semi-sweet chocolate chips</li>
                            </ul>
                            
                            <h2>Instructions:</h2>
                            <ol>
                                <li><strong>Preheat Oven:</strong> Preheat your oven to 350°F (175°C). Line baking sheets with parchment paper or lightly grease them.</li>
                                <li><strong>Cream Butter and Sugars:</strong> In a large mixing bowl, cream together the softened butter, granulated sugar, and brown sugar until light and fluffy.</li>
                                <li><strong>Add Eggs and Vanilla:</strong> Beat in the eggs, one at a time, until well combined. Stir in the vanilla extract.</li>
                                <li><strong>Combine Dry Ingredients:</strong> In a separate bowl, whisk together the all-purpose flour, baking soda, and salt.</li>
                                <li><strong>Mix Wet and Dry Ingredients:</strong> Gradually add the dry ingredients to the wet ingredients, mixing until just combined. Be careful not to overmix. Fold in the chocolate chips.</li>
                                <li><strong>Form Cookies:</strong> Drop rounded tablespoons of dough onto the prepared baking sheets, leaving space between each cookie.</li>
                                <li><strong>Bake:</strong> Place the baking sheets in the preheated oven and bake for 10-12 minutes, or until the edges are lightly golden.</li>
                                <li><strong>Cool and Store:</strong> Remove the cookies from the oven and let them cool on the baking sheets for a few minutes before transferring them to a wire rack to cool completely. Store in an airtight container.</li>
                            </ol>
                        </div>`;
                    break;

                case 'day9':
                    content += `
                            <div class='recipe-container'>
                                <h2>Nuggets of wisdom</h2>
                                <img src='/Advent/images/alx image.png' class='nightImage'>
                            </div>
                            `;
                    break;

                case 'day10':
                    content += `
                    <div class='day10'>
                        <h2 style='font-style: italics;'>Find Calm in Chaos: A Brief Escape</h2>
                        <iframe width="600" height="300" src="https://www.youtube.com/embed/hlWiI4xVXKY" frameborder="0" allowfullscreen></iframe>
                            <p style='font-size: 18px;'>Hey bestie! 😊</p>
                            <p style='font-size: 18px;'>How are you doing? 🌟</p>
                            <p style='font-size: 18px;'>I know how it feels – the never-ending to-do lists, the pressure to excel, and the weight of expectations. Trust me, I've been there too and still there juggling life and projects. 📚✨</p>
                            <p style='font-size: 18px;'>It's tough, isn't it? The feeling that you should always be doing more, achieving more. But here's the thing—I understand that feeling all too well. 🤔💭</p>
                            <p style='font-size: 18px;'>You're not alone in this. And sometimes, amidst the chaos, taking a moment seems impossible. But it's not. It's a small step, but a crucial one. 🌿🌼</p>
                            <p style='font-size: 18px;'>So, I'm here, just like you, to remind you to take a breather. Because you matter. Your well-being matters. You're doing great, even if it doesn't always feel that way. 💖</p>
                            <p style='font-size: 18px;'>Just 15 minutes. That's all it takes. Close your eyes, breathe, and listen to this calming instrumental. Let it be your sanctuary, your escape from the relentless pace. 🎶🌌</p>
                            <p style='font-size: 18px;'>You're enough. More than enough. Take this moment to acknowledge your efforts, sacrifices, and time spent. They are worth it. And your future self? They'll be beaming with pride at how far you've come. 🌟✨</p>
                            <p style='font-size: 18px;'>Don't let self-doubt cripple you and make you become your own enemy. Nip those negative thoughts in the bud. Take those 15 minutes. Relax. You're doing amazingly well, just as you are. 💪💙</p>
                    </div>`;
                    break;

                case 'day11':
                    content += 
                    `
                    <div class="recipe-container">
                        <h2>Did You Know? 🤔</h2>
                        <img src='/Advent/images/rudolph.webp' style='width: 500px; height: 300px;'>
                        <p style='font-size: 16px;'>"Rudolph the Red-Nosed Reindeer" was created by a department store chain, Montgomery Ward,
                        in 1939. Robert L. May, an advertising copywriter for the store, wrote the story as a 
                        promotional booklet distributed to children during the holiday season. It later became a b
                        eloved Christmas song and a classic character associated with Santa's reindeer team.</p>
                    </div>
                    `;
                    break;

                case 'day12':
                    content += `
                        <div class='recipe-container'>
                            <h2>Movie gallery</h2>
                            <p>Some of my top favourite holiday movies.</p>
                            <p>Which of these are your favourite? 😊</p>
                            <img src='/Advent/images/movies.png' style='width: 700px; height: 600px;'>                        
                        </div>
                        `;
                    break;

                case 'day13':
                    content += `
                        <div class='recipe-container'>
                            <h2>Sharing my ALX journey so far<h2>
                            <p>I rember applying to the ALX program just like yesterday. Infact I'll never forget the day
                            it was on 12th August 2022. I was both excited and nervous about the prospect of being accepted
                            as a student.</p>
                            <p>Forward to January 2023 I was accepted officially.  I was so scared about this journey especially coming
                            from a non-tech background. The first month was extremely hard no cap there was nothing easy about it. 
                            As I look back I remember battling 'Betty' during the first days that
                            was a nightmare I just did not understand the concept of 'Betty'.</p>
                            <p>Then came the 'Gates of Hell' what made so nervous about this project was the thought of differing
                            especially when reading online about how hard the project was anyway eventually we were able to conquer
                            the shell project.
                            I'm so grateful that ALX became my guiding light, providing an inclusive
                            platform that has continued to encourage diverse backgrounds and nurturing growth.</p>

                            <p>There has been so many concepts up until now that still seem alien which have become
                            stepping stones through engaging workshops, the mentorship and
                            even the projects have really impacted some very important skills especially the concept of
                            resilience and discipline.

                            This has become one of the best opportunities that I've gotten because through this I have been able to apply to 
                            even more scholarships which have been so rewarding and also being able to interact with like minded persons.</p>
                            <p>I have never had the courage to put myself out there and apply to numerous jobs at a go, through ALX the impact
                            to my career trajectory has been so profound, I'm more confident in my skills and the fact that I know the contribution
                            that I can make to a company. It has laid the foundation for a career built on determination and a hunger for continuous growth.
                            </p>
                            <p>My journey into software engineering through ALX Africa has been transformative. I'm grateful for the perseverance instilled
                                in me and the skills acquired.
                                I carry forward this newfound passion, eager to contribute meaningfully to the ever-evolving tech world.
                            </p>
                        </div>`;
                    break;

                case 'day14':
                    content += `
                        <div class="recipe-container">
                            <h2>Did You Know? 🤔</h2>
                            <p style='font-size: 16px;'>During World War I, a temporary truce occurred on Christmas Day in 1914.
                            Soldiers from both sides laid down their arms, sang carols, exchanged gifts,
                            and even played football (soccer) together in what is known as the 'Christmas Truce.'
                            This brief moment of peace amidst conflict showed the human spirit's capacity for compassion
                            and goodwill even in challenging times.</p>
                        </div>`;
                    break;
                    

                case 'day15':
                    content += `
                        <h2>Christmas Memory Card Game</h2>
                        <p style='font-size: 18px;'>Click on cards to reveal images.</p>
                        <p style='font-size: 18px;'>Match pairs to clear the board.</p>
                        <p style='font-size: 18px;'>Complete the game by finding all matches.</p>
                        <div class='day15-container'>
                            <div class="wrapper">
                                <ul class="cards">
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-1.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-6.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-3.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-2.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-1.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-5.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-2.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-6.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-3.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-4.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-5.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-4.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-4.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-4.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-4.png" alt="card-img">
                                        </div>
                                    </li>
                                    <li class="card">
                                        <div class="view front-view">
                                            <img src="/Advent/images/MemoryImages/question.png" alt="icon">
                                        </div>
                                        <div class="view back-view">
                                            <img src="/Advent/images/MemoryImages/img-4.png" alt="card-img">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        `;      
                        break;

                case 'day16':
                    content += `
                    <div class='recipe-container'>
                        <h2>Sliding Tile Puzzle</h3>
                        <div id="instructions">
                            <h3>Instructions</h3>
                            <p><strong>Objective:</strong> Rearrange the tiles to form the original image or correct number sequence.</p>
                            <p><strong>How to Play:</strong></p>
                            <ul>
                                <li>Drag and drop tiles in any direction to make a complete image</li>

                            </ul>
                        </div>
                    
                        <div class='body'>
                            <div id='board'>
                            </div>
                        </div>
                    </div>
                    `;
                    break;                  

                case 'day17':
                    content = `
                        <div class='recipe-container'>
                            <h2>Celebrating Leadership with Fred Swaniker</h2>
                            <img src='/Advent/images/fred_swaniker.jpg' alt='Fred Swaniker' style='width: 700px; height: 300px;'>
                            <p style='font-size: 16px;'>🎉 Today, I dedicate this day to Fred Swaniker, CEO of ALX.</p>
                            <p style='font-size: 16px;'>His vision transformed not just my life but countless others through ALX's educational opportunities.</p>
                            <p style='font-size: 16px;'>Thanks to his leadership, I received a scholarship that changed the trajectory of my future. 
                            🌟 His commitment to nurturing young leaders like me has empowered graduates worldwide, fostering a community of change-makers.</p>
                            <p style='font-size: 16px;'>🌍 Here's to Fred Swaniker's guidance and ALX's ethos of leadership, learning, and impact. #FredSwaniker #ALXImpact 🚀</p>
                            <h4 style='font-size: 16px;'>“All of us who are privileged enough to be healthy, to be alive, to have education and to have influence,
                                our role is not to do small things and to solve small problems,” Swaniker said.</h4>
                            <h4 style='font-size: 16px;'>“The only way that we can justify privilege is by solving the world's biggest problems, and by doing hard things.”</h4>
                        </div>`
                    break;

                case 'day18':
                    content += `
                        <h1>Holiday Word Search Puzzle</h1>
                        <table id="wordSearch">
                        </table>
                        `;
                        break;

                case 'day19':
                    content += `
                        <div class='recipe-container'>
                            <p>Various studies in the fields of psychology and education highlight the role of
                            education in developing critical thinking skills, problem-solving abilities, and fostering curiosity. 
                            Research often discusses how education shapes cognitive development 
                            and contributes to a person's overall mental abilities.</p>
                        </div>
                    `;
                    break;
                    
                case 'day20':
                    content += `
                        <h2>Write a Letter to Your Future Self</h2>
                        <form id="storyForm">
                            <label for="name">Your Name:</label>
                            <input type="text" id="name" name="name" required><br><br>
                        
                            <label for="challenges">A Challenging Experience:</label>
                            <input type="text" id="challenges" name="challenges" required><br><br>
                        
                            <label for="lesson">Lesson Learned:</label>
                            <textarea id="lesson" name="lesson" rows="3" cols="50" required></textarea><br><br>
                        
                            <label for="careerVision">Career Vision in 10 Years:</label>
                            <textarea id="careerVision" name="careerVision" rows="3" cols="50" required></textarea><br><br>
                        
                            <label for="personalGoals">Personal Goals in 10 Years:</label>
                            <textarea id="personalGoals" name="personalGoals" rows="3" cols="50" required></textarea><br><br>

                            <label for="currentLocation">Current Location:</label>
                            <input type="text" id="currentLocation" name="currentLocation" required><br><br>

                            <label for="currentEmotion">Current Emotion:</label>
                            <input type="text" id="currentEmotion" name="currentEmotion" required><br><br>

                            <label for="currentAchievement">Current Achievement:</label>
                            <input type="text" id="currentAchievement" name="currentAchievement" required><br><br>

                        
                            <label for="personalMessage">Personal Motto/Message:</label>
                            <input type="text" id="personalMessage" name="personalMessage" required><br><br>
                        
                            <button type="submit">Generate Letter</button>
                            <button id="downloadButton">Download as PDF</button>

                        </form>
                        <div id="storyOutput"></div>`;
                    break;

                case 'day22':
                    content += `
                        <div class="recipe-container">
                            <p class="buttons">Quick fire quiz!</p>
                            <p id="question">What is the traditional Christmas plant?</p>
                            <ul id="answers">
                                <li><button onclick="checkAnswer(this)" >Mistletoe</button></li>
                                <li><button onclick="checkAnswer(this)">Sunflower</button></li>
                                <li><button onclick="checkAnswer(this)">Poinsettia</button></li>
                                <li><button onclick="checkAnswer(this)">Tulip</button></li>
                            </ul>
                            <p id="result"></p>
                            <button onclick="nextQuestion()" class='buttons'>Next Question</button>
                        </div>`;
                    break;

                case 'day23':
                    content += `
                        <div class='recipe-container'>
                            <img src='/Advent/images/img.jpg'>
                        </div>
                    `;
                    break;

                case 'day24':
                    content += `
                    <div class='recipe-container'>
                        <div class='recipe-intro'>
                            <p>Unlock the joy of togetherness and create cherished moments with your loved ones this holiday season.
                            Treat your family to a delightful morning by whipping up these fluffy, homemade pancakes.</p>
                            <img class='pancakes' src='/Advent/images/pancakes.jpg'>
                        </div>
                        <div class="recipe-card">
                            <h2>Pancake Recipe</h2>
                            <ul>
                                <li>1 cup all-purpose flour</li>
                                <li>1 tablespoon granulated sugar</li>
                                <li>1 teaspoon baking powder</li>
                                <li>1/2 teaspoon baking soda</li>
                                <li>1/4 teaspoon salt</li>
                                <li>1 cup buttermilk</li>
                                <li>1 large egg</li>
                                <li>2 tablespoons unsalted butter, melted</li>
                                <li>Butter or oil for cooking</li>
                            </ul>
                            <h3>Instructions:</h3>
                            <ol>
                                <li>In a mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.</li>
                                <li>In another bowl, whisk together the buttermilk, egg, and melted butter.</li>
                                <li>Pour the wet ingredients into the dry ingredients and gently mix until just combined. Don't overmix; a few lumps are okay.</li>
                                <li>Heat a skillet or griddle over medium heat and lightly grease with butter or oil.</li>
                                <li>Pour about 1/4 cup of batter onto the skillet for each pancake. Cook until bubbles form on the surface, then flip and cook until golden brown on both sides.</li>
                                <li>Serve warm with your favorite toppings such as maple syrup, fresh fruits, or whipped cream.</li>
                            </ol>
                        </div>
                    </div>`;
                    break;

                case 'day25':
                    content += `
                        <div class="greeting">
                            <h1>Calming Christmas Wishes</h1>
                        </div>
                        <div class="message">
                            <p>Merry Christmas</p>
                            <p>As the holiday season wraps us in its warmth and love, may the peace and serenity of Christmas fill your heart and home.</p>
                            <p>Here's a soothing Christmas carol to accompany your moments of reflection and joy:</p>
                        <div class="video-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/AkgthWPHnrM" frameborder="0" allowfullscreen></iframe>
                        </div>
                    `;
                    break;

                case 'day26':
                    content += `
                        <div class='recipe-container'>
                            <img src='/Advent/images/Christmas.png'>
                        </div>
                    `;
                    break;
                case 'day27':
                    content += `
                    <div class="recipe-container">
                        <h1>Encouraging Giving During the Festive Season</h1>
                        <p>During this festive season, let's remember that kindness knows no boundaries.
                            While it's essential to support the less fortunate, let's also extend our
                            generosity to those who may not outwardly express their need. Sometimes,
                            a small act of kindness towards someone who might not ask for help can have
                            a profound impact. Reach out to neighbors, friends, or acquaintances who might
                            benefit from a caring gesture. Your generosity might brighten their holiday season
                            more than you could ever imagine.</p>
                            <h3>"Generosity is not about the size of the act but the intention behind it.
                            A simple gesture of kindness, whether big or small, has the power to create 
                            ripples of positive change in the world. Embrace the joy of giving without 
                            expecting anything in return, for it's in the act of selflessness that we find 
                            true fulfillment and make a meaningful difference in others' lives."</h3>

                    </div>`;
                    break;

                case 'day28':
                    content += `
                        <div class='recipe-container'>
                            <h2>Did you know?</h2>
                            <img src='/Advent/images/thinking.png' style='width: 700px; height: 400px;'>
                            <p>Did you know that studies show writing down your goals increases the likelihood of
                            achieving them by 42%? Setting pen to paper activates your brain's reticular activating system,
                            prompting it to recognize opportunities that align with your goals.</p>                        
                        </div>
                    `;
                    break;

                case 'day29':
                    content += `
                    <div class='recipe-container'>
                        <h2>Sliding Tile Puzzle</h3>
                        <div id="instructions">
                            <p>How well do you know the ALX logo</p>
                            <p><strong>Objective:</strong> Rearrange the tiles to form the original image or correct number sequence.</p>
                            <p><strong>How to Play:</strong></p>
                            <ul>
                                <li>Drag and drop tiles in any direction to make a complete image</li>
                            </ul>
                        </div>
                    
                        <div class='body'>
                            <div id='board'>
                            </div>
                        </div>
                    </div>
                    `;
                    break;
                
                
                case 'day30':
                    content += `
                        <div class='recipe-container'>
                            <h1>New Year's Resolution - Highlights</h1>
                            <p>As there years comes to an end lets make our weaknesses for the previous year
                                become our stength for this new year. Concentrate on making a positive impact this year
                                and set goals that are achieveable.</p>
        
                            <h2>Key Focus Areas:</h2>
                            <ol>
                                <li><strong>Personal Development:</strong>
                                    <ul>
                                        <li>Reflect on past achievements and areas for growth.</li>
                                        <li>Set SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound.</li>
                                        <li>Create an action plan and track progress regularly.</li>
                                        <li>Balance self-improvement with academic and personal life.</li>
                                    </ul>
                                </li>
                                <li><strong>Time Management for Studies:</strong>
                                    <ul>
                                        <li>Effective time allocation for studies.</li>
                                        <li>Set clear academic objectives and prioritize tasks.</li>
                                        <li>Continuous learning and exploring new subjects or skills.</li>
                                        <li>Maintain a balance between studies and personal well-being.</li>
                                    </ul>
                                </li>
                                <li><strong>Planning for Success:</strong>
                                    <ul>
                                        <li>Divide larger goals into smaller, manageable tasks.</li>
                                        <li>Allocate specific times for working towards each goal.</li>
                                        <li>Stay Accountable.</li>
                                        <li>Small steps each day.</li>
                                    </ul>
                                </li>
                                <li><strong>Staying Balanced:</strong>
                                    <ul>
                                        <li>Remember to keep a balance of self-care and maintain a balance between academic pursuits and personal well-being.</li>
                                        <li>Be adaptable and flexible in your goal-setting to accommodate changing circumstances.</li>
                                        <li>Remember to keep an acountability diary.</li>
                                    </ul>
                                </li>
                                <li><strong>Review and Adopt:</strong>
                                    <ul>
                                        <li>Periodically review your goals and make adjustments and tick off whatever you have been able to achieve.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    `;
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
                        content += "<button class='buttons' id='saveButton' style='font-size: 20px;'>Save Goals</button>";
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

            if (dayId === 'day6') {
                courageStories();
            }

            if (dayId === 'day15') {
                memoryGame();
            }

            if (dayId == 'day16') {
                puzzle();
            }
            if (dayId === 'day18') {
                generateWordSearch();
                handleClick();
                getSelectedWord();
                clearSelectedLetters();
            }


            if (dayId === 'day20') {
                futureIntrospection();
            }

            if (dayId === 'day22') {
                displayQuestion();
                checkAnswer();
                nextQuestion();
            }

            if (dayId === 'day29') {
                puzzleLogo();
            }
            
            if (dayId === 'day31') {
                document.getElementById('textColorPicker').addEventListener('change', changeTextColor);
                document.getElementById('fontSize').addEventListener('change', changeFontSize);
                document.getElementById('saveButton').addEventListener('click', saveGoals);
            }
        });
    });

});
