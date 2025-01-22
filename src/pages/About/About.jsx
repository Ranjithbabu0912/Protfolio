import React,{useEffect, useRef, useState} from 'react'
import Desc from '../../components/Desc/Desc'
import Menu from '../../components/Menu/Menu'
import Navbar from '../../components/Navbar/Navbar'
import './About.css'
import profile from '../../assets/profile.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'
import transition from '../Transition'

const About = () => {

    const [show, setShow] = useState(false);
    
    useEffect(() => {
            setTimeout(() => {
                document.body.style.cursor = 'default';
                document.body.style.overflow = 'visible';
                setShow(true);
            }, 1000)
    }, [])

    const aboutPage = useRef(null);
    const { scrollYProgress } = useScroll({
        target: aboutPage,
        offset: ["start end","end start"]
    })
    const height = useTransform(scrollYProgress, [0, 1], [200, 0])
    

    return (
        <div>
            <Navbar />
            <br />
            <Menu />

            <div className='about' ref={aboutPage} style={{opacity : !show ? 0 : 1 }}>

            <h1>Empowering brands to innovate </h1>
            <h1>and succeed in the evolving</h1>
            <h1>digital world.</h1>

            </div>

            <motion.div style={{ height }} className='circle_Container'>
                <div className='slide_circle'></div>
            </motion.div>


            <div className="bottom_part">
                <div className="icon_container">
                    <div className="nameLink">
                        <img src={profile} alt="" />
                        <p><a href="/about" >Ranjithbabu0912</a></p>
                    </div>

                    <hr />
                    
                    <div className="icon_logo">
                        <p><a href='https://www.linkedin.com/in/ranjithbabu0912/' target="_blank"><i className="fa-brands fa-linkedin"></i> LinkedIn</a></p>
                        <p><a href='https://github.com/Ranjithbabu0912' target="_blank"><i className="fa-brands fa-github" aria-hidden="false"></i> GitHub</a></p>
                        <p><a href="https://www.instagram.com/ranjithbabu0912/" target="_blank"><i className="fa-brands fa-square-instagram"></i> Instagram</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default transition(About);