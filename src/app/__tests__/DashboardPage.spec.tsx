import "@testing-library/jest-dom";

import { useRouter } from "next/router";
import { render } from "@testing-library/react";

import Home from "../page";

jest.mock("next/router", () => ({ useRouter: jest.fn() }));

(useRouter as jest.Mock).mockReturnValue({ push: jest.fn() });

describe("Dashboard Page", () => {
  it("should render page", () => {
    const { baseElement } = render(<Home />);

    expect(baseElement).toBeTruthy();
  });
});
