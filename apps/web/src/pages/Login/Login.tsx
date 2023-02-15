import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import useDarkMode from "@/hooks/useDarkMode";
import logoDark from "@/assets/logo-dark.svg";
import logoLight from "@/assets/logo-light.svg";
import styles from "./Login.module.css";

export default function Login() {
  const { isDarkMode } = useDarkMode();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        {isDarkMode ? (
          <img src={logoDark} alt="Logo" />
        ) : (
          <img src={logoLight} alt="Logo" />
        )}
        <h1>Log in with your account</h1>
        <p>
          Or <Link to="/">sign up now</Link> to track your expenses
        </p>
      </header>
      <LoginForm />
    </main>
  );
}
