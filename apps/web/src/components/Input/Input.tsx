type InputProps = {
  id: string;
  label: string;
};

export function Input({ id, label }: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} />
    </div>
  );
}
