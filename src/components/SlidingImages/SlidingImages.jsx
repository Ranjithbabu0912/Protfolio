import React, { useRef } from 'react'
import './SlidingImages.css'
import { Img } from 'react-image'
import { motion, useScroll, useTransform } from 'framer-motion'

const slider1 = [
    {
        color: "#e3e3e3",
        src: "efoods.png"
    },
    {
        color: "#d6d7dc",
        src: "gemini_clone.jpg"
    },
    {
        color: "#21242b",
        src: "weather_app.jpg"
    },
    {
        color: "#e1dad6",
        src: "portfolio.png"
    },
]

const slider2 = [
    {
        color: "#e5e0e1",
        src: "gemini_clone.jpg"
    },
    {
        color: "#d4e3ec",
        src: "portfolio.png"
    },
    {
        color: "#d7d4cf",
        src: "efoods.png"
    },
    {
        color: "#e3e5e7",
        src: "weather_app.jpg"
    },
]

const SlidingImages = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end","end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [-150, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [150, -150])
    const height = useTransform(scrollYProgress, [0, 1], [50, 0])

    return (
        <div ref={container} className='slidingImages'>
            <motion.div style={{x: x1}} className='slider'>
                {
                    slider1.map((project, index) => {
                        return <div key={`sl1_${index}`} style={{backgroundColor: project.color}} className='sliding_project'>
                            <div className='imageContainer'>
                                <Img
                                    
                                    src={`/src/assets/${project.src}`}
                                    alt={'image'}
                                    className='slide_img'
                                />
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{x: x2}} className='slider'>
                {
                    slider2.map((project, index) => {
                        return <div key={`sl2_${index}`} style={{backgroundColor: project.color}} className='sliding_project'>
                            <div className='imageContainer'>
                                <Img
                                    src={`/src/assets/${project.src}`}
                                    alt={'image'}
                                    className='slide_img'
                                />
                            </div>
                        </div>
                    })
                }
            </motion.div>
            <motion.div style={{ height }} className='circle_Container'>
                <div className='slide_circle'></div>
            </motion.div>
        </div>
    )
}

export default SlidingImages