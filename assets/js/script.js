// questions array
const quizData = [
  {
    question:
      "Which of the following element is responsible for making the text italic in HTML?",
    a: "1. <i>",
    b: "2. <italic>",
    c: "3. <it>",
    d: "4. <pre>",
    correct: "a",
  },
  {
    question: "Which HTML attribute is used to define the internal stylesheet?",
    a: "1. <style>",
    b: "2. style",
    c: "3. <link>",
    d: "4. <script>",
    correct: "a",
  },
  {
    question:
      "Which of the following property is used as the shorthand property for the padding properties?",
    a: "1. padding-left",
    b: "2. padding-right",
    c: "3. padding",
    d: "4. All of the above",
    correct: "c",
  },
  {
    question:
      "The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
    a: "1. writing-mode",
    b: "2. text-indent",
    c: "3. word-break",
    d: "4. None of the above",
    correct: "a",
  },
  {
    question:
      "Which oone of the following also known as Conditional Expression?",
    a: "1. Alternative to if-else",
    b: "2. Switch statement",
    c: "3. If-then-else statement",
    d: "4. immediate if",
    correct: "d",
  },
];



var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var startPage = document.getElementById('start-page');
var highscore = document.getElementById("view_highscore_link");

var currentQuestionindex = 0;

// timer
let score = 0;
let answers
var timerCount = 75;
var time = document.getElementById("time");

function startTimer() {
    time.innerText = timerCount;
    timerCount--;
  var timerDisplay = setInterval(function () {
    time.innerHTML = timerCount;
    timerCount = timerCount - 1;
    if (timerCount < 0) {
      clearInterval(timerDisplay);
    }
  }, 1000);
}
// End of timer function

// Hiding intro page and starting quiz
function questions () {
    quiz.classList.remove("hide");
}
function intro () {
  startBtn.classList.add('hide');
  startPage.classList.add('hide');
}
function startQuiz() {
    startTimer();
}

function loadQuiz() {
    var currentQuestion = quizData[currentQuestionindex];
    // questionEl.innerText = "<p>" + currentQuestion.question + "</p>";
    a_text.innerHTML = currentQuestion.a;
    b_text.innerHTML = currentQuestion.b;
    c_text.innerHTML = currentQuestion.c;
    d_text.innerHTML = currentQuestion.d;

};



// function intro() {
//     const currentQuizData = quizData[currentQuiz];

//     questionEl.innerText = currentQuizData.a;
//     a.innerText = currentQuizData.a;
//     b.innerText = currentQuizData.b;
//     c.innerText = currentQuizData.c;
//     d.innerText = currentQuizData.d;
// }

// startBtn.addEventListener("click", startTimer);
// startBtn.addEventListener("click", questions);
