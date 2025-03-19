String.prototype.equalIgnoreCase = function(str) {
    return (str != null &&
      typeof str === 'string' &&
      this.toUpperCase() === str.toUpperCase());
}

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    if(getRandomInt(3) === 0){
        return "Rock";
    }else if(getRandomInt(3) === 1){
        return "Paper";
    }else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Make your choice: Rock, Paper or Scissors?");
    return humanChoice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if(humanChoice.equalIgnoreCase("Rock")){
            if(computerChoice === "Scissors"){
                humanScore += 1;
                console.log("You win! Rock beats Scissors");
            }else if(computerChoice === "Paper"){
                computerScore += 1;
                console.log("You lose! Paper beats Rock");
            }else console.log("Draw! Both choices are Rocks");
        }else if(humanChoice.equalIgnoreCase("Paper")){
            if(computerChoice === "Rock"){
                humanScore += 1;
                console.log("You win! Paper beats Rock");
            }else if(computerChoice === "Scissors"){
                computerScore += 1;
                console.log("You lose! Scissors beats Paper");
            }else console.log("Draw! Both choices are Paper");
        }else if(humanChoice.equalIgnoreCase("Scissors")){
            if(computerChoice === "Paper"){
                humanScore += 1;
                console.log("You win! Scissors beats Paper");
            }else if(computerChoice === "Rock"){
                computerScore += 1;
                console.log("You lose! Rock beats Scissors");
            }else console.log("Draw! Both choices are Scissors");
        }
    }

    let humanSelection = null;
    let computerSelection = null;
    for(let i = 0; i < 5; i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore) console.log("And the winner is you!");
    else if(computerScore > humanScore) console.log("And the winner is computer!");
    else console.log("Draw!");
}

playGame();