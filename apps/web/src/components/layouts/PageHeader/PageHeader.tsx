import { MdMenu, MdOutlineLightMode, MdSearch } from "react-icons/md";
import useDarkMode from "@/hooks/useDarkMode";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import styles from "./PageHeader.module.css";

export default function PageHeader() {
  const { toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.menuBtn} aria-label="Open Menu">
        <MdMenu size="28" />
      </button>

      <div className={styles.modeBtn}>
        <Button
          variant="subtle"
          aria-label="Use Dark Mode"
          onClick={toggleDarkMode}
        >
          <MdOutlineLightMode />
        </Button>
      </div>

      <div className={styles.searchInput}>
        <Input
          variant="subtle"
          icon={<MdSearch />}
          placeholder="Search for transactions, accounts, etc."
        />
      </div>
    </header>
  );
}
