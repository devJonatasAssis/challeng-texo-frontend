import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";
import MenuItem from "./index";

import "./styles.css";

describe("Menu Item component", () => {
  it("should render menu item", async () => {
    const { getByText } = render(
      <MenuItem path={"/filmes"} label={"Filmes"} icon={undefined} />
    );

    expect(getByText("Filmes")).toBeInTheDocument();
  });

  it("should click menu item nagivation route", async () => {
    const onClick = jest.fn();

    const { getByText } = render(
      <MenuItem path={"/filmes"} label={"Filmes"} icon={undefined} />
    );

    const buttonElement = getByText("Filmes");

    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
