const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = "rock";
    playRound();
    document.querySelector(".playerImage").src = "Icons/rock.png";
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = "paper";
    playRound();
    document.querySelector(".playerImage").src = "Icons/paper.png";

});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    playRound();
    document.querySelector(".playerImage").src = "Icons/scissors.png";

});

const playerScore = document.querySelector('#PS');
const match = document.querySelector('#match');
const computerScore = document.querySelector('#CP');

let RPS = [
    "rock",
    "paper",
    "scissors"
]

let CS = 0;
let PS = 0;

function computerPlay() { 
    let rollthedice = RPS[Math.floor(Math.random() * RPS.length)];
    document.querySelector(".computerImage").src = ("Icons/" + rollthedice.toString() + ".png")
    return rollthedice;

}

function playRound() { 

    const computerSelection = computerPlay();

    if (playerSelection == computerSelection) {
        match.textContent = ("it\'s a Tie.");
    }
    else if ((playerSelection + computerSelection === "rockscissors")
        || (playerSelection + computerSelection === "paperrock")
        || (playerSelection + computerSelection === "scissorspaper")) {
        PS = PS + 1;
        playerScore.textContent = PS;
        match.textContent = ("You've Won! " + playerSelection + beatsOrBeat(playerSelection) + computerSelection + ".")
        whoWon()    
        }
    else {
        CS = CS + 1;
        computerScore.textContent = CS;
        
        match.textContent = ("You lose. " + computerSelection + beatsOrBeat(computerSelection) + playerSelection + ".")
        whoWon()  
        }
    }

function whoWon() {
    if  (PS == 5) {
        match.textContent = ("You Have Won");
        PS = 0;
        CS = 0;
        playerScore.textContent = PS;
        computerScore.textContent = CS;} 
    else if (CS == 5) {
        match.textContent = ("You Died");
        PS = 0;
        CS = 0;
        playerScore.textContent = PS;
        computerScore.textContent = CS;      
}
} 
        

function beatsOrBeat(computerSelection, playerSelection) {
    if (computerSelection === "scissors" || playerSelection === "scissors") {
        return " beat "}
    else {return " beats "}
    }