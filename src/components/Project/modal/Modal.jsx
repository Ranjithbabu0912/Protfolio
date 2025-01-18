import React, { useEffect, useRef } from 'react';
import styles from './style.module.css';
import '../Project.css';
import { Img } from 'react-image';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function index({ modal, projects }) {
    const { active, index } = modal;

    const container = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    const scaleAnimation = {
        initial: { scale: 0, x: "-50%", y: "-50%" },
        open: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
        close: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
    };
    
    useEffect(() => {
    const containerEl = container.current;
    const cursorEl = cursor.current;
    const cursorLabelEl = cursorLabel.current;

    const moveContainerX = gsap.quickTo(containerEl, "left", { duration: 0.8, ease: "power3" });
    const moveContainerY = gsap.quickTo(containerEl, "top", { duration: 0.8, ease: "power3" });

    const moveCursorX = gsap.quickTo(cursorEl, "left", { duration: 0.5, ease: "power3" });
    const moveCursorY = gsap.quickTo(cursorEl, "top", { duration: 0.5, ease: "power3" });

    const moveCursorLabelX = gsap.quickTo(cursorLabelEl, "left", { duration: 0.45, ease: "power3" });
    const moveCursorLabelY = gsap.quickTo(cursorLabelEl, "top", { duration: 0.45, ease: "power3" });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;

        // Get cursor dimensions for accurate centering
        const cursorWidth = cursorEl.offsetWidth / 4;
        const cursorHeight = cursorEl.offsetHeight / 100;

        // Adjust positions for proper centering
        moveContainerX(clientX);
        moveContainerY(clientY);

        moveCursorX(clientX - cursorWidth);
        moveCursorY(clientY - cursorHeight);

        moveCursorLabelX(clientX - cursorWidth);
        moveCursorLabelY(clientY - cursorHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on unmount
    return () => {
        window.removeEventListener("mousemove", handleMouseMove);
    };
}, []);




    // onclick redirect to project page



    return (
        <>
            <motion.div 
                ref={container} 
                variants={scaleAnimation} 
                initial="initial" 
                animate={active ? "open" : "close"} 
                className={styles.modalContainer}
            >
                <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
                    {
                        projects.map((project, index) => {
                            const { src, color, height = 200 } = project;
                            return (
                                <div key={`modal_${index}`} style={{ backgroundColor: color }} className={styles.modal}>
                                    <Img
                                        src={`./${src}`}
                                        width={200} 
                                        height={height}  
                                        alt="Project image"
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </motion.div>
            <div className='cursor'>
                <motion.div 
                    className={styles.cursor} 
                    ref={cursor}  
                    variants={scaleAnimation} 
                    initial="initial" 
                    animate={active ? "open" : "close"}
                ></motion.div>

                <motion.div 
                    className={styles.cursorLabel} 
                    ref={cursorLabel} 
                    variants={scaleAnimation} 
                    initial="initial" 
                    animate={active ? "open" : "close"}
                >
                    View
                </motion.div>
            </div>
        </>
    );
}
