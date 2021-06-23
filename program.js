let response = document.querySelector("#response");
let congrats = document.querySelector("#congrats");
let text = "";

const Question = document.querySelector("#question");
const Answer = document.querySelector("#answer");
const Verdict = document.querySelector("#verdict");

const questionList = ["What happens when you add too much flour to the cookies?",
"What happens if you don't add butter to the pan when you make pancakes?",
"Which dairy product is added to Chicken Marsala?",
"What do you add to baked pasta to make sure it doesn't fall apart?",
"Do you need to add milk to lemon cake?"]
const answerList = ["the cookies become crumbly", "the pancakes stick to the pan",
"heavy cream", "eggs","lemon cake does not need milk"]

const numberQuestion =["Question 1","Question 2", "Question 3", "Question 4", "Question 5"]

const congratsList = ["Yay","Correct","Well Done","Amazing","Great"]
const wrongList = ["Wrong","No","Try Harder","Bad","Oh come on!"]

var number = 0

function Submit(){
 
    
    if (Answer.value == answerList[number]) {
        document.body.style.backgroundColor = "green";
        Verdict.innerHTML = congratsList[number];
    } else {
        document.body.style.backgroundColor ="red";
        Verdict.innerHTML = wrongList[number];
    }
} 

function nextQuestion(){
    number += 1 ;
    text += questionList[number];
    Question.innerHTML = text; 

}

