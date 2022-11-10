import { Link } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  const links = [
    {
      name: "Blog",
      to: "/",
    },
    {
      name: "DCMA",
      to: "/",
    },
    {
      name: "API",
      to: "/",
    },
    {
      name: "RSS",
      to: "/",
    },
    {
      name: "Contact",
      to: "/",
    },
    {
      name: "Requests",
      to: "/",
    },
  ];

  return (
    <footer>
      <div className={styles.row}>
        <div className={styles.copyright}>YTS Clone &#169; 2022 - 2042</div>
        <ul>
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.legal}>
        By using this site you agree to and accept our User Agreement, which can
        be read here.
      </div>
    </footer>
  );
}

export default Footer;
