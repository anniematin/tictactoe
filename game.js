  // 1. Find and store the element we want to listen to events on.

    var result = document.getElementById("game-result");
    var reset = document.getElementById("reset");

      // 2. Define the function that will respond to the event.
      var turn = 0;
      var player = "X";
      var grid = [];
      var gameOver = false;



      var onButtonClick = function() {

        //button on grid is clicked
        if(gameOver == false){



            //X's turn
            if (turn % 2 == 0) {
              player = "X";


            }
            //O's turn
            else {
              player = "O";

            }
            turn++;
            this.textContent = player;






                    //add X or O to the button clicked
                    var clickedInt = parseInt(this.id.substring(6, 7));
                    grid[clickedInt] = player;

                  function checkWin(myNum, delta){
                    if(grid[myNum] != undefined){
                      if(grid[myNum] == grid[myNum-delta] && grid[myNum] == grid[myNum+delta] ){

                        result.textContent = "Player " +player + " wins!";
                        gameOver = true;

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


                    //It's a tie if all grid spaces are filled but no wins
                    if(turn == 9 && gameOver == false){
                         gameOver = true;
                         result.textContent = "It's a tie!";
                    }

            }





      }
      var onResetButtonClick = function() {
        grid = [];
        turn = 0;
        console.log(grid);
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
