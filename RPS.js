let RPS = [
    "rock",
    "paper",
    "scissors"
]




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


function computerPlay() {
    let rollthedice = RPS[Math.floor(Math.random() * RPS.length)];
    document.querySelector(".computerImage").src = ("Icons/" + rollthedice.toString() + ".png")
    return rollthedice;

}


function toRoman(num) {
    let i = "I"
    let v = "V"
    if (num <= 3) {
        return i.repeat(num)
    }
    else if (num == 4)
        return i.concat(v)
    else if (num == 5) {
        return v;
    }
    else {
        return "i'll make more numbers later"
    }
}


let CP = 0;
let PS = 0;



function playRound() {

    const computerSelection = computerPlay();




    if (playerSelection == computerSelection) {
        match.textContent = ("it\'s a Tie.");
    }
    else if ((playerSelection + computerSelection === "rockscissors")
        || (playerSelection + computerSelection === "paperrock")
        || (playerSelection + computerSelection === "scissorspaper")) {
        PS = PS + 1;
        playerScore.textContent = toRoman(PS)
        match.textContent = ("You Won! " + playerSelection + " beats " + computerSelection + ".");
        if (PS == 5) {
            match.textContent = ("YOU HAVE WON. FOR NOW");
            playerScore.textContent = toRoman(PS);
            computerScore.textContent = toRoman(CP);
            PS = 0;
            CP = 0;
            
        }


    }
    else {
        CP = CP + 1;
        computerScore.textContent = toRoman(CP);
        match.textContent = ("You lose. " + computerSelection + " beats " + playerSelection + ".")
        if (CP == 5) {
            match.textContent = ("THIS IS THE END OF YOU");
            playerScore.textContent = toRoman(PS);
            computerScore.textContent = toRoman(CP);
            PS = 0;
            CP = 0;
            
        }
    }



}











/* function game() {
    let i = 5;
    while (CP < i || PS < i ) {
        console.log(playRound())
        if (CP === i || PS === i) { break; }
        console.log("Your score: " + PS + ". " + "Computer Score: " + CP + ".")

    }

    console.log("Your score: " + PS + ". " + "Computer Score: " + CP + ".")

    if (PS > CP) {
        console.log("Flawless Victory")

    }
    else if (CP > PS) {
        console.log("Another Humiliating Defeat. How Pathetic.")
    }
    return CP = 0, PS = 0;

}
    function endgame() {
            if (CP == 5) {
                match.textContent = ("THIS IS THE END OF YOU");
                PS = 0;
                CP = 0;
                playerScore.textContent = "Your Score: " + PS;
                computerScore.textContent = "Computer Score: " + CP;
            }
            else if (PS == 5) {
                match.textContent = ("YOU HAVE WON. FOR NOW");
                PS = 0;
                CP = 0;
                playerScore.textContent = "Your Score: " + PS;
                computerScore.textContent = "Computer Score: " + CP;
            }
            else {continue;}
}

*/