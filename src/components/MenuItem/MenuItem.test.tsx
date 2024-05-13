import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";
import MenuItem from "./index";

import "./styles.css";

describe("Menu Item component", () => {
  it("should render menu item", async () => {
    const { getByRole, getByText } = render(
      <MenuItem path={"/filmes"} label={"Filmes"} icon={undefined} />
    );

    const linkElement = getByRole("link", { name: "Filmes" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/filmes");

    const labelElement = getByText("Filmes");
    expect(labelElement).toBeInTheDocument();
  });
});
