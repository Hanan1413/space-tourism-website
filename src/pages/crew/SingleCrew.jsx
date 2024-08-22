import React from 'react'
import styles from './crew.module.css';

const SingleCrew = ({crew}) => {
    const {name, role, bio} = crew;


  return (
    <>
    <div className={styles.showcase}>
       
    </div>
    <div className={styles.mainContent}>
        <h1>{crew.role}</h1>
        <p>{crew.bio}</p>
    </div>
    </>
  )
}

export default SingleCrew;
