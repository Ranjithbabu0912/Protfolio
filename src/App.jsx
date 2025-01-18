import React, { useEffect, useState } from 'react';
import './App.css';
import './scroll.css'
import Loader from './components/Loader/Loader.jsx';
import Landing from './components/Landing/Landing';
import Menu from './components/Menu/Menu.jsx';
import Desc from './components/Desc/Desc.jsx';
import Project from './components/Project/Project.jsx';
import SlidingImages from './components/SlidingImages/SlidingImages.jsx';
import Contact from './components/Contact/Contact.jsx';
import { AnimatePresence } from 'framer-motion';


function App() {
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            document.body.style.cursor = 'default';
            document.body.style.overflow = 'visible';

        }, 3000)
    }, [])




    return (
        <div className='routes'>
            <AnimatePresence mode='wait'>
                {
                    loading && <Loader />
                }
            </AnimatePresence>
            <Menu />
            <Landing />
            <Desc />
            <Project />
            <SlidingImages />
            <Contact />
        </div>
    );
}

export default App;
