import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
  type?: "button" | "submit";
};

export function Button({ label, type = "button" }: ButtonProps) {
  return (
    <button type={type} className={styles.btn}>
      {label}
    </button>
  );
}
