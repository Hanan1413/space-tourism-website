import { useState } from 'react';
import  styles from  './technology.module.css';
// import styles from './crew.module.css';
import TechnologyItem from './TechnologyItem';


const Technology = ({technology}) => {
  const [technologyIndex, setTechnologyIndex] = useState(0)

  return (
    <div>
        

        <TechnologyItem technology={technology[technologyIndex]} technologyIndex={technologyIndex} setTechnologyIndex={setTechnologyIndex}/>

        
    </div>
  )
}

export default Technology;
