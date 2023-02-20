import { useState } from "react";
import useDarkMode from "@/hooks/useDarkMode";
import PageHeader from "../PageHeader";
import Sidebar from "../Sidebar";
import styles from "./RootLayout.module.css";

type RootLayoutProps = {
  children?: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [sidebarActive, setSidebarActive] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Sidebar
        isActive={sidebarActive}
        isDarkMode={isDarkMode}
        setSidebarActive={setSidebarActive}
      />
      <div className={styles.pageContent}>
        <PageHeader
          title="Good Morning, John!"
          setSidebarActive={setSidebarActive}
          toggleDarkMode={toggleDarkMode}
        />
        <main>{children}</main>
      </div>
    </div>
  );
}
