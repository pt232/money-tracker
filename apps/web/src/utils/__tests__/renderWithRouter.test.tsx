import { screen } from "@testing-library/react";
import renderWithRouter from "../renderWithRouter";

describe("renderWithRouter", () => {
  it("returns userEvent and render function properties", async () => {
    const { user, container } = renderWithRouter(<div>Hello World</div>);

    await user.click(screen.getByText("Hello World"));
    expect(container.firstChild?.textContent).toBe("Hello World");
  });
});
