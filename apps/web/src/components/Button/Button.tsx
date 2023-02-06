type ButtonProps = {
  label: string;
  type?: "button" | "submit";
};

export function Button({ label, type = "button" }: ButtonProps) {
  return <button type={type}>{label}</button>;
}
