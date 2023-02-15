import { MdMenu, MdOutlineLightMode } from "react-icons/md";
import Button from "@/components/ui/Button";
import styles from "./PageHeader.module.css";

export default function PageHeader() {
  return (
    <header className={styles.header}>
      <button className={styles.menuBtn} aria-label="Open Menu">
        <MdMenu size="28" />
      </button>
      <div className={styles.modeBtn}>
        <Button variant="subtle" aria-label="Use Dark Mode">
          <MdOutlineLightMode />
        </Button>
      </div>
    </header>
  );
}
