import React from 'react'
import styles from './style.module.css';
import '../Project.css';

export default function index({title, desc, year, index, setModal}) {
  return (
    <div
    className={styles.project}
    onMouseEnter={() => { setModal({ active: true, index: index }) }}
    onMouseLeave={() => { setModal({ active: false, index: index }) }}
    >
      <h2>{title}</h2>
      <p>{desc}</p>
      {/* <p>{year}</p> */}
    </div>
  )
}
