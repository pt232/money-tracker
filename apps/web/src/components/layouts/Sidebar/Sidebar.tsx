import {
  MdClose,
  MdDashboard,
  MdSyncAlt,
  MdCreditCard,
  MdOutlineCategory,
  MdOutlineInsertChart,
  MdOutlineSettings,
} from "react-icons/md";
import classNames from "@/utils/classNames";
import SidebarLink from "./SidebarLink";
import AccountItem from "@/components/ui/AccountItem";
import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";
import styles from "./Sidebar.module.css";

type SidebarProps = {
  isActive: boolean;
  isDarkMode: boolean;
  setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({
  isActive,
  isDarkMode,
  setSidebarActive,
}: SidebarProps) {
  return (
    <>
      <div
        className={classNames(styles.sidebar, {
          [styles.active]: isActive,
        })}
      >
        <div className={styles.logo}>
          <button
            className={styles.closeBtn}
            aria-label="Close Menu"
            onClick={() => setSidebarActive((prev) => !prev)}
          >
            <MdClose />
          </button>

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
            <SidebarLink to="/analytics" icon={<MdOutlineInsertChart />}>
              Analytics
            </SidebarLink>
            <SidebarLink to="/settings" icon={<MdOutlineSettings />}>
              Settings
            </SidebarLink>
          </ul>
        </nav>

        <div className={styles.accountItem}>
          <AccountItem />
        </div>
      </div>

      <div
        aria-hidden="true"
        className={styles.overlay}
        onClick={() => setSidebarActive((prev) => !prev)}
      />
    </>
  );
}
