// src/components/TicTacToe.jsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion'; 
import Square from './Square';

// Esta função fica fora do componente principal
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `Vencedor: ${winner}`;
  } else if (squares.every(Boolean)) {
    status = "Empate!";
  } else {
    status = `Próximo a jogar: ${xIsNext ? 'X' : 'O'}`;
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <motion.div 
      className="bg-dark-bg p-6 rounded-lg shadow-lg text-center"
      initial={{ opacity: 0, y: -20 }} // Começa invisível e um pouco acima
      animate={{ opacity: 1, y: 0 }}   // Anima para visível e na posição normal
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl text-center text-neon-blue mb-4 font-bold">Jogo da Velha</h2>
      <div className="text-lg text-light-text mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-1 mx-auto w-60">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button onClick={handleReset} className="mt-6 px-6 py-2 bg-neon-purple text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
        Reiniciar Jogo
      </button>
    </motion.div>
  );
}