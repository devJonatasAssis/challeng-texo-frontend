import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import Menu from ".";

describe("Menu component", () => {
  it("should be render menu with logo and menu items", () => {
    const { getByAltText, getByText } = render(<Menu />);

    const logoElement = getByAltText("Logo Texo Challenge Frontend");
    expect(logoElement).toBeInTheDocument();

    const menuItemDashboard = getByText("Dashboard");
    expect(menuItemDashboard).toBeInTheDocument();

    const menuItemFilmes = getByText("Filmes");
    expect(menuItemFilmes).toBeInTheDocument();
  });
});
