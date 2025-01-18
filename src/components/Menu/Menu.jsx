import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Menu.css';
import Nav from './Nav/Nav';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../common/Button/Button';

const Menu = () => {
    const [isActive, setIsActive] = useState(false);
    const burger = useRef(null);

    useLayoutEffect(() => {
        if (!burger.current) return ;

        gsap.registerPlugin(ScrollTrigger);

        // ScrollTrigger setup
        const trigger = ScrollTrigger.create({
            trigger: document.documentElement,
            start: "200px",
            end: "100px",
            scrub: 1,
            onEnter: () => {
                gsap.to(burger.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.25,
                    ease: "power4.inOut"
                });
            },
            onLeaveBack: () => {
                gsap.to(burger.current, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.25,
                    ease: "power4.inOut"
                });
            },
        });

        return () => {
            trigger.kill();
        };
    }, []);


    return (
        <div ref={burger} className="menuBar">
            <Button className="btn" onClick={() => setIsActive(!isActive)}>
                <div className={!isActive ? "burger" : "burgerActive"}></div>
            </Button>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </div>
    );
};

export default Menu;
