import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";
import styles from "./Sidebar.module.css";

type SidebarProps = {
  isDarkMode: boolean;
};

export default function Sidebar({ isDarkMode }: SidebarProps) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        {isDarkMode ? (
          <img src={logoDark} alt="Logo" />
        ) : (
          <img src={logoLight} alt="Logo" />
        )}
      </div>
    </div>
  );
}
