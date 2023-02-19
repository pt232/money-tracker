import {
  MdDashboard,
  MdSyncAlt,
  MdCreditCard,
  MdOutlineCategory,
  MdOutlineInsertChart,
  MdOutlineSettings,
} from "react-icons/md";
import SidebarLink from "./SidebarLink";
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
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <SidebarLink to="/" icon={<MdDashboard />}>
            Overview
          </SidebarLink>
          <SidebarLink to="/transactions" icon={<MdSyncAlt />}>
            Transactions
          </SidebarLink>
          <SidebarLink to="/accounts" icon={<MdCreditCard />}>
            Accounts
          </SidebarLink>
          <SidebarLink to="/categories" icon={<MdOutlineCategory />}>
            Categories
          </SidebarLink>
          <SidebarLink to="/statistics" icon={<MdOutlineInsertChart />}>
            Analytics
          </SidebarLink>
          <SidebarLink to="/settings" icon={<MdOutlineSettings />}>
            Settings
          </SidebarLink>
        </ul>
      </nav>
    </div>
  );
}
