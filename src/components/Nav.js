import styles from "./Nav.module.css";
import add from "./assets/icons8-add-24.png";
import viewList from "./assets/icons8-open-book-24.png";
import { useLocation } from "react-router-dom";
import {Link } from "react-router-dom";
const Nav = () => {
  const location = useLocation();
  console.log("path", location.pathname);
  const getClassName = (tab) => {
    if (location.pathname === tab) {
      return styles.current;
    } else {
      return styles.background;
    }
  };

  console.log("Printing styles in nav");
  console.log(styles);
  return (
    <>
      <nav>
        <ul className={styles.links}>
          <li className={getClassName("/list")}>
            <Link to="/list" className={styles.navlink}>
              <img src={viewList} alt="viewList" />
              <span>View List</span>
            </Link>
          </li>
          <li className={getClassName("/add")}>
            <Link to="/add" className={styles.navlink}>
              <img src={add} alt="add" />
              <span>Add Todo</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
