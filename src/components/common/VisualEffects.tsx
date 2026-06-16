import { motion } from 'framer-motion';

export default function VisualEffects() {
  return (
    <>
      {/* Glow effects in corners */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="pointer-events-none fixed bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/5 blur-3xl"
        animate={{
          opacity: [0.1, 0.25, 0.1],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="pointer-events-none fixed top-1/2 right-1/4 h-80 w-80 rounded-full bg-blue-900/5 blur-3xl"
        animate={{
          opacity: [0.05, 0.2, 0.05],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Subtle animated lines */}
      <motion.div
        className="pointer-events-none fixed top-20 left-1/4 h-px w-48 bg-gradient-to-r from-transparent via-gold to-transparent"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="pointer-events-none fixed bottom-1/3 right-10 h-48 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent"
        animate={{
          opacity: [0.1, 0.25, 0.1],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </>
  );
}
