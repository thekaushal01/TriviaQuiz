// script.js
const questions = [
  {
    question: "What is the name of the tallest grass?",
    options: ["Lawn grass", "Giant Bamboo", "Scutch grass", "Pampas grass"],
    correctAnswer: 2
  },
  {
    question: "What is the most abundant element on earth?",
    options: ["Bronze", "Platinum", "Hydrogen", "Oxygen"],
    correctAnswer: 3
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    correctAnswer: 2
  },
  {
    question: "Which element has the chemical symbol O?",
    options: ["Oxygen", "Gold", "Osmium", "Ozone"],
    correctAnswer: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadNextQuestion() {
  if (currentQuestionIndex >= questions.length) {
    showFinalScore();
    return;
  }

  const question = questions[currentQuestionIndex];
  document.getElementById('question').textContent = question.question;

  const buttons = document.querySelectorAll('.answer-button');
  question.options.forEach((option, index) => {
    buttons[index].textContent = option;
  });

  document.getElementById('result-container').style.display = 'none';
  document.getElementById('next-button').style.display = 'none';
}

function checkAnswer(selectedIndex) {
  const question = questions[currentQuestionIndex];
  
  if (selectedIndex === question.correctAnswer) {
    score++;
    document.getElementById('result').textContent = "Correct!";
  } else {
    document.getElementById('result').textContent = "Wrong!";
  }

  document.getElementById('result-container').style.display = 'block';
  document.getElementById('next-button').style.display = 'inline-block';
  currentQuestionIndex++;
}

function showFinalScore() {
  document.getElementById('final-score').style.display = 'block';
  document.getElementById('score').textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById('quiz-container').style.display = 'block';
  document.getElementById('final-score').style.display = 'none';
  loadNextQuestion();
}


loadNextQuestion();
