//Creating a current player variable that starts the game with player X. In tic tac toe X goes first.
let currentPlayer = 'X';
//created an empty array where the X's and 0's will be pushed to for comparison for a winner
let currentBoard = [];

//this function resets the game when the reset button is clicked
function resetGame(){
    
    currentBoard = [];
    document.getElementById('displayturn').innerHTML = 'X Goes first!';
    document.getElementById('winner').innerHTML = '-------';
    console.log(currentBoard);                                          //this is used to make sure the elements are being pushed into the array
    document.getElementById('0').innerHTML = "";
    document.getElementById('1').innerHTML = "";
    document.getElementById('2').innerHTML = "";
    document.getElementById('3').innerHTML = "";
    document.getElementById('4').innerHTML = "";
    document.getElementById('5').innerHTML = "";
    document.getElementById('6').innerHTML = "";
    document.getElementById('7').innerHTML = "";
    document.getElementById('8').innerHTML = "";
    newGame();
};

//this function is to switch the player by reassigning the currentPlayer value to the other player's mark, either X or O.
function switchPlayer(){
    if(currentPlayer == 'X'){
        currentPlayer = 'O';
        document.getElementById('displayturn').innerHTML = 'O, it\'s your turn!';
    } else if(currentPlayer == 'O') {
        currentPlayer = 'X';
        document.getElementById('displayturn').innerHTML = 'X, it\'s your turn!';
    }
};

//This functiosn purpose is to run through the entire possible winning combinations and if there is a match with the index numbers in the currentBoard array then
//the function will change the text to display the winner. The players can still click boxes if they want but the winner will not change. 
function checkForWinner(){
    if(currentBoard[0] === 'X' && currentBoard[1] === 'X' && currentBoard[2] === 'X'){
        document.getElementById('displayturn').innerHTML = "Sorry O,";
        document.getElementById('winner').innerHTML = 'X WINS!!';
    } else if(currentBoard[0] === 'O' && currentBoard[1] === 'O' && currentBoard[2] === 'O'){
        document.getElementById('displayturn').innerHTML = "Sorry X,";
        document.getElementById('winner').innerHTML = 'O WINS!!';
    } 
    else if(currentBoard[3] === 'X' && currentBoard[4] === 'X' && currentBoard[5] === 'X'){
        document.getElementById('displayturn').innerHTML = "Sorry O,";
        document.getElementById('winner').innerHTML = 'X WINS!!';
    } else if(currentBoard[3] === 'O' && currentBoard[4] === 'O' && currentBoard[5] === 'O'){
        document.getElementById('displayturn').innerHTML = "Sorry X,";
        document.getElementById('winner').innerHTML = 'O WINS!!';
    } 
    else if(currentBoard[6] === 'X' && currentBoard[7] === 'X' && currentBoard[8] === 'X'){
        document.getElementById('displayturn').innerHTML = "Sorry O,";
        document.getElementById('winner').innerHTML = 'X WINS!!';
    } else if(currentBoard[6] === 'O' && currentBoard[7] === 'O' && currentBoard[8] === 'O'){
        document.getElementById('displayturn').innerHTML = "Sorry X,";
        document.getElementById('winner').innerHTML = 'O WINS!!';
    } 
    else if(currentBoard[0] === 'X' && currentBoard[4] === 'X' && currentBoard[8] === 'X'){
        document.getElementById('displayturn').innerHTML = "Sorry O,";
        document.getElementById('winner').innerHTML = 'X WINS!!';
    } else if(currentBoard[0] === 'O' && currentBoard[4] === 'O' && currentBoard[8] === 'O'){
        document.getElementById('displayturn').innerHTML = "Sorry X,";
        document.getElementById('winner').innerHTML = 'O WINS!!';
    } 
    else if(currentBoard[2] === 'X' && currentBoard[4] === 'X' && currentBoard[8] === 'X'){
        document.getElementById('displayturn').innerHTML = "Sorry O,";
        document.getElementById('winner').innerHTML = 'X WINS!!';
    } else if(currentBoard[2] === 'O' && currentBoard[4] === 'O' && currentBoard[8] === 'O'){
        document.getElementById('displayturn').innerHTML = "Sorry X,";
        document.getElementById('winner').innerHTML = 'O WINS!!';
    } 
    else if(currentBoard[0] === 'X' && currentBoard[3] === 'X' && currentBoard[6] === 'X'){
        document.getElementById('displayturn').innerHTML = "Sorry O,";
        document.getElementById('winner').innerHTML = 'X WINS!!';
    } else if(currentBoard[0] === 'O' && currentBoard[3] === 'O' && currentBoard[6] === 'O'){
        document.getElementById('displayturn').innerHTML = "Sorry X,";
        document.getElementById('winner').innerHTML = 'O WINS!!';
    } 
    else if(currentBoard[1] === 'X' && currentBoard[4] === 'X' && currentBoard[7] === 'X'){
        document.getElementById('displayturn').innerHTML = "Sorry O,";
        document.getElementById('winner').innerHTML = 'X WINS!!';
    } else if(currentBoard[1] === 'O' && currentBoard[4] === 'O' && currentBoard[7] === 'O'){
        document.getElementById('displayturn').innerHTML = "Sorry X,";
        document.getElementById('winner').innerHTML = 'O WINS!!';
    } 
    else if(currentBoard[2] === 'X' && currentBoard[5] === 'X' && currentBoard[8] === 'X'){
        document.getElementById('displayturn').innerHTML = "Sorry O,";
        document.getElementById('winner').innerHTML = 'X WINS!!';
    } else if(currentBoard[2] === 'O' && currentBoard[5] === 'O' && currentBoard[8] === 'O'){
        document.getElementById('displayturn').innerHTML = "Sorry X,";
        document.getElementById('winner').innerHTML = 'O WINS!!';
    }
};


