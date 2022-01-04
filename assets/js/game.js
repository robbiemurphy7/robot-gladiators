// GAME STATES
// "WIN" - PLAYER ROBOT HAS DEFEATED ALL ENEMY-ROBOTS
//  * FIGHT ALL ENEMY-ROBOTS
//  * DEFEAT EACH ENEMY-ROBOTS
// "LOSE" - PLAYER ROBOT'S HEALTH IS ZERO OR LESS

// PROMPTS ROBOT NAMING WINDOW, VAR CAPTURES PLAYER'S DATA
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// YOU CAN ALSO LOG MULTIPLE VALUES AT ONCE LIKE THIS console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"]; 
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);

var fight = function(enemyName) {

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
}


    // ALERT PLAYERS THAT THEY ARE STARTING THE ROUND
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // IF PLAYER CHOSES TO FIGHT, THEN FIGHT
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // REMOVE ENEMY'S HEALTH BY SUBTRACTING THE AMOUNT SET IN THE playerAttack VARIABLE
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        // CHECK ENEMY'S HEALTH
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // REMOVE PLAYER'S HEALTH BY SUBTRACTING THE AMOUNT SET IN THE enemyAttack VARIABLE
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // CHECK PLAYER'S HEALTH
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // IF PLAYER CHOOSES TO SKIP
    } else if (promptFight === "skip" || promptFight === "SKIP"){
        // CONFIRM PLAYER WANTS TO SKIP
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // IF YES (true), LEAVE FIGHT
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // SUBTRACT MONEY FROM playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        // IF NO (false), ASK QUESTION AGAIN BY RUNNING fight() AGAIN
        else {
            fight();
        }
        // IF PLAYER DID NOT CHOSE 1 OR 2 IN PROMPT
    } else {
        window.alert("You need to pick a valid option. Try again!");
    }
}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}