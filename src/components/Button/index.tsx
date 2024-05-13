import "./styles.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className="button">
      <span>{props.label}</span>
    </button>
  );
};
