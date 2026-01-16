welcomeMessage();

function welcomeMessage(){
    let userResponse = prompt("Hi there! What is your name?");

    if (userResponse === null || userResponse.trim() === ""){
        userResponse = "Guest";
    }

    document.getElementById("welcome-speech").innerText = `Welcome, ${userResponse}!`;
}

const userName = document.getElementById("username");
const bdate = document.getElementById("bdate");
const male = document.getElementById("male");
const female = document.getElementById("female");
const userMessage = document.getElementById("userMessage");
const displayMessage = document.getElementById("displayMessage");
let uName;
let gender;
let birthdate;
let uMessage;

function submitMessage(){
    uName = userName.value;
    birthdate = bdate.value;
    uMessage = userMessage.value;
    if(male.checked){
        gender = "Male";
    }
    else if(female.checked){
        gender = "Female";
    }

    // console.log(uName);
    // console.log(gender);
    // console.log(birthdate);
    // console.log(uMessage);
    displayMessage.textContent = `Message from ${uName} (${gender}, born on ${birthdate}): ${uMessage}`;

}