import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import Grid from ".";

describe("Grid", () => {
  test("renders children correctly", () => {
    render(
      <Grid>
        <div>Component</div>
      </Grid>
    );

    const childElement = screen.getByText("Component");
    expect(childElement).toBeInTheDocument();
  });
});
