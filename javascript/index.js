// Heading
var header = document.querySelector("h1");

// Player One
var playerOne = document.querySelector(".player-one img");

var playerOneWinScore = document.querySelector(".player-one-score .win-score");
var playerOneLoseScore = document.querySelector(".player-one-score .lose-score");
var playerOneTieScore = document.querySelector(".player-one-score .tie-score");

// Player Two
var playerTwo = document.querySelector(".player-two img");

var playerTwoWinScore = document.querySelector(".player-two-score .win-score");
var playerTwoLoseScore = document.querySelector(".player-two-score .lose-score");
var playerTwoTieScore = document.querySelector(".player-two-score .tie-score");

// Initial Scores
// Current Count for Score Tracking
var playerOneWinCount = 0;
var playerTwoWinCount = 0;
var playerOneLoseCount = 0;
var playerTwoLoseCount = 0;
var playerOneTieCount = 0;
var playerTwoTieCount = 0;

// When button is clicked, show random die for both players
// Using conditionals for which die has the greater value,
// change the h1 to display who is the winner

function randomDice() {
    // Random Numbers Generated
    var playerOneDieNumber = Math.floor(Math.random() * 6) + 1;
    var playerTwoDieNumber = Math.floor(Math.random() * 6) + 1;

    // Display winner in heading
    if (playerOneDieNumber > playerTwoDieNumber) {

        // Update Counters
        playerOneWinCount++;
        playerTwoLoseCount++;
        // Header
        header.innerHTML = "Player 1 Wins";
        // Player 1 Win Score
        playerOneWinScore.innerHTML = `${playerOneWinCount}`;
        // Player 2 Lose Score
        playerTwoLoseScore.innerHTML = `${playerTwoLoseCount}`;

        console.log(`Player 1 Win Count: ${playerOneWinCount}`);
        console.log(`Player 2 Lose Count: ${playerTwoLoseCount}`);

        console.log(`Player 1 Win Score: ${playerOneWinScore}`);
        console.log(`Player 2 Lose Score: ${playerTwoLoseScore}`);

    } else if (playerTwoDieNumber > playerOneDieNumber) {

        // Update Counters
        playerOneLoseCount++;
        playerTwoWinCount++;
        // Header
        header.innerHTML = "Player 2 wins";
        // Player 1 Lose Score
        playerOneLoseScore.innerHTML = `${playerOneLoseCount}`;
        // Player 2 Win Score
        playerTwoWinScore.innerHTML = `${playerTwoWinCount}`;

    } else {

        // Update Counters
        playerOneTieCount++;
        playerTwoTieCount++;
        // Header
        header.innerHTML = "It's a Tie";
        // Player 1 Tie Score
        playerOneTieScore.innerHTML = `${playerOneTieCount}`;
        // Player 2 Tie Score
        playerTwoTieScore.innerHTML = `${playerTwoTieCount}`;
    }

    // Random images set
    playerOne.setAttribute("src", `images/dice${playerOneDieNumber}.png`);
    playerTwo.setAttribute("src", `images/dice${playerTwoDieNumber}.png`);
};

// Create a function to reset the scoreboads
function resetScore() {
    // Update Counters
    playerOneWinCount = 0;
    playerTwoWinCount = 0;
    playerOneLoseCount = 0;
    playerTwoLoseCount = 0;
    playerOneTieCount = 0;
    playerTwoTieCount = 0;

    // Update Heading
    header.innerHTML = "Dice Game";

    // Player 1 Scores
    playerOneWinScore.innerHTML = `${playerOneWinCount}`;
    playerOneLoseScore.innerHTML = `${playerOneLoseCount}`;
    playerOneTieScore.innerHTML = `${playerOneTieCount}`;
    // Player 2 Scores
    playerTwoWinScore.innerHTML = `${playerTwoWinCount}`;
    playerTwoLoseScore.innerHTML = `${playerTwoLoseCount}`;
    playerTwoTieScore.innerHTML = `${playerTwoTieCount}`;
}
