import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import styles from "./LoginForm.module.css";

export function LoginForm() {
  return (
    <Card>
      <form className={styles.loginForm}>
        <Input id="email" label="Email" />
        <Input id="password" label="Password" infoMessage="Forgot Password?" />
        <Button label="Log in" type="submit" />
      </form>
    </Card>
  );
}
