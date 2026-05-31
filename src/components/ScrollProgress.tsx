import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.2 });

  return <motion.div className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-ink dark:bg-paper" style={{ scaleX }} />;
}