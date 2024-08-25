import React from 'react'
import styles from './crew.module.css';

const SingleCrew = ({ crew, setActivePaginationIndex}) => {
    const {name, role, bio, images} = crew;
    const{png} = images;


  return (
    <>
    <div className={styles.showcase}>
       
    </div>

    <div className={styles.mainContent}>

      <div className={styles.leftSide}>
      <h2 className={styles.headline}>02 Meet  Our Crew</h2>

      <h1>{role}</h1>
        <h3>{name}</h3> 
        <p>{bio}</p>

                  {/* Display pagination or navigation buttons */}
          <div className={styles.paginations}>
          <div className={styles.pagination} onClick={() => setActivePaginationIndex(0)}></div>
          <div className={styles.pagination} onClick={() => setActivePaginationIndex(1)}></div>
          <div className={styles.pagination} onClick={() => setActivePaginationIndex(2)}></div>
          <div className={styles.pagination} onClick={() => setActivePaginationIndex(3)}></div>


      </div>
       
      </div>
        

     <div className={styles.rightSide}>
       
     <img  className={styles.crew} src={png} alt={name} />

     </div>

    </div>
    </>
  )
}

export default SingleCrew;
