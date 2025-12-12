import React, { useRef, useEffect, useState } from 'react';
import { useScroll } from 'framer-motion';

const ScrollContainer = ({ children }) => {
    const ref = useRef(null);
    const [isClient, setIsClient] = useState(false);

    // Ensure hydration completes before using useScroll()
    useEffect(() => {
        setIsClient(true);
    }, []);

    const { scrollYProgress } = useScroll({
        target: isClient ? ref : null, 
        layoutEffect: false, // Prevents hydration errors
    });

    return <div ref={ref}>{children}</div>;
};

export default ScrollContainer;
