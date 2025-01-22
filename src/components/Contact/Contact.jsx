import React, { useEffect } from 'react'
import './Contact.css'
import image from '../../assets/profile.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../common/Button/Button'
import Magnatic from '../common/Magnatic/Magnatic'


const Contact = (data) => {

    useEffect(() => {
        setTimeout(() => {
            document.body.style.cursor = 'default';
            document.body.style.overflow = 'hidden';
        }, 2000)
    }, [])

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


    const today = new Date();
    const f = new Intl.DateTimeFormat("en-in", {
        minute: "2-digit",
        hour: "2-digit",
        timeZoneName: "longOffset"
    })


    return (
        <div>
            <div className='contact'>
                <div className='contact_head'>
                    <img src={image} alt="profile img" />
                    <h1>Let's Work</h1>
                    <h1>Together</h1>
                    <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdElEQVR4nO3VQQqAMAwF0TmFiFfU4wrF08RNFyJYWzEpyh/I/hECAaVUuRkY6dQCGJB6IQZgzYgNmIRAm+CbN2F5uiHsbUArwgXQgnAD1CJcATUId8AdIgRQQoQBrhChAPLrTodXHg44b8IFYA/mXwCl/tMODDhfZD13xyAAAAAASUVORK5CYII=' alt="arrow-down" />
                </div>
                <div className='btn_line'>
                    <hr />
                    <Button className='contact_btn'>
                        <p>Get in touch</p>
                    </Button>
                </div>
                <div className='links'>
                    <Button><a href="mailto:ranjithbabu.dev@gmail.com">ranjithbabu.dev@gmail.com</a></Button>
                    <Button><a href="tel:9043100583">+91 90431 00583</a></Button>
                </div>
                <div className='footer'>
                    <div className='footer_item'>
                        <div className="version">
                            <h3>VERSION</h3>
                            <p>2024 © Edition</p>
                        </div>
                        <div className="time">
                            <h3>LOCAL TIME</h3>
                            <p>{f.format(today)}</p>
                        </div>
                    </div>
                    <div className='socials'>
                        <h3>SOCIALS</h3>
                        <div className='socialsname'>
                            {socialItem.map((item, index) => (
                                <Magnatic key={index}>
                                    <motion.div
                                        animate="enter"
                                        exit="exit"
                                        initial="initial"
                                        custom={data}
                                        key={index}
                                        className='social_name'
                                    >
                                        <Link target='_blank' to={item.href}>{item.name}</Link>
                                        <div className='underline'></div>
                                    </motion.div>
                                </Magnatic>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact