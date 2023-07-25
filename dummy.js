/*
let playerOneName = "";
let playerTwoName = "";

let playerOneScore = 0;
let playerTwoScore = 0;

const Player = (name, score) => {
  this.name = name;
  this.score = score;
  const getName = () => name;
  const getScore = () => score;
  return { name, score, getName, getScore };
};

function GameBoard() {
  this.gameboardArray = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"],
  ];

  // Method to render the gameboard on the webpage
  this.renderGameboard = function () {
    const gameboardDiv = document.getElementById("gameboard");
    gameboardDiv.innerHTML = ""; // Clear the existing content (if any)

    for (let i = 0; i < this.gameboardArray.length; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let j = 0; j < this.gameboardArray[i].length; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = this.gameboardArray[i][j];
        row.appendChild(cell);
      }

      gameboardDiv.appendChild(row);
    }
  };
}

const gb = document.getElementById("gameboard");

const Player1 = Player("", 0);
const Player2 = Player("", 0);
*/
