import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import Header from "./Header";

import "./styles.css";

describe("Header component", () => {
  it("should render button with correct text", async () => {
    const { getByText } = render(<Header />);

    expect(getByText("Challenge TexoIT Frontend")).toBeInTheDocument();
  });
});
