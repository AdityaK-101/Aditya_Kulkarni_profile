import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { AnimatedCursor } from './components/AnimatedCursor';
import { ThemeProvider } from './components/ThemeProvider';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden bg-paper text-ink transition-colors duration-300 dark:bg-[#0e0d0b] dark:text-[#f4efe6]">
        <LoadingScreen />
        <AnimatedCursor />
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </ThemeProvider>
  );
}