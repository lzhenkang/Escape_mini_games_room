//code for adding html with DOM
var typingCreateBoard = function(){
//creating the div for the text paragraph
    var typingParagraph = document.createElement("div");
    typingParagraph.classList.add("typingParagraph")
    typingParagraph.textContent = "Freeing me can bring both war and strife, I am there at the beginning of life,I am the symbol of kin, and the pathway of kings. Present me, and pass."
    var typingContainer = document.querySelector(".typingContainer")
    typingContainer.appendChild(typingParagraph)
//create a div for "Answer:" text
    var typingAnswerText = document.createElement("div")
    typingAnswerText.textContent = "Answer:"
    typingContainer.appendChild(typingAnswerText)
//creating the input box
    var typingInputBox = document.createElement("input")
    typingInputBox.setAttribute("type", "text")
    typingInputBox.classList.add("typingInputBox")
    typingContainer.appendChild(typingInputBox)
    document.querySelector(".typingInputBox").placeholder = "Enter the paragraph exactly as shown.";
    document.querySelector(".typingInputBox").addEventListener("change", typingAnswer);
}

document.querySelector(".typingButton").addEventListener("click", typingCreateBoard)

//code for the typing game
var typingAnswerEntered = ""
//store the answer entered into a variable
var typingAnswer = function(){
    typingAnswerEntered = document.querySelector(".typingInputBox").value
    typingAnswerChecker();
}
//event listener to run function to store answer in variable when it detects change in input box
// document.querySelector(".typingInputBox").addEventListener("change", typingAnswer);

// checks if answer is correct in input box regardless of the case it is inputted in
var typingAnswerChecker = function(){
    if(typingAnswerEntered.toUpperCase() === "Freeing me can bring both war and strife, I am there at the beginning of life, I am the symbol of kin, and the pathway of kings. Present me, and pass.".toUpperCase()){
        document.querySelector('.typingInputBox').value = "Correct Answer! The Clue is 'T'"
    }else {
        document.querySelector('.typingInputBox').value = ""
    }
}