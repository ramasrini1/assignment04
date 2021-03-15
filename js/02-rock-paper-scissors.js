
var csScore    = 0;
var userScore  = 0;

var rock =      "rock";
var paper =     "paper";
var scissors =  "scissors";

var userInput = prompt("Enter in upper/lower case, rock or paper or scissors.");
var userChoice    = userInput.toLowerCase();
var csChoice = "";
var msg      = "";
//console.log("user entered " + userChoice);

if (userChoice === rock || userChoice === paper || userChoice === scissors){
    console.log("Let's play the Game - Rock, Paper And Scissors");
    // Get the choice from the computer
    csChoice = getComputerChoice();
    determineWinner();
    displayResults();  
} else{
    prompt("Enter valid input, Enter in upper or lower case rock, paper or scissors");
    console.log("enter valid input");
}

function getComputerChoice() {
    var chosen;
    var x = Math.floor((Math.random() * 3) + 1);
    if(x == 1)
        chosen = rock;
    if(x == 2)
    chosen = paper;
    if(x == 3)
        chosen =  scissors;
    return chosen;
}

function determineWinner(){
    if ( csChoice === rock ){
        if (userChoice ===  scissors){
            // rock destroys scissors increment csScore
            csScore ++;
            msg = "Rock destroys Scissors";
        } else if (userChoice == paper){
            //paper covers rock increment user score
            userScore ++;
            msg = "Paper covers Rock";
        } else {
            // user has choosen rock, same choice no one wins
        }       
    }
    if (csChoice === paper){
        if (userChoice ===  scissors){
            // scissors cuts paper
            userScore ++;
            msg = "Scissors cuts paper";
        } else if (userChoice ==  paper){
            // same choice no one wins
        } else  {
            // user has choosen rock, paper covers rock
            csScore++;
            msg = "Paper covers rock";
        }
    }
    if (csChoice ===  scissors){
        if (userChoice === scissors){
            // same choice no one wins
        } else if (userChoice == paper){
            // scissors cuts paper
            csScore++;
            msg = "Scissors cuts paper";
        } else  {
            // user has choosen rock
            //rock detstroys scissors
            userScore++;
            msg = "Rock destroys scissors";
        }
    }
}

function displayResults(){
    if (csScore > userScore){
        console.log(`Computer wins!! \nUser choose ${userChoice} \nComputer choose ${csChoice} \n${msg}`);
        //console.log (msg);
    } else if( userScore > csScore){
        console.log(`User wins!!\nUser choose ${userChoice}  \nComputer choose ${csChoice}\n${msg}`);
        //console.log (msg);
    } else {
        console.log(`Game Tied\n User choose ${userChoice} \nComputer choose ${csChoice}`);
    }
}