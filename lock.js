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
        document.querySelector(".lockDisplay").innerHTML = "You managed to escape!"
    }else{
        console.log("work")
        document.querySelector(".lockDisplay").innerHTML = "Wrong combination"
    }
}
//assigning event listener to submit button
document.querySelector(".submitButton").addEventListener("click", lockValueChecker)