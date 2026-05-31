import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from './cn';

const base = 'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform';

export function Button({ className = '', children, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button {...props} className={cn(base, 'bg-ink text-paper hover:scale-[1.02] dark:bg-paper dark:text-ink', className)}>
      {children}
    </button>
  );
}

export function LinkButton({ className = '', children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  return (
    <a {...props} className={cn(base, 'glass hover:-translate-y-0.5', className)}>
      {children}
    </a>
  );
}

export function MagneticButton({ children, className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  const MotionButton = motion.button as any;

  return (
    <MotionButton whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }} {...props} className={cn(base, className)}>
      {children}
    </MotionButton>
  );
}