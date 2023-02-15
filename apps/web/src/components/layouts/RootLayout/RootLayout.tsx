import { ReactNode } from "react";
import PageHeader from "../PageHeader";
import styles from "./RootLayout.module.css";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={styles.container}>
      <PageHeader />
      <main>{children}</main>
    </div>
  );
}
