import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export function SkillCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -6, rotateX: 4, rotateY: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="glass group rounded-[1.75rem] p-6 shadow-soft"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">{children}</div>
    </motion.div>
  );
}