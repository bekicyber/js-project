const quotetext = document.querySelector('.quoteText');
const nextbtn = document.querySelector('.btnone');
const quotecont = document.querySelector('.quotecontainer');
const tweetbtn = document.querySelector('.btntwo');

const quotes = ["ከብሩህ አእምሮ የደበዘዘ ማስታወሻ ይሻላል", 
    "ጥለሽኝ  ስትሄጂ ጩህት እሪ   ታዬን እንደምን ላምቀው? አስጭሆ አይደለም ወይ? ሰይጣን የሚለቀው?", 
    "ጠልፎኝ ስንገዳገድ  ጠላትህ ይደፋ ብትል አዘንኩ ከፋኝ እኔኑ ልደፋኝ?"

]

nextbtn.addEventListener('click',showQuote);
let currentQuestionIndex = 0

function startQuiz(){
    currentQuestionIndex = 0;
    nextbtn.innerHTML = "Next";
    showQuote();}

function showQuote(){
    let currentQuestion = quotes[currentQuestionIndex];

    let nextquote = document.createElement("h4");
    nextquote.className = "quotecontainer";
  quotecont.appendChild(nextquote); 
 
}
function resetstate(){
    quotecont.style.display = "";
}
startQuiz();