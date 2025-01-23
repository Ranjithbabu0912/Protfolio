import React, { useContext } from 'react'
import './style.css'
import {GitHub,Linkedin, Instagram  } from 'react-feather';
import { MenuContext } from '../MenuManager';
import cn from 'classnames'
import Magnatic from '../../../components/common/Magnatic/Magnatic'


const internalLinks = [
    {
        url: "/",
        component: <span>Home</span>,
        img: "/home.svg"
    },
    
    {
        url: "/projects",
        component: <span>Projects</span>,
        img: "/Projects.svg"
    },

    {
        url: "/about",
        component: <span>About</span>,
        img: "/about.svg"
    },

    {
        url: "/contact",
        component: <span>Contact</span>,
        img: "/contact.svg"
    },

]


const externalLinks = [
    {
        url: "https://github.com/Ranjithbabu0912",
        component: <GitHub/>,
    },
    {
        url: "https://www.linkedin.com/in/ranjithbabu0912/",
        component: <Linkedin/>,
    },
    {
        url: "https://www.instagram.com/ranjithbabu0912/",
        component: <Instagram/>,
    },
]

export default function MenuContent() {

    const { open } = useContext(MenuContext);

    return (
        <div className='menu-holder'>
                <div className={cn("menu-inside", { open })}>
                    <div className="menu-nav-container">
                        <ul className="internal-nav-links">
                        {internalLinks.map((link) => (
                            <li key={link.url}>
                                        <p>&#x2022;</p>
                                        <a href={link.url}> {link.component}</a>
                                        {/* <img src={link.img}/> */}
                                    </li>
                            ))}
                        </ul>

                        <ul className="external-nav-links">
                        {externalLinks.map((link) => (
                            <li key={link.url}>
                                        <Magnatic>
                                        <a href={link.url} target="_blank">{link.component}</a>
                                </Magnatic>
                                    </li>
                            ))}
                        </ul>
                    </div>
                </div>
        </div>
    )
}
