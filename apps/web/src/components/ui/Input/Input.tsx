import React from "react";
import classNames from "@/utils/classNames";
import styles from "./Input.module.css";

type InputProps = {
  hasError?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input(
  { hasError, ...props }: InputProps,
  ref: React.Ref<HTMLInputElement>,
) {
  return (
    <input
      ref={ref}
      className={classNames(styles.input, {
        [styles.error]: hasError || false,
      })}
      {...props}
    />
  );
}

export default React.forwardRef(Input);
