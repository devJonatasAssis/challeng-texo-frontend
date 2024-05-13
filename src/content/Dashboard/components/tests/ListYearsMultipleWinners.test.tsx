import { useListYearsMultipleWinners } from "../../../../hooks";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ListYearsMultipleWinners from "../ListYearsMultipleWinners";

jest.mock("../../../../hooks/useListYearsMultipleWinners", () => ({
  useListYearsMultipleWinners: jest.fn(),
}));

describe("List years multiple winners", () => {
  it("should be render loading state", async () => {
    (useListYearsMultipleWinners as jest.Mock).mockImplementation(() => ({
      isLoading: true,
    }));

    const { getByTestId } = render(<ListYearsMultipleWinners />);

    expect(getByTestId("loader")).toBeTruthy();
  });

  it("should be render error state", () => {
    (useListYearsMultipleWinners as jest.Mock).mockImplementation(() => ({
      isError: true,
    }));

    const { getByText } = render(<ListYearsMultipleWinners />);

    expect(getByText("Não foi possível buscar os dados")).toBeInTheDocument();
  });

  it("should be render list", () => {
    (useListYearsMultipleWinners as jest.Mock).mockImplementation(() => ({
      data: {
        years: [
          { year: "1998", winnerCount: "7" },
          {
            year: "1999",
            winnerCount: "6",
          },
        ],
      },
    }));

    const { getByText } = render(<ListYearsMultipleWinners />);

    expect(getByText("List years with multiple winners")).toBeInTheDocument();
  });
});
