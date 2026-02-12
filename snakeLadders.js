const board = {
  1 : "1",
  2 : "38",
  3 : "3",
  4 : "4",
  5 : "5",
  6 : "6",
  7 : "14",
  8 : "31",
  9 : "9",
  10 : "10",
  11 : "11",
  12 : "12",
  13 : "13",
  14: "14",
  15 : "26",
  16 : "6",
  17 : "17",
  18 : "18",
  19 : "19",
  20 : "20",
  21 : "42",
  22 : "22",
  23 : "23",
  24 : "24",
  25 : "25",
  26 : "26",
  27 : "27",
  28 : "84",
  29 : "29",
  30 : "30",
  31 : "31",
  32 : "32",
  33 : "33",
  34 : "34",
  35 : "35",
  36 : "44",
  37 : "37",
  38 : "38",
  39 : "39",
  40 : "40",
  41 : "41",
  42 : "42",
  43 : "43",
  44 : "44",
  45 : "45",
  46 : "25",
  47 : "47",
  48 : "48",
  49 : "11",
  50 : "50",
  51 : "67",
  52 : "52",
  53 : "53",
  54 : "54",
  55 : "55",
  56 : "56",
  57 : "57",
  58 : "58",
  59 : "59",
  60 : "60",
  61 : "61",
  62 : "19",
  63 : "63",
  64 : "60",
  65 : "65",
  66 : "66",
  67 : "67",
  68 : "68",
  69 : "69",
  70 : "70",
  71 : "91",
  72 : "72",
  73 : "53",
  74 : "53",
  75 : "75",
  76 : "76",
  77 : "77",
  78 : "98",
  79 : "79",
  80 : "80",
  81 : "81",
  82 : "82",
  83 : "83",
  84 : "84",
  85 : "85",
  86 : "86",
  87 : "94",
  88 : "88",
  89 : "89",
  90 : "90",
  91 : "91",
  92 : "88",
  93 : "93",
  94 : "94",
  95 : "75",
  96 : "96",
  97 : "97",
  98 : "98",
  99 : "80",
  100 : "100"
} 

const players = {
   1 : { name: "Player 1",  endPosition : 1, startPosition : 1, currentPosition : 0 },
   2 : { name: "Player 2",  endPosition : 1, startPosition : 1 , currentPosition : 0 }
}

class SnakesLadders {
    constructor() {   
        this.board = board;
        this.players = players;    
        this.currentPlayer = 1;   
    }

    play(diece1, diece2) {
        let isDouble = diece1 === diece2;
        let move = diece1 + diece2;
        let player = this.players[this.currentPlayer];
        player.endPosition = movePlayer(player, move);
        if (player.endPosition === 100) {
            this.resetGame();
            return `${player.name} Wins!`;
        }else {
            player.startPosition = parseInt(player.currentPosition);
            if(isDouble){
                player.startPosition;
            }else{
                this.whoIsPlaying();
            }
            return `${player.name} is on square ${player.currentPosition}`;
        }
    }
    
    resetGame() {
        this.players[1].endPosition = 1;
        this.players[2].endPosition = 1;
        this.players[1].startPosition = 1;
        this.players[2].startPosition = 1;
    }
    whoIsPlaying() {
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
    }

}

//helpers:

function  movePlayer(player, move) {
    if(player.startPosition !== 1 ) {
        move = player.startPosition + move;
        if(move > 100) {
            player.currentPosition = 100 - (move - 100);
            player.currentPosition = board[player.currentPosition];
        } else{
            player.currentPosition = board[move];
        }
        if(player.currentPosition > 100) {
            player.currentPosition = 100 - (player.currentPosition - 100);
            player.currentPosition = board[player.currentPosition];
        }
        return parseInt(player.currentPosition);
    } else {
        player.currentPosition = board[move];
        return parseInt(player.currentPosition); 
    }
}


module.exports = SnakesLadders;

// test case prompt
// let game = new SnakesLadders();

// console.log(game.play(1, 1));
// console.log(game.play(1, 5));
// console.log(game.play(6, 2));
// console.log(game.play(1, 1));
