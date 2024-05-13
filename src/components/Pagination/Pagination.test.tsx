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

    const { getByTestId } = render(
      <Pagination
        totalPage={totalPage}
        onPagination={onPagination}
        nextPage={nextPage}
        prevPage={prevPage}
        page={page}
      />
    );

    const prevButton = getByTestId("prev-page");
    const nextButton = getByTestId("next-page");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    for (let i = 1; i <= totalPage; i++) {
      const pageButton = screen.getByText(i.toString());
      expect(pageButton).toBeInTheDocument();
      if (i === page) {
        expect(pageButton).toHaveClass("page-item-active");
      } else {
        expect(pageButton).not.toHaveClass("page-item-active");
      }
    }

    fireEvent.click(prevButton);
    fireEvent.click(nextButton);

    expect(prevPage).toHaveBeenCalledTimes(1);
    expect(nextPage).toHaveBeenCalledTimes(1);
  });
});
