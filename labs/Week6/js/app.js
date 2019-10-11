var app = new Vue({
  el: "#app",
  data: {
    gameOver: false,
    playerTurn: 1,
    winner: 0,
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

        //modify the cloned version
        tempGrid[moveRow][col] = this.playerTurn;

        //replace
        this.grid = tempGrid;

        //swap player turns
        this.playerTurn = this.playerTurn == 1 ? 2 : 1;

        //check for win
        this.checkWin();
      }
    },
    lowestMove: function(col) {
      for (var row = 5; row >= 0; row--) {
        if (this.grid[row][col] == 0) {
          //if it is free, return row index
          return row;
        }
      }
    },
    checkWin: function(row, col) {
      //loop through all columns to check
      //if win found set over to true
      for (var row = 0; row < this.grid.length; row++) {
        for (var col = 0; col < this.grid[row].length; col++) {
          if (row - 3 >= 0) {
            if (
              //check through row
              this.grid[row - 3][col] == this.grid[row - 2][col] &&
              this.grid[row - 1][col] == this.grid[row][col] &&
              this.grid[row][col] == this.grid[row - 3][col] &&
              (this.grid[row][col] == 1 || this.grid[row][col] == 2)
            ) {
              this.gameOver = true;
              this.winner = this.playerTurn;
              break;
            }
          }
          if (col - 3 >= 0) {
            if (
              //check through columns
              this.grid[row][col - 3] == this.grid[row][col - 2] &&
              this.grid[row][col - 1] == this.grid[row][col] &&
              this.grid[row][col] == this.grid[row][col - 3] &&
              (this.grid[row][col] == 1 || this.grid[row][col] == 2)
            ) {
              this.gameOver = true;
              this.winner = this.playerTurn;
              break;
            }
          }
          if (row - 3 >= 0 && col - 3 >= 0) {
            if (
              //check one diagonal
              this.grid[row - 3][col - 3] == this.grid[row - 2][col - 2] &&
              this.grid[row - 1][col - 1] == this.grid[row][col] &&
              this.grid[row][col] == this.grid[row - 3][col - 3] &&
              (this.grid[row][col] == 1 || this.grid[row][col] == 2)
            ) {
              this.gameOver = true;
              this.winner = this.playerTurn;
              break;
            }
          }
          if (row - 3 >= 0 && col + 3 <= this.grid[row].length) {
            if (
              //check other diagonal
              this.grid[row - 3][col + 3] == this.grid[row - 2][col + 2] &&
              this.grid[row - 1][col + 1] == this.grid[row][col] &&
              this.grid[row][col] == this.grid[row - 3][col + 3] &&
              (this.grid[row][col] == 1 || this.grid[row][col] == 2)
            ) {
              this.gameOver = true;
              this.winner = this.playerTurn;
              break;
            }
          }
        }
      }
    }
  }
});
