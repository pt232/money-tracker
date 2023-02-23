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
import ProfileCard from "@/components/ui/ProfileCard";
import SidebarLink from "./SidebarLink";
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
          <ul className={styles.navList} data-testid="nav-list">
            <SidebarLink
              to="/"
              icon={<MdDashboard />}
              setSidebarActive={setSidebarActive}
            >
              Overview
            </SidebarLink>
            <SidebarLink
              to="/transactions"
              icon={<MdSyncAlt />}
              setSidebarActive={setSidebarActive}
            >
              Transactions
            </SidebarLink>
            <SidebarLink
              to="/accounts"
              icon={<MdCreditCard />}
              setSidebarActive={setSidebarActive}
            >
              Accounts
            </SidebarLink>
            <SidebarLink
              to="/categories"
              icon={<MdOutlineCategory />}
              setSidebarActive={setSidebarActive}
            >
              Categories
            </SidebarLink>
            <SidebarLink
              to="/analytics"
              icon={<MdOutlineInsertChart />}
              setSidebarActive={setSidebarActive}
            >
              Analytics
            </SidebarLink>
            <SidebarLink
              to="/settings"
              icon={<MdOutlineSettings />}
              setSidebarActive={setSidebarActive}
            >
              Settings
            </SidebarLink>
          </ul>
        </nav>

        <div className={styles.accountItem}>
          <ProfileCard />
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
