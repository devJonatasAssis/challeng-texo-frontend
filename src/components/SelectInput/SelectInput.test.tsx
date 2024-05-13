import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";
import SelectInput from ".";

describe("Select Input Component", () => {
  it("should be render select input", () => {
    const data = [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ];

    const onSelectedMock = jest.fn();
    const label = "Selecione uma opção";
    const name = "--Escolha um opção--";

    const { getByRole } = render(
      <SelectInput
        name={name}
        data={data}
        label={label}
        onSelected={onSelectedMock}
        value=""
      />
    );

    fireEvent.change(getByRole("combobox"), {
      target: { value: "2" },
    });
    expect(onSelectedMock).toHaveBeenCalledWith("2");
  });
});
