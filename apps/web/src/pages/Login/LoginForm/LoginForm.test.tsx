import { screen } from "@testing-library/react";
import renderWithRouter from "@/utils/renderWithRouter";
import LoginForm from "./LoginForm";

describe("LoginForm", () => {
  it("displays error messages when form data is invalid", async () => {
    const { user } = renderWithRouter(<LoginForm />, ["/login"]);

    await user.type(screen.getByLabelText("Email"), "test@example");
    await user.type(screen.getByLabelText("Password"), "password");
    await user.click(screen.getByRole("button", { name: /Log in/i }));

    expect(screen.getByText("Must be a valid email")).toBeInTheDocument();
  });

  it("navigates to the home page when form data is valid", async () => {
    const { user } = renderWithRouter(<LoginForm />, ["/login"]);

    await user.type(screen.getByLabelText("Email"), "test@example.com");
    await user.type(screen.getByLabelText("Password"), "password");
    await user.click(screen.getByRole("button", { name: /Log in/i }));

    expect(window.location.pathname).toBe("/");
  });
});
