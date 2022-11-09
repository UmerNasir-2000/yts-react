import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles["nav-left"]}>
          <li>
            <img src={logo} alt="yts" className={styles.logo} />
          </li>
          <li>HD movies at the smallest file size</li>
        </ul>
        <ul className={styles["nav-right"]}>
          <li>
            <input type="text" name="search" placeholder="Quick Search" />
          </li>
          <Link to="/">Home</Link>
          <Link to="/4k">4K</Link>
          <Link to="/trending">Trending</Link>
          <Link to="/browse">Browse Movies</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
