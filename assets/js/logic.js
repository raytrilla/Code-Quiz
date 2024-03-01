// Variables to store quiz state
let currentQuestionIndex = 0;
let time = 60;
let timerInterval;

// Function to start the quiz
function startQuiz() {
    // Hide start screen and show questions
    document.getElementById('start-screen').classList.add('hide');
    document.getElementById('questions').classList.remove('hide');
    
    // Start timer
    startTimer();

    // Display first question
    displayQuestion();
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(function() {
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
        button.textContent = answer;
        button.addEventListener('click', function() {
            handleAnswer(index);
        });
        choicesContainer.appendChild(button);
    });
}

// Function to handle user's answer
function handleAnswer(index) {
    if (isAnswerCorrect(index)) {
        // Provide feedback for correct answer
        document.getElementById('feedback').textContent = "Correct!";
    } else {
        // Provide feedback for incorrect answer
        document.getElementById('feedback').textContent = "Incorrect!";
        // Penalize time for incorrect answer
        time -= 10; // Penalize by 10 seconds
        document.getElementById('time').textContent = time; // Update displayed time
    }

    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// Function to end the quiz
function endQuiz() {
    clearInterval(timerInterval);
    // Code to display score and allow user to save initials and score
}

// Event listener for start button
document.getElementById('start').addEventListener('click', startQuiz);
