import { MdExpandMore } from "react-icons/md";
import profileImage from "@/assets/profile-image.jpg";
import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <div className={styles.profileCard}>
      <img
        src={profileImage}
        alt="A Dog working at an office wearing glasses"
        className={styles.profileImage}
      />
      <div className={styles.profileInfo}>
        <span>John Doe</span>
        <span>johndoe@gmail.com</span>
      </div>
      <MdExpandMore className={styles.profileExpand} />
    </div>
  );
}
