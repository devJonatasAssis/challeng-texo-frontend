import "./styles.css";

interface IDataProps {
  value: any;
  label: string;
}

interface IProps {
  name: string;
  data: IDataProps[];
  label: string;
  onSelected: (e: string) => void;
}

export default function SelectInput({ name, data, onSelected, label }: IProps) {
  return (
    <div className="wrapper-content">
      <span>{label}</span>
      <select
        name={name}
        id="pet-select"
        className="select-wrapper"
        onChange={(e) => onSelected(e.target.value)}
      >
        <option value="">--Escolha um opção--</option>
        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
