// a function to test if the game was complete. If so, it returns the winning user.
// @inputs: board  is 7x6 nested array (7 rows, 6 columns). The goal is to connect 4. User 1 has
//                  markers `1` in the board and User 2 has `2` markers in the board.
// row
//  0  0 0 0 0 0 0 0
//  1  0 0 0 0 0 0 0
//  2  0 0 0 0 0 0 0
//  3  0 0 0 0 0 0 0
//  4  0 0 0 0 0 0 0
//  5  0 0 1 2 0 0 0
//
//     0 1 2 3 4 5 6 <- col
//
// @returns {isDone: Bool!, winner: Enum('0', '1', '2')}
function isGameComplete(board) {
  const incompleteGameSignature = { winner: '0', isDone: false };
  let returnSignature = { winner: '', isDone: true };

  // search vertical
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 7; col++) {
      if (board[row][col] !== 0
          && board[row][col] === board[row + 1][col]
          && board[row][col] === board[row + 2][col]
          && board[row][col] === board[row + 3][col]) {
        returnSignature.winner = board[row][col];
        returnSignature.isDone = true;
        return returnSignature;
      }
    }
  }

  // search horizontal
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col] !== 0
          && board[row][col] === board[row][col + 1]
          && board[row][col] === board[row][col + 2]
          && board[row][col] === board[row][col + 3]) {
        returnSignature.winner = board[row][col];
        returnSignature.isDone = true;
        return returnSignature;
      }
    }
  }

  // search diagonals
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col] !== 0
          && board[row][col] === board[row + 1][col + 1]
          && board[row][col] === board[row + 2][col + 2]
          && board[row][col] === board[row + 3][col + 3]) {
        returnSignature.winner = board[row][col];
        returnSignature.isDone = true;
        return returnSignature;
      }
    }
  }

  // search diagonals
  for (let row = 3; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      if (board[row][col] !== 0
          && board[row][col] === board[row - 1][col + 1]
          && board[row][col] === board[row - 2][col + 2]
          && board[row][col] === board[row - 3][col + 3]) {
        returnSignature.winner = board[row][col];
        returnSignature.isDone = true;
        return returnSignature;
      }
    }
  }

  return incompleteGameSignature;
}


module.exports = {
  isGameComplete,
};

/*
 *
 * Specs belong below this line
 *
 */
// const v1 = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0],
// ];
// const v2 = [
//   [0, 0, 0, 0, 0, 2, 0],
//   [0, 0, 0, 0, 0, 2, 0],
//   [0, 0, 0, 0, 0, 2, 0],
//   [0, 0, 0, 0, 0, 2, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
// ];
// const h1 = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [1, 1, 1, 1, 0, 0, 0],
// ];
// const h2 = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 2, 2, 2, 2],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
// ];
// const d1 = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 1, 0, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0],
// ];
// const d2 = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 2],
//   [0, 0, 0, 0, 0, 2, 0],
//   [0, 0, 0, 0, 2, 0, 0],
//   [0, 0, 0, 2, 0, 0, 0],
// ];
// const d3 = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 1, 0],
//   [0, 0, 0, 0, 0, 0, 1],
// ];
// const d4 = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [2, 0, 0, 0, 0, 0, 0],
//   [0, 2, 0, 0, 0, 0, 0],
//   [0, 0, 2, 0, 0, 0, 0],
//   [0, 0, 0, 2, 0, 0, 0],
// ];
// isGameComplete(v1);
// isGameComplete(v2);
// isGameComplete(h1);
// isGameComplete(h2);
// isGameComplete(d1);
// isGameComplete(d2);
// isGameComplete(d3);
// isGameComplete(d4);

