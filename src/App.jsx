import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import Celebration from './components/Celebration';
import ErrorMessage from './components/ErrorMessage';

const winQuotes = [
  { text: "Victory belongs to the most persevering.", author: "Napoleon Bonaparte" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "The harder the battle, the sweeter the victory.", author: "Les Brown" },
];

const drawQuotes = [
  { text: "Life is a balance of holding on and letting go.", author: "Rumi" },
  { text: "Sometimes you win, sometimes you learn.", author: "John C. Maxwell" },
  { text: "Every exit is an entry somewhere else.", author: "Tom Stoppard" },
];

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [quoteError, setQuoteError] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('bg-gray-100 text-gray-800');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  useEffect(() => {
    const currentWinner = calculateWinner(currentSquares);
    setWinner(currentWinner);
    setIsDraw(!currentWinner && currentSquares.every(square => square !== null));
  }, [currentSquares]);

  useEffect(() => {
    if (winner || isDraw) {
      const message = winner ? `Player ${winner} wins!` : `It's a Draw!`;
      setModalMessage(message);
      setShowModal(true);
      fetchQuote(winner ? 'win' : 'draw');
      const timeoutId = setTimeout(() => {
        resetGame();
      }, 5000);
      return () => clearTimeout(timeoutId); // Cancel on unmount
    } else {
      setShowModal(false);
      setQuote({ text: '', author: '' });
      setQuoteError(null);
    }
  }, [winner, isDraw]);

  const fetchQuote = (status) => {
    const quotes = status === 'win' ? winQuotes : drawQuotes;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    setQuote(selectedQuote);
    setQuoteError(null);
  };

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (move) => setCurrentMove(move);

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setWinner(null);
    setIsDraw(false);
    setShowModal(false);
    setQuote({ text: '', author: '' });
    setQuoteError(null);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    setBackgroundColor(newMode ? 'bg-gray-800 text-gray-100' : 'bg-gray-100 text-gray-800');
  };

  const status = winner || isDraw ? '' : `Next player: ${xIsNext ? 'X' : 'O'}`;

  const moves = history.map((_, move) => (
    <li key={move}>
      <button
        onClick={() => jumpTo(move)}
        className={`px-3 py-1 rounded-md text-sm ${
          move === currentMove
            ? 'bg-indigo-500 text-white'
            : 'bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
        }`}
      >
        {move ? `Go to move #${move}` : 'Go to game start'}
      </button>
    </li>
  ));

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${backgroundColor}`}>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-xl text-center relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-500"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">{modalMessage}</h2>
            {winner && <Celebration />}
            {quoteError && <ErrorMessage message={quoteError} />}
            {quote.text && (
              <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-md shadow-inner">
                <p className="italic text-gray-700 dark:text-gray-300">"{quote.text}"</p>
                <p className="text-right text-gray-600 dark:text-gray-400 font-medium">- {quote.author || 'Unknown'}</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 bg-opacity-95 p-8 rounded-lg shadow-2xl flex flex-col md:flex-row gap-8 relative w-full max-w-5xl">
        <button
          onClick={toggleDarkMode}
          className={`absolute top-4 right-4 px-3 py-2 rounded-md font-semibold transition-colors duration-300 ${
            isDarkMode ? 'bg-gray-600 text-white hover:bg-gray-700' : 'bg-yellow-400 text-gray-800 hover:bg-yellow-500'
          }`}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <div className="game-board w-full md:w-2/3">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">Tic Tac Toe</h1>
          <div className="status text-xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-300">{status}</div>
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} winner={winner} />
          <button
            onClick={resetGame}
            className="mt-6 w-full py-2 bg-red-500 text-white rounded-md text-lg font-semibold hover:bg-red-600 transition-colors dark:bg-red-700 dark:hover:bg-red-800"
          >
            Reset Game
          </button>
        </div>

        <div className="game-info w-full md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">Game History</h2>
            <ol className="list-decimal pl-5 space-y-2 h-48 overflow-y-auto">{moves}</ol>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">Quote:</h3>
            {quoteError && <ErrorMessage message={quoteError} />}
            {quote.text ? (
              <>
                <p className="italic text-gray-700 dark:text-gray-300">"{quote.text}"</p>
                <p className="text-right text-gray-600 dark:text-gray-400 font-medium">- {quote.author || 'Unknown'}</p>
              </>
            ) : (
              <p className="text-gray-500 dark:text-gray-400">Game over to see a quote!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

