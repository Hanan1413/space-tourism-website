import styles from "./Mobile.module.css";
import close from "../../assets/shared/icon-close.svg";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import logo from "../../assets/shared/logo.svg";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.header}>
      <div className="humbrgerIcon">
        {isOpen ? (
          <img src={close} alt="close" onClick={toggleMenu} />
        ) : (
          <img src={hamburger} alt="hamburger" onClick={toggleMenu} />
        )}
      </div>
      <div className="log">
        <img src={logo} alt="" />
      </div>

      <nav className={isOpen ? styles.active : ""}>
        <div className={styles.closeMenu}  onClick={toggleMenu}>
          <img src={close} alt=""  />
        </div>
        <ul>
          <li>
            <span>01</span>HOME
          </li>
          <li>
            <span>02</span>DESTINATION
          </li>
          <li>
            <span>03</span>CREW
          </li>
          <li>
            <span>04</span>TECHNOLOGY
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
