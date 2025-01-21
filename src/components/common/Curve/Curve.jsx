import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Curve.css';

// Main Curve Component
const Curve = ({ children }) => {
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
    });


    // Update dimensions on resize
    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        handleResize(); // Set initial dimensions
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <motion.div className="page curve" id='curve'>
            <div
                className="background"
            >
                {dimensions.width > 0 && <SVG {...dimensions} />}
                {children}
            </div>
        </motion.div>
    );
};

// SVG Component
const SVG = ({ width, height }) => {


    const initialPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height + 300}
        Q${width / 2} ${height + 600} 0 ${height + 300}
        L0 300`;
    
    const targetPath = `
        M0 300
        Q${width / 2} 0 ${width} 300
        L${width} ${height}
        Q${width / 2} ${height} 0 ${height}
        L0 300`;

    
    const curve = {
        initial: {
            d: initialPath,
        },
        enter: {
            d: targetPath,
            transition: {
                duration: 0.75,
                delay: 0.3,
                ease: [0.76, 0, 0.24, 1],
            }
        }
    }
    
    
    
    const slideAnimation = {
        initial: {
            top: '-300px',
            zIndex: 100,
        },
        enter: {
            top: '-100vh',
            transition: {
                duration: 0.75,
                delay: 0.3,
                ease: [0.76, 0, 0.24, 1],
            },
            transitionEnd: {
                top: "100vh"
            }
        },
        exit: {
            top: "-300px",
            transition: {
                duration: 0.75,
                delay: 0.3,
                ease: [0.76, 0, 0.24, 1],
            },
        }
    };

    const anim = (variants) => {
        return {
            initial: "initial",
            animate: "enter",
            exit: "exit",
            variants
        }
    }



    return (
        <motion.svg
            {...anim(slideAnimation)}
        >
            <motion.path
                {...anim(curve)}
            ></motion.path>

        </motion.svg>
    );
};

export default Curve;
