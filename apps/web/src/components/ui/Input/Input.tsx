import React, { useId } from "react";
import { Link } from "react-router-dom";
import classNames from "@/utils/classNames";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
  errorMessage?: string;
  infoMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input(
  { label, errorMessage, infoMessage, ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  const inputId = useId();
  const errorMessageId = useId();

  return (
    <div className={styles.input}>
      <label htmlFor={inputId} className={styles.inputLabel}>
        {label}
      </label>
      <input
        ref={ref}
        id={inputId}
        className={classNames(styles.inputField, {
          [styles.inputFieldError]: !!errorMessage,
        })}
        aria-describedby={errorMessage ? errorMessageId : undefined}
        aria-invalid={!!errorMessage}
        {...props}
      />
      {errorMessage && (
        <p id={errorMessageId} className={styles.errorMessage}>
          {errorMessage}
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

export default React.forwardRef(Input);
