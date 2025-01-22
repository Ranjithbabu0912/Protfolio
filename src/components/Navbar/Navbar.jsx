import React, { useState } from 'react'
import './Navbar.css'
import Magnatic from '../common/Magnatic/Magnatic'

const Navbar = () => {


    const [activeIndex, setActiveIndex] = useState(0); // Default active index

    const navItems = ["Projects", "About", "Contact"]; // Define navigation items


    return (
        <div className='nav'>
            <Magnatic>
                <a href="/">
                    <div className='logo'>
                        <div className="copyright">
                            <p>©</p>
                        </div>
                        <div className='name'>
                            <p className='codeby'>Code By</p>
                            <p className='ranjith'>Ranjith</p>
                            <p className='babu'>Babu</p>
                        </div>
                    </div>
                </a>
            </Magnatic>

            <div className="navigation">
                {navItems.map((item, index) => (
                    <Magnatic key={index}>
                        <div
                            key={index}
                            className={`el ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <p>
                                <a href={`/${item.toLowerCase()}`}>
                                    {item}
                                </a>
                            </p>
                            <div className="indicator"></div>
                        </div>
                    </Magnatic>
                ))}
            </div>
        </div>
    )
}

export default Navbar