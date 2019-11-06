var app = new Vue({
  el: "#app",
  data: {
    //initialize game variables
    gameOver: false,
    playerTurn: 1,
    winner: 0,
    isActive: true,
    //play grids
    PlayerGrid: [
      [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      [4, 0, 0, 0, 5, 0, 0, 0, 0, 2],
      [4, 0, 0, 0, 5, 0, 0, 0, 0, 2],
      [4, 0, 0, 0, 5, 0, 0, 0, 0, 0],
      [4, 0, 0, 0, 5, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 3, 3, 3, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    AIgrid: [
      [4, 4, 4, 4, 0, 0, 0, 0, 0, 5],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 5],
      [0, 2, 0, 0, 0, 0, 0, 0, 0, 5],
      [0, 2, 0, 0, 0, 0, 0, 0, 0, 5],
      [0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 3, 3, 3, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    //ships
    playerShips: [
      { type: "Detroyer", hits: 2, id: 1 },
      { type: "Submarine", hits: 3, id: 2 },
      { type: "Cruiser", hits: 3, id: 3 },
      { type: "Battleship", hits: 4, id: 4 },
      { type: "Aircraft Carrier", hits: 5, id: 5 }
    ],
    AIShips: [
      { type: "Detroyer", hits: 2, id: 1 },
      { type: "Submarine", hits: 3, id: 2 },
      { type: "Cruiser", hits: 3, id: 3 },
      { type: "Battleship", hits: 4, id: 4 },
      { type: "Aircraft Carrier", hits: 5, id: 5 }
    ]
  },
  methods: {
    selectCell: function(row, col) {
      //copy gird
      var tempGrid = this.AIgrid.slice(0);
      //modify clone
      for (var row = 0; row < this.tempGrid.length; row++) {
        for (var col = 0; col < this.tempGrid[row].length; col++) {
          //apply background for cell: red if a hit, white if a miss
          if (this.tempGrid[row][col] == 0) {
            this.tempGrid[row][col].style.background = "#ffffff";
          } else {
            this.tempGrid[row][col].style.background = "#eb4034";
            this.hit();
          }
        }
      }

      //replace grid
      this.AIgrid = tempGrid;

      //swap player turns
      this.playerTurn = this.playerTurn == 1 ? 2 : 1;

      this.checkWin();
    },
    hit: function() {
      if (playerTurn == 1) {
      } else {
      }
    },
    checkWin: function() {
      if (playerTurn == 1) {
      } else {
      }
    }
  }
});
