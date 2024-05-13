import "@testing-library/jest-dom";

import { fireEvent, render } from "@testing-library/react";
import FilterMovies from "./FilterMovies";
import { mock } from "node:test";

describe("Filter movies", () => {
  const mockForm: any = {
    register: jest.fn(),
    setValue: jest.fn(),
    getValues: jest.fn(() => ""),
  };

  it("should be render filter movies", () => {
    const onFilter = jest.fn();
    const onSearchAll = jest.fn();

    const { getByText } = render(
      <FilterMovies
        onFilter={onFilter}
        onSearchAll={onSearchAll}
        form={mockForm}
      />
    );

    expect(getByText("Year")).toBeInTheDocument();
    expect(getByText("Winners")).toBeInTheDocument();
    expect(getByText("Filtrar")).toBeInTheDocument();
    expect(getByText("Buscar todos")).toBeInTheDocument();
  });

  it('should be call onFilter when "Filtrar" button is clicked', () => {
    const onFilterMock = jest.fn();

    const { getByText } = render(
      <FilterMovies
        form={mockForm}
        onFilter={onFilterMock}
        onSearchAll={() => {}}
      />
    );

    fireEvent.click(getByText("Filtrar"));

    expect(onFilterMock).toHaveBeenCalled();
  });

  it('should be call onSearchAll when "Buscar todos" button is clicked', () => {
    const onSearchAllMock = jest.fn();

    const { getByText } = render(
      <FilterMovies
        form={mockForm}
        onFilter={() => {}}
        onSearchAll={onSearchAllMock}
      />
    );

    fireEvent.click(getByText("Buscar todos"));

    expect(onSearchAllMock).toHaveBeenCalled();
  });
});
