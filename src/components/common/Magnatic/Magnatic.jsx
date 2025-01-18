import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const Magnatic = ({ children }) => {

    const magnatic = useRef(null);

    useEffect(() => {

        const xTo = gsap.quickTo(magnatic.current, "x", { duration: 0.8, ease: "elastic.out(1,0.3)" });
        const yTo = gsap.quickTo(magnatic.current, "y", { duration: 0.8, ease: "elastic.out(1,0.3)" });

        magnatic.current.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const { width, height, left, top } = magnatic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * 0.2)
            yTo(y * 0.2)
        })
        
        magnatic.current.addEventListener("mouseleave", (e) => {
            xTo(0)
            yTo(0)
        })

    }, [])
    
    return (
        React.cloneElement(children, { ref: magnatic })
    )
}

export default Magnatic