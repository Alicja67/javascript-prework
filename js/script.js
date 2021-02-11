const playGame = function(playerInput) {
    clearMessages();

    const getMoveName = function (argMoveId) {
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
    const displayResult = function (argComputerMove, argPlayerMove) {
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
    computerMoveResult = getMoveName(computerMove);
    playerMoveResult = getMoveName(playerInput);

    console.log('Wylosowana liczba to: ' + computerMove);
    console.log('Gracz wpisał: ' + playerInput);
    console.log('Gracz wybrał: ' + playerMoveResult)
    printMessage('Mój ruch to: ' + computerMoveResult);
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
scoreComputerDisplay = document.getElementById('scoreComputer');
scorePlayer = 0;
scoreComputer = 0;