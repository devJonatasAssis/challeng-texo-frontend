import { useListTopThreeStudiosWinners } from "@/hooks";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ListTopThreeStudiosWinners from "../ListTopThreeStudiosWinners";

jest.mock("../../../../hooks/useListTopThreeStudiosWinners", () => ({
  useListTopThreeStudiosWinners: jest.fn(),
}));

describe("List top three studios winners", () => {
  it("should be render loading state", async () => {
    (useListTopThreeStudiosWinners as jest.Mock).mockImplementation(() => ({
      isLoading: true,
    }));

    const { getByTestId } = render(<ListTopThreeStudiosWinners />);

    expect(getByTestId("loader")).toBeTruthy();
  });

  it("should be render error state", () => {
    (useListTopThreeStudiosWinners as jest.Mock).mockImplementation(() => ({
      isError: true,
    }));

    const { getByText } = render(<ListTopThreeStudiosWinners />);

    expect(getByText("Não foi possível buscar os dados")).toBeInTheDocument();
  });

  it("should be render list", () => {
    (useListTopThreeStudiosWinners as jest.Mock).mockImplementation(() => ({
      data: {
        studios: [
          { name: "Warner Bros", winCount: "2" },
          { name: "Disney", winCount: "3" },
        ],
      },
    }));

    const { getByText } = render(<ListTopThreeStudiosWinners />);

    expect(getByText("Top 3 studios with winners")).toBeInTheDocument();
  });
});