//These functions handles the cell clicks and pushes the contents into the currentBoard array for comparison later. it also runs the checkWinner function and will also switch the player.
function cellClick0(){
    document.getElementById('0').addEventListener('click', () => {
    document.getElementById('0').innerHTML = currentPlayer
    document.getElementById('0').removeEventListener('click', cellClick0);
    currentBoard[0] = currentPlayer;
    checkForWinner();
    console.log(currentBoard);
    switchPlayer();
    });    
}

function cellClick1(){
    document.getElementById('1').addEventListener('click', () => {
    document.getElementById('1').innerHTML = currentPlayer
    document.getElementById('1').removeEventListener('click', cellClick1);
    currentBoard[1] = currentPlayer;
    checkForWinner();
    console.log(currentBoard);
    switchPlayer();
    });
}

function cellClick2(){
    document.getElementById('2').addEventListener('click', () => {
    document.getElementById('2').innerHTML = currentPlayer
    document.getElementById('2').removeEventListener('click', cellClick2);
    currentBoard[2] = currentPlayer;
    checkForWinner();
    console.log(currentBoard);
    switchPlayer();
    });
}

function cellClick3(){
    document.getElementById('3').addEventListener('click', () => {
    document.getElementById('3').innerHTML = currentPlayer
    document.getElementById('3').removeEventListener('click', cellClick3);
    currentBoard[3] = currentPlayer;
    console.log(currentBoard);
    switchPlayer();
    });
}

function cellClick4(){
    document.getElementById('4').addEventListener('click', () => {
    document.getElementById('4').innerHTML = currentPlayer
    document.getElementById('4').removeEventListener('click', cellClick4);
    currentBoard[4] = currentPlayer;
    console.log(currentBoard);
    checkForWinner();
    switchPlayer();
    });
}

function cellClick5(){
    document.getElementById('5').addEventListener('click', () => {
    document.getElementById('5').innerHTML = currentPlayer
    document.getElementById('5').removeEventListener('click', cellClick5);
    currentBoard[5] = currentPlayer;
    console.log(currentBoard);
    checkForWinner();
    switchPlayer();
    });
}

function cellClick6(){
    document.getElementById('6').addEventListener('click', () => {
    document.getElementById('6').innerHTML = currentPlayer
    document.getElementById('6').removeEventListener('click', cellClick6);
    currentBoard[6] = currentPlayer;
    console.log(currentBoard);
    checkForWinner();
    switchPlayer();
    });
}

function cellClick7(){
    document.getElementById('7').addEventListener('click', () => {
    document.getElementById('7').innerHTML = currentPlayer
    document.getElementById('7').removeEventListener('click', cellClick7);
    currentBoard[7] = currentPlayer;
    console.log(currentBoard);
    checkForWinner();
    switchPlayer();
    });
}

function cellClick8(){
    document.getElementById('8').addEventListener('click', () => {
    document.getElementById('8').innerHTML = currentPlayer
    document.getElementById('8').removeEventListener('click', cellClick8);
    currentBoard[8] = currentPlayer;
    console.log(currentBoard);
    checkForWinner();
    switchPlayer();
    });
}


//This function sets everything up and turns on the event listeners so we can start playing the game.
function startGame(){
    document.getElementById('startgame').addEventListener('click', () => {
    document.getElementById('displayturn').innerHTML = 'X goes first!'
    document.getElementById('startgame').removeEventListener('click', startGame);
    document.getElementById('0').addEventListener('click', cellClick0);
    document.getElementById('1').addEventListener('click', cellClick1);
    document.getElementById('2').addEventListener('click', cellClick2);
    document.getElementById('3').addEventListener('click', cellClick3);
    document.getElementById('4').addEventListener('click', cellClick4);
    document.getElementById('5').addEventListener('click', cellClick5);
    document.getElementById('6').addEventListener('click', cellClick6);
    document.getElementById('7').addEventListener('click', cellClick7);
    document.getElementById('8').addEventListener('click', cellClick8);
    });
    document.getElementById('resetgame').addEventListener('click', resetGame);
   
}

//this is the function we call to start the game.
function newGame(){
    startGame();
}

newGame();



