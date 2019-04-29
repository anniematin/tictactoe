  // 1. Find and store the element we want to listen to events on.

      // 2. Define the function that will respond to the event.
      var turn = 0;
      var player = "X";
      var grid = [];
      var gameOver = false;

      var onButtonClick = function() {


        //X's turn
        if (turn % 2 == 0) {
          player = "X";


        }
        //O's turn
        else {
          player = "O";

        }
        turn++;

        //set button text to X or O
        this.textContent = player;


        //clickedInt is index in the grid
        var clickedInt = parseInt(this.id.substring(6, 7));
        //add X or O to that index in the grid
        grid[clickedInt] = player;

      function checkWin(myNum, delta){
      	if(grid[myNum] != undefined){
          if(grid[myNum] == grid[myNum-delta] && grid[myNum] == grid[myNum+delta] ){

            console.log(player + " wins");

          }


		}
       }
        checkWin(4,1);
        checkWin(4,3);
        checkWin(4,2);
        checkWin(4,4);

        checkWin(1,1);
        checkWin(7,1);

        checkWin(3,3);
        checkWin(5,3);







      }
      var onResetButtonClick = function() {
        grid = [];
        turn = 0;
        console.log(grid);
        for (var i = 0; i < 9; i++) {

          document.getElementById("button" + i).innerHTML = "";
        }
      }



      // 3. Add the event listener for the element and function
      for (var i = 0; i < 9; i++) {

        document.getElementById("button" + i).addEventListener("click", onButtonClick);
      }
      document.getElementById("reset").addEventListener("click", onResetButtonClick);
