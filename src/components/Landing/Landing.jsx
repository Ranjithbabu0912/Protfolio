import { useEffect, useRef, useState } from 'react';
import './Landing.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Img } from 'react-image';
import background from '../../assets/background-removebg.png';


function Landing() {


    const firstText = useRef(null);
    const secondText = useRef(null);
    const thirdText = useRef(null);
    const slider = useRef(null);

    let xPercent = 0;
    let direction = 1;



    // scrolltrigger for head text

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        requestAnimationFrame(animation);

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 0.25,
                onUpdate: e => direction = e.direction * -1
            },
            x: "-=300px",
        });
    }, []);



    const animation = () => {
        if (xPercent <= -100) {
            xPercent = 0;
        }
        if (xPercent > 0) {
            xPercent = -100;
        }

        gsap.set(firstText.current, { xPercent: xPercent });
        gsap.set(secondText.current, { xPercent: xPercent });
        gsap.set(thirdText.current, { xPercent: xPercent });

        xPercent += 0.1 * direction;
        requestAnimationFrame(animation);
    };




    return (
        <div>
            <div className='title'>
                <p className='arrow-icon'><img src="/right-arrow.png" alt="right-arrow" /></p>

                <p>Frontend <br /> Developer &<br /> Designer</p>
            </div>
            <main className="main">
                <Img effect="blur" loading="lazy" src={background} alt="image" />

                {/* work here for blank state */}
                

                    {/* <div className="main_name">
                    <p>Ranjith</p>
                    <p> Babu</p>
                    </div> */}

                    
                <div className="sliderContainer">
                    <div ref={slider} className="name_slider">
                        <p ref={firstText}>Ranjith Babu -</p>
                        <p ref={secondText}>Ranjith Babu -</p>
                        <p ref={thirdText}>Ranjith Babu -</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Landing;
