import styles from "./technology.module.css";

const TechnologyItem = ({ technology, setSelectedTechnology, seletedtechnology}) => {

  const { name, description, images } = seletedtechnology;

  return (
    <div>
      <div className={styles.background}></div>

      <p className={styles.headline}>03 SPACE LAUNCH 101</p>

      <div className={styles.content}>
        <div className={styles.image}>
          <img src={images} alt={name} className={styles.techImg} />
        </div>

        <div className={styles.rightConetnt}>
          
      <div className={styles.buttonGroup} >
      {technology.map((tech) =>(
              <button key={tech.id} 
              className={`${styles.pageButton} ${seletedtechnology.id === tech.id ? styles.active: ''}`} 
                onClick={() => setSelectedTechnology(tech)}  
                aria-selected={setSelectedTechnology.id === tech.id}>{tech.id}</button> 

      ))}
    </div>

      
          <div className={styles.text}>
            <h4>THE TERMINOLOGY… SPACEPORT</h4>
            <h1>{name}</h1>
            <p className={styles.descText}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyItem;
