let correctAnswers = 0; // Variable to track correct answers
let time = 60;
let timerInterval;

// Function to start the quiz
function startQuiz() {
    // Hide start screen and show questions
    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('questions').classList.remove('hide');

    // Show feedback element
    document.getElementById('feedback').classList.remove('hide');

    // Start timer
    startTimer();

    // Display first question
    displayQuestion();
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(function () {
        time--;
        document.getElementById('time').textContent = time;

        if (time <= 0) {
            endQuiz();
        }
    }, 1000);
}

// Function to display questions
function displayQuestion() {
    
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question-title').textContent = currentQuestion.question;
    
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = `${index + 1}. ${answer}`;
        button.addEventListener('click', function() {
            handleAnswer(index);
        });
        choicesContainer.appendChild(button);
    });
}

// Function to handle user's answer
function handleAnswer(index) {
    if (isAnswerCorrect(index)) {
        correctAnswers++; // Increment correct answers count
        playCorrectSound();
        displayFeedback('Correct!');
    } else {
        time -= 10; // Subtract 10 seconds for incorrect answer
        if (time < 0) time = 0; // Ensure time doesn't go negative
        playIncorrectSound();
        displayFeedback('Incorrect.');
        document.getElementById('time').textContent = time; // Update timer display
    }

    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// Function to display feedback
function displayFeedback(message) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = message;
    feedbackElement.classList.remove('hide'); // Ensure feedback is visible
}

// Function to play the correct sound effect
function playCorrectSound() {
    const correctSound = document.getElementById("correctSound");
    correctSound.play();
}

// Function to play the incorrect sound effect
function playIncorrectSound() {
    const incorrectSound = document.getElementById("incorrectSound");
    incorrectSound.play();
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timerInterval);
    // Display score and allow user to save initials and score
    document.getElementById('final-score').textContent = correctAnswers; // Display correct answers as score
    document.getElementById('end-screen').classList.remove('hide');
}

// Function to save high score and redirect to highscores page
function saveHighScore() {
    const initials = document.getElementById('initials').value.trim();
    if (initials !== '') {
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        const newScore = { initials, score: correctAnswers }; // Use correctAnswers as the score
        highScores.push(newScore);
        localStorage.setItem('highScores', JSON.stringify(highScores));
        // Redirect to highscores page
        window.location.href = 'highscores.html';
    }
}

// Function to clear highscores
function clearHighscores() {
    localStorage.removeItem('highScores');
    displayHighscores(); // Refresh highscores list
}

// Event listener for start button
document.getElementById('start').addEventListener('click', startQuiz);

// Event listener for submit button
document.getElementById('submit').addEventListener('click', saveHighScore);
