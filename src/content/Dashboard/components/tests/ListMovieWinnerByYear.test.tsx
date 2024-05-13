import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";
import ListMovieWinnersByYear from "../ListMovieWinnersByYear";

describe("List movie winners by year", () => {
  it("should be render list movie component", () => {
    const { getByText } = render(<ListMovieWinnersByYear />);

    expect(getByText("List movie winners by year")).toBeInTheDocument();
    expect(getByText("Selecione um ano")).toBeInTheDocument();
    expect(getByText("Filtrar")).toBeInTheDocument();
  });

  it("should be render list movie based in filter", () => {
    const { getByText, getByRole, queryByText } = render(
      <ListMovieWinnersByYear />
    );

    fireEvent.change(getByRole("combobox"), {
      target: { value: "1981" },
    });

    fireEvent.click(getByText("Filtrar"));

    expect(queryByText("Mommie Dearest")).not.toBeInTheDocument();
  });
});
