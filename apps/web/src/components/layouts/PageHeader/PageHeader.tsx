import {
  MdMenu,
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdSearch,
} from "react-icons/md";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  isDarkMode: boolean;
  setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkMode: () => void;
};

export default function PageHeader({
  title,
  isDarkMode,
  setSidebarActive,
  toggleDarkMode,
}: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.titleContainer}>
        <button
          className={styles.menuBtn}
          aria-label="Open Menu"
          data-testid="menu-btn"
          onClick={() => setSidebarActive((prev) => !prev)}
        >
          <MdMenu size="28" />
        </button>
        <h1>{title}</h1>
      </div>

      <div className={styles.searchInput}>
        <Input
          variant="subtle"
          icon={<MdSearch />}
          placeholder="Search for transactions, accounts, etc."
          aria-label="Search for transactions, accounts, etc."
        />
      </div>

      <div className={styles.modeBtn}>
        <Button
          variant="subtle"
          aria-label="Use Dark Mode"
          data-testid="dark-mode-btn"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
        </Button>
      </div>
    </header>
  );
}
