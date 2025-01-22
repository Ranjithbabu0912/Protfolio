import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../App.css';
import { useLocation } from 'react-router-dom';


const transition = (OgComponent) => {

    return () => {
        const [isSlideIn, setIsSlideIn] = useState(false);
        const [isSlideOut, setIsSlideOut] = useState(false);

        useEffect(() => {
            const slideInTimer = setTimeout(() => {
                setIsSlideIn(true);
            }, 1000); // Trigger slide-in quickly after mount

            const slideOutTimer = setTimeout(() => {
                setIsSlideOut(true);
            }, 2000); // Trigger slide-out after 2 seconds

            return () => {
                clearTimeout(slideInTimer);
                clearTimeout(slideOutTimer);
            };
        }, []);

        const location = useLocation();
        const pathName = location.pathname;

        const routes = {
            "/": "Home",
            "/projects": "Projects",
            "/about": "About",
            "/contact": "Contact"
        }

        const text = {
            initial: {
                opacity: 0,
                top: -150,
                transition: {
                    duration: 1,
                    delay: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                },

            },
            enter: {
                opacity: 0,
                top: -100,
                transition: {
                    duration: 1,
                    delay: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                },
                transitionEnd: {
                    top: "47.5%"
                }
            },
            exit: {
                opacity: 1,
                top: "40%",
                transition: {
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                }
            }
        }

        const loaderCurve = useRef();
        const { scrollYProgress } = useScroll({
            target: loaderCurve,
            offset: ["start end", "end start"]
        })
        const height = useTransform(scrollYProgress, [0, 1], [200, 0])


        return (
            <>
                <motion.h1
                    className='transRoute'
                    initial="initail"
                    animate="enter"
                    exit="exit"
                    variants={text}
                >
                    &#x2022; {routes[pathName]}
                </motion.h1>

                <OgComponent />

                {/* Slide-in animation */}
                {!isSlideIn && (
                    <motion.div
                        className="slide-in"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 1 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: 'fixed',
                            zIndex: 100,
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgb(41,41,41)', // Adjust as needed
                        }}
                    />
                )}

                {/* Slide-out animation */}
                {isSlideIn && !isSlideOut && (
                    <motion.div
                        ref={loaderCurve}
                        className="slide-out"
                        initial={{ scaleY: 1 }}
                        animate={{ scaleY: 0 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            position: 'fixed',
                            zIndex: 100,
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgb(41,41,41)', // Adjust as needed
                        }}
                    >
                        <motion.div style={{ height }} className='circle_Container'>
                            <div className='circle_slide'></div>
                        </motion.div>
                    </motion.div>
                )}
            </>
        );
    };
};

export default transition;
