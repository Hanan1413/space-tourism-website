import React, { useState } from 'react'
import DestinationItem from './DestinationItem';


function Destination({destinations}) {
  console.log(destinations)
  const [selectedDestination, setSelectedDestination] = useState(destinations[0])
 
 

  return (
    
      <div>

          <DestinationItem setSelectedDestination={setSelectedDestination} selectedDestination={selectedDestination} key={selectedDestination.id} destinations={destinations}  />

       

    </div>
  )
}

export default Destination;
