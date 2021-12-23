const btnReset = document.querySelector('#reset');
const selectSymbol = document.querySelector('#symbol');
const gameBoard = document.querySelector('#gameboard');


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
    console.log(player1);
    console.log(player2);
})

const grid = [0,1,2,3,4,5,6,7,8];
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
//Set the current
        function currentP(){
            currentPlayer = currentPlayer  == player1 ? player2 : player1;
        }

    function setBoard() {
        for (let i = 0; i < grid.length; i++) {
            const divBoard = document.createElement("div");
            const pBoard = document.createElement("p");
                divBoard.setAttribute('data-game', grid.indexOf(i))
                divBoard.appendChild(pBoard);
                gameBoard.insertAdjacentElement("beforeend", divBoard);
                divBoard.addEventListener('click', selected);
        }
    }
    
    function selected(x){
        const p = document.querySelector('#gameboard p ');
        console.log(player1.symbol);
        x.target.textContent = player1.symbol;
    }

    // Reset game
   btnReset.addEventListener('click', (e)=> {
    gameBoard.textContent= '';
    setBoard();
   }) 


//    Set Game 
setBoard();
console.log(player1);