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

let grid = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

//Set the current player
currentPlayer = player1;
        function currentP(){
            currentPlayer = currentPlayer  == player1 ? player2 : player1;
        }
        function printPlayerTurn(){
            pTurn.textContent = 'Turn to ' + currentPlayer.player;
        }

    function setBoard() {
        for (let rows = 0; rows < grid.length; rows++) {
            for(let columns = 0; columns< grid[0].length; columns++){   
            const divBoard = document.createElement("div");
                divBoard.setAttribute('data-game', grid[rows][columns])
                gameBoard.insertAdjacentElement("beforeend", divBoard);
                divBoard.addEventListener('click', selected);
        }
    }
        printPlayerTurn();
    }
    
    function selected(x){
        // if empty add symbol of the player
        if (x.target.textContent == '' ) {
            x.target.textContent = currentPlayer.symbol;
            let slot = x.target.getAttribute('data-game');
            getSelectedGrid(slot);
            currentP();
            printPlayerTurn();
            if (checkWin(currentPlayer)){
                console.log('win');
            }
           
            console.log(grid);
            
        }
    }
    function getSelectedGrid(value){
        //3 for the 3 in the row and column, square of 9
        let row = Math.floor(value / 3);
        let column = (value % 3);
        grid[row][column] = currentPlayer.symbol;
    }

    function clearGame() {
        gameBoard.querySelectorAll('div').forEach(elem => elem.remove());
        pTurn.innerHTML = "";
        grid = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
          ];
        }
    // Reset game
   btnReset.addEventListener('click', (e)=> {
    clearGame();
    selectSymbol.selectedIndex = null;
   }) 


// Check winner 
function checkWin(currentPlayer) {

    const rotatedGrid = grid[0].map((_, i) => grid.map((line) => line[i]))
  
    if (grid.some(line => line.every(tile => tile === currentPlayer.symbol))) return true;
  //If the value of row is the same return true
    else if (rotatedGrid.some(line => line.every(tile => tile === currentPlayer.symbol))) return true;
  //If the value of column is the same return true
    else if ([0, 1, 2].every(i => grid[i][i]) === currentPlayer.symbol) return true;
  //If the diag top left to bottom right are the same return true 
    else if ([0, 1, 2].every(i => grid[i][2 - i]) === currentPlayer.symbol) return true;
  //If the diag top right to bottom left are the same return true 
    else return false;
  //return false if nothing is true
  }

