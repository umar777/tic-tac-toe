const Gameboard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""];

  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square, index) => {
      boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
    });
    document.querySelector("#gameboard").innerHTML = boardHTML;

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", Gamecontroller.handleClick);
    });
  };

  const update = (index, value) => {
    gameboard[index] = value;
    render();
  };

  const getGameboard = () => gameboard;

  return { render, update, getGameboard };
})();

const createPlayers = (name, mark) => {
  return {
    name,
    mark,
  };
};

const Gamecontroller = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver;

  const start = () => {
    players = [
      createPlayers(document.querySelector("#player1"), "X"),
      createPlayers(document.querySelector("player2"), "O"),
    ];
    currentPlayerIndex = 0;
    gameOver = false;
    Gameboard.render();
  };

  const handleClick = (event) => {
    let index = event.target.id.split("-")[1];
    if (Gameboard.getGameboard()[index] !== "") {
      return;
    }
    Gameboard.update(index, players[currentPlayerIndex].mark);
    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
  };

  const restart = () => {
    for (let i = 0; i < 9; i++) {
      Gameboard.update(i, "");
    }
    Gameboard.render();
  };

  return { start, handleClick, restart };
})();

const startButton = document.getElementById("start-button");
startButton.addEventListener("click", (e) => {
  Gamecontroller.start();
});

const restartButton = document.getElementById("restart-button");
restartButton.addEventListener("click", (e) => {
  Gamecontroller.restart();
});
