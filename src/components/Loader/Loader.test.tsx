import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import Loader from ".";

describe("Loader component", () => {
  it("should be render loader", () => {
    const { getByTestId, getByText } = render(<Loader />);

    const loaderElement = getByTestId("loader");
    expect(loaderElement).toBeInTheDocument();

    const textElement = getByText("Carregando...");
    expect(textElement).toBeInTheDocument();
  });
});
