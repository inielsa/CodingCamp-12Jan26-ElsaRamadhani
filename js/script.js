welcomeMessage();

function welcomeMessage(){
    let userResponse = prompt("Hi there! What is your name?");

    if (userResponse === null || userResponse.trim() === ""){
        userResponse = "Guest";
    }

    document.getElementById("welcome-speech").innerText = `Welcome, ${userResponse}!`;
}