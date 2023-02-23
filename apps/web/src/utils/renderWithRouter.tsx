import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

export default function renderWithRouter(
  component: React.ReactElement,
  initialEntries?: string[],
) {
  return {
    user: userEvent.setup(),
    ...render(
      <MemoryRouter initialEntries={initialEntries}>{component}</MemoryRouter>,
    ),
  };
}
