var app = new Vue({
  el: "#app",
  data: {
    gameOver: false,
    playerTurn: 1,
    grid: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ]
  },
  methods: {
    selectCell: function(row, col) {
      //get row to place puck at
      var moveRow = this.lowestMove(col);

      if (moveRow >= 0) {
        //copy grid to a temp var
        var tempGrid = this.grid.slice(0);

        //modify cloned array
        tempGrid[row][col] = this.playerTurn;

        //replace
        this.grid = tempGrid;

        //swap player turns
        this.playerTurn = this.playerTurn == 1 ? 2 : 1;

        //check for win
        this.checkWin();
      }
    },
    checkWin: function() {
      //loop through all columns to check
      //if win found set over to true
    },

    lowestMove: function(col) {
      for (var row = 5; row >= 0; row--) {
        if (this.grid[row][col] == 0) {
          //if it is free, return row index
          return row;
        }
      }
    }
  }
});
