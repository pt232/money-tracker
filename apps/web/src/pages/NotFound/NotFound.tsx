import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <MdErrorOutline size="86" className={styles.icon} />
      <h2 className={styles.title} data-testid="not-found-heading">
        This page could not be found
      </h2>
      <Link to="/" className={styles.homeLink} data-testid="home-link">
        Back to the overview page
      </Link>
    </div>
  );
}
