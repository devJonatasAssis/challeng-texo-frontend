import "@testing-library/jest-dom";

import Pagination from "./index";

import "./styles.css";
import { screen, render, fireEvent } from "@testing-library/react";

describe("Pagination component", () => {
  it("should render pagination with total pages", async () => {
    const totalPage = 3;
    const onPagination = jest.fn();
    const nextPage = jest.fn();
    const prevPage = jest.fn();
    const page = 1;

    const { getByText } = render(
      <Pagination
        totalPage={totalPage}
        onPagination={onPagination}
        nextPage={nextPage}
        prevPage={prevPage}
        page={page}
      />
    );

    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
  });

  it("should calls onPagination with correct page number when next button", () => {
    const page = 2;
    const totalPage = 5;
    const onPagination = jest.fn();
    const nextPage = jest.fn();
    const prevPage = jest.fn();

    render(
      <Pagination
        totalPage={totalPage}
        page={page}
        onPagination={onPagination}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    );

    const next = screen.getByTestId("next-page");

    fireEvent.click(next);

    expect(jest.fn()).toHaveBeenCalledTimes(1);
    expect(jest.fn()).toHaveBeenCalledWith(page + 1);
  });
});
