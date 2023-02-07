import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "../../components/Button/Button";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import styles from "./LoginForm.module.css";

const FormData = z.object({
  email: z.string().email(),
  password: z.string(),
});

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorMessage("");

    try {
      FormData.parse({ email, password });
      navigate("/");
    } catch (err) {
      if (err instanceof z.ZodError) {
        setErrorMessage(err.issues[0].message);
      }
    }
  }

  return (
    <Card>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <Input
          id="email"
          label="Email"
          type="email"
          required
          errorMessage={errorMessage}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          required
          infoMessage="Forgot Password?"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button label="Log in" type="submit" />
      </form>
    </Card>
  );
}
