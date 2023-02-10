import React, { useId } from "react";
import { Link } from "react-router-dom";
import styles from "./Input.module.css";

type InputProps = {
  label: string;
  errorMessages?: string[];
  infoMessage?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input(
  { label, errorMessages, infoMessage, ...props }: InputProps,
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
        className={[
          styles.inputField,
          errorMessages && styles.inputFieldError,
        ].join(" ")}
        aria-describedby={errorMessages?.length ? errorMessageId : undefined}
        aria-invalid={errorMessages?.length ? "true" : "false"}
        {...props}
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

export default React.forwardRef(Input);
