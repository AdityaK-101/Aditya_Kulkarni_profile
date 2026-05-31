import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const reduceMotion = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), reduceMotion ? 150 : 900);
    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-paper text-ink dark:bg-[#0e0d0b] dark:text-paper"
      exit={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <div className="text-center">
        <div className="mx-auto mb-5 h-10 w-10 rounded-full border border-current/25 border-t-current animate-spin" />
        <p className="font-display text-4xl">Aditya Kulkarni</p>
      </div>
    </motion.div>
  );
}