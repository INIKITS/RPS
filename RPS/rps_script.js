/* Ask user if they want to play */
/* if yes, play game */
while (true){
    let startGame = prompt("Would you like to play Rock, Paper, Scissors?")
    startGame = startGame.toLowerCase();

    if (startGame === "yes"){
        console.log("You chose yes")
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

/*ask user for rock, paper, or scissors */
/* generate rock, paper, or scissors from computer */
/* tell user what both chose and print result */

/* play game five rounds */