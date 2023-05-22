let play = document.body.getElementsByClassName("first");
let count = 0;
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

for (let i = 0; i < 9; i++) {
  let element = play[i];
  element.onclick = () => {
    if (count % 2 === 0) {
      element.innerHTML = "X";
      board[i % 3][Math.floor(i / 3)] = "X";
    } else {
      element.innerHTML = "0";
      board[i % 3][Math.floor(i / 3)] = "0";
    }
    count++;
    element.onclick = null;
    checkWin();
  };
  element.style.color = "red";
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let combination of winningCombinations) {
    let [a, b, c] = combination;
    if (
      board[Math.floor(a / 3)][a % 3] !== '' &&
      board[Math.floor(a / 3)][a % 3] === board[Math.floor(b / 3)][b % 3] &&
      board[Math.floor(a / 3)][a % 3] === board[Math.floor(c / 3)][c % 3]
    ) {
      let b = `Player ${board[Math.floor(a / 3)][a % 3]} wins!`;
      let c = document.body.getElementsByClassName("container")[0];
      c.innerHTML = b;
      return;
    }
  }
}




  