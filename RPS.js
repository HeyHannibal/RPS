

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) => {
  alert("Hello World");
});



FUCK GIT 


/*


let RPS = [ 
    "rock",
    "paper", 
    "scissors"
]






function computerPlay() {
    return RPS[Math.floor(Math.random()*RPS.length)];
}

let PS = 0; 
let CP = 0; 
function playRound() {
    const computerSelection = computerPlay(); 
    
    const playerSelection =  computerPlay();  //prompt("choose your weapon").toLowerCase(); 
    
    console.log(playerSelection, computerSelection)
    
    
  
    if (playerSelection == computerSelection) {
        return ("it\'s a Tie.")
        }    
    else if ((playerSelection + computerSelection === "rockscissors")   
            || (playerSelection + computerSelection === "paperrock") 
            || (playerSelection + computerSelection === "scissorspaper")) {
        PS = PS + 1; 
        return  ("You Won! " + playerSelection + " beats " + computerSelection + ".") ;       
        }
    else { 
        CP = CP + 1; 
        return ("You lose. " + computerSelection + " beats " + playerSelection + ".")
        }
    
    }
  
function game() {
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
 */