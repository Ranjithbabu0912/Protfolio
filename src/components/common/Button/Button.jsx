import React, { useEffect, useRef } from 'react'
import './Button.css'
import gsap from 'gsap';
import Magnatic from '../Magnatic/Magnatic';

const Button = ({ children, backgroundColor = "#455CE9", ...attributes }) => {
    

    const circle = useRef(null);
    const timeline = useRef(null);
    let timeoutId = null;

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current
            .to(circle.current, { top: '-25%', width: '150%', duration: 0.4, ease: "power3.in" }, "enter")
            .to(circle.current, { top: '-150%', width: '150%', duration: 0.25 }, "exit")
    },[])

    const manageMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
        timeline.current.tweenFromTo("enter","exit");
    }
    
    const manageMouseLeave = () => {
        timeoutId = setTimeout(() => {
            timeline.current.play();
        }, 300)
    }




    return (
        <Magnatic>
            <div className='roundedButton'{...attributes} style={{overflow:"hidden"}} onMouseEnter={(e)=>{manageMouseEnter(e)}} onMouseLeave={(e)=>{manageMouseLeave(e)}}>
                {
                    children
                }
                <div ref={circle} className="circle active" style={{ backgroundColor }} ></div>
            </div>
        </Magnatic>
    )
}

export default Button