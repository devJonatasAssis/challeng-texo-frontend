import { UseFormRegister } from "react-hook-form";
import "./styles.css";

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  label: string;
  placeholder?: string;
}

export const Input = ({ register, label, name, placeholder }: InputProps) => {
  return (
    <div className="wrapper">
      <span>{label}</span>
      <input
        className="input-wrapper"
        {...register(name)}
        placeholder={placeholder}
      />
    </div>
  );
};
