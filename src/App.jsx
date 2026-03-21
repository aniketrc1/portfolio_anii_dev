import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import StalkerModal from './components/StalkerModal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  const [showModal, setShowModal] = useState(() => {
    // Show once per browser session (clears when tab is closed)
    return !sessionStorage.getItem('stalker-seen');
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  const handleModalClose = () => {
    sessionStorage.setItem('stalker-seen', 'true');
    setShowModal(false);
  };

  return (
    <>
      <AnimatePresence>
        {showModal && <StalkerModal onClose={handleModalClose} />}
      </AnimatePresence>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
