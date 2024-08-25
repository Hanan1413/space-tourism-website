import React, { useState } from 'react'
import styles from './crew.module.css';
 import SingleCrew from './SingleCrew'


const Crew = ({crew}) => {
  console.log(crew)
  const[activepaginationIndex, setActivePaginationIndex] = useState(0)

  const handleClick = (id) =>{
    setActivePaginationIndex(index);
  }
  // console.log(isCrew)

  return (
    <div className={styles.mainPage}>
            {/* Pass the current crew member based on the activeIndex */}

      <SingleCrew crew={crew[activepaginationIndex]}  setActivePaginationIndex={setActivePaginationIndex} />

  
    
          </div>
  )
}


export default Crew
