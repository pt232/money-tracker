import { ReactNode } from "react";
import classNames from "@/utils/classNames";
import styles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonVariant = "default" | "subtle";

export default function Button({
  children,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.btn, styles[`btn-${variant}`])}
      {...props}
    >
      {children}
    </button>
  );
}
