import React, { useId } from "react";
import { Link } from "react-router-dom";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
  type?: "text" | "email" | "password";
  required?: boolean;
  errorMessages?: string[];
  infoMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  label,
  errorMessages,
  infoMessage,
  type = "text",
  required = false,
  onChange,
}: InputProps) {
  const inputId = useId();
  const errorMessageId = useId();

  return (
    <div className={styles.input}>
      <label htmlFor={inputId} className={styles.inputLabel}>
        {label}
      </label>
      <input
        type={type}
        id={inputId}
        required={required}
        className={[
          styles.inputField,
          errorMessages && styles.inputFieldError,
        ].join(" ")}
        onChange={onChange}
        aria-describedby={errorMessageId}
        aria-invalid={errorMessages?.length ? "true" : "false"}
      />
      {errorMessages && (
        <p id={errorMessageId} className={styles.errorMessage}>
          {errorMessages[0]}
        </p>
      )}
      {infoMessage && (
        <Link to="/" className={styles.infoMessage}>
          {infoMessage}
        </Link>
      )}
    </div>
  );
}
