import React, { useState } from "react";
import styles from "./destination.module.css"; // Importing the CSS module

const DestinationItem = ({ selectedDestination, destinations, setSelectedDestination }) => {
  const { name, images, description, distance, travel } = selectedDestination;
  const { webp, png } = images;


  return (
    <>

    <div className={styles.container}>
     </div>
      {/* First Column */}
      <div className={styles.columns}>
      <div className={styles.leftColumn}>
        <h1 className={styles.capitalizeSecondLetter}>
          01 PICK YOUR DESTINATION
        </h1>
        <img src={png} alt={name} className={styles.moonImg} />
      </div>

      {/* Second Column */}
      <div className={styles.rightColumn}>

        <div className={ `${styles.moons} `}>
          {destinations.map((destination) => (
            <div className={`${styles.hoverTab} ${selectedDestination.id === destination.id ? styles.activeTab : ""}`}

            
              key={destination.id}
              onClick={() => setSelectedDestination(destination)}
              aria-selected={selectedDestination.id === destination.id }
            >
              {destination.name}
            </div>
          ))}

        </div>
        <h2 className={styles.capitalizeSecondLetter}>{name}</h2>
        <h3 className={styles.text}>{description}</h3>
        <hr />
        <div className={styles.details}>
          <div>
            <h4 className={styles.capitalizeSecondLetter}>AVG. DISTANCE</h4>
            <p>{distance}</p>
          </div>
          <div>
            <h4 className={styles.capitalizeSecondLetter}>Est. travel time</h4>
            <p>{travel}</p>
          </div>
        </div>
      </div>
      </div>
   
      </>
  );
};

export default DestinationItem;
