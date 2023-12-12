function christmasChallenge() {
    const questions = [
        {
            question: "What is the traditional Christmas plant?",
            answers: ["Mistletoe", "Sunflower", "Poinsettia", "Tulip"],
            correctAnswer: "Poinsettia"
        },
        {
            question: "Which holiday drink is made from eggs, sugar, milk, and spices?",
            answers: ["Eggnog", "Mulled Wine", "Hot Chocolate", "Cider"],
            correctAnswer: "Eggnog"
        },
        // Add more Christmas-themed questions and answers here
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
    
}