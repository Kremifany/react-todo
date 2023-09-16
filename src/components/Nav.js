import style from "./Nav.module.css";
import add from "./assets/icons8-add-24.png";
import viewList from "./assets/icons8-open-book-24.png";

//import ReactDOM from "react-dom/client"
import { useLocation } from "react-router-dom";
const Nav = () => {
  const location = useLocation();
  console.log("path", location.pathname);
  const getClassName = (tab) => {
    if (location.pathname === tab) {
      return style.current;
    } else {
      return style.background;
    }
  };

  console.log("Printing style");
  console.log(style);
  return (
    <>
      <nav>
        <ul className={style.links}>
          <li className={getClassName("/list")}>
            <a href="/list" className={style.navlink}>
              <img src={viewList} alt="viewList" />
              <span>View List</span>
            </a>
          </li>
          <li className={getClassName("/add")}>
            <a href="/add" className={style.navlink}>
              <img src={add} alt="add" />
              <span>Add Todo</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
