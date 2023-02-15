import styles from "./Button.module.css";

type ButtonProps = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ label, ...props }: ButtonProps) {
  return (
    <button className={styles.btn} {...props}>
      {label}
    </button>
  );
}
