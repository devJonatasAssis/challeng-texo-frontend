import "@testing-library/jest-dom";

import "./styles.css";
import { fireEvent, render } from "@testing-library/react";
import SelectInput from "./index";

describe("Pagination component", () => {
  it("should render select input with options", async () => {
    const options = [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ];

    const onChange = jest.fn(() => "yes");

    const { getByText } = render(
      <SelectInput
        data={options}
        name="option"
        onSelected={onChange}
        label="Winner?"
      />
    );

    const selected = getByText("Winner?", { exact: true });

    expect(selected).toBeInTheDocument();

    fireEvent(
      selected,
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );

    expect(onChange).toHaveBeenCalledTimes(0);
    expect(onChange).toHaveBeenCalledWith("no");
  });
});
