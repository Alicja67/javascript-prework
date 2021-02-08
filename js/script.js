let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'nożyce';
} else if(randomNumber == 3){
    computerMove = 'papier';
}


printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: nożyce, 3: papier.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == 2){
    playerMove = 'nożyce';
} else if(playerInput == 3){
    playerMove = 'papier';
} else {
    playerMove = 'nieznany ruch';
}

printMessage('Twój ruch to: ' + playerMove);

if( (computerMove == 'kamień' && playerMove == 'nożyce') || (computerMove == 'papier' && playerMove == 'kamień') || (computerMove == 'nożyce' && playerMove == 'papier')){
    printMessage('Ja wygrywam!');
} else if(computerMove == playerMove) {
    printMessage('Remis');
} else if(playerMove == 'nieznany ruch') {
    printMessage('Niewłaściwy ruch!');
}else {
    printMessage('Ty wygrywasz!')
}