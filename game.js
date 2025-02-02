let score = 0;
let answeredQuestions = 0;
const totalQuestions = document.querySelectorAll('.question').length;

function checkAnswer(button, status) {
    const parent = button.parentElement;
    const buttons = parent.querySelectorAll('button');  

   
    buttons.forEach(btn => btn.disabled = true);

if (status === 'correct') {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('wrong');
    }
    answeredQuestions++;
}

function showResult() {

    if (answeredQuestions< 5) {
        alert("Please answer all questions before viewing the result.");
        return;
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your Score: ${score} out of 5`;
}
