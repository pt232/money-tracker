import { MdExpandMore } from "react-icons/md";
import profilePicture from "@/assets/profile-picture.jpg";
import styles from "./AccountItem.module.css";

export default function AccountItem() {
  return (
    <div className={styles.accountItem}>
      <img
        src={profilePicture}
        alt="A Dog working at an office wearing glasses"
        className={styles.accountImage}
      />
      <div className={styles.accountInfo}>
        <span>John Doe</span>
        <span>johndoe@gmail.com</span>
      </div>
      <MdExpandMore className={styles.accountExpand} />
    </div>
  );
}
