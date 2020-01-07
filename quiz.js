//function to create the game board

var quizGameBoard = function(){
//created div for quiz buttons
    var quizButtons = document.createElement("div")
    quizButtons.classList.add("quizButtons")
    var quizContainer = document.querySelector(".quizContainer")
    quizContainer.appendChild(quizButtons);

//create div for "press any button to begin"
    var quizInstructions = document.createElement("div")
    // quizInstructions.classList.add("col-4 offset-4")
    quizInstructions.setAttribute("id", "quizQuestion")
    quizInstructions.textContent = "press any button to begin."
    quizButtons.appendChild(quizInstructions)

    //create div for containing buttons
    var quizButtonContainer = document.createElement("div")
    // quizButtonContainer.classList.add("quizButtons col-4 offset-4")
    quizButtonContainer.textContent = "Answer: "
    quizButtons.appendChild(quizButtonContainer)

//create buttons
    var quizButton1 = document.createElement("button")
    quizButton1.classList.add("quizButton1")
    quizButton1.setAttribute("type", "button")
    quizButton1.textContent = "A"
    quizButtonContainer.appendChild(quizButton1)
    document.querySelector(".quizButton1").addEventListener("click", button1Clicked);

    var quizButton2 = document.createElement("button")
    quizButton2.classList.add("quizButton2")
    quizButton2.setAttribute("type", "button")
    quizButton2.textContent = "B"
    quizButtonContainer.appendChild(quizButton2)
    document.querySelector(".quizButton2").addEventListener("click", button2Clicked);

    var quizButton3 = document.createElement("button")
    quizButton3.classList.add("quizButton3")
    quizButton3.setAttribute("type", "button")
    quizButton3.textContent = "C"
    quizButtonContainer.appendChild(quizButton3)
    document.querySelector(".quizButton3").addEventListener("click", button3Clicked);

    var quizButton4 = document.createElement("button")
    quizButton4.classList.add("quizButton4")
    quizButton4.setAttribute("type", "button")
    quizButton4.textContent = "D"
    quizButtonContainer.appendChild(quizButton4)
    document.querySelector(".quizButton4").addEventListener("click", button4Clicked);
}
document.querySelector(".quizButton").addEventListener("click", quizGameBoard)

//code for the quiz
var quizOption1 = "";
var quizOption2 = "";
var quizOption3 = "";
var quizOption4 = "";
//setting event listener for buttons
// document.querySelector(".quizButton1").addEventListener("click", button1Clicked);
// document.querySelector(".quizButton2").addEventListener("click", button2Clicked);
// document.querySelector(".quizButton3").addEventListener("click", button3Clicked);
// document.querySelector(".quizButton4").addEventListener("click", button4Clicked);
//functions for when buttons are clicked
function button1Clicked(){
    quizOption1 = true;
    quizOption2 = false;
    quizOption3 = false;
    quizOption4 = false;
    quizStart();
}
function button2Clicked(){
    quizOption1 = false;
    quizOption2 = true;
    quizOption3 = false;
    quizOption4 = false;
    quizStart();
}
function button3Clicked(){
    quizOption1 = false;
    quizOption2 = false;
    quizOption3 = true;
    quizOption4 = false;
    quizStart();
}
function button4Clicked(){
    quizOption1 = false;
    quizOption2 = false;
    quizOption3 = false;
    quizOption4 = true;
    quizStart();
}
//functions for determining if the correct answers are selected
var questionNumber = 0

function quizStart(){
    if(questionNumber === 0){
    document.getElementById("quizQuestion").innerHTML = "question 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aut <br><br> A) <br> B) <br> C) <br> D)";
    return questionNumber = 1
    }
    if(questionNumber === 1 && quizOption1 === true){
        document.getElementById("quizQuestion").innerHTML = "question 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aut <br><br> A) <br> B) <br> C) <br> D)";
    return questionNumber = 2
    }
    if(questionNumber === 2 && quizOption2 === true){
        document.getElementById("quizQuestion").innerHTML = "question 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmotempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aut <br><br> A) <br> B) <br> C) <br> D)";
    return questionNumber = 3

    }
    if(questionNumber === 3 && quizOption3 === true){
        return document.getElementById("quizQuestion").innerHTML = "Congratulations! You got it all correct!<br> The clue is the letter 'C'.";
    }
    else{
        questionNumber = 0
        return document.getElementById("quizQuestion").innerHTML = "Wrong Answer, try again";
    }
}