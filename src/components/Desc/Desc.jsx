import React, { useRef } from 'react'
import './About.css';
import { motion, useInView } from 'framer-motion';
import about_pic from '../../assets/profile-pic.jpg';
import { slideUp, opacity } from './anim';
import Button from '../common/Button/Button';
import { Link } from 'react-router-dom';

const Desc = () => {

    const container = useRef(null);
    const isInView = useInView(container);

    const phrase = "Frontend Developer with a Passion for Creating Visually Stunning and User-Friendly Websites.";



    return (
        <div className='description' ref={container} >

            <div className='body' >
                <p>
                    {
                        phrase.split(" ").map((word, index) => {
                            return <span key={index} className='mask'><motion.span variants={slideUp}custom={index} initial="initial" animate={isInView ? "open" : "closed"} >{word}</motion.span></span>
                        })
                    }
                </p>

                <motion.p variants={opacity} initial="initial" animate={isInView ? "open" : "colsed" } >
                The blend of my passion for design, coding, and user interaction uniquely positions me in the web design world.</motion.p>
            </div>
            <Link to="/about">
                <Button className="button" >
                    <img src={about_pic} alt="about_pic" />
                    <p>About Me</p>
                </Button>
            </Link>
        </div>
    )
}

export default Desc;