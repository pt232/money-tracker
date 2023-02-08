import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("renders error message", () => {
    const errorMessages = ["Must be a valid email"];

    render(
      <Input
        id="email"
        label="Email"
        type="email"
        errorMessages={errorMessages}
        onChange={() => {}}
      />,
    );

    expect(screen.getByText(errorMessages[0])).toBeInTheDocument();
  });

  it("renders info message", () => {
    const infoMessage = "Forgot Password?";

    render(
      <Input
        id="email"
        label="Email"
        type="email"
        infoMessage={infoMessage}
        onChange={() => {}}
      />,
    );

    expect(screen.getByText(infoMessage)).toBeInTheDocument();
  });
});
