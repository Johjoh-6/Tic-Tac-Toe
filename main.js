const btnReset = document.querySelector('#reset');
const selectSymbol = document.querySelector('#symbol');
const gameBoard = document.querySelector('#gameboard');
const pTurn = document.querySelector('#turn');
let currentPlayer;

class Player {
    constructor(
       player,
       symbol,
    ){
        this.player = 'player ' + selectSymbol.value;
       this.symbol = selectSymbol.value;
    }
}
// set player 
const player1 = new Player();
const player2 = new Player();
// maybe do it a another way to set the player like input at the beggining before showing the board game
selectSymbol.addEventListener('change', (e)=> {
    //    Set Game 
    clearGame();
    setBoard();
   
    player1.symbol = this.symbol.value;
    player1.player = 'player ' + this.symbol.value;
    if (symbol.value === 'X'){
        player2.player = 'player O';
        player2.symbol = 'O';
    }
    if (symbol.value === 'O'){
        player2.player = 'player X';
        player2.symbol = 'X';
    }
    printPlayerTurn();
})

const grid = [0,1,2,3,4,5,6,7,8];

//Set the current player
currentPlayer = player1;
        function currentP(){
            currentPlayer = currentPlayer  == player1 ? player2 : player1;
        }
        function printPlayerTurn(){
            pTurn.textContent = 'Turn to ' + currentPlayer.player;
        }

    function setBoard() {
        for (let i = 0; i < grid.length; i++) {
            const divBoard = document.createElement("div");
                divBoard.setAttribute('data-game', grid.indexOf(i))
                gameBoard.insertAdjacentElement("beforeend", divBoard);
                divBoard.addEventListener('click', selected);
            
        }
        printPlayerTurn();
    }
    
    function selected(x){
        // if empty add symbol of the player
        if (x.target.textContent == '' ) {
            x.target.textContent = currentPlayer.symbol;
            // grid = currentPlayer.symbol;
            currentP();
            printPlayerTurn();
            console.log(grid[x.target]);
            console.log(grid.indexOf(x));
        
        }
    }
    function clearGame() {
        gameBoard.querySelectorAll('div').forEach(elem => elem.remove());
        pTurn.innerHTML = "";
        }
    // Reset game
   btnReset.addEventListener('click', (e)=> {
    clearGame();
    selectSymbol.selectedIndex = null;
   }) 


// Check winner 
const winCombos = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [0,4,8]
];
winCombos.forEach(combo => console.log(combo));
winCombos.forEach(combo => 
    combo.forEach(function(nb) {
        console.log(nb)
        if (nb === 'X') {
          console.log('win');
        }
      }));

