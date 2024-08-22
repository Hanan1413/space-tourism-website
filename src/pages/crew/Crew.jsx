import React from 'react'
import styles from './crew.module.css';
 import SingleCrew from './SingleCrew'


const Crew = ({crew}) => {
  return (
    <div>
      <SingleCrew crew={crew} />
    </div>
  )
}


export default Crew
