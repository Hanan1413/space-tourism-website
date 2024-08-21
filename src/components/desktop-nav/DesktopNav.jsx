import  styles from './Desktop.module.css'
const DesktopNav = () => {
 
  return (
    <div className={` ${styles.navBar}`}>
      <div className={styles.navBarLogo}>
        <img src="/src/assets/shared/logo.svg" alt="" />
      </div>
      <hr />
      <ul className={styles.navBarLinks}>
        <li>
          <a href="/"> <span className='home-ink'>00</span>HOME</a>
        </li>
        <li>
          <a href="/about"> <span className='home-ink'>01</span>DESTANTION </a>
        </li>
        <li>
          <a href="/services"> <span className='home-ink'>02</span>CREW</a>
        </li>
        <li>
          <a href="/contact"> <span className='home-ink'>03</span>TECHNOLOGY</a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;