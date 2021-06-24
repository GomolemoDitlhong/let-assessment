import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/NY Times Most Popular/i);
  expect(linkElement).toBeInTheDocument();
});
