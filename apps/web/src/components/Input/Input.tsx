import styles from "./Input.module.css";

type InputProps = {
  id: string;
  label: string;
  infoMessage?: string;
};

export function Input({ id, label, infoMessage }: InputProps) {
  return (
    <div className={styles.input}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input type="text" id={id} className={styles.inputField} />
      {infoMessage && <p className={styles.infoMessage}>{infoMessage}</p>}
    </div>
  );
}
