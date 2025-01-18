import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Nav.css';
import { motion } from 'framer-motion';
import { menuSlide, slide } from '../anim';
import Magnatic from '../../common/Magnatic/Magnatic';


const Nav = ({ data }) => {

    const menuItem = [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "About",
            href: "/about"
        },
        {
            title: "Project",
            href: "/project"
        },
        {
            title: "Contact",
            href: "/contact"
        },
    ];

    const socialItem = [
        {
            name: "Twitter",
            href: "https://x.com/Ranjith26761988"
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/ranjithbabu0912/"
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/ranjithbabu0912/"
        },
        {
            name: "GitHub",
            href: "https://github.com/Ranjithbabu0912"
        },
    ]

    // Define the initial path for the SVG curve
    const initialPath = `M100 0 L100 ${window.innerHeight} Q-50 ${window.innerHeight / 2} 100 0`;
    const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

    const pathAnimation = {
        initial: {
            d: initialPath
        },
        enter: {
            d: targetPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: initialPath,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
        }
    }


    return (
        <>
            <motion.div
                variants={menuSlide}
                animate="enter"
                exit="exit"
                initial="initial"
                className="menu"
            >

                {/* Navigation Menu */}
                <div className="navbody">

                    <svg className="svgCurve" >
                        <motion.path variants={pathAnimation} initial="initial" animate="enter" exit="exit"></motion.path>
                    </svg>

                    <div className="navmenu">
                        <div className="header">
                            <p>NAVIGATION</p>
                            <hr />
                            <motion.div
                                variants={slide}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                                custom={data}
                            >
                                {menuItem.map((item, index) => (
                                    <Magnatic>
                                        <div className='menuname' key={index}>
                                            <div className='nav_indicator'></div>
                                            <Link to={item.href}>{item.title}</Link>
                                        </div>
                                    </Magnatic>
                                ))}
                            </motion.div>

                            <div className='social'>
                                <p>SOCIALS</p>
                                <div className='socialname'>
                                    {socialItem.map((item, index) => (
                                        <Magnatic>
                                            <motion.div
                                                variants={slide}
                                                animate="enter"
                                                exit="exit"
                                                initial="initial"
                                                custom={data}
                                                key={index}
                                                className='social_name'
                                            >
                                                <div className='underline'></div>
                                                <Link target='_blank' to={item.href}>{item.name}</Link>
                                            </motion.div>
                                        </Magnatic>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Nav;
