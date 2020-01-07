//set variable for main container
var mainContainer = document.querySelector(".mainContainer")

//create game buttons
var createGameButtons = function(){
    var buttonBackgroundContainer = document.createElement("div")
    buttonBackgroundContainer.classList.add("buttonBackgroundContainer")
    var mainContainer = document.querySelector(".mainContainer")
    mainContainer.appendChild(buttonBackgroundContainer)

    var quizGameButton = document.createElement("img")
    quizGameButton.classList.add("quizButton")
    quizGameButton.setAttribute("src", "phone.png")
    quizGameButton.textContent = "Quiz!"
    buttonBackgroundContainer.appendChild(quizGameButton)
    document.querySelector(".quizButton").addEventListener("click", quizGameBoard)

    var riddleGameButton = document.createElement("img")
    riddleGameButton.classList.add("riddleButton")
    riddleGameButton.setAttribute("src", "tablet.png")
    riddleGameButton.textContent = "Riddle!"
    buttonBackgroundContainer.appendChild(riddleGameButton)
    document.querySelector(".riddleButton").addEventListener("click", riddleGameBoard)

    var typingGameButton = document.createElement("img")
    typingGameButton.classList.add("typingButton")
    typingGameButton.setAttribute("src", "laptop.png")
    typingGameButton.textContent = "Typing!"
    buttonBackgroundContainer.appendChild(typingGameButton)
    document.querySelector(".typingButton").addEventListener("click", typingCreateBoard)

    var lockGameButton = document.createElement("img")
    lockGameButton.classList.add("lockButton")
    lockGameButton.setAttribute("src", "lock.png")
    lockGameButton.textContent = "Lock!"
    var mainContainer = document.querySelector(".mainContainer")
    buttonBackgroundContainer.appendChild(lockGameButton)
    document.querySelector(".lockButton").addEventListener("click", lockCreateBoard)
}

//function to create game option buttons
var mainGameStart = function(){
    //remove Start Game Button
    var startGameButton = document.querySelector(".startButton")
    var mainContainer = document.querySelector(".mainContainer")
    mainContainer.removeChild(startGameButton)
    // remove instructions div
    var mainInstruction = document.querySelector(".mainInstruction")
    mainContainer.removeChild(mainInstruction)
    //create timer div
    var mainTimerText = document.createElement("div")
    mainTimerText.classList.add("mainTimerText")
    mainTimerText.textContent = "Time left: "
    mainContainer.appendChild(mainTimerText)
    var mainTimerSpan = document.createElement("span")
    mainTimerSpan.setAttribute("id", "timer")
    mainTimerText.appendChild(mainTimerSpan)

//code for timer
    document.getElementById('timer').innerHTML =
      003 + ":" + 00;
    startTimer();

function startTimer() {
    var presentTime = document.querySelector('#timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}
    //if(m<0){alert('timer completed')}

    document.getElementById('timer').innerHTML = m + ":" + s;
    console.log(m)
    setTimeout(startTimer, 1000);
}
function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
}
createGameButtons()
}
document.querySelector(".startButton").addEventListener("click", mainGameStart)
//function to create the quiz game board
var quizGameBoard = function(){
    var buttonBackgroundContainer = document.querySelector(".buttonBackgroundContainer")
    mainContainer.removeChild(buttonBackgroundContainer)

    //create exit button
    var exitButton = document.createElement("button")
    exitButton.classList.add("exitButton")
    exitButton.textContent = "Close"
    mainContainer.appendChild(exitButton)

//code for Exit Button
var closeButton = function(){
    var quizContainer = document.querySelector(".mainContainer")
    var quizButtons = document.querySelector(".quizButtons")
    quizContainer.removeChild(quizButtons)

//create game buttons
    createGameButtons()

//removing exit button
    var exitButton = document.querySelector(".exitButton")
    mainContainer.removeChild(exitButton)
}
document.querySelector(".exitButton").addEventListener("click", closeButton)

//

//created div for quiz buttons
    var quizButtons = document.createElement("div")
    quizButtons.classList.add("quizButtons")
    var quizContainer = document.querySelector(".mainContainer")
    quizContainer.appendChild(quizButtons);

//create div for "press any button to begin"
    var quizInstructions = document.createElement("div")
    // quizInstructions.classList.add("col-4 offset-4")
    quizInstructions.setAttribute("id", "quizQuestion")
    quizInstructions.textContent = "Click on any button below to begin."
    quizButtons.appendChild(quizInstructions)

    //create div for containing buttons
    var quizButtonContainer = document.createElement("div")
    quizButtonContainer.classList.add("quizButtonContainer")
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
// document.querySelector(".quizButton").addEventListener("click", quizGameBoard)

//code for the quiz
var quizOption1 = "";
var quizOption2 = "";
var quizOption3 = "";
var quizOption4 = "";

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
    document.getElementById("quizQuestion").innerHTML = "Question 1) What is 1 + 1?<br><br> A) 2 <br> B) 3 <br> C) 4 <br> D) 5";
    return questionNumber = 1
    }
    if(questionNumber === 1 && quizOption1 === true){
        document.getElementById("quizQuestion").innerHTML = "Question 2) What is 2 + 2?<br><br> A) 3 <br> B) 4 <br> C) 5 <br> D) 6";
    return questionNumber = 2
    }
    if(questionNumber === 2 && quizOption2 === true){
        document.getElementById("quizQuestion").innerHTML = "Question 3) What is 1234124 + 12314124<br><br> A) 7 <br> B) 8 <br> C) 13548248 <br> D) 9";
    return questionNumber = 3

    }
    if(questionNumber === 3 && quizOption3 === true){
        var quizButtons = document.querySelector(".quizButtons")
        var quizButtonContainer = document.querySelector(".quizButtonContainer")
        quizButtons.removeChild(quizButtonContainer)
        return document.getElementById("quizQuestion").innerHTML = "Congratulations! You got it all correct!<br> The clue is the number '1'.";
    }
    else{
        questionNumber = 0
        return document.getElementById("quizQuestion").innerHTML = "Wrong Answer, try again";
    }
}

