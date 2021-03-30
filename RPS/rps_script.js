/* Ask user if they want to play */
/* if yes, play game */
while (true){
    let startGame = prompt("Would you like to play Rock, Paper, Scissors?")
    startGame = startGame.toLowerCase();

    if (startGame === "yes"){
        console.log("You chose yes")
        playGame();

        break;
    }
    /* if no, exit */
    else if (startGame === "no"){
        console.log("Okay bye den.")
        break;
    }
    else{
        console.log("Try again")
        continue;
    }
}
/*start game */
function playRound(userChoice, botChoice){
    if (userChoice === botChoice){
        return "Draw!";
    }
    else if (userChoice === "rock" && botChoice === "scissors"){
        return "You win!";
    }
    else if (userChoice === "paper" && botChoice === "rock"){
        return "You win!";
    }
    else if (userChoice === "scissors" && botChoice === "paper"){
        return "You win!";
    }
    else {
        return "You lose!";
    }
}
/* generate rock, paper, or scissors from computer */
function computerChoice(){

    let botChoice = Math.floor(Math.random() * (3 - 1 +1)) + 1;

    switch (botChoice){
        case 1: 
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";    
    }

}
/*ask user for rock, paper, or scissors */
function userChoice(){
    let choice = prompt("Rock, paper, or scissors?");
    choice = choice.toLowerCase();
    return choice;
}
/* tell user what both chose and print result */
function playGame(){
    let user = userChoice();
    let computer = computerChoice();
    console.log("You chose " + user + " and the computer chose " + computer + ": ", 
    playRound(userChoice, computerChoice) );
}
/* play game five rounds */