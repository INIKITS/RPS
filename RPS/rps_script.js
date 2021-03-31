/* Ask user if they want to play */
/* if yes, play game */
while (true){
    let startGame = prompt("Would you like to play Rock, Paper, Scissors?")
    startGame = startGame.toLowerCase();

    if (startGame === "yes"){
        console.log("Let's play!")
        playGame();

        break;
    }
    /* if no, exit */
    else if (startGame === "no"){
        console.log("Okay see ya later!")
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
        return "You win!"
    }
    else if (userChoice === "paper" && botChoice === "rock"){
        return "You win!"
    }
    else if (userChoice === "scissors" && botChoice === "paper"){
        return "You win!"
    }
    else {
        return "You lose!"
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
        default:
            return "error";     
    }

}
/*ask user for rock, paper, or scissors */
function userChoice(){
    while (true){
        let choice = prompt("Rock, paper, or scissors?");
        choice = choice.toLowerCase();

        switch (choice){
            case 'rock':
                return choice;
            case 'paper':
                return choice;
            case 'scissors':  
                return choice;
            default:
                console.log("Invalid input, try again.")
                continue;       
        }

    }
}


/* tell user what both chose and print result */
function playGame(){
    /* play game five rounds */
    for (i=0; i<5; i++){
        let user = userChoice();
        let computer = computerChoice();
        console.log("You chose " + user + " and the computer chose " + computer + ": ", 
        playRound(user, computer) );
        if (i == 4){
            console.log("Thanks for playing!")
        }
    }
}