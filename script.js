function computerPlay() {
let randomInt = Math.floor(Math.random() * 3);  
if (randomInt === 0) {
    compChoiceText ='rock';
    return 'Rock';
  } else if (randomInt === 1) {
    compChoiceText = 'paper';
    return  'Paper';
  } else {
    compChoiceText = 'scissors';
    return  'Scissors';
  }
};

let wins = 0;
let draws = 0;
let losses = 0;
let roundsPlayed = 0
//  while (roundsLeft > 0) {
 //   playRound() 
 //   --roundsLeft;
 // }


function playRound(playerSelection, computerSelection) { 
    computerSelection = computerPlay();
  if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
          (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') || 
          (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper')) {
    roundResult = 'Win';
    ++roundsPlayed;
    return ++wins;
  } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase())  {
      roundResult = 'Draw';
      ++roundsPlayed;
      return ++ draws;
  } else {
      roundResult = 'Loss';
      ++roundsPlayed;
      return ++losses;
  };  
};

let roundResult;
let compChoiceText;

function updateResults(){
  document.getElementById('numRounds').textContent = roundsPlayed;
  document.getElementById('wins').textContent = wins;
  document.getElementById('draws').textContent = draws;
  document.getElementById('losses').textContent = losses;
};

let result = document.getElementById('result');
let compSelDiv = document.getElementById('compSelDiv') ;

let rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
  console.log('rock');
  playRound('rock');
  compSelDiv.textContent = 'The Computer chose: ' + compChoiceText;
  result.textContent = 'This round resulted in a: ' + roundResult;
  updateResults();
});

let paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
  console.log('paper');
  playRound('paper');
  compSelDiv.textContent = 'The Computer chose: ' + compChoiceText;
  result.textContent = 'This round resulted in a: ' + roundResult;
  updateResults();
});

let scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
  console.log('scissors');
  playRound('scissors');
  compSelDiv.textContent = 'The Computer chose: ' + compChoiceText;
  result.textContent = 'This round resulted in a: ' + roundResult;
  updateResults();
});