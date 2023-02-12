import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Input from "@/components/Input/Input";
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
        <Input
          ref={emailRef}
          label="Email"
          type="email"
          required
          errorMessage={errors?.fieldErrors?.email?.at(0)}
        />
        <Input
          ref={passwordRef}
          label="Password"
          type="password"
          required
          infoMessage="Forgot Password?"
          errorMessage={errors?.fieldErrors?.password?.at(0)}
        />
        <Button label="Log in" type="submit" />
      </form>
    </Card>
  );
}
