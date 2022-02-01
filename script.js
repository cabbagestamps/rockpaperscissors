// generate a random integer (0, 1, 2,), if 0 log rock, if 1 log paper, if 2 log scissors
function computerPlay() {
let randomInt = Math.floor(Math.random() * 3);  
if (randomInt === 0) {
    console.log('Rock');
    console.log(randomInt);
    return 'Rock';
  } else if (randomInt === 1) {
    
    console.log('Paper');
    console.log(randomInt);
    return 'Paper';
  } else {
    console.log ('Scissors');
    console.log(randomInt);
    return 'Scissors';
  }
};
// take player input and computer selection and see who wins 
// eg if computerPlay = Rock && playerSelction = Paper, return string 'you win'
// is there a mathemagical way of dealing with it so that i dont have to right if else for every combo?
// or is there just less combos than im thinking
// maybe theres only 3 win states (rock>scissors, paper>rock, scissors>paper) 
// so can do eg "(compSel = rock && plaSel = pap) || (or) (compSel = pap && plaSel = scis) etc etc
// this keeps the total if statements down but like one of the statements would be real long
// side note: found out how to make inputs case insensitive, when we first build this we will write in command console thing:
// playRound(Rock, Paper) just to test if it works might need to put '' on things dunno
// im thinking about it and theres proably smart way or doing it with either switch break format or that ? conditional thing
// neither of which i understand so we'll try it if else way first
// also look up how to go over lines
function playRound(playerSelection, computerSelection) {
    
    if ((playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') 
       || (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock')
       || (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper')) {
        console.log('You win');
    } else if (playerSelection.toLowerCase() === computerSelection.toLowerCase())  {
        console.log("It's a draw!")
    } else {
        console.log('You lose'); 
       }
// so this is functional, probably only need to find out how to 
// i guess you go 'let computerSelction = computerPLay' or something maybe, 
// maybe theres a better way to get stuff from functons
// hmm
// whats the diffferesnce between computerPlay and computerSelection
// i think right computerSelction is just a parameter / arguemtn and not a variable????
// would the let thing above work???
// put computerPlay function inside playROund function? or seperately?

// the let thing doesnt work i think cos its a redeclaration

// i got i got it i got it i goit iut
// it works when you put `playRound('rOCk', computerPlay())` in the thing
// so i think its a problem for another function
// eg function playGame()
// actually maybe not but its ok
}
