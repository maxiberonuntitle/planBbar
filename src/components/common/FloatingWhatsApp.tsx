import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_URL } from '../../lib/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Contactar por WhatsApp"
    >
      <span className="text-2xl">💬</span>
    </motion.a>
  );
}
