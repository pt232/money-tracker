import PageHeader from "../PageHeader";
import styles from "./RootLayout.module.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={styles.container}>
      <PageHeader title="Good Morning, John!" />
      <main>{children}</main>
    </div>
  );
}