//create game board for riddle
var riddleGameBoard = function(){
    var buttonBackgroundContainer = document.querySelector(".buttonBackgroundContainer")
    mainContainer.removeChild(buttonBackgroundContainer)

    //create exit button
    var exitButton = document.createElement("button")
    exitButton.classList.add("exitButton")
    exitButton.textContent = "Close"
    mainContainer.appendChild(exitButton)

//code for Exit Button
var closeButton = function(){
    var riddleContainer = document.querySelector(".mainContainer")
    var riddle = document.querySelector(".riddle")
    var riddleAnswer = document.querySelector(".riddleAnswer")
    var inputBox = document.querySelector(".inputBox")
    riddleContainer.removeChild(riddle)
    riddleContainer.removeChild(riddleAnswer)
    riddleContainer.removeChild(inputBox)
//create game buttons
createGameButtons()

//removing exit button
    var exitButton = document.querySelector(".exitButton")
    mainContainer.removeChild(exitButton)
}
document.querySelector(".exitButton").addEventListener("click", closeButton)

    //create div for riddle text
    var riddleText = document.createElement("div")
    riddleText.classList.add("riddle")
    riddleText.innerHTML = "Freeing me can bring both war and strife,<br> I am there at the beginning of life,<br>I am the symbol of kin,<br> and the pathway of kings.<br> Present me, and pass."
    var riddleContainer = document.querySelector(".mainContainer")
    riddleContainer.appendChild(riddleText)
//create div for the text "riddle answer"
    var riddleAnswer = document.createElement("div")
    riddleAnswer.textContent = "Answer: "
    riddleAnswer.classList.add("riddleAnswer")
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
// document.querySelector(".riddleButton").addEventListener("click", riddleGameBoard)


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
        document.querySelector('.inputBox').value = "Correct Answer! The Clue is '2'"
    }else {
        console.log("try again")
        document.querySelector('.inputBox').value = ""
    }
}

