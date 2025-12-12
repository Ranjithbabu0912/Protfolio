import React, { useEffect, useRef } from 'react';
import './App.css';
import './scroll.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Contact from './pages/Contact/Contactme.jsx';
import MenuManager from './components/Menu/MenuManager/index.jsx';
import ScrollContainer from './components/ScrollContainer'; // if you have this component
import Lenis from 'lenis';

function App() {
  const location = useLocation();
  const rafId = useRef(null);
  const lenisRef = useRef(null);

  // Scroll to top on route change (keeps default browser jump behavior prevented if you handle smooth-scroll)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Initialize Lenis and the RAF loop for smooth scrolling
  useEffect(() => {
    lenisRef.current = new Lenis();

    function raf(time) {
      lenisRef.current.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }

    rafId.current = requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      // lenis has a destroy method in recent versions; call if available
      if (lenisRef.current && typeof lenisRef.current.destroy === 'function') {
        lenisRef.current.destroy();
      }
      lenisRef.current = null;
    };
  }, []);

  return (
    <ScrollContainer>
      <MenuManager>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </MenuManager>
    </ScrollContainer>
  );
}

export default App;
