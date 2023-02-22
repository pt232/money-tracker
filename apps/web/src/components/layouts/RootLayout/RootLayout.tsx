import { useState } from "react";
import { Outlet, RouteObject, useMatches } from "react-router-dom";
import useDarkMode from "@/hooks/useDarkMode";
import PageHeader from "../PageHeader";
import Sidebar from "../Sidebar";
import styles from "./RootLayout.module.css";

export default function RootLayout() {
  const matches: RouteObject[] = useMatches();
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const title = matches.find((match) => !!match.handle?.title)?.handle?.title;

  return (
    <div className={styles.container}>
      <Sidebar
        isActive={sidebarActive}
        isDarkMode={isDarkMode}
        setSidebarActive={setSidebarActive}
      />
      <div className={styles.pageContent}>
        <PageHeader
          title={title}
          setSidebarActive={setSidebarActive}
          toggleDarkMode={toggleDarkMode}
        />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
