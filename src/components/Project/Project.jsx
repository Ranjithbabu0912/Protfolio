import React, { useEffect, useState } from 'react'
import projects from './File/scripts'
import Modal from './modal/Modal'
import File from './File/File'
import Button from '../common/Button/Button'

const Project = () => {
    const [modal, setModal] = useState({ active: false, index: 0 });



    return (
        <>
            <div className='project'>
                <h3>RECENT WORKS</h3>
                {
                    projects.map((project, index) => {
                        return (
                            <File
                                key={index}
                                index={index}
                                title={project.title}
                                desc={project.desc}
                                year={project.year}
                                setModal={setModal}
                            />
                        )
                    })
                }
                < Modal modal={modal} projects={projects} />
                <br />
                <br />
                <br />
                <Button>
                    <a href="/project" style={{ all: 'unset' }}><p className='project_btn'> More Work</p></a>
                </Button>
            </div>
        </>
    )
}

export default Project