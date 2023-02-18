import classNames from "@/utils/classNames";
import styles from "./Button.module.css";

type ButtonVariant = "default" | "subtle";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

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
