
    //create variables and functions used in button clicking events
    var result = document.getElementById("result");
    var reset = document.getElementById("reset");

    var turn = 0;
    var player;
    var gameOver = false;


    function checkWin(myNum, delta){
        var low = document.getElementById("button" + (myNum - delta));
        var mid = document.getElementById("button" + myNum);
        var high = document.getElementById("button" + (myNum + delta));

        if(mid.textContent != " "){
            if(low.textContent == mid.textContent && high.textContent == mid.textContent ){

              low.style.backgroundColor = "rgb(211, 122, 255)";
              mid.style.backgroundColor = "rgb(211, 122, 255)";
              high.style.backgroundColor = "rgb(211, 122, 255)";

              result.textContent = "Player " +player + " wins!";

              gameOver = true;

            }
        }
     }


      //Click tic tac toe grid buttons
      var onButtonClick = function() {

        //player can only move if game is not over and a player has not clicked on that button
        if(gameOver == false && this.textContent == " "){



            //figure out if current player is X or O
            if (turn % 2 == 0) {
              player = "X";
              //set text for the next player's turn
              result.textContent = "Player O's turn";


            }
            else {
              player = "O";
              //set text for the next player's turn
              result.textContent = "Player X's turn";

            }
            turn++;

            //set button text to X or O
            this.textContent = player;



            //check the 8 winning combinations if the current move made a win
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
        turn = 0;
        result.textContent = "";
        gameOver = false;
        result.textContent = "Player X takes the first turn!";
        for (var i = 0; i < 9; i++) {

          var currButton = document.getElementById("button" + i);

          currButton.textContent = " ";
          currButton.style.backgroundColor = "#ffffff";
        }
      }



      // Add event listeners to buttons
      for (var i = 0; i < 9; i++) {
        document.getElementById("button" + i).addEventListener("click", onButtonClick);
      }
      reset.addEventListener("click", onResetButtonClick);
