import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import logo from "@/assets/logo-light.svg";
import styles from "./Login.module.css";

export function Login() {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="Logo" />
        <h1>Log in with your account</h1>
        <p>
          Or <Link to="/">sign up now</Link> to track your expenses
        </p>
      </header>
      <LoginForm />
    </main>
  );
}
