import DesktopNav from "../../components/desktop-nav/DesktopNav";
import MobileMenu from "../../components/mobileMenu/MobileMenu";
import styles from "./Home.module.css";
const HomePage = () => {
  return (
    <>


    <div className={styles.bg}>
      </div>

      <div className={`container  ${styles.container} ${styles.hero}`}>
        <div className={styles.content}>
          <p className={styles.headline}>SO, YOU WANT TO TRAVEL TO </p>
          <h1 className={styles.space}>SPACE</h1>
          <p className={styles.intro}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! EXPLORE
          </p>
        </div>

        <div>
           <div className={styles.expContainer}><p  className={styles.explore}>
            Explore</p></div>
      </div>
    </div>
    
    </>
  );
};

export default HomePage;
