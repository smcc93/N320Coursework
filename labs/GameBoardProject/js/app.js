var app = new Vue({
  el: "#app",
  data: {
    //initialize game variables
    gameOver: false,
    playerTurn: 1,
    winner: 0,

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
    playerShips: {
      Detroyer: { hits: 2, id: 1 },
      Submarine: { hits: 3, id: 2 },
      Cruiser: { hits: 3, id: 3 },
      Battleship: { hits: 4, id: 4 },
      AircraftCarrier: { hits: 5, id: 5 },
      Sunk: 0
    },
    AIShips: {
      Detroyer: { hits: 2, id: 1 },
      Submarine: { hits: 3, id: 2 },
      Cruiser: { hits: 3, id: 3 },
      Battleship: { hits: 4, id: 4 },
      AircraftCarrier: { hits: 5, id: 5 },
      Sunk: 0
    }
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
            var loc = this.tempGrid[row][col];

            this.hit();
            return loc;
          }
        }
      }

      //replace grid
      this.AIgrid = tempGrid;

      //swap player turns
      this.playerTurn = this.playerTurn == 1 ? 2 : 1;

      this.checkWin();
    },
    hit: function(loc) {
      if (playerTurn == 1) {
        if (loc == AIShips.Detroyer.id) {
          AIShips.Detroyer.hit--;
          if (AIShips.Detroyer.hit == 0) {
            AIShips.Sunk++;
          }
        }

        if (loc == AIShips.Submarine.id) {
          AIShips.Submarine.hit--;
          if (AIShips.Submarine.hit == 0) {
            AIShips.Sunk++;
          }
        }
        if (loc == AIShips.Cruiser.id) {
          AIShips.Cruiser.hit--;
          if (AIShips.Cruiser.hit == 0) {
            AIShips.Sunk++;
          }
        }
        if (loc == AIShips.Battleship.id) {
          AIShips.Battleship.hit--;
          if (AIShips.Battleship.hit == 0) {
            AIShips.Sunk++;
          }
          if (loc == AIShips.AircraftCarrier.id) {
            AIShips.AircraftCarrier.hit--;
            if (AIShips.AircraftCarrier.hit == 0) {
              AIShips.Sunk++;
            }
          }
        } else {
          if (loc == playerShips.Detroyer.id) {
            playerShips.Detroyer.hit--;
            if (playerShips.Detroyer.hit == 0) {
              playerShips.Sunk++;
            }
          }

          if (loc == playerShips.Submarine.id) {
            playerShips.Submarine.hit--;
            if (playerShips.Submarine.hit == 0) {
              playerShips.Sunk++;
            }
          }
          if (loc == playerShips.Cruiser.id) {
            playerShips.Cruiser.hit--;
            if (playerShips.Cruiser.hit == 0) {
              playerShips.Sunk++;
            }
          }
          if (loc == playerShips.Battleship.id) {
            playerShips.Battleship.hit--;
            if (playerShips.Battleship.hit == 0) {
              playerShips.Sunk++;
            }
          }
          if (loc == playerShips.AircraftCarrier.id) {
            playerShips.AircraftCarrier.hit--;
            if (playerShips.AircraftCarrier.hit == 0) {
              playerShips.Sunk++;
            }
          }
        }
      }
    },
    checkWin: function() {
      if (playerTurn == 1) {
        if (AIShips.Sunk == 5) {
          winner == 1;
        }
      } else {
        if (playerShips.Sunk == 5) {
          winner == 2;
        }
      }
    }
  }
});
