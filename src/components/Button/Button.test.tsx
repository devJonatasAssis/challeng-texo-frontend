import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";
import { Button } from ".";

describe("Button component", () => {
  it("should be render button", () => {
    const onClickMock = jest.fn();

    const { getByRole } = render(
      <Button label="Teste Botão" onClick={onClickMock} />
    );

    const buttonElement = getByRole("button", { name: "Teste Botão" });

    expect(buttonElement).toBeInTheDocument();
  });

  it("should calls onClick function when button is clicked", () => {
    const onClickMock = jest.fn();

    const { getByRole } = render(
      <Button label="Teste Botão" onClick={onClickMock} />
    );

    const buttonElement = getByRole("button", { name: "Teste Botão" });

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
