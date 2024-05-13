import { Button } from "@/components/Button";
import { Col } from "@/components/Col";
import Grid from "@/components/Grid";
import { Input } from "@/components/Input";
import SelectInput from "@/components/SelectInput";
import { UseFormReturn } from "react-hook-form";

export interface IFormFilterProps {
  year: number;
  winner: string;
}

interface FilterMoviesProps {
  form: UseFormReturn<IFormFilterProps>;
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
  const { register, setValue } = form;

  return (
    <Grid>
      <Col>
        <Input
          register={register}
          name="year"
          label="Year"
          placeholder="Digite um ano válido"
        />
      </Col>

      <Col>
        <SelectInput
          data={(winners ?? []).map((item) => ({
            label: item.label,
            value: item.value,
          }))}
          name="winners"
          onSelected={(e) => setValue("winner", e)}
          label="Winners"
        />
      </Col>

      <Col>
        <div className="item-button">
          <Button label="Filtrar" onClick={onFilter} />
        </div>
      </Col>

      <Col>
        <div className="item-button">
          <Button label="Buscar todos" onClick={onSearchAll} />
        </div>
      </Col>
    </Grid>
  );
}
