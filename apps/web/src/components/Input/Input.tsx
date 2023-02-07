import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
  required?: boolean;
  errorMessage?: string;
  infoMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  id,
  label,
  errorMessage,
  infoMessage,
  type = "text",
  required = false,
  onChange,
}: InputProps) {
  return (
    <div className={styles.input}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className={styles.inputField}
        onChange={onChange}
      />
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      {infoMessage && <p className={styles.infoMessage}>{infoMessage}</p>}
    </div>
  );
}
