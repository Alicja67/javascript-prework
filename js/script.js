function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    }

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);

        if ((argComputerMove == 'kamień' && argPlayerMove == 'nożyce') || (argComputerMove == 'papier' && argPlayerMove == 'kamień') || (argComputerMove == 'nożyce' && argPlayerMove == 'papier')) {
            printMessage('Ja wygrywam!');
            scoreComputer++;
            scoreComputerDisplay.textContent = scoreComputer;
            return;
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis');
            return;
        } else if (argPlayerMove == 'nieznany ruch') {
            printMessage('Nieznany ruch!');
            return;
        } else {
            printMessage('Tym razem wygrywasz ;)');
            scorePlayer++;
            scorePlayerDisplay.textContent = scorePlayer;
            return;
        }
    }

    let computerMove = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + computerMove);
    let computerMoveResult = getMoveName(computerMove);
    printMessage('Mój ruch to: ' + computerMoveResult);

    console.log('Gracz wpisał: ' + playerInput);
    let playerMoveResult = getMoveName(playerInput);
    console.log('Gracz wybrał: ' + playerMoveResult)
    printMessage('Twój ruch to: ' + playerMoveResult);

    displayResult(computerMoveResult, playerMoveResult);
}

document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});

let scorePlayerDisplay = document.getElementById('scorePlayer');
let scoreComputerDisplay = document.getElementById('scoreComputer');
let scorePlayer = 0;
let scoreComputer = 0;