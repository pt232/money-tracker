import useDarkMode from "@/hooks/useDarkMode";
import PageHeader from "../PageHeader";
import Sidebar from "../Sidebar";
import styles from "./RootLayout.module.css";

type RootLayoutProps = {
  children?: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={styles.container}>
      <Sidebar isDarkMode={isDarkMode} />
      <div className={styles.pageContent}>
        <PageHeader
          title="Good Morning, John!"
          toggleDarkMode={toggleDarkMode}
        />
        <main>{children}</main>
      </div>
    </div>
  );
}
