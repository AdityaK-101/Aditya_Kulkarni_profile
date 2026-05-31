import type { ReactNode } from 'react';

export function Section({
  eyebrow,
  title,
  subtitle,
  id,
  children,
  className = '',
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-6 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 max-w-3xl space-y-4">
            {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.34em] text-muted">{eyebrow}</p>}
            {title && <h2 className="font-display text-4xl leading-none sm:text-5xl lg:text-6xl">{title}</h2>}
            {subtitle && <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}