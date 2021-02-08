function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if(argMoveId == 2) {
        return 'nożyce';
    } else if(argMoveId == 3) {
        return 'papier';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
  }

let computerMove = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + computerMove);
let computerMoveResult = getMoveName(computerMove);
printMessage('Mój ruch to: ' + computerMoveResult);

let playerMove = prompt('Wybierz swój ruch! 1: kamień, 2: nożyce, 3: papier.');
console.log('Gracz wpisał: ' + playerMove);
let playerMoveResult = getMoveName(playerMove);
console.log('Gracz wybrał: ' + playerMoveResult)
printMessage('Twój ruch to: ' + playerMoveResult);

function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    console.log('moves:', argComputerMove, argPlayerMove);
  
    if((argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')){
        printMessage('Ja wygrywam!');
    } else if(argComputerMove == argPlayerMove){
        printMessage('Remis');
    } else if(argPlayerMove == 'nieznany ruch') {
        printMessage('Nieznany ruch!');
    } else {
        printMessage('Tym razem wygrywasz ;)');
    }
  }
  
  displayResult(computerMoveResult, playerMoveResult);