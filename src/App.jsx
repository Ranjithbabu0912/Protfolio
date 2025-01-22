import React, { useEffect, useState } from 'react';
import './App.css';
import './scroll.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx'
import Projects from './pages/Projects/Projects.jsx';
import Contact from './pages/Contact/Contactme.jsx';


function App() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on route changes
    }, [location]);

    return (
        <>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route index element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />

                </Routes>
            </AnimatePresence>

        </>
    );
}

export default App;
