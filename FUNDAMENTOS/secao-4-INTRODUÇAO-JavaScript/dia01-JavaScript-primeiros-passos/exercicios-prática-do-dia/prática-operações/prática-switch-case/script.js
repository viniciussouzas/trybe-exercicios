let chessPiece = "Queen";
let result = chessPiece.toLowerCase();

switch (result) {
  case 'bishop':
    console.log("The " + chessPiece + " moves as many squares as it wants in diagonals.");

  break;

  case 'pawn':
    console.log("The " + chessPiece + " moves only one square forward at a time, except when it's its first move, then it can move forward one or two squares.");

  break; 

  case 'knight':
    console.log("The " + chessPiece + " moves in an 'L-shape', jumps over pieces, but it only captures what it lands on.");

  break;

  case 'rook':
    console.log("The " + chessPiece + " moves as many squares as it wants, vertically (up and down), horizontally (left or right).");

  break;

  case 'queen':
    console.log("The " + chessPiece + " moves as many squares as it wants, vertically (up and down), horizontally (left or right), and diagonally. It is the combination between a rook and a bishop.")

  break;

  case 'king':
    console.log("The " + chessPiece + " moves only one square in any direction.")

  break;

  default:
    console.log("Error, the value insert is invalid for Chess Pieces.")
} 