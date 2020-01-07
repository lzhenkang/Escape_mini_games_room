//create game board for riddle
var riddleGameBoard = function(){
    //create div for riddle text
    var riddleText = document.createElement("div")
    riddleText.classList.add("riddle")
    riddleText.textContent = "Freeing me can bring both war and strife,<br> I am there at the beginning of life,<br>I am the symbol of kin,<br> and the pathway of kings.<br> Present me, and pass."
    var riddleContainer = document.querySelector(".container")
    riddleContainer.appendChild(riddleText)
//create div for the text "riddle answer"
    var riddleAnswer = document.createElement("div")
    riddleAnswer.textContent = "Answer: "
    riddleContainer.appendChild(riddleAnswer)
//create input box
var riddleInputBox = document.createElement("input")
riddleInputBox.setAttribute("type", "text")
riddleInputBox.classList.add("inputBox")
riddleContainer.appendChild(riddleInputBox)
document.querySelector(".inputBox").placeholder = "Clue: 5 letter word."
//event listener to run function to store answer in variable when it detects change in input box
document.querySelector(".inputBox").addEventListener("change", answer);
}
document.querySelector(".riddleButton").addEventListener("click", riddleGameBoard)


//code for riddle input answer checking
var answerEntered = ""
//store the answer entered into a variable
var answer = function(){
    answerEntered = document.querySelector(".inputBox").value
    answerChecker();
}
//event listener to run function to store answer in variable when it detects change in input box
/*document.querySelector(".inputBox").addEventListener("change", answer);*/

// checks if answer is correct in input box regardless of the case it is inputted in
var answerChecker = function(){
    if(answerEntered.toUpperCase() === "blood".toUpperCase()){
        console.log("correct answer")
        document.querySelector('.inputBox').value = "Correct Answer! The Clue is 'A'"
    }else {
        console.log("try again")
        document.querySelector('.inputBox').value = ""
    }
}