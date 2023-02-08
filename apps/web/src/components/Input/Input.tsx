import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
  required?: boolean;
  errorMessages?: string[];
  infoMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({
  id,
  label,
  errorMessages,
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
        className={[
          styles.inputField,
          errorMessages && styles.inputFieldError,
        ].join(" ")}
        onChange={onChange}
      />
      {errorMessages && (
        <p className={styles.errorMessage}>{errorMessages[0]}</p>
      )}
      {infoMessage && <p className={styles.infoMessage}>{infoMessage}</p>}
    </div>
  );
}
