//Declare variables
let points = 0;
let levels = 1;
let maxStage = 12; 

//Prompt user for username
var username;
username = prompt("Please enter your username");
console.log(" ");
//Welcome user, display username and give the instructions of the game
var guess;
console.log("Welcome to the Number Guessing Game, " + username + ". There are 10 levels and you get 1 point for each level you pass successfully.");

//To start the game
prompt(`Press Enter to start the game!`);
console.log(" ");

//For Statement
for (let i = 2; i < maxStage; i++) {
  let comGuess = Math.floor(Math.random() * i) + 1;
  let userGuess = parseInt(prompt(`Welcome to Level ${levels}. Enter a number between 1 and ${i}`));

  if (userGuess == comGuess) {
    points = points + 1;
  }

  if (userGuess) {
    levels = levels + 1;
  }

  //To display results
  console.log("Your guess is " + userGuess + " and the computer guessed " + comGuess + ". Your score is " + points);

//To move to the next level
  if (i == 11) {
  prompt(`Press Enter to see your total score.`);
  console.log(" ");
  } else {
  prompt(`Press Enter to go to level ${levels}`);
  }

//To display the total score
  if (i == 11) {
    console.log("Your total score is: " + points + ". Game Over!");
  } else {
    console.log(" ");
  }
}