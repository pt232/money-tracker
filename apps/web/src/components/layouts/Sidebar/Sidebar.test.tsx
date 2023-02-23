import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  it("renders light logo when isDarkMode is true", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Sidebar isActive isDarkMode setSidebarActive={() => {}} />
      </MemoryRouter>,
    );

    const logo: HTMLImageElement = screen.getByAltText("Logo");
    expect(logo.src).toContain("logo-dark.svg");
  });

  it("renders dark logo when isDarkMode is false", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Sidebar isActive isDarkMode={false} setSidebarActive={() => {}} />
      </MemoryRouter>,
    );

    const logo: HTMLImageElement = screen.getByAltText("Logo");
    expect(logo.src).toContain("logo-light.svg");
  });

  it("calls setSidebarActive function on close button", async () => {
    const setSidebarActive = vi.fn();
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Sidebar
          isActive
          isDarkMode={false}
          setSidebarActive={setSidebarActive}
        />
      </MemoryRouter>,
    );

    await user.click(
      screen.getByRole("button", {
        name: /close menu/i,
      }),
    );

    expect(setSidebarActive.mock.calls).toHaveLength(1);
  });
});
