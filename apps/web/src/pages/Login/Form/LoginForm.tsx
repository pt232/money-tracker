import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "../../../components/Button/Button";
import { Card } from "../../../components/Card/Card";
import { Input } from "../../../components/Input/Input";
import styles from "./LoginForm.module.css";

type FlattenedErrors = z.inferFlattenedErrors<typeof FormData>;

const FormData = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FlattenedErrors | null>(null);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrors(null);

    const result = FormData.safeParse({ email, password });

    if (!result.success) {
      setErrors(result.error.flatten());
      return;
    }

    navigate("/");
  }

  return (
    <Card>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          required
          errorMessages={errors?.fieldErrors?.email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          required
          infoMessage="Forgot Password?"
          errorMessages={errors?.fieldErrors?.password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button label="Log in" type="submit" />
      </form>
    </Card>
  );
}