//code for adding html with DOM for typing game
var typingCreateBoard = function(){

        //remove the game options buttons
    // var quizGameButton = document.querySelector(".quizButton")
    // var riddleGameButton = document.querySelector(".riddleButton")
    // var typingGameButton = document.querySelector(".typingButton")
    // var mainContainer = document.querySelector(".mainContainer")
    // var lockGameButton = document.querySelector(".lockButton")
    var buttonBackgroundContainer = document.querySelector(".buttonBackgroundContainer")
    mainContainer.removeChild(buttonBackgroundContainer)
    // mainContainer.removeChild(quizGameButton)
    // mainContainer.removeChild(riddleGameButton)
    // mainContainer.removeChild(typingGameButton)
    // mainContainer.removeChild(lockGameButton)

    //create exit button
    var exitButton = document.createElement("button")
    exitButton.classList.add("exitButton")
    exitButton.textContent = "Close"
    mainContainer.appendChild(exitButton)

//code for Exit Button
var closeButton = function(){
//remove everything in main container
    var typingContainer = document.querySelector(".mainContainer")
    var typingParagraph = document.querySelector(".typingParagraph")
    var typingAnswerText = document.querySelector(".typingAnswerText")
    var typingInputBox = document.querySelector(".typingInputBox")
    typingContainer.removeChild(typingParagraph)
    typingContainer.removeChild(typingAnswerText)
    typingContainer.removeChild(typingInputBox)

//create game buttons
createGameButtons()

//removing exit button
    var exitButton = document.querySelector(".exitButton")
    mainContainer.removeChild(exitButton)
}
document.querySelector(".exitButton").addEventListener("click", closeButton)

//creating the div for the text paragraph
    var typingParagraph = document.createElement("div");
    typingParagraph.classList.add("typingParagraph")
    typingParagraph.innerHTML = "I made myself a snowball<br>As perfect as could be.<br>I thought I'd keep it as a pet<br>And let it sleep with me.<br>I made it some pajamas<br>And a pillow for its head.<br>Then last night it ran away,<br>But first it wet the bed."
    var typingContainer = document.querySelector(".mainContainer")
    typingContainer.appendChild(typingParagraph)
//create a div for "Answer:" text
    var typingAnswerText = document.createElement("div")
    typingAnswerText.classList.add("typingAnswerText")
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

//code for the typing game
var typingAnswerEntered = ""
//store the answer entered into a variable
var typingAnswer = function(){
    typingAnswerEntered = document.querySelector(".typingInputBox").value
    typingAnswerChecker();
}
// checks if answer is correct in input box regardless of the case it is inputted in
var typingAnswerChecker = function(){
    if(typingAnswerEntered.toUpperCase() === "I made myself a snowball As perfect as could be. I thought I'd keep it as a pet And let it sleep with me. I made it some pajamas And a pillow for its head. Then last night it ran away, But first it wet the bed.".toUpperCase()){
        document.querySelector('.typingInputBox').value = "Correct Answer! The Clue is '3'"
    }else {
        document.querySelector('.typingInputBox').value = ""
    }
}

var lockCreateBoard = function(){
        //remove the game options buttons
    // var quizGameButton = document.querySelector(".quizButton")
    // var riddleGameButton = document.querySelector(".riddleButton")
    // var typingGameButton = document.querySelector(".typingButton")
    var mainContainer = document.querySelector(".mainContainer")
    // var lockGameButton = document.querySelector(".lockButton")
    var buttonBackgroundContainer = document.querySelector(".buttonBackgroundContainer")
    mainContainer.removeChild(buttonBackgroundContainer)
    // mainContainer.removeChild(quizGameButton)
    // mainContainer.removeChild(riddleGameButton)
    // mainContainer.removeChild(typingGameButton)
    // mainContainer.removeChild(lockGameButton)

    //create exit button
    var exitButton = document.createElement("button")
    exitButton.classList.add("exitButton")
    exitButton.textContent = "Close"
    mainContainer.appendChild(exitButton)

//code for Exit Button
    var closeButton = function(){
        //remove everything in main container
        var mainContainer = document.querySelector(".mainContainer")
        var lockContainer = document.querySelector(".lockContainer")
        mainContainer.removeChild(lockContainer)

    //create game buttons
createGameButtons()

    //removing exit button
        var exitButton = document.querySelector(".exitButton")
        mainContainer.removeChild(exitButton)
    }

document.querySelector(".exitButton").addEventListener("click", closeButton)

//creating game board with dom
//create container
var lockContainer = document.createElement("div")
lockContainer.classList.add("lockContainer")
var mainContainer = document.querySelector(".mainContainer")
mainContainer.appendChild(lockContainer)

//create instructions div
var lockInstructions = document.createElement("div")
lockInstructions.classList.add("lockInstructions")
lockInstructions.textContent = "Enter the correct combination."
lockContainer.appendChild(lockInstructions)
//create dropdown 1
var lock1 = document.createElement("select")
lock1.classList.add("lock1")
lock1.setAttribute("onchange", "lockNumber1()")
lockContainer.appendChild(lock1)
//create drop down options
var optionCat = document.createElement("option")
optionCat.setAttribute("value", "cat")
optionCat.textContent = ""
lock1.appendChild(optionCat)

var option0 = document.createElement("option")
option0.setAttribute("value", "0")
option0.textContent = "0"
lock1.appendChild(option0)

var option1 = document.createElement("option")
option1.setAttribute("value", "1")
option1.textContent = "1"
lock1.appendChild(option1)

var option2 = document.createElement("option")
option2.setAttribute("value", "2")
option2.textContent = "2"
lock1.appendChild(option2)

var option3 = document.createElement("option")
option3.setAttribute("value", "3")
option3.textContent = "3"
lock1.appendChild(option3)

var option4 = document.createElement("option")
option4.setAttribute("value", "4")
option4.textContent = "4"
lock1.appendChild(option4)

var option5 = document.createElement("option")
option5.setAttribute("value", "5")
option5.textContent = "5"
lock1.appendChild(option5)

var option6 = document.createElement("option")
option6.setAttribute("value", "6")
option6.textContent = "6"
lock1.appendChild(option6)

var option7 = document.createElement("option")
option7.setAttribute("value", "7")
option7.textContent = "7"
lock1.appendChild(option7)

var option8 = document.createElement("option")
option8.setAttribute("value", "8")
option8.textContent = "8"
lock1.appendChild(option8)

var option9 = document.createElement("option")
option9.setAttribute("value", "9")
option9.textContent = "9"
lock1.appendChild(option9)

//create dropdown 2
var lock2 = document.createElement("select")
lock2.classList.add("lock2")
lock2.setAttribute("onchange", "lockNumber2()")
lockContainer.appendChild(lock2)
//create drop down options
var optionCat = document.createElement("option")
optionCat.setAttribute("value", "cat")
optionCat.textContent = ""
lock2.appendChild(optionCat)

var option0 = document.createElement("option")
option0.setAttribute("value", "0")
option0.textContent = "0"
lock2.appendChild(option0)

var option1 = document.createElement("option")
option1.setAttribute("value", "1")
option1.textContent = "1"
lock2.appendChild(option1)

var option2 = document.createElement("option")
option2.setAttribute("value", "2")
option2.textContent = "2"
lock2.appendChild(option2)

var option3 = document.createElement("option")
option3.setAttribute("value", "3")
option3.textContent = "3"
lock2.appendChild(option3)

var option4 = document.createElement("option")
option4.setAttribute("value", "4")
option4.textContent = "4"
lock2.appendChild(option4)

var option5 = document.createElement("option")
option5.setAttribute("value", "5")
option5.textContent = "5"
lock2.appendChild(option5)

var option6 = document.createElement("option")
option6.setAttribute("value", "6")
option6.textContent = "6"
lock2.appendChild(option6)

var option7 = document.createElement("option")
option7.setAttribute("value", "7")
option7.textContent = "7"
lock2.appendChild(option7)

var option8 = document.createElement("option")
option8.setAttribute("value", "8")
option8.textContent = "8"
lock2.appendChild(option8)

var option9 = document.createElement("option")
option9.setAttribute("value", "9")
option9.textContent = "9"
lock2.appendChild(option9)

//create dropdown 3
var lock3 = document.createElement("select")
lock3.classList.add("lock3")
lock3.setAttribute("onchange", "lockNumber3()")
lockContainer.appendChild(lock3)
//create drop down options
var optionCat = document.createElement("option")
optionCat.setAttribute("value", "cat")
optionCat.textContent = ""
lock3.appendChild(optionCat)

var option0 = document.createElement("option")
option0.setAttribute("value", "0")
option0.textContent = "0"
lock3.appendChild(option0)

var option1 = document.createElement("option")
option1.setAttribute("value", "1")
option1.textContent = "1"
lock3.appendChild(option1)

var option2 = document.createElement("option")
option2.setAttribute("value", "2")
option2.textContent = "2"
lock3.appendChild(option2)

var option3 = document.createElement("option")
option3.setAttribute("value", "3")
option3.textContent = "3"
lock3.appendChild(option3)

var option4 = document.createElement("option")
option4.setAttribute("value", "4")
option4.textContent = "4"
lock3.appendChild(option4)

var option5 = document.createElement("option")
option5.setAttribute("value", "5")
option5.textContent = "5"
lock3.appendChild(option5)

var option6 = document.createElement("option")
option6.setAttribute("value", "6")
option6.textContent = "6"
lock3.appendChild(option6)

var option7 = document.createElement("option")
option7.setAttribute("value", "7")
option7.textContent = "7"
lock3.appendChild(option7)

var option8 = document.createElement("option")
option8.setAttribute("value", "8")
option8.textContent = "8"
lock3.appendChild(option8)

var option9 = document.createElement("option")
option9.setAttribute("value", "9")
option9.textContent = "9"
lock3.appendChild(option9)
//add submit button
var submitButton = document.createElement("button")
submitButton.classList.add("submitButton")
submitButton.textContent = "Submit"
lockContainer.appendChild(submitButton)
document.querySelector(".submitButton").addEventListener("click", lockValueChecker)

var lockDisplay = document.createElement("div")
lockDisplay.classList.add("lockDisplay")
lockContainer.appendChild(lockDisplay)
}

//saving options selected into variables
var lock1Value = ""
var lock2Value = ""
var lock3Value = ""

var lockNumber1 = function(){
    var selectedValue = document.querySelector(".lock1").value
    lock1Value = selectedValue
    console.log(lock1Value)
}
var lockNumber2 = function(){
    var selectedValue = document.querySelector(".lock2").value
    lock2Value = selectedValue
    console.log(lock2Value)
}
var lockNumber3 = function(){
    var selectedValue = document.querySelector(".lock3").value
    lock3Value = selectedValue
    console.log(lock3Value)
}


//function to check if the values entered are correct
var lockValueChecker = function(){
    if(lock1Value == 1 && lock2Value == 2 && lock3Value == 3){
        console.log("work")
        //stop timeout
        stopTimerFunction()
        //remove timer
        var mainContainer = document.querySelector(".mainContainer")
        var mainTimerText = document.querySelector(".mainTimerText")
        //remove close button
        var exitButton = document.querySelector(".exitButton")
        mainContainer.removeChild(mainTimerText)
        mainContainer.removeChild(exitButton)
        document.querySelector(".lockDisplay").innerHTML = "You managed to escape!"
    }else{
        console.log("work")
        document.querySelector(".lockDisplay").innerHTML = "Wrong combination"
    }
}
//make function to stop timer
var stopTimerFunction = function(){
    clearTimeout(timerVar)
}

var timerVar = ""
var mainTimerFunction = function(){
    timerVar = setTimeout(mainTimer, 180000)
}
var mainTimer = function(){
    var mainContainer = document.querySelector(".mainContainer")
    var mainAnnouncement = document.createElement("div")
    mainAnnouncement.innerHTML = "The door creeks open and a hooded man with a knife emerged from beyond the door.<br>There is no way out of this anymore.<br>With a quick flash of the knife...<br>"
    mainAnnouncement.classList.add("mainAnnouncement")
    mainContainer.innerHTML = ""
    mainContainer.appendChild(mainAnnouncement)
    var resetButton = document.createElement("button")
    resetButton.classList.add("resetButton")
    resetButton.textContent = "Restart Game"
    mainContainer.appendChild(resetButton)
    document.querySelector(".resetButton").addEventListener("click", resetGame)
}

var resetGame = function(){
    var mainContainer = document.querySelector(".mainContainer")
    var resetButton = document.querySelector(".resetButton")
    var mainAnnouncement = document.querySelector(".mainAnnouncement")
    mainContainer.removeChild(resetButton)
    mainContainer.removeChild(mainAnnouncement)
    var startButton = document.createElement("button")
    startButton.classList.add("startButton")
    startButton.setAttribute("onclick", "mainTimerFunction()")
    startButton.setAttribute("type", "button")
    startButton.textContent = "Start Game"
    mainContainer.appendChild(startButton)
    document.querySelector(".startButton").addEventListener("click", mainGameStart)
    var mainInstruction = document.createElement("div")
    mainInstruction.classList.add("mainInstruction")
    mainInstruction.innerHTML = "Instructions: <br>You awake lying of the floor of this empty room.<br>A thought floated into your mind, you must escape this room before the timer runs out. The killer is coming!<br>Play the minigames found in the room for clues!<br>Undo the lock to make your escape!"
    mainContainer.appendChild(mainInstruction)
}