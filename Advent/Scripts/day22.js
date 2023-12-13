
    const questions = [
        {
            question: "What is the traditional Christmas plant?",
            answers: ["Mistletoe", "Sunflower", "Poinsettia", "Tulip"],
            correctAnswer: "Poinsettia"
        },

        {
            question: "What's the name of Kevin's next-door neighbor, who is initially feared to be the 'South Bend Shovel Slayer'?",
            answers: ["Old Man Marley", "Mr. McCallister", "Uncle Frank", "Gus Polinski"],
            correctAnswer: "Old Man Marley"
        },

        {
            question: "Which holiday drink is made from eggs, sugar, milk, and spices?",
            answers: ["Eggnog", "Mulled Wine", "Hot Chocolate", "Cider"],
            correctAnswer: "Eggnog"
        },

        {
            question: "Which country is credited with the tradition of putting up a Christmas tree?",
            answers: ["Korea", "Germany", "Britain", "Kiyosaki"],
            correctAnswer: "Germany"
        },

        {
            question: "In 'Home Alone' what does Kevin use to create the illusion of a holiday party in the house?",
            answers: ["Mannequins", "Cardboard Cutouts", "Puppets", "Robots"],
            correctAnswer: "Mannequins"
        },
    
        {
            question: "What popular Christmas treat is made from sugar, butter, and peppermint oil?",
            answers: ["Gingerbread Cookies", "Candy Canes", "Fruitcake", "Christmas Pudding"],
            correctAnswer: "Candy Canes"
        },

        {
            question: "Which country is credited with the creation of the Christmas beverage called 'Eggnog'?",
            answers: ["United States", "United Kingdom", "France", "Germany"],
            correctAnswer: "United Kingdom"
        },

        {
            question: "In the movie 'Home Alone,' where are the McCallisters going on vacation when they leave Kevin behind?",
            answers: ["Paris", "London", "Hawaii", "Florida"],
            correctAnswer: "Paris"
        },

        {
            question: "What gift do the three wise men or Magi present to baby Jesus in the Nativity story?",
            answer: ["silver", "gold", "titanium", "diamond"],
            correctAnswer: "gold"
        },

        {
            question: "Which Christmas song is known for its line: 'I don't want a lot for Christmas, there is just one thing I need'?",
            answer: [
                "feliz navidad",
                "All I Want for Christmas Is You",
                "o come all ye faithful",
                "amrusha",
            ],
            correctAnswer: "All I Want for Christmas Is You"
        },

        {
            question: "In the movie 'A Christmas Story,' what gift does Ralphie want for Christmas?",
            answer: ["Red Ryder BB gun", "Video game console", "Robot toy", "laptop"],
        }


    ];
    
    let currentQuestion = 0;
    let score = 0;
    
    function displayQuestion() {
        const questionDisplay = document.getElementById('question');
        const answersList = document.getElementById('answers');
        const current = questions[currentQuestion];
    
        questionDisplay.textContent = current.question;
        answersList.innerHTML = '';
    
        current.answers.forEach(answer => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = answer;
            button.onclick = function() { checkAnswer(this); };
            li.appendChild(button);
            answersList.appendChild(li);
        });
    }
    
    function checkAnswer(btn) {
        const selectedAnswer = btn.textContent;
        const current = questions[currentQuestion];
    
        if (selectedAnswer === current.correctAnswer) {
            score++;
            document.getElementById('result').textContent = 'Correct!';
        } else {
            document.getElementById('result').textContent = 'Wrong! The correct answer is: ' + current.correctAnswer;
        }
    }
    
    function nextQuestion() {
        currentQuestion++;
        document.getElementById('result').textContent = '';
    
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            document.body.innerHTML = '<h1>Quiz Complete!</h1><p>Your score: ' + score + ' out of ' + questions.length + '</p>';
        }
    }
    
    // Display the first question when the page loads
    window.onload = displayQuestion;
    
