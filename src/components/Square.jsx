import React from 'react';

function Square({ value, onSquareClick, isWinning }) {
  const squareClasses = `
    w-24 h-24 flex items-center justify-center text-5xl font-bold
    border-2 border-gray-400 rounded-lg cursor-pointer
    transition-all duration-200 ease-in-out
    ${value === 'X' ? 'text-red-600' : value === 'O' ? 'text-green-600' : 'text-gray-800 dark:text-gray-100'}
    ${isWinning ? 'bg-yellow-300 dark:bg-yellow-400 scale-105 shadow-lg' : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'}
    focus:outline-none focus:ring-2 focus:ring-indigo-500
  `;

  return (
    <button className={squareClasses} onClick={onSquareClick} disabled={value || isWinning}>
      {value}
    </button>
  );
}

export default Square;