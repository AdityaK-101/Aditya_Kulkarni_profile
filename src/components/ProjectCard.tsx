import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

export function ProjectCard({
  title,
  description,
  stack,
  image,
  compact = false,
  className = '',
  children,
}: {
  title: string;
  description: string;
  stack: string[];
  image: string;
  compact?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-[var(--surface-strong)] shadow-soft ${className}`}
    >
      <div className={`relative overflow-hidden bg-black/5 dark:bg-white/5 ${compact ? 'aspect-[16/9] sm:aspect-[16/10]' : 'aspect-[4/3]'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.55),transparent_45%)] opacity-80" />
        <div
          className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
          style={{ backgroundImage: `linear-gradient(rgba(17,17,17,0.15), rgba(17,17,17,0.22)), url(${image})` }}
        />
      </div>
      <div className={`flex flex-1 flex-col space-y-4 ${compact ? 'p-4 sm:p-5' : 'p-6'}`}>
        <div className="flex items-start justify-between gap-4">
          <h3 className={`max-w-md font-semibold leading-tight ${compact ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'}`}>{title}</h3>
          <ArrowUpRight className="mt-1 shrink-0 opacity-60 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" size={20} />
        </div>
        <p className={`leading-6 text-muted ${compact ? 'text-[0.78rem] sm:text-sm' : 'text-sm'}`}>{description}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-auto">{children}</div>
      </div>
    </motion.article>
  );
}