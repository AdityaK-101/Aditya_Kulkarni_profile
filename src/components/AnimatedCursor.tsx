import { useEffect, useRef } from 'react';

export function AnimatedCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia('(pointer: fine)');
    if (!media.matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let frame = 0;
    let nextX = -100;
    let nextY = -100;

    const update = (event: PointerEvent) => {
      nextX = event.clientX;
      nextY = event.clientY;

      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${nextX}px, ${nextY}px, 0) translate(-50%, -50%)`;
        }
        frame = 0;
      });
    };

    window.addEventListener('pointermove', update);
    return () => {
      window.removeEventListener('pointermove', update);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-50 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink/20 bg-ink/5 backdrop-blur-sm will-change-transform md:block dark:border-paper/20 dark:bg-paper/10"
      style={{ transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)' }}
    />
  );
}