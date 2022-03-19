// questions array
const quizData = [
    {
        question: "Which of the following element is responsible for making the text italic in HTML?",
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
        question: "Which of the following property is used as the shorthand property for the padding properties?",
        a: "1. padding-left",
        b: "2. padding-right",
        c: "3. padding",
        d: "4. All of the above",
        correct: "c",
    },
    {
        question: "The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
        a: "1. writing-mode",
        b: "2. text-indent",
        c: "3. word-break",
        d: "4. None of the above",
        correct: "a",
    },
    {
        question: "Which oone of the following also known as Conditional Expression?",
        a: "1. Alternative to if-else",
        b: "2. Switch statement",
        c: "3. If-then-else statement",
        d: "4. immediate if",
        correct: "d",
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start-btn")

// var count = 75;
// var timer =setInterval(function() {
//     console.log(count);
//     count--;
//     if(count === 0) {
//         stopInterval()
//     }
// }, 1000);

// var stopInterval = function() {
//     console.log('time is up!');
//     clearInterval(timer);
// }

(function() {
    var sec =75;
    function startTimer(){
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            document.getElementById('timerDisplay').innerHTML='00'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
            }
        }, 1000);
    }
    document.getElementById('incorrect').addEventListener('click', function() {
        sec -=5;
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
    });
    startTimer();
})();
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

startBtnEl.addEventListener("click", loadQuiz);

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});