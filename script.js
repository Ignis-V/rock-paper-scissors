console.log("Hello, world!");

// pesudocode for rock-paper-scissors game
// Math.random return random numbers 0, 1 or 2
// 0 for rock
// 1 for paper
// 2 for scisssors
// store this result as computerChoice
// buttons to get human choice
// store this result as humanChoice
// different scenarios
// rock > scissors
// paper > rock
// scissors > paper
// if user choice === computer input then tie

// computer choice
let getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}; 

// buttons to get human choice
let getHumanChoice = () => {
    // this function will be handled by button event listeners
    return humanChoice;
}


// create buttons
const div = document.createElement('div');
document.body.appendChild(div);
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';

div.appendChild(rockButton);
div.appendChild(paperButton);
div.appendChild(scissorsButton);


// event listeners for buttons
let humanChoice = '';
rockButton.addEventListener('click', () => {
    humanChoice = 'rock';
    playGame();
});
paperButton.addEventListener('click', () => {
    humanChoice = 'paper';
    playGame();
});
scissorsButton.addEventListener('click', () => {
    humanChoice = 'scissors';
    playGame();
});


// variable to keep track of score
let humanScore = 0;
let computerScore = 0;
let round = 0;


// play game function
let playGame = () => {
        let computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            console.log(`Round ${round + 1}: It's a tie! Both chose ${humanChoice}.`);
            console.log(`Scores => You: ${humanScore}, Computer: ${computerScore}`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`Round ${round + 1}: You win! ${humanChoice} beats ${computerChoice}.`);
            console.log(`Scores => You: ${humanScore + 1}, Computer: ${computerScore}`);
            humanScore++;
        } else {
            console.log(`Round ${round + 1}: You lose! ${computerChoice} beats ${humanChoice}.`);
            console.log(`Scores => You: ${humanScore}, Computer: ${computerScore + 1}`);
            computerScore++;
        }
        round++;

        // end game when either player reaches 5 points
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore === 5) {
                console.log("Congratulations! You reached 5 points and won the game!");
            } else {
                console.log("The computer reached 5 points and won the game. Better luck next time!");
            }
            // reset scores and round for a new game
            humanScore = 0;
            computerScore = 0;
            round = 0;
        }
    }




