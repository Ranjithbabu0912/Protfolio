import React, { useEffect, useState } from 'react';
import './Loader.css';
import loader_names from './loaders_name';
import { motion } from 'framer-motion';
import { slideUp, opacity } from './anim';

const Loader = () => {
    
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    },[])

    useEffect(() => {
        if (index == loader_names.length - 1) return;
        
        setTimeout(() => {
            setIndex(index + 1);
        }, index == 0 ? 1000 : 150);
    }, [index])

    
    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width/2} ${dimension.height + 300} 0 ${dimension.height} L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`

    const curve = {
        initial: {
            d: initialPath
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}
        }
    }

    return (
        <motion.div
            className='container'
            variants={slideUp}
            initial="initial"
            exit="exit"
        >
            <div className="preloader">
                <div className="text-container">
                    {
                        dimension.height > 0 &&
                        <>
                            <motion.p
                                key={name}
                                className="load_name"
                                variants={opacity}
                                initial="initial"
                                animate="enter"
                            >
                                &#x2022; {loader_names[index]}
                            </motion.p>
                            <svg>
                                <motion.path
                                    d={initialPath}
                                    variants={curve}
                                    initial="initial"
                                    exit="exit"
                                ></motion.path>
                            </svg>
                        
                        </>
                    }
                </div>
            </div>
        </motion.div>
    );
}

export default Loader;
