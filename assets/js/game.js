// PROMPTS ROBOT NAME WINDOW, VAR CAPTURES PLAYER'S DATA

var playerName = window.prompt("What is your robot's name?");
// NOTE THE LACK OF QUOTATION MARKS AROUND playerName
console.log(playerName);

console.log("This logs a string, good for leaving yourself a message");
// THIS WILL DO MATH AND LOG 20
console.log(10 + 10);
// WHAT IS THIS?
console.log("Our robot's name is " + playerName);

// THIS CREATES A FUNCTION NAMED "FIGHT"

function fight() {
    window.alert("The fight has begun!");
}

// fight();