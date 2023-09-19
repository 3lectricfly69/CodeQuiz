// Logs window object using this 

console.log("this:"); 
console.log(this); 


// Logs the document object 

console.log("window.document:"); 
console.log(window.document); 


// Logs body of document 

console.log("document.body:"); 
console.log( document.body); 

var questions = [
    {
        question: "Arrays in JavaScript can be used to store ____",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "Which file type can be used for styling?",
        choices: [".js", ".css", ".html", "all of these file types can technically be used for styling"],
        answer: "all of these file types can technically be used for styling"
    }
];
var totalScore;
var currentQuestion = 0;
var expectedAnswer;
var questionStartTime;
var timeLimit = 60000; //60 seconds

function begin(){
document.getElementById("startButton").remove();
displayQuestion(0);
console.log("is this working?");
}

function displayQuestion(i){
    currentQuestion = i;
    var question = questions[i];
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("choice0").innerHTML = question.choices[0];
    document.getElementById("choice1").innerHTML = question.choices[1];
    document.getElementById("choice2").innerHTML = question.choices[2];
    document.getElementById("choice3").innerHTML = question.choices[3];
    expectedAnswer = question.answer;
}
function buttonClicked(){
    displayQuestion(currentQuestion + 1);
}