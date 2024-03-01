// Array of questions
const questions = [
    {
        question: 'What is the result of the following expression: 2 + 2 * 2?',
        answers: ['4', '6', '8', '10'],
        correctIndex: 2
    },
    {
        question: 'How do you declare a variable in JavaScript?',
        answers: ['var', 'let', 'const', 'All of the above'],
        correctIndex: 3
    },
    {
        question: 'What is the correct way to write a comment in JavaScript?',
        answers: ['// This is a comment', '<!-- This is a comment -->', '/* This is a comment */', '# This is a comment'],
        correctIndex: 0
    },
    {
        question: 'Which built-in method removes the last element from an array and returns that element?',
        answers: ['pop()', 'shift()', 'push()', 'unshift()'],
        correctIndex: 0
    },
    {
        question: 'What does the === operator do in JavaScript?',
        answers: ['Assigns a value to a variable', 'Checks for strict equality', 'Checks for loose equality', 'None of the above'],
        correctIndex: 1
    },
    {
        question: 'How do you write an if statement in JavaScript?',
        answers: ['if x == 5 then { ... }', 'if (x = 5) { ... }', 'if (x === 5) { ... }', 'if x = 5 { ... }'],
        correctIndex: 2
    },
    {
        question: 'Which function is used to parse a string to an integer in JavaScript?',
        answers: ['parseInt()', 'parseFloat()', 'toInt()', 'parseInt() and parseFloat()'],
        correctIndex: 0
    },
    {
        question: 'What is the output of typeof null in JavaScript?',
        answers: ['"null"', '"object"', '"undefined"', '"number"'],
        correctIndex: 1
    },
    {
        question: 'How do you access the third element of an array named arr?',
        answers: ['arr[2]', 'arr[3]', 'arr.third', 'arr.getElement(3)'],
        correctIndex: 0
    },
    {
        question: 'What does the setTimeout() function do in JavaScript?',
        answers: ['Pauses the execution of a function', 'Executes a function after a specified delay', 'Resets the timer', 'None of the above'],
        correctIndex: 1
    }
];
let currentQuestionIndex = 0; // Initialize to the first question
// Function to display current question
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

// Function to check if the answer is correct
function isAnswerCorrect(index) {
    return index === questions[currentQuestionIndex].correctIndex;
}
