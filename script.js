const questions = [
    {
        question: "Who's the oldest in our family?",
        options: ["Asma", "Adil", "Abdullah", "Ahamed"],
        correctAnswer: "Asma"
    },
    {
        question: "When did I born?",
        options: ["30-8-2004", "30-5-2004", "30-10-2004", "30-10-2005"],
        correctAnswer: "30-10-2004"
    },
    {
        question: "What is the food I used to eat a lot?",
        options: ["Kurkure", "Appu", "Company rotti", "KinderJoy"],
        correctAnswer: "Company rotti"
    },
    {
        question: "Do I look handsome?",
        options: ["yes", "yep", "ofcourse", "Obviously"],
        correctAnswer: "Obviously"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const scoreElement = document.getElementById("score");

    const currentQuestion = questions[currentQuestionIndex];

    questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`;

    optionsContainer.innerHTML = currentQuestion.options.map((option, index) =>
        `<button onclick="checkAnswer('${option}')">${option}</button>`
    ).join('');

    scoreElement.innerHTML = `Score: ${score}`;
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
        score++;
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}


// ... (previous code)

function retryQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    document.getElementById("retry-button").style.display = "none";
    document.getElementById("next-button").style.display = "block";
}

function endQuiz() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<h1>Quiz Completed</h1>
                                <p>Your final score is: ${score} out of ${questions.length}</p>`;
    toggleButtonVisibility("next-button", false);
    toggleButtonVisibility("retry-button", true);
}

function toggleButtonVisibility(buttonId, isVisible) {
    const button = document.getElementById(buttonId);
    button.style.display = isVisible ? "block" : "none";
}

// Initial load
loadQuestion();


