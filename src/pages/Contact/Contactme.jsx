import React, { useEffect, useState } from 'react'
import Contact from '../../components/Contact/Contact.jsx'
import './Contact.css'
import transition from '../Transition.jsx'

const Contactme = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
          setTimeout(() => {
              setShow(true);
          }, 1000)
      }, [])

  return (
    <div style={{opacity : !show ? 0 : 1 }}>
      <Contact/>
    </div>
  )
}

export default transition(Contactme)