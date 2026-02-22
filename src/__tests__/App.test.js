import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

jest.mock("react-router-dom", () => ({
  RouterProvider: () => <div data-testid="router">router</div>,
}));

jest.mock("../utility/AppRoutes", () => ({}));

test("renders router provider placeholder", () => {
  render(<App />);
  expect(screen.getByTestId("router")).toBeInTheDocument();
});
