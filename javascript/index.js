// Heading
var header = document.querySelector("h1");

// Player One
var playerOne = document.querySelector(".player-one img");

// Player Two
var playerTwo = document.querySelector(".player-two img");

// When button is clicked, show random die for both players
// Using conditionals for which die has the greater value,
// change the h1 to display who is the winner

function randomDice() {
    // Random Numbers Generated
    var playerOneDieNumber = Math.floor(Math.random() * 6) + 1;
    var playerTwoDieNumber = Math.floor(Math.random() * 6) + 1;

    // Display winner in heading
    if (playerOneDieNumber > playerTwoDieNumber) {
        header.innerHTML = "Player 1 Wins";
    } else if (playerTwoDieNumber > playerOneDieNumber) {
        header.innerHTML = "Player 2 wins";
    } else {
        header.innerHTML = "It's a Tie";
    }

    // Random images set
    playerOne.setAttribute("src", `images/dice${playerOneDieNumber}.png`);
    playerTwo.setAttribute("src", `images/dice${playerTwoDieNumber}.png`);
};
