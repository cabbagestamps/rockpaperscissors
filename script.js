function computerPlay() {
let randomInt = Math.floor(Math.random() * 3);  
if (randomInt === 0) {
    return 'Rock';
  } else if (randomInt === 1) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
};

function game() {
  let wins = 0;
  let draws = 0;
  let losses = 0;
  let roundsLeft = 5
  while (roundsLeft > 0) {
    playRound() 
    --roundsLeft;
  };


 function playRound(playerSelection, computerSelection) { 
    playerSelection = prompt(`${roundsLeft} rounds remaining. Choose your weapon:`, '');
    computerSelection = computerPlay();
     if (playerSelection === null) {
        alert('Game cancelled')  
        roundsLeft = 0;
        return;
      } else {
        if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
              (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') || 
              (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper')) {
        alert(`You selected: ${playerSelection}. The computer plays ${computerSelection}. You win!`);
        return ++wins;
      } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase())  {
        alert(`You selected: ${playerSelection}. The computer plays ${computerSelection}. It's a draw!`);
        return ++ draws;
      } else if (playerSelection === '') {
        alert(`You didn't select anything! The computer plays ${computerSelection}. You lose!`)
        return ++losses;
      } else if (!isValidEntry) {
         alert(`${playerSelection} is not a valid weapon. Please choose another.`)
         roundsLeft = roundsLeft + 1;
         return;
      } else {
        alert(`You selected: ${playerSelection}. The computer plays ${computerSelection}. You lose!`); 
        return ++losses;
      };  
    };
  };
  console.log(`Wins =  ${wins}`);
  console.log(`Draws = ${draws}`);
  console.log(`Losses = ${losses}`);
  if (wins > losses) {
      return alert('A grand victory');
  } else if (wins < losses) {
      return alert('A miserable defeat');
  } else  {
      return alert('A confusing draw');
  };
};  

function isValidEntry() {
  if  (playerSelection.toLowerCase() === 'rock' ||
        playerSelection.toLowerCase() === 'paper' ||
        playerSelection.toLowerCase() === 'scissors') {
      return true;
  } else {
    return false;
  }
};
