import "@testing-library/jest-dom";

import { DashboardApi } from "../../services/dashboard.service";
import Movies from "./Movies";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import userEvent from "@testing-library/user-event";

jest.mock("../../services/dashboard.service");

describe("Movies Content", () => {
  const mockMovies = {
    content: [
      { id: 1, year: "1981", title: "Mommie Dearest", winner: true },
      { id: 2, year: "1981", title: "Endless Love", winner: false },
      { id: 3, year: "1981", title: "Heaven's Gate ", winner: false },
    ],
    totalPages: 1,
  };

  beforeEach(() => {
    (DashboardApi.getMovies as jest.Mock).mockResolvedValue(mockMovies);
  });

  it("should be render movie component", async () => {
    const { findByText, getByText } = render(
      <QueryClientProvider client={new QueryClient()}>
        <Movies />
      </QueryClientProvider>
    );

    expect(await findByText("List movies")).toBeInTheDocument();
    expect(getByText("ID")).toBeInTheDocument();
    expect(getByText("Title")).toBeInTheDocument();
    expect(getByText("Winner?")).toBeInTheDocument();
  });

  it("should be loads movies", async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Movies />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(DashboardApi.getMovies).toHaveBeenCalledTimes(2);
    });
  });

  it("should be paginates movies", async () => {
    const { getByTestId } = render(
      <QueryClientProvider client={new QueryClient()}>
        <Movies />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(DashboardApi.getMovies).toHaveBeenCalledTimes(3);
    });

    fireEvent.click(getByTestId("next-page"));

    await waitFor(() => {
      expect(DashboardApi.getMovies).toHaveBeenCalledTimes(4);
    });
  });

  it("should filter movies", async () => {
    const { getByText, findByText, findByPlaceholderText } = render(
      <QueryClientProvider client={new QueryClient()}>
        <Movies />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(DashboardApi.getMovies).toHaveBeenCalledTimes(5);
    });

    const input = await findByPlaceholderText("Digite um ano válido");

    fireEvent.change(input, { target: { value: "1980" } });

    fireEvent.click(getByText("Filtrar"));

    await waitFor(() => {
      expect(DashboardApi.getMovies).toHaveBeenCalledTimes(5);
    });

    expect(await findByText("Mommie Dearest")).toBeInTheDocument();
  });
});
