import React from 'react'
import styles from './crew.module.css';

const SingleCrew = ({crew}) => {
    const {name, role, bio} = crew;


  return (
    <>
    <div className={styles.showcase}>
       
    </div>
    <div className={styles.mainContent}>
        <h1>{role}</h1>
        <p>{bio}</p>
    </div>
    </>
  )
}

export default SingleCrew;
