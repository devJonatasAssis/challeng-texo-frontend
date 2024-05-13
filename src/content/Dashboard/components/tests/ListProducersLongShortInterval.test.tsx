import { useListProducersLongShortInterval } from "@/hooks";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ListProducersLongShortInterval from "../ListProducersLongShortInterval";

jest.mock("../../../../hooks/useListProducersLongShortInterval", () => ({
  useListProducersLongShortInterval: jest.fn(),
}));

describe("List producers long and short interval", () => {
  it("should be render loading state", async () => {
    (useListProducersLongShortInterval as jest.Mock).mockImplementation(() => ({
      isLoading: true,
    }));

    const { getByTestId } = render(<ListProducersLongShortInterval />);

    expect(getByTestId("loader")).toBeTruthy();
  });

  it("should be render error state", () => {
    (useListProducersLongShortInterval as jest.Mock).mockImplementation(() => ({
      isError: true,
    }));

    const { getByText } = render(<ListProducersLongShortInterval />);

    expect(getByText("Não foi possível buscar os dados")).toBeInTheDocument();
  });

  it("should be render list", () => {
    (useListProducersLongShortInterval as jest.Mock).mockImplementation(() => ({
      data: {
        max: [
          {
            producer: "Matthew Vaughn",
            interval: "13",
            previousWin: "2002",
            followingWin: "2015",
          },
        ],
        min: [
          {
            producer: "Joel Silver",
            interval: "1",
            previousWin: "1990",
            followingWin: "1991",
          },
        ],
      },
    }));

    const { getByText } = render(<ListProducersLongShortInterval />);

    expect(
      getByText("Producers with longest and shortest interval between wins")
    ).toBeInTheDocument();
    expect(getByText("Maximum")).toBeInTheDocument();
    expect(getByText("Minimun")).toBeInTheDocument();
  });
});
