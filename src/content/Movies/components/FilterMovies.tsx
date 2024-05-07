import SelectInput from "@/components/SelectInput";
import { UseFormReturn } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

interface FilterMoviesProps {
  form: UseFormReturn;
  onFilter: () => void;
  onSearchAll: () => void;
}

const winners = [
  { id: 1, value: true, label: "Yes" },
  { id: 2, value: false, label: "No" },
];

export default function FilterMovies({
  form,
  onFilter,
  onSearchAll,
}: FilterMoviesProps) {
  const { register, setValue, watch } = form;

  const { year, winner } = watch();

  const isDisableFilter = !year || !winner;

  return (
    <div className="filter-wrapper-content">
      <input
        {...register("year")}
        type="text"
        placeholder="Digite um ano"
        value={year}
      />

      <SelectInput
        data={(winners ?? []).map((item) => ({
          label: item.label,
          value: item.value,
        }))}
        name="winners"
        onSelected={(e) => setValue("winner", e)}
      />

      <button
        className={`button-filter ${isDisableFilter ? "disabled" : ""}`}
        onClick={onFilter}
        disabled={!year || !winner}
      >
        <FiSearch />
        Filtrar
      </button>

      <button className="button-filter-all" onClick={onSearchAll}>
        <FiSearch />
        Buscar todos
      </button>
    </div>
  );
}
