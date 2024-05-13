import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import { Col } from ".";

describe("Col", () => {
  test("renders children correctly", () => {
    render(
      <Col>
        <div>Component</div>
      </Col>
    );

    const childElement = screen.getByText("Component");
    expect(childElement).toBeInTheDocument();
  });
});
