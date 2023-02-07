import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import logo from "@/assets/logo-light.svg";

export function Login() {
  return (
    <>
      <div>
        <img src={logo} alt="Logo" />
        <h1>Log in with your account</h1>
        <p>
          Or <Link to="/">sign up now</Link> to track your expenses
        </p>
      </div>
      <LoginForm />
    </>
  );
}
