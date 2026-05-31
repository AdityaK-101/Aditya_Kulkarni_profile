import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export function ProjectModal({
  open,
  onClose,
  title,
  description,
  stack,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  stack: string[];
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 220, damping: 24 }}
            className="glass-strong w-full max-w-2xl rounded-[2rem] p-5 shadow-soft sm:p-6"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-muted">Project Detail</p>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl">{title}</h3>
              </div>
              <button onClick={onClose} aria-label="Close project details" className="glass flex h-10 w-10 items-center justify-center self-start rounded-full sm:self-auto">
                <X size={18} />
              </button>
            </div>
            <p className="mt-5 text-sm leading-7 text-muted sm:mt-6 sm:text-base">{description}</p>
            <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
              {stack.map((item) => (
                <span key={item} className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}