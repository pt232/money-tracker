import { NavLink, To } from "react-router-dom";
import styles from "./SidebarLink.module.css";

type SidebarLinkProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
  to: To;
};

export default function SidebarLink({ children, icon, to }: SidebarLinkProps) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${styles.sidebarLinkActive} ${styles.sidebarLink}`
            : styles.sidebarLink
        }
      >
        {icon && <div className={styles.linkIcon}>{icon}</div>}
        <div>{children}</div>
      </NavLink>
    </li>
  );
}
