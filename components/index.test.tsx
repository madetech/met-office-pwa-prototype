import { render, screen } from "@testing-library/react";
import { Index } from "./index";

describe("Index", () => {
  it("renders a heading", () => {
    render(<Index />);

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
