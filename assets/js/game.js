// PROMPTS ROBOT NAMING WINDOW, VAR CAPTURES PLAYER'S DATA
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// YOU CAN ALSO LOG MULTIPLE VALUES AT ONCE LIKE THIS console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // ALERT PLAYERS THAT THEY ARE STARTING THE ROUND
    window.alert("Welcome to Robot Gladiators!");

    // SUBTRACT THE VALUE OF 'playerAttack' FROM THE VALUE OF 'enemyHealth' AND USE THAT RESULT TO UPDATE THE VALUE IN THE 'enemyHealth' VARIABLE
    enemyHealth = enemyHealth - playerAttack;

    // SUBTRACT THE VALUE OF 'enemyAttack' FROM THE VALUE OF 'playerHealth' AND USE THAT RESULT TO UPDATE THE VALUE IN THE 'playerHealth' VARIABLE
    playerHealth = playerHealth - enemyAttack;

    // LOG A RESULTING MESSAGE TO THE CONSOLE SO WE KNOW THAT IT WORKED
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // LOG A RESULTING MESSAGE TO THE CONSOLE SO WE KNOW THAT IT WORKED
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remining.");
        
};

fight();