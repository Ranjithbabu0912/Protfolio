import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import { AnimatePresence } from 'framer-motion';
import Loader from '../../components/Loader/Loader.jsx';
import Landing from '../../components/Landing/Landing.jsx';
import Desc from '../../components/Desc/Desc.jsx';
import Project from '../../components/Project/Project';
import SlidingImages from '../../components/SlidingImages/SlidingImages.jsx';
import Contact from '../../components/Contact/Contact.jsx';
import MenuManager from '../../components/Menu/MenuManager/index.jsx';
import Menu from '../../components/Menu/Menu.jsx';

const Home = () => {
  const [loading, setLoading] = useState(true);

  // hide loader after 2 seconds
  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  // restore cursor & scrolling after 3 seconds (if you previously disabled them)
  useEffect(() => {
    const t = setTimeout(() => {
      document.body.style.cursor = 'default';
      document.body.style.overflow = 'visible';
    }, 3000);

    return () => clearTimeout(t);
  }, []);

  return (
    <MenuManager>
      <AnimatePresence mode="wait">{loading && <Loader />}</AnimatePresence>

      <Navbar />
      <Menu />
      <Landing />
      <Desc />
      <Project />
      <SlidingImages />
      <Contact />
    </MenuManager>
  );
};

export default Home;
