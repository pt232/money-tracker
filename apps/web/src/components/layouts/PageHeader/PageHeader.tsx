import { MdMenu, MdOutlineLightMode, MdSearch } from "react-icons/md";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import styles from "./PageHeader.module.css";

type PageHeaderProps = {
  title: string;
  setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
  toggleDarkMode: () => void;
};

export default function PageHeader({
  title,
  setSidebarActive,
  toggleDarkMode,
}: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <button
        className={styles.menuBtn}
        aria-label="Open Menu"
        onClick={() => setSidebarActive((prev) => !prev)}
      >
        <MdMenu size="28" />
      </button>

      <h1>{title}</h1>

      <div className={styles.searchInput}>
        <Input
          variant="subtle"
          icon={<MdSearch />}
          placeholder="Search for transactions, accounts, etc."
        />
      </div>

      <div className={styles.modeBtn}>
        <Button
          variant="subtle"
          aria-label="Use Dark Mode"
          onClick={toggleDarkMode}
        >
          <MdOutlineLightMode />
        </Button>
      </div>
    </header>
  );
}
