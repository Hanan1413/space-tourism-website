import React, { useState } from "react";
import styles from "./crew.module.css";
import SingleCrew from "./SingleCrew";

const Crew = ({ crew }) => {
  const [activepaginationIndex, setActivePaginationIndex] = useState(0);

  return (
    <div className={styles.mainPage}>
      {/* Pass the current crew member based on the activeIndex */}

      <SingleCrew
        crew={crew[activepaginationIndex]}
        setActivePaginationIndex={setActivePaginationIndex}
      />
    </div>
  );
};

export default Crew;
