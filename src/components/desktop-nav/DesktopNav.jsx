import  styles from './Desktop.module.css';
import { Link } from 'react-router-dom';




const DesktopNav = () => {
 
  return (
    <div className={styles.navBar}>
      <div className={styles.navBarLogo}>
        <img src="/src/assets/shared/logo.svg" alt="" />
      </div>
      <hr />
      <ul className={styles.navBarLinks}>
        <li>
          <Link to='/'> <span className='home-ink'>00</span>HOME</Link>
        </li>
        <li>
          <Link to='/destination'> <span className='home-ink'>01</span>DESTANTION </Link>
        </li>
        <li>
          <Link to="/crew"> <span className='home-ink'>02</span>CREW</Link>
        </li>
        <li>
          <a href="/technology"> <span className='home-ink'>03</span>TECHNOLOGY</a>
        </li>
      </ul>
    </div>
  );
};

export default DesktopNav;