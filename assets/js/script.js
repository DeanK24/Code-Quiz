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
      "Which of the following also known as Conditional Expression?",
    a: "1. Alternative to if-else",
    b: "2. Switch statement",
    c: "3. If-then-else statement",
    d: "4. immediate if",
    correct: "d",
  },
];



var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("questions");
var a_text = document.getElementById("a");
var b_text = document.getElementById("b");
var c_text = document.getElementById("c");
var d_text = document.getElementById("d");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var startPage = document.getElementById('start-page');
var highscore = document.getElementsByClassName("highscore")[0];
var selected = false;
var selectedAnswer = "";
var initials = document.getElementById('initials');
var submitScoreBtn = document.getElementsByClassName('submit');
var leaderBoard = document.getElementsByClassName('highscorelist');


var currentQuestionindex = 0;

function highScore () {
  highscore.classList.remove('hide');
  quiz.classList.add('hide');
  document.querySelector(".h2highscore").innerHTML = "Your highscore is " + timerCount + `&nbsp;&nbsp;&nbsp;&nbsp;<input placeholder="Initials here" type="text" name="highscore" id="initials">`;
}

function handleInitials() {
  initials = document.getElementById('initials');
  console.log(initials.value);
}




// timer
let score = 0;
var timerCount = 75;
var time = document.getElementById("time");

function startTimer() {
    time.innerText = timerCount;
    timerCount--;
  var timerDisplay = setInterval(function () {
    time.innerHTML = timerCount;
    timerCount = timerCount - 1;
    if (timerCount < 0 || !highscore.classList.contains('hide')) {
      clearInterval(timerDisplay);
      // highScore()
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


// submitScoreBtn.addEventListener("click", function saveScores() {
//   if (initials.value === "") {
//     alert("Initials cannot be blank!");
//     return false;
//   } else {
//     var savedScores = JSON.parse(localStorage.getItem("savedScores")) || [];
//     var currentPlayer = initials.value.trim();
//     var currentHighscore = {
//       name : currentPlayer,
//       score : score
//     };

//   }
// });

// loading the quiz
function loadQuiz() {
    var currentQuestion = quizData[currentQuestionindex];
    questionEl.textContent = currentQuestion.question;
    a_text.textContent = currentQuestion.a;
    b_text.textContent = currentQuestion.b;
    c_text.textContent = currentQuestion.c;
    d_text.textContent = currentQuestion.d;
    a_text.addEventListener("click", function () {
      selectedAnswer = a_text.dataset.answer;
    })
    b_text.addEventListener("click", function () {
      selectedAnswer = b_text.dataset.answer;
    })
    c_text.addEventListener("click", function () {
      selectedAnswer = c_text.dataset.answer;
    })
    d_text.addEventListener("click", function () {
      selectedAnswer = d_text.dataset.answer;
    })
};

function answers() {
  selected = true;
}

// clicking to the next question
function nextQuestion() {
  if (selectedAnswer.localeCompare(quizData[currentQuestionindex].correct) != 0) {
    // console.log(selectedAnswer, quizData[currentQuestionindex].correct);
    timerCount -= 10;
  }
  if (selected) {
    if (currentQuestionindex < quizData.length -1) {
      currentQuestionindex++;
      loadQuiz();
    }
    else {
      highScore();
    }
  }
 
}


