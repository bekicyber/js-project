const questions = [{
question: "Which one is odd?",
answers: [
    {text: "Two", correct:"false"},
    {text: "Three", correct:"true"},
    {text: "Six", correct:"false"},
    {text: "Ten", correct:"false"},

],


question: "Which one is Even?",
answers: [
    {text: "Two", correct:"true"},
    {text: "Three", correct:"false"},
    {text: "Five", correct:"false"},
    {text: "Nine", correct:"false"},

],

question: "Which one is Double Digit?",
answers: [
    {text: "Ten", correct:"true"},
    {text: "Three", correct:"false"},
    {text: "Five", correct:"false"},
    {text: "Nine", correct:"false"},

],

question: "Which one is Different?",
answers: [
    {text: "nine", correct:"false"},
    {text: "Three", correct:"false"},
    {text: "Five", correct:"false"},
    {text: "Two", correct:"true"},

],

}];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

function showQuestion(){ 
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendchild(button);

    });
}

function resetstate(){
    nextButton.style.display = "none";
    while(answerButtons.firstchild){
        answerButtons.removechild(answerButtons.firstchild);
    }
}

startQuiz(); 
