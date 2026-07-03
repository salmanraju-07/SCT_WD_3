// Quiz Questions - Mix of types
const quizData = [
  {
    type: "single",
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: 1
  },
  {
    type: "multi",
    question: "Which of these are programming languages? (Select all that apply)",
    options: ["Python", "HTML", "JavaScript", "CSS"],
    answer: [0, 2]
  },
  {
    type: "single",
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: 2
  },
  {
    type: "fill",
    question: "The planet closest to the sun is ______.",
    answer: "Mercury"
  },
  {
    type: "multi",
    question: "Which of these are prime numbers?",
    options: ["2", "4", "7", "9", "11"],
    answer: [0, 2, 4]
  },
  {
    type: "fill",
    question: "HTML stands for HyperText ______ Language.",
    answer: "Markup"
  },
  {
    type: "single",
    question: "How many continents are there?",
    options: ["5", "6", "7", "8"],
    answer: 2
  }
];

let currentQuestion = 0;
let userAnswers = [];
let score = 0;

const quizBody = document.getElementById('quizBody');
const questionCount = document.getElementById('questionCount');
const progressBar = document.getElementById('progressBar');

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionCount.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
  progressBar.style.width = `${((currentQuestion) / quizData.length) * 100}%`;

  let html = `
    <div class="question-type">${getTypeLabel(q.type)}</div>
    <div class="question-text">${q.question}</div>
  `;

  if (q.type === "single") {
    html += `<div class="options">`;
    q.options.forEach((opt, i) => {
      const checked = userAnswers[currentQuestion] === i? 'checked' : '';
      html += `
        <label class="option ${checked? 'selected' : ''}">
          <input type="radio" name="answer" value="${i}" ${checked} onchange="selectOption(${i})">
          <span class="option-label">${opt}</span>
        </label>
      `;
    });
    html += `</div>`;
  }

  if (q.type === "multi") {
    html += `<div class="options">`;
    q.options.forEach((opt, i) => {
      const checked = userAnswers[currentQuestion]?.includes(i)? 'checked' : '';
      html += `
        <label class="option ${checked? 'selected' : ''}">
          <input type="checkbox" value="${i}" ${checked} onchange="selectMultiOption(${i})">
          <span class="option-label">${opt}</span>
        </label>
      `;
    });
    html += `</div>`;
  }

  if (q.type === "fill") {
    const val = userAnswers[currentQuestion] || '';
    html += `
      <div class="fill-blank">
        <input type="text" id="fillInput" placeholder="Type your answer..." value="${val}" oninput="saveFillAnswer()">
      </div>
    `;
  }

  html += `
    <div class="quiz-footer">
      ${currentQuestion > 0? `<button class="btn btn-secondary" onclick="prevQuestion()">Previous</button>` : '<div></div>'}
      <button class="btn btn-primary" id="nextBtn" onclick="nextQuestion()" ${!hasAnswer()? 'disabled' : ''}>
        ${currentQuestion === quizData.length - 1? 'Finish Quiz' : 'Next Question'}
      </button>
    </div>
  `;

  quizBody.innerHTML = html;
}

function getTypeLabel(type) {
  const labels = {
    single: "Single Choice",
    multi: "Multiple Choice",
    fill: "Fill in the Blank"
  };
  return labels[type];
}

function selectOption(index) {
  userAnswers[currentQuestion] = index;
  document.querySelectorAll('.option').forEach((el, i) => {
    el.classList.toggle('selected', i === index);
  });
  document.getElementById('nextBtn').disabled = false;
}

function selectMultiOption(index) {
  if (!userAnswers[currentQuestion]) userAnswers[currentQuestion] = [];
  const arr = userAnswers[currentQuestion];
  const idx = arr.indexOf(index);

  if (idx > -1) {
    arr.splice(idx, 1);
  } else {
    arr.push(index);
  }

  document.querySelectorAll('.option')[index].classList.toggle('selected');
  document.getElementById('nextBtn').disabled = arr.length === 0;
}

function saveFillAnswer() {
  userAnswers[currentQuestion] = document.getElementById('fillInput').value.trim();
  document.getElementById('nextBtn').disabled = userAnswers[currentQuestion] === '';
}

function hasAnswer() {
  const ans = userAnswers[currentQuestion];
  if (quizData[currentQuestion].type === "multi") {
    return ans && ans.length > 0;
  }
  return ans!== undefined && ans!== '' && ans!== null;
}

function nextQuestion() {
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResults();
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

function calculateScore() {
  score = 0;
  quizData.forEach((q, i) => {
    const userAns = userAnswers[i];

    if (q.type === "single") {
      if (userAns === q.answer) score++;
    }

    if (q.type === "multi") {
      if (userAns && arraysEqual(userAns.sort(), q.answer.sort())) score++;
    }

    if (q.type === "fill") {
      if (userAns && userAns.toLowerCase() === q.answer.toLowerCase()) score++;
    }
  });
}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}

function showResults() {
  calculateScore();
  progressBar.style.width = '100%';
  questionCount.textContent = 'Quiz Complete!';

  const percentage = Math.round((score / quizData.length) * 100);
  let message = "";
  if (percentage >= 90) message = "Outstanding! 🎉";
  else if (percentage >= 70) message = "Great job! 👏";
  else if (percentage >= 50) message = "Good effort! 👍";
  else message = "Keep practicing! 💪";

  let html = `
    <div class="results">
      <div class="score-circle">
        <div class="score-number">${score}/${quizData.length}</div>
        <div class="score-label">${percentage}%</div>
      </div>
      <div class="result-message">${message}</div>
      <div class="result-details">You answered ${score} out of ${quizData.length} questions correctly</div>
      <button class="btn btn-primary" onclick="restartQuiz()">Try Again</button>

      <div class="answer-review">
        <h3 style="margin-bottom:20px; color:#1e3c72;">Review Your Answers</h3>
  `;

  quizData.forEach((q, i) => {
    const userAns = userAnswers[i];
    let isCorrect = false;
    let userAnsText = "";
    let correctAnsText = "";

    if (q.type === "single") {
      isCorrect = userAns === q.answer;
      userAnsText = userAns!== undefined? q.options[userAns] : "No answer";
      correctAnsText = q.options[q.answer];
    }

    if (q.type === "multi") {
      isCorrect = userAns && arraysEqual(userAns.sort(), q.answer.sort());
      userAnsText = userAns?.length? userAns.map(idx => q.options[idx]).join(", ") : "No answer";
      correctAnsText = q.answer.map(idx => q.options[idx]).join(", ");
    }

    if (q.type === "fill") {
      isCorrect = userAns && userAns.toLowerCase() === q.answer.toLowerCase();
      userAnsText = userAns || "No answer";
      correctAnsText = q.answer;
    }

    html += `
      <div class="review-item">
        <div class="review-question">${i + 1}. ${q.question}</div>
        <div class="review-answer">
          Your answer: <span class="${isCorrect? 'correct' : 'incorrect'}">${userAnsText}</span>
          ${!isCorrect? `<br>Correct answer: <span class="correct">${correctAnsText}</span>` : ''}
        </div>
      </div>
    `;
  });

  html += `</div></div>`;
  quizBody.innerHTML = html;
}

function restartQuiz() {
  currentQuestion = 0;
  userAnswers = [];
  score = 0;
  loadQuestion();
}

// Start quiz
loadQuestion();