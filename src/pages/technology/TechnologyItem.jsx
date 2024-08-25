import styles from "./technology.module.css";

const TechnologyItem = ({ technology, setTechnologyIndex, technologyIndex }) => {
  console.log(technology);
  const { name, description, images } = technology;

  return (
    <div>
      <div className={styles.background}></div>
       
      <p className={styles.headline}>03 SPACE LAUNCH 101</p>

      <div className={styles.content}>


        <div className={styles.image}>

          <img src={images} alt="" className={styles.techImg}  />
          {/* <img  className={styles.crew} src={png} alt={name} /> */}
        </div>

        <div className={styles.rightConetnt}>

      <div className={styles.buttonGroup} >
      <button className={`${styles.pageButton} ${technologyIndex === 0 ? styles.active: ''}`}  onClick={()=> {setTechnologyIndex(0)}}>1</button>
      <button className={`${styles.pageButton} ${technologyIndex === 1 ? styles.active: ''}`} onClick={()=> {setTechnologyIndex(1)}} >2</button>
      <button className={`${styles.pageButton} ${technologyIndex === 2 ? styles.active: ''}`} onClick={()=> {setTechnologyIndex(2)}} >3</button>
    </div>

          <div className={styles.text}>
            <h4>THE TERMINOLOGY…
            SPACEPORT</h4>
           <h1>{name}</h1>
           <p className={styles.descText}>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyItem;
