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
import ScrollContainer from './components/scrollContainer.jsx'; // your custom wrapper
import Lenis from 'lenis';

function App() {
  const location = useLocation();
  const rafId = useRef(null);
  const lenisRef = useRef(null);

  // Scroll to top on route change — use Lenis if available to avoid conflicts.
  useEffect(() => {
    if (lenisRef.current && typeof lenisRef.current.scrollTo === 'function') {
      // jump to top immediately using Lenis so there's no visible animated jump
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      // fallback if Lenis not initialized yet
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Initialize Lenis and RAF loop for smooth scrolling
  useEffect(() => {
    // guard for SSR environments
    if (typeof window === 'undefined') return;

    // create Lenis instance; you can pass options here if needed
    lenisRef.current = new Lenis({
      // optionally set duration, easing, or wrapper/content if you use a custom ScrollContainer
      // duration: 1.2,
      // smooth: true,
      // wrapper: document.querySelector('[data-scroll-wrapper]'), // if your ScrollContainer uses a wrapper
    });

    const loop = (time) => {
      if (lenisRef.current && typeof lenisRef.current.raf === 'function') {
        lenisRef.current.raf(time);
      }
      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      // cancel loop
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }

      // destroy lenis if available (some versions provide destroy)
      if (lenisRef.current) {
        if (typeof lenisRef.current.destroy === 'function') {
          lenisRef.current.destroy();
        }
        lenisRef.current = null;
      }
    };
  }, []); // run once

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
