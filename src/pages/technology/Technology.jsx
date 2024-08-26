import { useState } from 'react';
import  styles from  './technology.module.css';
// import styles from './crew.module.css';
import TechnologyItem from './TechnologyItem';
import { technologyData } from "../../mainData";



const Technology = ({technology}) => {
  // set technology to arry  id of 0 or 1
  const [seletedtechnology, setSelectedTechnology] = useState(technology[0]);
  // console.log(technologyId)
console.log(technology)



  return (
    <div>
        

        <TechnologyItem seletedtechnology={seletedtechnology} setSelectedTechnology={setSelectedTechnology} technology={technology}
        />

        
    </div>
  )
}

export default Technology;
