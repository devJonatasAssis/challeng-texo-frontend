import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from ".";

describe("Input", () => {
  const formMock: any = {
    register: jest.fn(),
  };
  test("should be render input with label and placeholder", () => {
    render(
      <Input
        register={formMock.register}
        name="test"
        label="Test Input"
        placeholder="Enter test input"
      />
    );

    const labelElement = screen.getByText("Test Input");
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText("Enter test input");
    expect(inputElement).toBeInTheDocument();
  });
});
