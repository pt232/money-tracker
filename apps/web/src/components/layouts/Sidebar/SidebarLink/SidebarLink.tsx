import { NavLink, To } from "react-router-dom";
import styles from "./SidebarLink.module.css";

type SidebarLinkProps = {
  children: React.ReactNode;
  icon: React.ReactNode;
  to: To;
  setSidebarActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SidebarLink({
  children,
  icon,
  to,
  setSidebarActive,
}: SidebarLinkProps) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${styles.active} ${styles.sidebarLink}`
            : styles.sidebarLink
        }
        onClick={() => setSidebarActive(false)}
      >
        {icon && <div className={styles.icon}>{icon}</div>}
        <div>{children}</div>
      </NavLink>
    </li>
  );
}
