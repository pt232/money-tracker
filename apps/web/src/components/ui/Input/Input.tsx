import React from "react";
import classNames from "@/utils/classNames";
import styles from "./Input.module.css";

type InputVariant = "default" | "subtle";

type InputProps = {
  variant?: InputVariant;
  icon?: React.ReactNode;
  hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input(
  { variant = "default", icon, hasError, ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <div
      className={classNames(styles.input, styles[`input-${variant}`], {
        [styles.error]: hasError || false,
      })}
    >
      {icon && <div className={styles.inputIcon}>{icon}</div>}
      <input ref={ref} className={styles.inputField} {...props} />
    </div>
  );
}

export default React.forwardRef(Input);
