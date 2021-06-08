

//document.body.style.background = "url('https://i.imgur.com/sLVfSv9.jpg') no-repeat fixed center 30%";

let numRounds = 0;
let userWin = 0;
let botWin = 0;
let draw = 0;

var buttonDiv = document.createElement('div');
var scoreDiv = document.createElement('div');
var matchResult = document.createElement('div');
var win = document.createElement('p');
var lose = document.createElement('p');

//buttonDiv.setAttribute('id', 'userButtons')

var rock = document.createElement("button");
var paper = document.createElement("button");
var scissors = document.createElement("button");

win.setAttribute('id', 'win');
lose.setAttribute('id', 'lose');

rock.setAttribute('id', 'userButtons');
paper.setAttribute('id', 'userButtons');
scissors.setAttribute('id', 'userButtons');

rock.setAttribute('class', 'rockButton');
paper.setAttribute('class', 'paperButton');
scissors.setAttribute('class', 'scissorButton');


var userText = document.createElement('p');
var botText = document.createElement('p');
var drawText = document.createElement('p');

userText.setAttribute('id', 'scoreboard');
botText.setAttribute('id', 'scoreboard');
drawText.setAttribute('id', 'scoreboard');


userText.innerHTML = 'You: ';
botText.innerHTML = 'Bot: ';
drawText.innerHTML = 'Draw: ';

matchResult.appendChild(win);
matchResult.appendChild(lose);

scoreDiv.appendChild(userText);
scoreDiv.appendChild(botText);
scoreDiv.appendChild(drawText);





var body = document.getElementsByTagName("body")[0];
body.appendChild(scoreDiv);
body.appendChild(buttonDiv);
body.appendChild(matchResult);

win.style.visibility='hidden';
lose.style.visibility='hidden';

win.innerHTML = 'You win!';
lose.innerHTML = "You lose.";
rock.innerHTML = "rock";
paper.innerHTML = "paper";
scissors.innerHTML = "scissors";

buttonDiv.appendChild(rock);
buttonDiv.appendChild(paper);
buttonDiv.appendChild(scissors);




rock.addEventListener("click", function(){
    //userChoice('rock');
    playGame('rock');
    
})
paper.addEventListener("click", function(){
    playGame('paper');
    
} )
scissors.addEventListener ("click", function() {
    playGame('scissors');
    
} )





/* Ask user if they want to play */
/* if yes, play game */
/*while (true){
    let startGame = prompt("Would you like to play Rock, Paper, Scissors?")
    startGame = startGame.toLowerCase();

    if (startGame === "yes"){
        console.log("Let's play!")
        playGame();

        break;
    }
    /* if no, exit */
    /*else if (startGame === "no"){
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
            return draw++;
        }
        else if (userChoice === "rock" && botChoice === "scissors"){
            return userWin++;
        }
        else if (userChoice === "paper" && botChoice === "rock"){
            return userWin++;
        }
        else if (userChoice === "scissors" && botChoice === "paper"){
            return userWin++;
        }
        else {
            return botWin++;
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
function userChoice(choice){
   /* while (true){
        /*let choice = prompt("Rock, paper, or scissors?");
        choice = choice.toLowerCase();
        */ 

        switch (choice){
            case 'rock':
                return choice;
            case 'paper':
                return choice;
            case 'scissors':  
                return choice;
            default:
                console.log("Invalid input, try again.")
                return null;       
        }

    }

function clearWin(){
    win.style.visibility = 'hidden';
    lose.style.visibility= "hidden";
}    
/*}



/* tell user what both chose and print result */
function playGame(userChoice){
    /* play game five rounds */

        numRounds++;
        let user = userChoice;
        let computer = computerChoice();
        console.log("Round " + numRounds + ":")
        console.log("You chose " + user + " and the computer chose " + computer + ": ", 
        playRound(user, computer));  
        

        if (userWin == 5){
            win.style.visibility = 'visible';
            setTimeout(clearWin, 1000);
            numRounds = 0;
            botWin = 0;
            userWin = 0;
            draw = 0;
        }
        else if (botWin == 5){
            lose.style.visibility = 'visible';
            setTimeout(clearWin, 1000);
            numRounds = 0;
            botWin = 0;
            userWin = 0;
            draw = 0;

        }
        userText.innerHTML = 'You: ' + userWin;
        botText.innerHTML = 'Bot: ' + botWin;
        drawText.innerHTML = 'Draw: ' + draw;
    }

