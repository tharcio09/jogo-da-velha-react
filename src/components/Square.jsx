
'use client';

import { motion } from 'framer-motion';

export default function Square({ value, onSquareClick }) {
  return (
    <motion.button
      className="w-20 h-20 bg-dark-card border-2 border-neon-purple text-3xl font-bold text-light-text flex items-center justify-center"
      onClick={onSquareClick}
      whileHover={{ scale: 1.1 }} // Animação ao passar o mouse
      whileTap={{ scale: 0.9 }}   // Animação ao clicar
    >
      {/* Adicionamos um motion.div para animar o 'X' ou 'O' */}
      {value && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {value}
        </motion.div>
      )}
    </motion.button>
  );
}