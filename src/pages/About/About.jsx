import React from 'react'
import Desc from '../../components/Desc/Desc'
import Menu from '../../components/Menu/Menu'
import Navbar from '../../components/Navbar/Navbar'
import './About.css'

const About = () => {
    return (
        <div>
            <Navbar />
            <br />
            <Menu />
            <Desc />
        </div>
    )
}

export default About