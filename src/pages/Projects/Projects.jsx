import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Project.css'
import Button from '../../components/common/Button/Button'
import Magnatic from '../../components/common/Magnatic/Magnatic'
import Menu from '../../components/Menu/Menu'
import { Img } from 'react-image';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import styles from '../../components/Project/modal/style.module.css'


const project = [
    {
        title: "Google Gemini Clone",
        src: "project-1.jpg",
        color: "#000000",
        desc: "Cloned Website",
        year: "2024"
    },
    {
        title: "eFoods Web App",
        src: "project-4.jpg",
        color: "#8C8C8C",
        desc: "Food Ordering App",
        year: "2024"
    },
    {
        title: "Weather App",
        src: "project-2.png",
        color: "#EFE8D3",
        desc: "Weather Teller",
        year: "2024"
    },
    {
        title: "Personal Portfolio",
        src: "project-3.png",
        color: "#706D63",
        desc: "Digital Resume",
        year: "2024"
    }
]

const Projects = () => {
    const [modal, setModal] = useState({ active: false, index: 0 })
    const [view, setView] = useState("list") // "list" or "grid"


    const { active, index } = modal;

    const container = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    const scaleAnimation = {
        initial: { scale: 0, x: "-50%", y: "-50%" },
        open: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
        close: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
    };

    useEffect(() => {
        const containerEl = container.current;
        const cursorEl = cursor.current;
        const cursorLabelEl = cursorLabel.current;

        const moveContainerX = gsap.quickTo(containerEl, "left", { duration: 0.8, ease: "power3" });
        const moveContainerY = gsap.quickTo(containerEl, "top", { duration: 0.8, ease: "power3" });

        const moveCursorX = gsap.quickTo(cursorEl, "left", { duration: 0.5, ease: "power3" });
        const moveCursorY = gsap.quickTo(cursorEl, "top", { duration: 0.5, ease: "power3" });

        const moveCursorLabelX = gsap.quickTo(cursorLabelEl, "left", { duration: 0.45, ease: "power3" });
        const moveCursorLabelY = gsap.quickTo(cursorLabelEl, "top", { duration: 0.45, ease: "power3" });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            // Get cursor dimensions for accurate centering
            const cursorWidth = cursorEl.offsetWidth / 4;
            const cursorHeight = cursorEl.offsetHeight / 100;

            // Adjust positions for proper centering
            moveContainerX(clientX);
            moveContainerY(clientY);

            moveCursorX(clientX - cursorWidth);
            moveCursorY(clientY - cursorHeight);

            moveCursorLabelX(clientX - cursorWidth);
            moveCursorLabelY(clientY - cursorHeight);
        };

        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup the event listener on unmount
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


useEffect(() => {
        setTimeout(() => {
            document.body.style.cursor = 'default';
            document.body.style.overflow = 'visible';

        }, 100)
    }, [])


    return (
        <div className='section_project'>
            <Menu />

            <Navbar /><br />


            <div className='projects' id='projects'>
                

                <h1>Creating next level</h1>
                <h1>Projects</h1>

                {/* View Toggle Buttons */}
                <div className="buttons">
                    <Magnatic>
                        <button
                            onClick={() => setView("list")} disabled={view === "list"}>
                            <Button>
                                <p><i className="fa-solid fa-bars"></i></p>
                            </Button>
                        </button>
                    </Magnatic>

                    <Magnatic>
                        <button
                            onClick={() => setView("grid")} disabled={view === "grid"}>
                            <Button>
                                <p><i className="fa-solid fa-grip"></i></p>
                            </Button>
                        </button>
                    </Magnatic>
                </div>

                <div className='table'>

                    {/* Conditionally render Table or Project Content */}
                    {view === "list" ? (
                        <table className='project_table'>
                            <thead>
                                <tr>
                                    <th>Projects</th>
                                    <th>Description</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {project.map((project, index) => (
                                    <tr key={index}
                                        onMouseEnter={() => { setModal({ active: true, index: index }) }}
                                        onMouseLeave={() => { setModal({ active: false, index: index }) }}

                                    >
                                        <td>{project.title}</td>
                                        <td>{project.desc}</td>
                                        <td>{project.year}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="project_content grid">
                            {project.map((project, index) => (
                                <div
                                    className="project_prop"
                                    key={index}
                                    onMouseEnter={() => { setModal({ active: true, index: index }) }}
                                    onMouseLeave={() => { setModal({ active: false, index: index }) }}
                                >
                                    <img src={project.src} alt={project.src} style={{ backgroundColor: `${project.color}` }} />
                                    <h3>{project.title}</h3>
                                    <div className="head">
                                        <p>{project.desc}</p>
                                        <p>{project.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>

                {/* Modal */}
                
                <motion.div
                    ref={container}
                    variants={scaleAnimation}
                    initial="initial"
                    animate={active ? "open" : "close"}
                    className={styles.modalContainer}
                >
                    <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
                        {
                            project.map((project, index) => {
                                const { src, color, height = 200 } = project;
                                return (
                                    <div key={`modal_${index}`} style={{ backgroundColor: color }} className={view === "list" ? "modal" : "modal_active"}>
                                        <Img
                                            src={`./${src}`}
                                            width={200}
                                            height={height}
                                            alt="Project image"
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                </motion.div>

                <div className='cursor'>
                    <motion.div
                        className={view === "list" ? styles.cursor : "cursor"}
                        ref={cursor}
                        variants={scaleAnimation}
                        initial="initial"
                        animate={active ? "open" : "close"}
                    ></motion.div>

                    <motion.div
                        className={view === "list" ? styles.cursorLabel : "cursorLabel"}
                        ref={cursorLabel}
                        variants={scaleAnimation}
                        initial="initial"
                        animate={active ? "open" : "close"}
                    >
                        View
                    </motion.div>
                </div>
            </div>

            <div className="bottom_container">
                <div className="github">
                    <div className="github_logo">
                        <p><a href='https://github.com/Ranjithbabu0912' target="_blank"><i className="fa-brands fa-github" aria-hidden="false"></i> GitHub</a></p>
                    </div>
                    <hr />
                    <div className="github_link">
                        <p><a href="https://github.com/Ranjithbabu0912" target="_blank">Ranjithbabu0912</a></p>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Projects
