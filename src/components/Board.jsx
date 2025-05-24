import React from 'react';
import Square from './Square';

function Board({ xIsNext, squares, onPlay, winner }) {
  const handleClick = (i) => {
    // If the square is already filled, or there's a winner, do nothing
    if (squares?.[i] || winner) {
      return;
    }
    const nextSquares = squares.slice(); // Create a copy of the squares array
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares); // Call the onPlay function from App.jsx to update game state
  };

  // Helper to find the winning line for styling
  const calculateWinningLine = (currentSquares, currentPlayer) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (currentSquares[a] === currentPlayer && currentSquares[b] === currentPlayer && currentSquares[c] === currentPlayer) {
        return [a, b, c];
      }
    }
    return null;
  };

  const winningLine = winner ? calculateWinningLine(squares, winner) : null;

  const renderSquare = (i) => {
    const isWinningSquare = winningLine && winningLine.includes(i);
    return (
      <Square
        key={i} // Added key for list rendering
        value={squares?.[i]} // Safely access square value
        onSquareClick={() => handleClick(i)}
        isWinning={isWinningSquare}
      />
    );
  };

  return (
    <div className="grid grid-cols-3 gap-2 w-72 h-72 mx-auto"> {/* Added mx-auto for centering */}
      {/* Render 9 squares */}
      {Array(9).fill(null).map((_, i) => renderSquare(i))}
    </div>
  );
}

export default Board;