console.log("Hello, world!");

// pesudocode for rock-paper-scissors game
// 5 rounds total (not first to 5 wins)
// round variable +1 even if it draws
// Math.random return random numbers 0, 1 or 2
// 0 for rock
// 1 for paper
// 2 for scisssors
// store this result as computerChoice
// user input "prompt" rock, paper or scissors
// case insensitive
// store this result as humanChoice
// different scenarios
// rock > scissors
// paper > rock
// scissors > paper
// if user input === computer input then tie
// declare winner at each round and at the end of 5 rounds total


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

// human choice
let getHumanChoice = () => {
    let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();
    // validate input
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
    }
    return choice;
};

// variable to keep track of score
let humanScore = 0;
let computerScore = 0;
let round = 0;

// play game function
let playGame = () => {
    while (round < 5) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        if (humanChoice === computerChoice) {
            console.log(`Round ${round + 1}: It's a tie! Both chose ${humanChoice}.`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`Round ${round + 1}: You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        } else {
            console.log(`Round ${round + 1}: You lose! ${computerChoice} beats ${humanChoice}.`);
            computerScore++;
        }
        round++;
    }

    // declare overall winner
    if (humanScore > computerScore) {
        console.log(`Game over! You win with a score of ${humanScore} to ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`Game over! You lose with a score of ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`Game over! It's a tie with a score of ${humanScore} to ${computerScore}.`);
    }
};

// start the game
playGame();


