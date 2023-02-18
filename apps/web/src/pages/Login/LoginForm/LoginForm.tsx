import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import styles from "./LoginForm.module.css";

type FlattenedErrors = z.inferFlattenedErrors<typeof FormData>;

const FormData = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function LoginForm() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<FlattenedErrors | null>(null);
  const isEmailError = !!errors?.fieldErrors.email?.at(0);
  const isPasswordError = !!errors?.fieldErrors.password?.at(0);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrors(null);

    const result = FormData.safeParse({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });

    if (!result.success) {
      setErrors(result.error.flatten());
      return;
    }

    navigate("/");
  }

  return (
    <Card>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <Input
            id="email"
            ref={emailRef}
            type="email"
            required
            aria-invalid={isEmailError}
            aria-describedby={isEmailError ? "email-error" : undefined}
            hasError={isEmailError}
          />
          {isEmailError && (
            <p id="email-error" className={styles.errorMessage}>
              {errors?.fieldErrors.email?.at(0)}
            </p>
          )}
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <Input
            id="password"
            ref={passwordRef}
            type="password"
            required
            aria-invalid={isPasswordError}
            aria-describedby={isPasswordError ? "password-error" : undefined}
            hasError={isPasswordError}
          />
          {isPasswordError && (
            <p id="password-error" className={styles.errorMessage}>
              {errors?.fieldErrors.password?.at(0)}
            </p>
          )}
          <Link to="/" className={styles.infoMessage}>
            Forgot Password?
          </Link>
        </div>

        <Button type="submit">Log in</Button>
      </form>
    </Card>
  );
}
