  // 1. Find and store the element we want to listen to events on.

    var result = document.getElementById("game-result");
    var reset = document.getElementById("reset");

    var turn = 0;
    var player = "X";
    var grid = [];
    var gameOver = false;



    function checkWin(myNum, delta){
      if(grid[myNum] != undefined){
        if(grid[myNum] == grid[myNum-delta] && grid[myNum] == grid[myNum+delta] ){

          result.textContent = "Player " +player + " wins!";
          gameOver = true;

        }


      }
     }

      //Click tic tac toe buttons
      var onButtonClick = function() {

        //get the index of the button clicked
        var clickedInt = parseInt(this.id.substring(6, 7));

        //player can only move if game is not over and a player has not clicked on that button
        if(gameOver == false && grid[clickedInt] == undefined){



            //figure out if current player is X or O
            if (turn % 2 == 0) {
              player = "X";


            }
            else {
              player = "O";

            }
            turn++;

            //set button text and grid value to X or O
            this.textContent = player;
            grid[clickedInt] = player;




            checkWin(4,1);
            checkWin(4,3);
            checkWin(4,2);
            checkWin(4,4);

            checkWin(1,1);
            checkWin(7,1);

            checkWin(3,3);
            checkWin(5,3);


            //It's a tie if all turns have been taken but no wins
            if(turn == 9 && gameOver == false){
                 gameOver = true;
                 result.textContent = "It's a tie!";
            }

        }

      }

      //Click new game button
      var onResetButtonClick = function() {
        grid = [];
        turn = 0;
        result.textContent = "";
        gameOver = false;
        for (var i = 0; i < 9; i++) {

          document.getElementById("button" + i).textContent = "";
        }
      }



      // 3. Add the event listener for the element and function
      for (var i = 0; i < 9; i++) {

        document.getElementById("button" + i).addEventListener("click", onButtonClick);
      }
      reset.addEventListener("click", onResetButtonClick);
